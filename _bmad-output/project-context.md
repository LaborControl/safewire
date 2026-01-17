---
project_name: 'IOT START SAFEWIRE'
user_name: 'jean claude'
date: '2026-01-17'
sections_completed: ['technology_stack', 'language_rules', 'framework_rules', 'testing_rules', 'code_quality', 'critical_rules']
status: 'complete'
rule_count: 42
optimized_for_llm: true
---

# Project Context for AI Agents

_This file contains critical rules and patterns that AI agents must follow when implementing code in this project. Focus on unobvious details that agents might otherwise miss._

---

## Technology Stack & Versions

**Core Runtime:**
- Next.js 15.x (App Router) - Use Server Actions, NOT API routes for mutations
- React 19.x - Use `useFormStatus`, `useOptimistic` for forms
- TypeScript 5.x strict mode - No `any`, explicit return types required

**Database & ORM:**
- PostgreSQL Managed (Scaleway Paris) - Use Drizzle, NOT Prisma
- Drizzle ORM - Schema-first, migrations via `drizzle-kit`

**Authentication:**
- NextAuth.js - Database sessions (NOT JWT) for eIDAS compliance
- Resend - Magic link emails (3K/month free tier)

**Styling:**
- Tailwind CSS 4 + shadcn/ui - Use `cn()` helper for class merging
- NEVER use inline styles or CSS modules

**State Management:**
- TanStack Query - Server state ONLY, use query_keys factory
- React Context - UI state (theme, accessibility mode)

**AI Integration:**
- Vercel AI SDK - `useChat` hook for streaming
- Claude API - Via SDK abstraction, NOT direct API calls

## Critical Implementation Rules

### Language-Specific Rules (TypeScript)

**Configuration:**
- `strict: true` - No implicit `any`
- `noUncheckedIndexedAccess: true` - Safe array/object access
- Explicit return types on all exported functions

**Naming Conventions (CRITICAL):**
- snake_case: DB columns, API params, JSON keys, Server Action names
- PascalCase: Components, Types, Interfaces, Enums
- camelCase: Variables, functions, hooks
- SCREAMING_SNAKE: Constants (`MAX_FILE_SIZE`)

**Import Order:**
1. React/Next.js
2. External packages
3. Internal modules (`@/`)
4. Types
5. Styles

**Type Patterns:**
```typescript
// Infer from Drizzle schema
type User = typeof users.$inferSelect;
type NewUser = typeof users.$inferInsert;

// ActionResult (mandatory for Server Actions)
type ActionResult<T> =
  | { success: true; data: T }
  | { success: false; error: { code: string; message: string } };
```

### Framework-Specific Rules (Next.js 15 + React 19)

**Server Actions (NOT API Routes):**
- All mutations via `src/lib/actions/*.ts`
- Always return `ActionResult<T>`, never throw
- Use `"use server"` directive at file top
- Validate with Zod before DB operations

**Parallel Routes:**
- `@chat/` and `@context/` for split 60/40 layout
- Each slot needs `default.tsx` for unmatched routes
- Use `useSelectedLayoutSegment` for active state

**State Management:**
- TanStack Query for server state (query_keys factory)
- React Context for UI state only (theme, accessibility)
- NEVER mix server and client state management

**Query Keys Pattern:**
```typescript
export const query_keys = {
  projects: {
    all: ['projects'] as const,
    list: (filters: ProjectFilters) => [...query_keys.projects.all, 'list', filters] as const,
    detail: (id: string) => [...query_keys.projects.all, 'detail', id] as const,
  },
};
```

### Testing Rules

**Test Location:**
- Unit tests: Co-located `*.test.ts` next to source files
- E2E tests: `/e2e/*.spec.ts` (Playwright)
- NEVER put unit tests in separate `__tests__` directory

**Test Structure:**
- Describe blocks match component/function name
- AAA pattern: Arrange, Act, Assert
- Mock external services, never real API calls

**Coverage Requirements:**
- Server Actions: 100% coverage
- Components: Critical paths only
- Services: Integration tests for external APIs

### Code Quality & Style Rules

**Linting:**
- ESLint + Prettier (no conflicts)
- No `console.log` in production code
- No `@ts-ignore` without explanation comment

**Component Structure:**
- One component per file
- Props interface above component
- Export component as default

**File Naming:**
- Components: `PascalCase.tsx`
- Hooks: `useCamelCase.ts`
- Utils: `camelCase.ts`
- Actions: `snake_case.ts`

### Critical Don't-Miss Rules

**NEVER DO:**
- Use API Routes for mutations (use Server Actions)
- Store JWT tokens (use database sessions)
- Use camelCase for JSON keys (use snake_case)
- Create new shadcn components (use existing ui/)
- Use inline styles or CSS modules (use Tailwind)
- Call Claude API directly (use Vercel AI SDK)

**ALWAYS DO:**
- Return ActionResult from Server Actions
- Wrap feature components with Error Boundaries
- Use `cn()` helper for conditional classes
- Hash documents SHA-256 before signature
- Check `prefers-reduced-motion` for animations
- Validate with Zod on client AND server

---

_Generated: 2026-01-17 | Project: IOT START SAFEWIRE_
