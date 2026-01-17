# Story 0.1: Initialize Next.js Starter Template

Status: done

## Story

As a **developer**,
I want **to initialize the project with the Skolaczk Next.js starter template**,
so that **I have a production-ready foundation with shadcn/ui, Drizzle, and NextAuth pre-configured**.

## Acceptance Criteria

1. **AC1**: Project initialized with Next.js 15, React 19, TypeScript 5 strict mode
2. **AC2**: shadcn/ui components available in `src/components/ui/`
3. **AC3**: Drizzle ORM configured with PostgreSQL adapter
4. **AC4**: NextAuth.js base configuration exists
5. **AC5**: Jest and Playwright test frameworks are set up
6. **AC6**: ESLint and Prettier are configured
7. **AC7**: Project builds without errors (`npm run build`)
8. **AC8**: Development server starts correctly (`npm run dev`)

## Tasks / Subtasks

- [x] Task 1: Clone starter template and install dependencies (AC: 1)
  - [x] Run `npx degit Skolaczk/next-starter safewire-app`
  - [x] Run `cd safewire-app && npm install`
  - [x] Verify Next.js 15.x and React 19.x versions in package.json
  - [x] Verify TypeScript 5.x with strict mode in tsconfig.json

- [x] Task 2: Verify shadcn/ui setup (AC: 2)
  - [x] Confirm `src/components/ui/` directory exists
  - [x] Verify button.tsx, input.tsx, dialog.tsx are present
  - [x] Confirm `cn()` utility function in `src/lib/utils.ts`
  - [x] Test importing a component: `import { Button } from "@/components/ui/button"`

- [x] Task 3: Configure Drizzle ORM (AC: 3)
  - [x] Verify `drizzle.config.ts` exists at project root
  - [x] Confirm PostgreSQL adapter installed (`drizzle-orm`, `@neondatabase/serverless` or `pg`)
  - [x] Create `src/lib/db/index.ts` for Drizzle client
  - [x] Create `src/lib/db/schema/` directory structure
  - [x] Test: `npx drizzle-kit generate` runs without errors

- [x] Task 4: Verify NextAuth.js configuration (AC: 4)
  - [x] Confirm `src/lib/auth/index.ts` or `src/app/api/auth/[...nextauth]/route.ts` exists
  - [x] Verify NextAuth types in `next-auth.d.ts` or `types/next-auth.d.ts`
  - [x] Confirm Drizzle adapter is referenced (may need adjustment for PostgreSQL)

- [x] Task 5: Verify testing frameworks (AC: 5)
  - [x] Confirm `jest.config.ts` or `jest.config.js` exists
  - [x] Confirm `playwright.config.ts` exists
  - [x] Verify test scripts in package.json: `test`, `test:e2e`
  - [x] Run `npm test` to verify Jest works
  - [x] Create `e2e/` directory if not exists

- [x] Task 6: Verify linting and formatting (AC: 6)
  - [x] Confirm `.eslintrc.json` or `eslint.config.js` exists
  - [x] Confirm `.prettierrc` or Prettier config exists
  - [x] Run `npm run lint` without errors
  - [x] Verify no conflicting rules between ESLint and Prettier

- [x] Task 7: Build and run verification (AC: 7, 8)
  - [x] Run `npm run build` - must complete without errors
  - [x] Run `npm run dev` - must start on localhost:3000
  - [x] Visit http://localhost:3000 and verify page renders
  - [x] Check console for any warnings or errors

- [x] Task 8: Project structure alignment
  - [x] Create missing directories per architecture spec:
    - `src/actions/` (for Server Actions)
    - `src/services/` (for external service clients)
    - `src/hooks/` (for custom hooks)
    - `src/types/` (for TypeScript types)
    - `src/config/` (for configuration)
    - `src/providers/` (for React providers)
  - [x] Verify `src/app/` structure follows App Router conventions

## Dev Notes

### Starter Template Details

**Repository:** https://github.com/Skolaczk/next-starter

**Initialization Command:**
```bash
npx degit Skolaczk/next-starter safewire-app
cd safewire-app && npm install
```

**Why This Starter (from Architecture):**
- Only starter combining shadcn/ui + ORM type-safe + Auth flexible
- Drizzle ORM plus léger que Prisma, meilleure perf edge
- NextAuth.js permet MFA + Magic Link custom
- Docker-ready pour Scaleway Containers
- Tests intégrés (Jest + Playwright)

### Critical Architecture Decisions to Verify

| Category | Expected |
|----------|----------|
| Language & Runtime | TypeScript 5 strict, React 19 |
| Styling Solution | Tailwind CSS 4 + shadcn/ui |
| Build Tooling | Turbopack, ESLint, Prettier |
| Testing Framework | Jest + RTL + Playwright |
| Code Organization | src/app (App Router), components/ |
| Database ORM | Drizzle (schema-first, migrations) |
| Authentication | NextAuth.js (flexible providers) |

### Project Structure Notes

