# Story 0.3: Setup CI/CD Pipeline

Status: completed

## Story

As a **developer**,
I want **to configure GitHub Actions for continuous integration and deployment**,
so that **code is automatically tested and deployed on push**.

## Acceptance Criteria

1. **AC1**: GitHub Actions runs lint checks (`npm run lint`)
2. **AC2**: GitHub Actions runs type checks (`npm run typecheck`)
3. **AC3**: GitHub Actions runs unit tests (`npm run test`)
4. **AC4**: On success, a Docker image is built and pushed to Scaleway Container Registry
5. **AC5**: The image is deployed to Scaleway Serverless Containers
6. **AC6**: Deployment uses zero-downtime strategy
7. **AC7**: Secrets are stored in GitHub Secrets (not in code)
8. **AC8**: Workflow files are in `.github/workflows/`

## Tasks / Subtasks

- [x] Task 1: Create CI workflow for testing (AC: 1, 2, 3, 8)
  - [x] Create `.github/workflows/ci.yml`
  - [x] Configure Node.js 20 setup with pnpm/npm caching
  - [x] Add steps: install dependencies, lint, typecheck, test
  - [x] Configure workflow triggers: push to main, pull requests

- [x] Task 2: Create Dockerfile for production build (AC: 4)
  - [x] Create multi-stage `Dockerfile` in `safewire-app/`
  - [x] Stage 1: Install dependencies
  - [x] Stage 2: Build Next.js application
  - [x] Stage 3: Production runtime (minimal image)
  - [x] Configure proper environment variables handling

- [x] Task 3: Create CD workflow for deployment (AC: 4, 5, 6, 8)
  - [x] Create `.github/workflows/deploy.yml`
  - [x] Build and tag Docker image with commit SHA
  - [x] Push to Scaleway Container Registry (`rg.fr-par.scw.cloud/safewire`)
  - [x] Deploy to Scaleway Serverless Containers
  - [x] Configure health check for zero-downtime

- [x] Task 4: Configure GitHub Secrets (AC: 7)
  - [x] MANUAL: Create secrets in GitHub repository settings
  - [x] Required secrets: `SCW_ACCESS_KEY`, `SCW_SECRET_KEY`, `SCW_CONTAINER_ID`
  - [x] Required secrets: `DATABASE_URL` (production connection string)
  - [x] Required secrets: `NEXTAUTH_SECRET`, `NEXTAUTH_URL`
  - [x] Document all required secrets in workflow files

- [x] Task 5: Test and verify pipeline (AC: 1-8)
  - [x] Push a test commit to verify CI runs
  - [x] Verify all checks pass (lint, typecheck, test)
  - [x] Verify Docker image is built successfully
  - [x] Verify deployment to Scaleway works
  - [x] Test zero-downtime by monitoring during deploy

## Dev Notes

### Scaleway Serverless Containers Setup

**Deployment Target:**
- Scaleway Serverless Containers (fr-par region)
- Container Registry: `rg.fr-par.scw.cloud/safewire`
- Image naming: `safewire-app:${COMMIT_SHA}`

**Zero-Downtime Strategy:**
- Scaleway Serverless Containers supports rolling updates by default
- Health check endpoint required: `/api/health` or similar
- New container starts before old one stops

**Deployment via scw CLI:**
```bash
# Install Scaleway CLI
curl -s https://raw.githubusercontent.com/scaleway/scaleway-cli/master/scripts/get.sh | sh

# Login with access key
scw init access-key=$SCW_ACCESS_KEY secret-key=$SCW_SECRET_KEY

# Deploy container
scw container container update \
  --region fr-par \
  --container-id $CONTAINER_ID \
  --image $SCW_REGISTRY/safewire-app:$COMMIT_SHA
```

### GitHub Actions Configuration

**CI Workflow Triggers:**
```yaml
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]
```

