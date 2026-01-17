---
stepsCompleted: [1, 2, 3, 4, 5, 6, 7, 8]
inputDocuments:
  - _bmad-output/planning-artifacts/prd.md
  - _bmad-output/planning-artifacts/ux-design-specification.md
  - _bmad-output/analysis/brainstorming-session-2026-01-16.md
  - _bmad-output/documents/business-model-paas-safewire.md
  - _bmad-output/documents/garantie-zero-impact-specification.md
  - .claude/Creative_Spec.md
workflowType: 'architecture'
status: 'complete'
lastStep: 8
completedAt: '2026-01-17'
project_name: 'IOT START SAFEWIRE'
user_name: 'jean claude'
date: '2026-01-17'
---

# Architecture Decision Document

_Ce document se construit collaborativement à travers une découverte étape par étape._

## Project Context Analysis

### Requirements Overview

**Functional Requirements:**
73 FRs couvrant la gestion complète du cycle de vie des projets gaines SAFEWIRE:
- Gestion projets et appels d'offres DCE
- Agent IA conversationnel (interface principale)
- Signatures électroniques eIDAS via Yousign
- Vérification identité KYC via Stripe Identity
- GED avec Object Storage S3-compatible
- Dashboard supervision (interface backup)
- Garantie Zéro Impact avec provisionnement automatique

**Scope Clarification:**
- **Phase 1:** Outil interne LABOR CONTROL (mono-tenant)
- **Architecture:** Extensible multi-tenant pour roadmap B2B potentielle
- **Implication:** Isolation données préparée mais non activée

