#!/bin/bash
# =============================================================================
# SAFEWIRE Auto-Dev Pipeline
# =============================================================================
# Automates the full development cycle for all stories in the project.
# Uses BMAD workflows: create-story → dev-story → code-review
#
# Usage: ./scripts/auto-dev.sh [options]
#   --dry-run     Show what would be done without executing
#   --from STORY  Start from specific story (e.g., 0-3)
#   --epic N      Only process epic N
#   --skip-review Skip code review step
#   --continue    Resume from last state
#
# =============================================================================

set -euo pipefail

# Configuration
PROJECT_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SPRINT_STATUS="$PROJECT_ROOT/_bmad-output/implementation-artifacts/sprint-status.yaml"
STORIES_DIR="$PROJECT_ROOT/_bmad-output/implementation-artifacts"
LOG_DIR="$PROJECT_ROOT/scripts/logs"
LOG_FILE="$LOG_DIR/auto-dev-$(date +%Y%m%d-%H%M%S).log"

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Defaults
DRY_RUN=false
START_FROM=""
EPIC_FILTER=""
SKIP_REVIEW=false
CONTINUE_MODE=false

# =============================================================================
# Helper Functions
# =============================================================================

log() {
    local level=$1
    shift
    local msg="$*"
    local timestamp=$(date '+%Y-%m-%d %H:%M:%S')

    case $level in
        INFO)  echo -e "${BLUE}[$timestamp]${NC} ${GREEN}INFO${NC}  $msg" ;;
        WARN)  echo -e "${BLUE}[$timestamp]${NC} ${YELLOW}WARN${NC}  $msg" ;;
        ERROR) echo -e "${BLUE}[$timestamp]${NC} ${RED}ERROR${NC} $msg" ;;
        STEP)  echo -e "${BLUE}[$timestamp]${NC} ${CYAN}STEP${NC}  $msg" ;;
        MANUAL) echo -e "${BLUE}[$timestamp]${NC} ${YELLOW}⚠️  MANUAL${NC} $msg" ;;
    esac

    echo "[$timestamp] $level $msg" >> "$LOG_FILE"
}

print_banner() {
    echo -e "${CYAN}"
    echo "╔═══════════════════════════════════════════════════════════════╗"
    echo "║           SAFEWIRE Auto-Dev Pipeline                          ║"
    echo "║           Automated Story Implementation                      ║"
    echo "╚═══════════════════════════════════════════════════════════════╝"
    echo -e "${NC}"
}

print_progress() {
    local current=$1
    local total=$2
    local story=$3
    local pct=$((current * 100 / total))
    local filled=$((pct / 2))
    local empty=$((50 - filled))

    printf "\r${CYAN}Progress: [${GREEN}"
    printf "%${filled}s" | tr ' ' '█'
    printf "${NC}"
    printf "%${empty}s" | tr ' ' '░'
    printf "${CYAN}] %3d%% - %s${NC}" "$pct" "$story"
}

# =============================================================================
# Sprint Status Functions
# =============================================================================

get_story_status() {
    local story_key=$1
    grep -E "^\s*${story_key}:" "$SPRINT_STATUS" | awk -F': ' '{print $2}' | tr -d ' '
}

set_story_status() {
    local story_key=$1
    local new_status=$2

    if [[ "$DRY_RUN" == "true" ]]; then
        log INFO "[DRY-RUN] Would set $story_key to $new_status"
        return
    fi

    sed -i "s/\(${story_key}:\s*\).*/\1${new_status}/" "$SPRINT_STATUS"
    log INFO "Updated $story_key → $new_status"
}

