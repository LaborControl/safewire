---
name: auto-pipeline
description: Automated pipeline to process all remaining stories sequentially (create → dev → review)
arguments:
  - name: mode
    description: "Operation mode: 'start' (begin from next story), 'continue' (resume), 'status' (show progress), 'next' (process one story)"
    required: false
    default: "next"
  - name: epic
    description: "Filter to specific epic number (0-10)"
    required: false
---

# Auto-Pipeline: Sequential Story Automation

You are executing the SAFEWIRE auto-development pipeline. This automates the full story lifecycle.

## Mode: $ARGUMENTS

## Instructions

### 1. Load Current State

Read the sprint status file to understand current progress:
- File: `_bmad-output/implementation-artifacts/sprint-status.yaml`
- Identify: next story that is NOT `done`
- Priority order: `in-progress` > `review` > `ready-for-dev` > `backlog`

### 2. Process Based on Mode

**If mode is 'status':**
- Count stories by status
- Display progress table
- Show next story to process
- Exit

**If mode is 'next' or 'start':**
- Find the next actionable story
- Execute the story workflow (see below)

**If mode is 'continue':**
- Find any story in `in-progress` or `review` status
- Resume from that point

### 3. Story Workflow

For each story, execute in sequence:

```
┌─────────────────────────────────────────────────────────────┐
│  STORY LIFECYCLE                                            │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  backlog ──► /create-story X-Y ──► ready-for-dev           │
│                      │                                      │
│                      ▼                                      │
│  ready-for-dev ──► /dev-story X-Y ──► review               │
│                      │                                      │
│                      ▼                                      │
│  review ──► /code-review X-Y ──► done                      │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Step A: Create Story (if backlog)**
- Invoke: `/create-story {epic}-{story}`
- Wait for completion
- Verify story file exists

**Step B: Check Manual Tasks**
- Read story file for `MANUAL:` tasks
- If found, STOP and list them for user
- Ask: "Manual tasks required. Complete them and say 'continue' to proceed."

**Step C: Implement Story (if ready-for-dev)**
- Invoke: `/dev-story {story-key}`
- This runs the full implementation
- Updates status to `review`

**Step D: Code Review (if review)**
- Invoke: `/code-review {story-key}`
- Fixes issues automatically
- Updates status to `done`

### 4. After Each Story

- Update sprint-status.yaml
- Log completion
- Ask user: "Story X-Y complete. Continue to next? [Y/n]"
- If yes, proceed to next story
- If no, exit gracefully

### 5. Manual Task Handling

When encountering MANUAL tasks:

```
⚠️  MANUAL INTERVENTION REQUIRED

Story: 0-3-setup-ci-cd-pipeline
Tasks pending:
  • Create GitHub repository secrets
  • Configure Scaleway Container Registry

Please complete these tasks and respond with 'continue' when ready.
```

## Progress Tracking

Use TodoWrite to track:
- Current story being processed
- Steps completed
- Stories remaining

## Output Format

Always show:
```
═══════════════════════════════════════════════════════════════
  SAFEWIRE Auto-Pipeline
═══════════════════════════════════════════════════════════════
  Epic 0: ████████░░░░░░░░░░░░  40% (2/5 stories)
  Total:  ██░░░░░░░░░░░░░░░░░░   3% (2/67 stories)
═══════════════════════════════════════════════════════════════
  Current: 0-3-setup-ci-cd-pipeline
  Status:  ready-for-dev → in-progress
  Step:    Implementing...
═══════════════════════════════════════════════════════════════
```

## Error Handling

- If a step fails, log the error
- Ask user: "Step failed. Options: [R]etry, [S]kip, [A]bort?"
- Retry: Re-run the failed step
- Skip: Mark story with issue, continue to next
- Abort: Exit pipeline, save state

## Begin Execution

Start by reading sprint-status.yaml and determining the next action based on the mode provided.