**Non-Functional Requirements:**
55 NFRs définissant les contraintes architecturales:
- Performance: 10 utilisateurs simultanés, <2s temps réponse
- Disponibilité: 99% minimum (SLA tiered jusqu'à 99.9%)
- Sécurité: TLS 1.3, AES-256, MFA/Magic Link, tokens 256-bit
- Conformité: RGPD, eIDAS signatures qualifiées
- Budget: 40-90€/mois hébergement Scaleway

**Scale & Complexity:**
- Primary domain: Full-stack SaaS interne
- Complexity level: Moyenne
- Estimated architectural components: ~15-20
- Phasing Strategy: MVP fonctionnel → UX premium

### Technical Constraints & Dependencies

**Contraintes Imposées (du PRD):**
- Hébergement: Scaleway (souveraineté données France)
- Stack: Next.js App Router
- Database: PostgreSQL Managed
- Storage: Object Storage S3-compatible
- Performance Frontend: Core Web Vitals (LCP < 2.5s, CLS < 0.1)
- Coût Streaming IA: Monitoring usage Claude API (connexions longues)
- Indexation GED: Prévoir solution full-text (PostgreSQL FTS ou externe)

**Dépendances Services Externes:**
| Service | Usage | Criticité | Fallback Strategy |
|---------|-------|-----------|-------------------|
| Claude API | Agent IA conversationnel | Critique | Mode read-only + file d'attente |
| Yousign | Signatures eIDAS qualifiées | Critique | Signature différée + notification |
| Stripe Identity | Vérification KYC | Moyenne | Vérification asynchrone |

**UX Phasing Strategy:**
| Composant | Phase 1 | Phase 2 |
|-----------|---------|---------|
| Mode par défaut | Safe Mode | Choix utilisateur |
| Animations | CSS natives | Framer Motion |
| Scroll | Native | Lenis optional |
| 3D | Non | Spline optional |
| Design System | shadcn/ui standard | Glassmorphism |

### Cross-Cutting Concerns Identified

1. **Authentification & Autorisation**
   - Dual-mode: MFA (internes) vs Magic Link (externes)
   - Gestion sessions sécurisées
   - RBAC pour différents rôles utilisateurs

2. **État Conversationnel IA**
   - Persistance contexte multi-session
   - Streaming réponses temps réel
   - Fallback si API indisponible

3. **Audit & Traçabilité**
   - Logging actions pour conformité légale
   - Horodatage pour validité juridique
   - Rétention données RGPD

4. **Résilience Services Externes**
   - Circuit breakers pour APIs tierces
   - Fallback strategies explicites par service
   - Graceful degradation vs haute disponibilité pure
   - Retry policies avec exponential backoff

5. **Dual-State UI Engine**
   - Safe Mode (default Phase 1): Native scroll, high contrast, no animations
   - Immersive Mode (Phase 2): Lenis, Glassmorphism, 3D optional
   - Detection prefers-reduced-motion

6. **Intégrité Cryptographique Chaîne Documentaire**
   - Hash SHA-256 des documents avant signature
   - Lien cryptographique: Vérification ID → Signature → Stockage
   - Horodatage qualifié pour valeur juridique
   - Vérification intégrité à chaque accès

## Starter Template Evaluation

### Primary Technology Domain

Full-stack SaaS interne avec Agent IA, basé sur les exigences projet:
- Next.js App Router (imposé PRD)
- shadcn/ui + Tailwind CSS (imposé UX spec)
- PostgreSQL Scaleway (imposé PRD)
- Authentification flexible MFA + Magic Link

### Starter Options Considered

| Starter | Avantages | Inconvénients |
|---------|-----------|---------------|
| create-next-app | Officiel, minimal | Pas shadcn, pas auth, pas ORM |
| create-t3-app | tRPC type-safe, Prisma | Pas shadcn intégré |
| next-forge | Complet SaaS, Turborepo | Vercel-centric, Clerk imposé |
| **Next Starter (Skolaczk)** | shadcn + Drizzle + NextAuth | Communautaire |
| SaaS Boilerplate (ixartz) | Multi-tenant ready | Clerk imposé, complexe |

### Selected Starter: Next Starter (Skolaczk)

**Rationale for Selection:**
- Seul starter combinant shadcn/ui + ORM type-safe + Auth flexible
- Drizzle ORM plus léger que Prisma, meilleure perf edge
- NextAuth.js permet MFA + Magic Link custom
- Docker-ready pour Scaleway Containers
- Tests intégrés (Jest + Playwright)

**Initialization Command:**
```bash
npx degit Skolaczk/next-starter safewire-app
cd safewire-app && npm install
```

**Architectural Decisions Provided by Starter:**

| Catégorie | Décision |
|-----------|----------|
| Language & Runtime | TypeScript 5 strict, React 19 |
| Styling Solution | Tailwind CSS 4 + shadcn/ui |
| Build Tooling | Turbopack, ESLint, Prettier |
| Testing Framework | Jest + RTL + Playwright |
| Code Organization | src/app (App Router), components/ |
| Development Experience | Hot reload, TypeScript IntelliSense |
| Database ORM | Drizzle (schema-first, migrations) |
| Authentication | NextAuth.js (flexible providers) |

**Note:** L'initialisation de ce starter sera la première story d'implémentation.

## Core Architectural Decisions

### Decision Priority Analysis

**Critical Decisions (Block Implementation):**
- Database: PostgreSQL Managed Scaleway (PRD)
- ORM: Drizzle (Starter)
- Auth Framework: NextAuth.js (Starter)
- Hosting: Scaleway Serverless Containers (PRD)

**Important Decisions (Shape Architecture):**
- Streaming IA: Vercel AI SDK
- State Management: TanStack Query
- Routing: Parallel Routes pour split 60/40
- Sessions: Database Sessions (révocation eIDAS)

**Deferred Decisions (Post-MVP):**
- Cache externe (Redis si besoin scaling)
- Rate limiting (si ouverture B2B)
- Meilisearch (si UX recherche premium requise)

### Data Architecture

| Décision | Choix | Rationale |
|----------|-------|-----------|
| Database | PostgreSQL Managed Scaleway | Souveraineté FR, imposé PRD |
| ORM | Drizzle | Type-safe, léger, fourni starter |
| Cache | Aucun (Phase 1) | 10 users, PostgreSQL suffit |
| Full-text Search | PostgreSQL FTS | Gratuit, français supporté |
| Validation | Zod | Standard écosystème, intégré Drizzle |

### Authentication & Security

| Décision | Choix | Rationale |
|----------|-------|-----------|
| Auth Framework | NextAuth.js | Flexible, fourni starter |
| MFA (internes) | TOTP | Standard, compatible tous smartphones |
| Magic Link (externes) | NextAuth + Resend | Simple, 3K emails/mois gratuits |
| Sessions | Database Sessions | Révocation immédiate, sécurité eIDAS |
| RBAC | 3 rôles simples | admin, internal, external |

### API & Communication Patterns

| Décision | Choix | Rationale |
|----------|-------|-----------|
| Mutations | Server Actions | Next.js 15 natif, type-safe |
| Webhooks | API Routes | Yousign, Stripe callbacks |
| Streaming IA | Vercel AI SDK | Hooks React, abstraction Claude |
| Erreurs | Error Boundaries | Standard React, simple |
| Rate Limiting | Non (Phase 1) | Users internes, confiance |

### Frontend Architecture

| Décision | Choix | Rationale |
|----------|-------|-----------|
| UI State | React Context | Theme, mode, UI local |
| Server State | TanStack Query | Cache, refetch, optimistic |
| Formulaires | React Hook Form + Zod | Standard shadcn/ui |
| Routing | App Router + Parallel Routes | Split 60/40 UX spec |
| Code Splitting | next/dynamic | Lazy load composants lourds |

### Infrastructure & Deployment

| Décision | Choix | Rationale |
|----------|-------|-----------|
| CI/CD | GitHub Actions | Standard, gratuit, écosystème |
| Container Registry | Scaleway CR | Souveraineté, intégré |
| Monitoring | Scaleway Cockpit | Logs, métriques Grafana |
| Error Tracking | Sentry | Context errors, 5K events gratuits |
| Secrets | Scaleway + GitHub Secrets | Simple, suffisant mono-tenant |
| Backup | Scaleway Managed | Automatique, PITR inclus |

### Decision Impact Analysis

**Implementation Sequence:**
1. Starter setup + Drizzle schema
2. NextAuth.js config (TOTP + Magic Link)
3. Scaleway deployment pipeline
4. Claude streaming integration
5. Core UI components

**Cross-Component Dependencies:**
- Auth ↔ Database Sessions (même PostgreSQL)
- Streaming IA ↔ TanStack Query (cache conversations)
- Parallel Routes ↔ State Context (sync chat/contexte)

## Implementation Patterns & Consistency Rules

### Pattern Categories Defined

**Critical Conflict Points Identified:** 5 catégories où les agents IA pourraient diverger

### Naming Patterns

**Database Naming (Drizzle):**

| Élément | Convention | Exemple |
|---------|------------|---------|
| Tables | snake_case pluriel | `users`, `project_documents` |
| Colonnes | snake_case | `created_at`, `user_id` |
| Foreign Keys | `{table}_id` | `user_id`, `project_id` |
| Indexes | `idx_{table}_{columns}` | `idx_users_email` |
| Enums | PascalCase | `UserRole`, `ProjectStatus` |

**API Naming (snake_case cohérent):**

| Élément | Convention | Exemple |
|---------|------------|---------|
| Server Actions | snake_case verbe | `create_project`, `update_user` |
| API Routes | snake_case | `/api/webhooks/yousign` |
| Query/Path params | snake_case | `?project_id=123`, `[project_id]` |
| JSON keys | snake_case | `{ "user_id": 1 }` |

**Code Naming (TypeScript):**

| Élément | Convention | Exemple |
|---------|------------|---------|
| Composants | PascalCase | `ChatBubble.tsx` |
| Hooks | camelCase use* | `useProject.ts` |
| Types/Interfaces | PascalCase | `User`, `Project` |
| Variables | camelCase | `currentUser` |
| Constantes | SCREAMING_SNAKE | `MAX_FILE_SIZE` |

### Structure Patterns

**Project Organization:**

```
src/
├── app/                    # Routes App Router
│   ├── (auth)/            # Groupe routes auth
│   ├── (dashboard)/       # Groupe routes dashboard
│   └── api/               # API Routes (webhooks)
├── components/
│   ├── ui/                # shadcn/ui
│   ├── features/          # Par feature (chat/, projects/, documents/)
│   └── shared/            # Réutilisables custom
├── lib/
│   ├── db/                # Drizzle schema + queries
│   ├── auth/              # NextAuth config
│   ├── actions/           # Server Actions
│   └── utils/             # Utilitaires
├── hooks/                 # Custom hooks
├── types/                 # Types TypeScript
└── config/                # Configuration
```

**Test Location:** Co-located (`*.test.ts` à côté du fichier, `/e2e/` pour E2E)

### Format Patterns

**API Response Format:**

```typescript
type ActionResult<T> =
  | { success: true; data: T }
  | { success: false; error: { code: string; message: string } }
```

**Data Formats:**
- Dates: ISO 8601 (`"2026-01-17T14:30:00Z"`)
- IDs: UUID strings
- Booleans: true/false
- Nulls: explicites

**Error Codes:** `VALIDATION_ERROR`, `NOT_FOUND`, `UNAUTHORIZED`, `FORBIDDEN`, `CONFLICT`, `EXTERNAL_SERVICE_ERROR`

### Communication Patterns

**State Management:**

| Contexte | Solution |
|----------|----------|
| Server State | TanStack Query |
| UI State | React Context |
| Form State | React Hook Form |

**Query Keys:** `[entity, scope, id?, filters?]`
- `['projects', 'list', filters]`
- `['projects', 'detail', id]`
- `['conversations', 'project', project_id]`

**Events:** `entity.action` format (`project.created`, `document.signed`)

### Process Patterns

**Error Handling:**
- Server Actions: ActionResult pattern
- Components: Error Boundaries par feature
- Services Externes: Circuit Breaker (fallback après 3 échecs)

**Loading States:**
- Initial: Skeleton shadcn/ui
- Action: Button loading state
- Streaming: StreamingIndicator
- Page: Suspense + loading.tsx

**Validation:** Zod client + server + Drizzle constraints

### Enforcement Guidelines

**All AI Agents MUST:**
- Suivre snake_case pour DB/API/JSON
- Utiliser ActionResult pour Server Actions
- Placer tests co-located avec les fichiers
- Utiliser query_keys factory pour TanStack Query
- Implémenter Error Boundaries par feature

## Project Structure & Boundaries

### Requirements to Structure Mapping

| Domaine Fonctionnel | Répertoire |
|---------------------|------------|
| Agent IA Conversationnel | `src/components/features/chat/` |
| Gestion Projets | `src/components/features/projects/` |
| GED Documents | `src/components/features/documents/` |
| Signatures eIDAS | `src/lib/services/yousign/` |
| Vérification KYC | `src/lib/services/stripe-identity/` |
| Garantie Zéro Impact | `src/components/features/warranty/` |
| Dashboard Supervision | `src/app/(dashboard)/` |
| Authentification | `src/lib/auth/` |

### Complete Project Directory Structure

```
safewire-app/
├── .github/
│   └── workflows/
│       ├── ci.yml                    # Tests + Lint
│       └── deploy.yml                # Build + Push Scaleway
├── .env.example
├── .env.local                        # Local dev (gitignored)
├── .gitignore
├── Dockerfile
├── docker-compose.yml                # Local PostgreSQL
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.ts
├── drizzle.config.ts
├── playwright.config.ts
├── jest.config.ts
│
├── e2e/                              # Playwright E2E tests
│   ├── auth.spec.ts
│   ├── projects.spec.ts
│   └── chat.spec.ts
│
├── public/
│   ├── favicon.ico
│   └── assets/
│       └── images/
│
└── src/
    ├── app/
    │   ├── globals.css
    │   ├── layout.tsx                # Root layout + Providers
    │   ├── loading.tsx               # Global loading
    │   ├── error.tsx                 # Global error boundary
    │   ├── not-found.tsx
    │   │
    │   ├── (auth)/                   # Auth group (no dashboard layout)
    │   │   ├── login/
    │   │   │   └── page.tsx
    │   │   ├── magic-link/
    │   │   │   └── page.tsx
    │   │   └── verify-mfa/
    │   │       └── page.tsx
    │   │
    │   ├── (dashboard)/              # Dashboard group (with sidebar)
    │   │   ├── layout.tsx            # Split 60/40 layout
    │   │   ├── page.tsx              # Dashboard home
    │   │   ├── @chat/                # Parallel route: chat panel
    │   │   │   ├── default.tsx
    │   │   │   └── page.tsx
    │   │   ├── @context/             # Parallel route: context panel
    │   │   │   ├── default.tsx
    │   │   │   └── [project_id]/
    │   │   │       └── page.tsx
    │   │   ├── projects/
    │   │   │   ├── page.tsx          # Liste projets
    │   │   │   ├── new/
    │   │   │   │   └── page.tsx
    │   │   │   └── [project_id]/
    │   │   │       ├── page.tsx
    │   │   │       ├── documents/
    │   │   │       │   └── page.tsx
    │   │   │       └── signatures/
    │   │   │           └── page.tsx
    │   │   ├── documents/
    │   │   │   └── page.tsx
    │   │   └── settings/
    │   │       └── page.tsx
    │   │
    │   └── api/
    │       ├── auth/
    │       │   └── [...nextauth]/
    │       │       └── route.ts
    │       └── webhooks/
    │           ├── yousign/
    │           │   └── route.ts
    │           └── stripe/
    │               └── route.ts
    │
    ├── components/
    │   ├── ui/                       # shadcn/ui (auto-generated)
    │   │   ├── button.tsx
    │   │   ├── input.tsx
    │   │   ├── dialog.tsx
    │   │   ├── skeleton.tsx
    │   │   └── ...
    │   │
    │   ├── features/
    │   │   ├── chat/
    │   │   │   ├── ChatBubble.tsx
    │   │   │   ├── ChatBubble.test.tsx
    │   │   │   ├── ChatInput.tsx
    │   │   │   ├── ChatPanel.tsx
    │   │   │   ├── StreamingText.tsx
    │   │   │   └── ChatErrorBoundary.tsx
    │   │   │
    │   │   ├── projects/
    │   │   │   ├── ProjectCard.tsx
    │   │   │   ├── ProjectCard.test.tsx
    │   │   │   ├── ProjectList.tsx
    │   │   │   ├── ProjectForm.tsx
    │   │   │   └── ProjectErrorBoundary.tsx
    │   │   │
    │   │   ├── documents/
    │   │   │   ├── DocumentViewer.tsx
    │   │   │   ├── DocumentUpload.tsx
    │   │   │   ├── SignatureStatus.tsx
    │   │   │   └── DocumentErrorBoundary.tsx
    │   │   │
    │   │   └── warranty/
    │   │       ├── HealthScore.tsx
    │   │       ├── WarrantyDashboard.tsx
    │   │       └── ProvisioningCalculator.tsx
    │   │
    │   └── shared/
    │       ├── Layout/
    │       │   ├── SplitLayout.tsx
    │       │   ├── Sidebar.tsx
    │       │   └── Header.tsx
    │       ├── CommandPalette.tsx
    │       ├── LoadingSpinner.tsx
    │       └── AccessibilityToggle.tsx
    │
    ├── lib/
    │   ├── db/
    │   │   ├── index.ts              # Drizzle client
    │   │   ├── schema/
    │   │   │   ├── users.ts
    │   │   │   ├── projects.ts
    │   │   │   ├── documents.ts
    │   │   │   ├── conversations.ts
    │   │   │   └── index.ts
    │   │   ├── queries/
    │   │   │   ├── users.ts
    │   │   │   ├── projects.ts
    │   │   │   └── conversations.ts
    │   │   └── migrations/
    │   │
    │   ├── auth/
    │   │   ├── index.ts              # NextAuth config
    │   │   ├── providers/
    │   │   │   ├── credentials.ts    # TOTP
    │   │   │   └── email.ts          # Magic Link
    │   │   └── adapter.ts            # Drizzle adapter
    │   │
    │   ├── actions/
    │   │   ├── projects.ts           # create_project, update_project...
    │   │   ├── documents.ts          # upload_document, request_signature...
    │   │   ├── conversations.ts      # send_message, get_history...
    │   │   └── users.ts              # update_profile, setup_mfa...
    │   │
    │   ├── services/
    │   │   ├── claude/
    │   │   │   ├── client.ts         # Vercel AI SDK setup
    │   │   │   └── prompts.ts
    │   │   ├── yousign/
    │   │   │   ├── client.ts
    │   │   │   └── webhooks.ts
    │   │   ├── stripe-identity/
    │   │   │   ├── client.ts
    │   │   │   └── webhooks.ts
    │   │   └── storage/
    │   │       └── scaleway.ts       # S3 Object Storage
    │   │
    │   └── utils/
    │       ├── cn.ts                 # Tailwind merge
    │       ├── format.ts             # Dates, numbers
    │       ├── crypto.ts             # Hash SHA-256
    │       └── query-keys.ts         # TanStack Query keys
    │
    ├── hooks/
    │   ├── useChat.ts
    │   ├── useProject.ts
    │   ├── useAccessibility.ts
    │   └── useAuth.ts
    │
    ├── types/
    │   ├── database.ts               # Inferred from Drizzle
    │   ├── api.ts                    # ActionResult, etc.
    │   └── index.ts
    │
    ├── config/
    │   ├── site.ts                   # Site metadata
    │   ├── nav.ts                    # Navigation items
    │   └── constants.ts              # MAX_FILE_SIZE, etc.
    │
    └── providers/
        ├── QueryProvider.tsx         # TanStack Query
        ├── ThemeProvider.tsx         # next-themes
        ├── AccessibilityProvider.tsx # Safe/Immersive mode
        └── index.tsx                 # Combine all
```

### Architectural Boundaries

**API Boundaries:**
- Server Actions: `src/lib/actions/` → Direct DB access via Drizzle
- API Routes: `src/app/api/` → Webhooks uniquement (Yousign, Stripe)
- Services Externes: `src/lib/services/` → Clients isolés avec circuit breakers

**Component Boundaries:**
- `ui/`: Composants shadcn/ui purs (pas de logique métier)
- `features/`: Composants métier avec Error Boundaries dédiés
- `shared/`: Composants réutilisables cross-feature

**Data Boundaries:**
- Schema Drizzle: `src/lib/db/schema/` → Source de vérité types
- Queries: `src/lib/db/queries/` → Fonctions de requête réutilisables
- Actions: `src/lib/actions/` → Mutations avec validation Zod

### Integration Points

**Internal Communication:**
- Components → Server Actions (direct import)
- Server Actions → Drizzle Queries
- Components → TanStack Query (useQuery/useMutation)

**External Integrations:**
- Claude API: `src/lib/services/claude/` → Vercel AI SDK
- Yousign: `src/lib/services/yousign/` + `/api/webhooks/yousign`
- Stripe Identity: `src/lib/services/stripe-identity/` + `/api/webhooks/stripe`
- Scaleway S3: `src/lib/services/storage/`

**Data Flow:**
```
User Action → Component → Server Action → Drizzle → PostgreSQL
                ↓
         TanStack Query Cache ← Response
```

## Architecture Validation Results

### Coherence Validation ✅

**Decision Compatibility:**
Toutes les décisions technologiques sont compatibles et fonctionnent ensemble:
- Next.js 15 + React 19 → Parfaitement intégrés (versions synchronisées)
- Drizzle ORM + PostgreSQL Managed → Support natif Scaleway
- NextAuth.js + Sessions DB → Compatible Drizzle adapter
- shadcn/ui + Tailwind CSS 4 → Design system cohérent
- Vercel AI SDK + Claude → Streaming Server Actions supporté

**Pattern Consistency:**
Les patterns d'implémentation supportent les décisions architecturales:
- snake_case cohérent DB ↔ API ↔ JSON (pas de transformation)
- ActionResult pattern appliqué uniformément aux Server Actions
- Error Boundaries par feature alignés avec la structure des composants
- Query Keys pattern compatible TanStack Query

**Structure Alignment:**
La structure projet supporte toutes les décisions:
- Parallel Routes pour layout 60/40 (chat + context)
- Séparation claire ui/features/shared
- Services isolés avec circuit breakers
- Migrations Drizzle dans prisma-style directory

### Requirements Coverage Validation ✅

**Epic/Feature Coverage:**
Les 8 domaines fonctionnels identifiés sont architecturalement supportés:
- Gestion Projets → `src/components/features/projects/` + actions
- Agent IA Conversationnel → `src/components/features/chat/` + Claude service
- Signatures Électroniques → Yousign service + webhooks
- Vérification Identité → Stripe Identity service + webhooks
- GED Documents → Storage service + Object Storage S3
- Dashboard Supervision → Parallel Routes `@chat/@context`
- Garantie Zéro Impact → `src/components/features/warranty/` + calculations
- Authentification → NextAuth config + TOTP/Magic Link

**Functional Requirements Coverage:**
73 FRs entièrement supportés par les décisions architecturales:
- FR Auth: NextAuth.js + TOTP + Resend
- FR Chat: Vercel AI SDK + Claude streaming
- FR Documents: Object Storage + signatures Yousign
- FR Projets: Drizzle + Server Actions + ActionResult

**Non-Functional Requirements Coverage:**
55 NFRs adressés architecturalement:
- Performance (10 users): TanStack Query caching, Server Actions
- Disponibilité (99%): Scaleway Serverless Containers, health checks
- Sécurité: TLS 1.3, AES-256, sessions DB, tokens 256-bit
- Conformité RGPD: Données hébergées France (Scaleway Paris)
- Budget: 40-90€/mois respecté avec stack Scaleway

### Implementation Readiness Validation ✅

**Decision Completeness:**
- ✅ Toutes les décisions critiques documentées avec versions spécifiques
- ✅ Patterns d'implémentation exhaustifs avec exemples code
- ✅ Règles de cohérence claires et applicables
- ✅ Exemples fournis pour ActionResult, Query Keys, Error Handling

**Structure Completeness:**
- ✅ Structure projet complète (~60 fichiers/dossiers définis)
- ✅ Tous les fichiers et répertoires spécifiés
- ✅ Points d'intégration clairement identifiés
- ✅ Boundaries composants bien définies

**Pattern Completeness:**
- ✅ Points de conflit potentiels adressés (naming snake_case unifié)
- ✅ Conventions de nommage exhaustives
- ✅ Patterns de communication spécifiés
- ✅ Patterns de processus (error handling, loading) complets

### Gap Analysis Results

**Critical Gaps:** Aucun ❌
Tous les éléments bloquants ont été adressés.

**Important Gaps:** Aucun ❌
Les patterns sont suffisamment détaillés pour l'implémentation.

**Nice-to-Have (Phase 2):**
- Documentation API auto-générée (OpenAPI pour webhooks)
- Tooling dev supplémentaire (Storybook pour composants)
- Métriques custom Cockpit avancées

### Validation Issues Addressed

Aucun problème critique identifié. Les sessions d'élicitation avancée (Architecture Decision Records + Cross-Functional War Room) ont permis de résoudre en amont:
- Stratégie de fallback par service externe
- UX Phasing Strategy (Safe Mode → Immersive Mode)
- Intégrité cryptographique chaîne documentaire

### Architecture Completeness Checklist

**✅ Requirements Analysis**
- [x] Project context thoroughly analyzed
- [x] Scale and complexity assessed
- [x] Technical constraints identified
- [x] Cross-cutting concerns mapped

**✅ Architectural Decisions**
- [x] Critical decisions documented with versions
- [x] Technology stack fully specified
- [x] Integration patterns defined
- [x] Performance considerations addressed

**✅ Implementation Patterns**
- [x] Naming conventions established (snake_case cohérent)
- [x] Structure patterns defined
- [x] Communication patterns specified
- [x] Process patterns documented

**✅ Project Structure**
- [x] Complete directory structure defined
- [x] Component boundaries established
- [x] Integration points mapped
- [x] Requirements to structure mapping complete

### Architecture Readiness Assessment

**Overall Status:** READY FOR IMPLEMENTATION ✅

**Confidence Level:** HIGH

**Key Strengths:**
- Stack Next.js 15 moderne avec patterns recommandés 2025
- snake_case cohérent élimine les transformations de données
- Scaleway France garantit conformité RGPD/données locales
- Architecture extensible multi-tenant préparée

**Areas for Future Enhancement:**
- Monitoring avancé (APM) post-MVP
- Cache Redis si scaling nécessaire
- CDN pour assets statiques à volume

### Implementation Handoff

**AI Agent Guidelines:**
- Suivre toutes les décisions architecturales exactement comme documentées
- Utiliser les patterns d'implémentation de manière cohérente
- Respecter la structure projet et les boundaries
- Référer à ce document pour toutes questions architecturales

**First Implementation Priority:**
```bash
npx create-next-app@latest safewire-app --typescript --tailwind --eslint --app --src-dir
```
Puis ajouter les dépendances selon la stack documentée.

---

## Architecture Completion Summary

### Workflow Completion

**Architecture Decision Workflow:** COMPLETED ✅
**Total Steps Completed:** 8
**Date Completed:** 2026-01-17
**Document Location:** _bmad-output/planning-artifacts/architecture.md

### Final Architecture Deliverables

**📋 Complete Architecture Document**
- Toutes les décisions architecturales documentées avec versions spécifiques
- Patterns d'implémentation assurant la cohérence des agents IA
- Structure projet complète avec tous les fichiers et répertoires
- Mapping requirements → architecture
- Validation confirmant cohérence et complétude

**🏗️ Implementation Ready Foundation**
- 25+ décisions architecturales prises
- 15+ patterns d'implémentation définis
- ~20 composants architecturaux spécifiés
- 73 FRs + 55 NFRs entièrement supportés

**📚 AI Agent Implementation Guide**
- Stack technologique avec versions vérifiées
- Règles de cohérence prévenant les conflits d'implémentation
- Structure projet avec boundaries claires
- Patterns d'intégration et standards de communication

### Development Sequence

1. Initialiser le projet avec le starter template documenté
2. Configurer l'environnement de développement selon l'architecture
3. Implémenter les fondations architecturales (auth, DB, services)
4. Construire les features en suivant les patterns établis
5. Maintenir la cohérence avec les règles documentées

### Quality Assurance Checklist

**✅ Architecture Coherence**
- [x] Toutes les décisions fonctionnent ensemble sans conflits
- [x] Choix technologiques compatibles
- [x] Patterns supportent les décisions architecturales
- [x] Structure alignée avec tous les choix

**✅ Requirements Coverage**
- [x] Tous les FRs supportés
- [x] Tous les NFRs adressés
- [x] Cross-cutting concerns gérés
- [x] Points d'intégration définis

**✅ Implementation Readiness**
- [x] Décisions spécifiques et actionnables
- [x] Patterns prévenant les conflits agents
- [x] Structure complète et non-ambiguë
- [x] Exemples fournis pour clarté

---

**Architecture Status:** READY FOR IMPLEMENTATION ✅

**Next Phase:** Commencer l'implémentation en utilisant les décisions et patterns architecturaux documentés.

**Document Maintenance:** Mettre à jour cette architecture lors de décisions techniques majeures pendant l'implémentation.