get_next_story() {
    # Find first story that is ready-for-dev or backlog (in order)
    local stories=$(grep -E '^\s+[0-9]+-[0-9]+-' "$SPRINT_STATUS" | grep -v 'retrospective')

    while IFS= read -r line; do
        local key=$(echo "$line" | awk -F': ' '{print $1}' | tr -d ' ')
        local status=$(echo "$line" | awk -F': ' '{print $2}' | tr -d ' ')

        # Apply epic filter if set
        if [[ -n "$EPIC_FILTER" ]]; then
            local epic_num=$(echo "$key" | cut -d'-' -f1)
            if [[ "$epic_num" != "$EPIC_FILTER" ]]; then
                continue
            fi
        fi

        # Apply start-from filter
        if [[ -n "$START_FROM" && "$key" < "$START_FROM" ]]; then
            continue
        fi

        if [[ "$status" == "backlog" || "$status" == "ready-for-dev" || "$status" == "in-progress" ]]; then
            echo "$key:$status"
            return
        fi
    done <<< "$stories"
}

count_stories() {
    local filter=$1
    if [[ -n "$filter" ]]; then
        grep -E "^\s+${filter}-[0-9]+-" "$SPRINT_STATUS" | grep -v 'retrospective' | wc -l
    else
        grep -E '^\s+[0-9]+-[0-9]+-' "$SPRINT_STATUS" | grep -v 'retrospective' | wc -l
    fi
}

count_done() {
    local filter=$1
    if [[ -n "$filter" ]]; then
        grep -E "^\s+${filter}-[0-9]+-.*:\s*done" "$SPRINT_STATUS" | wc -l
    else
        grep -E '^\s+[0-9]+-[0-9]+-.*:\s*done' "$SPRINT_STATUS" | wc -l
    fi
}

# =============================================================================
# Story Execution
# =============================================================================

check_manual_tasks() {
    local story_file=$1

    if [[ ! -f "$story_file" ]]; then
        return 1
    fi

    # Check for uncompleted MANUAL tasks
    if grep -q '\- \[ \].*MANUAL' "$story_file"; then
        return 0  # Has manual tasks
    fi
    return 1  # No manual tasks
}

get_manual_tasks() {
    local story_file=$1
    grep -E '\- \[ \].*MANUAL' "$story_file" | sed 's/.*MANUAL:\s*//' || true
}

wait_for_manual_tasks() {
    local story_key=$1
    local story_file="$STORIES_DIR/${story_key}.md"

    if ! check_manual_tasks "$story_file"; then
        return 0
    fi

    echo ""
    log MANUAL "Story $story_key requires manual intervention:"
    echo -e "${YELLOW}"
    echo "┌─────────────────────────────────────────────────────────────────┐"
    echo "│  MANUAL TASKS REQUIRED                                         │"
    echo "├─────────────────────────────────────────────────────────────────┤"
    get_manual_tasks "$story_file" | while read -r task; do
        printf "│  • %-60s │\n" "$task"
    done
    echo "└─────────────────────────────────────────────────────────────────┘"
    echo -e "${NC}"

    echo ""
    read -p "Press ENTER when manual tasks are completed (or 'q' to quit): " response
    if [[ "$response" == "q" ]]; then
        log WARN "User requested quit at manual task step"
        exit 0
    fi
}

execute_story() {
    local story_key=$1
    local current_status=$2
    local story_file="$STORIES_DIR/${story_key}.md"

    log STEP "Processing story: $story_key (current: $current_status)"

    # Step 1: Create story if in backlog
    if [[ "$current_status" == "backlog" ]]; then
        log INFO "Creating story file..."
        if [[ "$DRY_RUN" == "true" ]]; then
            log INFO "[DRY-RUN] Would run: claude '/create-story $story_key'"
        else
            cd "$PROJECT_ROOT"
            echo "/create-story $story_key" | claude --print --dangerously-skip-permissions 2>&1 | tee -a "$LOG_FILE"
            set_story_status "$story_key" "ready-for-dev"
        fi
    fi

    # Wait for any manual tasks before dev
    wait_for_manual_tasks "$story_key"

    # Step 2: Implement story
    if [[ "$current_status" != "done" && "$current_status" != "review" ]]; then
        log INFO "Implementing story..."
        if [[ "$DRY_RUN" == "true" ]]; then
            log INFO "[DRY-RUN] Would run: claude '/dev-story $story_key'"
        else
            cd "$PROJECT_ROOT"
            set_story_status "$story_key" "in-progress"
            echo "/dev-story $story_key" | claude --print --dangerously-skip-permissions 2>&1 | tee -a "$LOG_FILE"
            set_story_status "$story_key" "review"
        fi
    fi

    # Wait for any manual tasks after dev
    wait_for_manual_tasks "$story_key"

    # Step 3: Code review
    if [[ "$SKIP_REVIEW" != "true" ]]; then
        log INFO "Running code review..."
        if [[ "$DRY_RUN" == "true" ]]; then
            log INFO "[DRY-RUN] Would run: claude '/code-review $story_key'"
        else
            cd "$PROJECT_ROOT"
            echo "/code-review $story_key" | claude --print --dangerously-skip-permissions 2>&1 | tee -a "$LOG_FILE"
        fi
    fi

    # Mark as done
    set_story_status "$story_key" "done"
    log INFO "✅ Story $story_key completed"
}