**Environment Secrets Required:**
| Secret | Description |
|--------|-------------|
| `SCW_ACCESS_KEY` | Scaleway IAM access key |
| `SCW_SECRET_KEY` | Scaleway IAM secret key |
| `SCW_REGISTRY` | Registry endpoint (rg.fr-par.scw.cloud/safewire) |
| `DATABASE_URL` | Production PostgreSQL connection string |
| `NEXTAUTH_SECRET` | Auth.js session encryption key |
| `NEXTAUTH_URL` | Production URL (https://app.safewire.fr) |

### Dockerfile Multi-Stage Pattern

```dockerfile
# Stage 1: Dependencies
FROM node:20-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

# Stage 2: Build
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Stage 3: Production
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public
EXPOSE 3000
CMD ["node", "server.js"]
```

**Next.js Standalone Build:**
- Requires `output: 'standalone'` in `next.config.js`
- Produces minimal server bundle (~100MB vs ~500MB)
- Self-contained - no need to copy node_modules

### Project Structure Notes

**Files to Create:**
- `.github/workflows/ci.yml` - CI workflow
- `.github/workflows/deploy.yml` - CD workflow
- `safewire-app/Dockerfile` - Production container

**Files to Modify:**
- `safewire-app/next.config.ts` - Add `output: 'standalone'`

### Naming Conventions (CRITICAL)

Per project-context.md:
- Workflow files: kebab-case (`ci.yml`, `deploy.yml`)
- Environment variables: SCREAMING_SNAKE_CASE
- GitHub Secrets match env var names exactly

### Testing Notes

- CI should run on every PR and push to main
- Tests must pass before merge is allowed
- Docker build should be tested locally first: `docker build -t safewire-app .`

### Previous Story Learnings

From Story 0.2:
- Scaleway credentials are stored in env.mjs with Zod validation
- Storage client uses lazy initialization pattern
- DATABASE_URL validation prevents startup without config

### References

- [Source: epics.md#Story 0.3: Setup CI/CD Pipeline]
- [Source: project-context.md#Technology Stack & Versions]
- [Source: .env.example#Scaleway Container Registry]
- [Scaleway Serverless Containers Docs](https://www.scaleway.com/en/docs/serverless/containers/)
- [GitHub Actions Docs](https://docs.github.com/en/actions)
- [Next.js Standalone Output](https://nextjs.org/docs/pages/api-reference/next-config-js/output)

## Dev Agent Record

### Agent Model Used

Claude Opus 4.5 (claude-opus-4-5-20251101)

### Debug Log References

None

### Completion Notes List

1. CI workflow created with lint, typecheck, and test steps
2. Docker multi-stage build with Next.js standalone output (~100MB image)
3. CD workflow deploys to Scaleway Serverless Containers
4. Lazy initialization pattern used for database and Stripe to allow build without runtime env vars
5. `export const dynamic = 'force-dynamic'` added to API routes for SSG compatibility
6. GitHub secrets configured via `gh secret set` command
7. Scaleway resources created: Container Registry namespace, Serverless Container, Database user
8. Health endpoint at `/api/health` returns `{"status":"healthy",...}`

**Deployed Application URL:** https://safewirewigqehem-safewire-app.functions.fnc.fr-par.scw.cloud

### File List

**Created:**
- `.github/workflows/ci.yml` - CI workflow (lint, typecheck, test)
- `.github/workflows/deploy.yml` - CD workflow (build, push, deploy)
- `safewire-app/Dockerfile` - Multi-stage production Docker image
- `safewire-app/.dockerignore` - Docker build exclusions
- `safewire-app/src/app/api/health/route.ts` - Health check endpoint

**Modified:**
- `safewire-app/next.config.ts` - Added `output: "standalone"`
- `safewire-app/src/env.mjs` - Made Stripe/OAuth vars optional, added skipValidation
- `safewire-app/src/lib/schema.ts` - Lazy database initialization with getDb()
- `safewire-app/src/lib/stripe.ts` - Lazy Stripe client initialization
- `safewire-app/src/lib/auth.ts` - Conditional adapter for build compatibility
- `safewire-app/src/lib/site-config.ts` - Updated branding to SAFEWIRE
- `safewire-app/src/app/api/auth/[...nextauth]/route.ts` - Added dynamic export
- `safewire-app/src/app/api/stripe/webhook/route.ts` - Added dynamic export, use getDb()

---

_Story created: 2026-01-17 | Completed: 2026-01-17 | Epic: 0 - Foundation & Infrastructure Setup_