**Target Structure (from Architecture):**
```
safewire-app/
├── .github/workflows/          # CI/CD (created in Story 0.3)
├── .env.example
├── Dockerfile
├── docker-compose.yml
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.ts
├── drizzle.config.ts
├── playwright.config.ts
├── jest.config.ts
├── e2e/                        # Playwright E2E tests
└── src/
    ├── app/                    # Routes App Router
    │   ├── globals.css
    │   ├── layout.tsx
    │   ├── page.tsx
    │   └── api/auth/[...nextauth]/route.ts
    ├── components/
    │   └── ui/                 # shadcn/ui components
    ├── lib/
    │   ├── db/                 # Drizzle schema + queries
    │   ├── auth/               # NextAuth config
    │   ├── actions/            # Server Actions
    │   ├── services/           # External service clients
    │   └── utils/              # Utilities (cn.ts)
    ├── hooks/                  # Custom hooks
    ├── types/                  # TypeScript types
    ├── config/                 # Configuration
    └── providers/              # React providers
```

### References

- [Source: architecture.md#Starter Template Evaluation]
- [Source: architecture.md#Selected Starter: Next Starter (Skolaczk)]
- [Source: project-context.md#Technology Stack & Versions]

### Naming Conventions (CRITICAL)

From project-context.md:
- **snake_case**: DB columns, API params, JSON keys, Server Action names
- **PascalCase**: Components, Types, Interfaces, Enums
- **camelCase**: Variables, functions, hooks
- **SCREAMING_SNAKE**: Constants (`MAX_FILE_SIZE`)

### TypeScript Configuration Requirements

Verify `tsconfig.json` includes:
```json
{
  "compilerOptions": {
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

### Environment Variables Template

Create `.env.example` with:
```env
# Database
DATABASE_URL=

# NextAuth
NEXTAUTH_SECRET=
NEXTAUTH_URL=http://localhost:3000

# Scaleway (Story 0.2)
SCW_ACCESS_KEY=
SCW_SECRET_KEY=
SCW_BUCKET=

# Email (Resend)
RESEND_API_KEY=
```

### Verification Checklist

Before marking complete, verify:
- [x] `npm run dev` starts without errors
- [x] `npm run build` completes successfully
- [x] `npm run lint` passes
- [x] `npm test` runs (even if no tests yet)
- [x] TypeScript strict mode enabled
- [x] All required directories exist

## Dev Agent Record

### Agent Model Used

Claude Opus 4.5 (claude-opus-4-5-20251101)

### Debug Log References

- Jest tests pass: 1 test suite, 1 test (theme-switcher.spec.tsx)
- Build output: 6 routes, ~102KB shared JS
- ESLint: deprecated next lint warning (migration to ESLint CLI recommended for Next.js 16)
- npm vulnerabilities: 4 moderate remaining (in drizzle-kit dependency chain, requires breaking change to fix)

### Completion Notes List

1. Starter template cloned successfully with Next.js 15.5.4, React 19.2.0
2. Added noUncheckedIndexedAccess to tsconfig.json per project-context.md
3. Added shadcn/ui input.tsx and dialog.tsx components (only button.tsx was included)
4. Created src/lib/db/index.ts as re-export bridge (starter uses src/lib/schema.ts)
5. Created .env.example and .env.local with all required environment variables
6. Created architecture directories: actions/, services/, hooks/, types/, config/, providers/
7. Created e2e/ directory for Playwright tests
8. Fixed Prettier/ESLint formatting issues in newly added files

### Code Review Fixes Applied

**2026-01-17 - Adversarial Code Review:**

1. **[H1/H2] Server Action violations fixed** - `create-checkout-session.ts`:
   - Renamed function to snake_case: `create_checkout_session_action`
   - Changed from throwing errors to returning `ActionResult<T>`
   - Added proper error handling with try/catch
   - Updated `stripe-button.tsx` to handle ActionResult

2. **[M1] DB schema naming conventions fixed** - `schema.ts`:
   - All column names changed to snake_case (email_verified, stripe_customer_id, etc.)
   - All table names changed to plural snake_case (users, accounts, sessions, etc.)
   - JS property names preserved for NextAuth adapter compatibility

3. **[M3] npm vulnerabilities fixed**:
   - Updated Next.js from 15.5.4 to 15.5.9 (fixed critical RCE vulnerability)
   - Fixed 7 vulnerabilities, 4 moderate remaining (in drizzle-kit deps, breaking change required)

4. **[L1] package.json name fixed** - Changed from "next-starter" to "safewire-app"

**Note [M2]:** Test location issue (`__tests__/` vs co-located) not fixed - would require restructuring starter template tests, deferred to future story.

### File List

**Created:**
- safewire-app/ (entire project directory)
- src/lib/db/index.ts
- src/lib/db/schema/.gitkeep
- src/lib/db/queries/.gitkeep
- src/components/ui/input.tsx
- src/components/ui/dialog.tsx
- src/actions/.gitkeep
- src/services/.gitkeep
- src/hooks/.gitkeep
- src/types/.gitkeep
- src/config/.gitkeep
- src/providers/.gitkeep
- e2e/.gitkeep
- .env.example
- .env.local

**Modified:**
- tsconfig.json (added noUncheckedIndexedAccess)
- package.json (name: safewire-app, next@15.5.9)
- src/lib/schema.ts (snake_case column/table names)
- src/actions/create-checkout-session.ts (ActionResult pattern, snake_case name)
- src/components/stripe-button.tsx (updated to use ActionResult)

---

_Story created: 2026-01-17 | Epic: 0 - Foundation & Infrastructure Setup_
_Implementation completed: 2026-01-17_
_Code review passed: 2026-01-17_
