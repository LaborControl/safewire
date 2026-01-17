---
name: sprint-status
description: Display current sprint progress with visual indicators
---

# Sprint Status Display

Read `_bmad-output/implementation-artifacts/sprint-status.yaml` and display a formatted progress report.

## Output Format

```
╔═══════════════════════════════════════════════════════════════════════════════╗
║  SAFEWIRE Sprint Status                                         2026-01-17   ║
╠═══════════════════════════════════════════════════════════════════════════════╣
║                                                                               ║
║  Epic 0: Foundation & Infrastructure Setup              ████████░░░░ 40%     ║
║    ✅ 0-1 Initialize Next.js Starter Template                    done        ║
║    ✅ 0-2 Configure Scaleway Infrastructure                      done        ║
║    🟡 0-3 Setup CI/CD Pipeline                              ready-for-dev    ║
║    ⚪ 0-4 Create Base Drizzle Schema                            backlog      ║
║    ⚪ 0-5 Configure Authentication Foundation                   backlog      ║
║    ⚪ 0-6 Setup Design System Foundation                        backlog      ║
║                                                                               ║
║  Epic 1: Authentication & User Access Control           ░░░░░░░░░░░░  0%     ║
║    ⚪ 1-1 User Invitation by Admin                              backlog      ║
║    ...                                                                        ║
║                                                                               ║
╠═══════════════════════════════════════════════════════════════════════════════╣
║  Summary:  Done: 2  |  In Progress: 0  |  Ready: 1  |  Backlog: 64           ║
║  Next:     0-3-setup-ci-cd-pipeline (ready-for-dev)                          ║
╚═══════════════════════════════════════════════════════════════════════════════╝
```

## Status Icons

- ✅ done
- 🔄 in-progress
- 📝 review
- 🟡 ready-for-dev
- ⚪ backlog

## Actions

After displaying status, offer:
- `/dev-story {next}` - Start implementing next story
- `/auto-pipeline next` - Process next story through full cycle
- `/auto-pipeline start` - Begin automated processing of all stories