# =============================================================================
# Main Loop
# =============================================================================

parse_args() {
    while [[ $# -gt 0 ]]; do
        case $1 in
            --dry-run)
                DRY_RUN=true
                shift
                ;;
            --from)
                START_FROM="$2"
                shift 2
                ;;
            --epic)
                EPIC_FILTER="$2"
                shift 2
                ;;
            --skip-review)
                SKIP_REVIEW=true
                shift
                ;;
            --continue)
                CONTINUE_MODE=true
                shift
                ;;
            -h|--help)
                echo "Usage: $0 [options]"
                echo "  --dry-run      Show what would be done"
                echo "  --from STORY   Start from specific story (e.g., 0-3)"
                echo "  --epic N       Only process epic N"
                echo "  --skip-review  Skip code review step"
                echo "  --continue     Resume from last state"
                exit 0
                ;;
            *)
                echo "Unknown option: $1"
                exit 1
                ;;
        esac
    done
}

main() {
    parse_args "$@"

    # Setup
    mkdir -p "$LOG_DIR"

    print_banner

    # Check prerequisites
    if ! command -v claude &> /dev/null; then
        log ERROR "Claude CLI not found. Please install it first."
        exit 1
    fi

    if [[ ! -f "$SPRINT_STATUS" ]]; then
        log ERROR "Sprint status file not found: $SPRINT_STATUS"
        exit 1
    fi

    # Stats
    local total=$(count_stories "$EPIC_FILTER")
    local done=$(count_done "$EPIC_FILTER")
    local remaining=$((total - done))

    log INFO "Project: IOT START SAFEWIRE"
    log INFO "Total stories: $total | Done: $done | Remaining: $remaining"
    [[ -n "$EPIC_FILTER" ]] && log INFO "Filtering: Epic $EPIC_FILTER only"
    [[ -n "$START_FROM" ]] && log INFO "Starting from: $START_FROM"
    [[ "$DRY_RUN" == "true" ]] && log WARN "DRY-RUN MODE - No changes will be made"
    echo ""

    # Confirmation
    if [[ "$DRY_RUN" != "true" ]]; then
        read -p "Ready to process $remaining stories. Continue? [y/N]: " confirm
        if [[ "$confirm" != "y" && "$confirm" != "Y" ]]; then
            log INFO "Aborted by user"
            exit 0
        fi
    fi

    # Main loop
    local processed=0
    while true; do
        local next=$(get_next_story)

        if [[ -z "$next" ]]; then
            log INFO "🎉 All stories completed!"
            break
        fi

        local story_key=$(echo "$next" | cut -d':' -f1)
        local status=$(echo "$next" | cut -d':' -f2)

        ((processed++))
        print_progress $((done + processed)) "$total" "$story_key"
        echo ""

        execute_story "$story_key" "$status"

        echo ""
        echo "─────────────────────────────────────────────────────────────────"
        echo ""
    done

    # Final summary
    echo ""
    log INFO "═══════════════════════════════════════════════════════════════"
    log INFO "Pipeline completed!"
    log INFO "Processed: $processed stories"
    log INFO "Log file: $LOG_FILE"
    log INFO "═══════════════════════════════════════════════════════════════"
}

main "$@"
