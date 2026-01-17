---
stepsCompleted: [1, 2, 3, 4]
inputDocuments:
  - '_bmad-output/planning-artifacts/prd.md'
  - '_bmad-output/planning-artifacts/architecture.md'
  - '_bmad-output/planning-artifacts/ux-design-specification.md'
workflowType: 'epics'
status: 'complete'
lastStep: 4
project_name: 'IOT START SAFEWIRE'
user_name: 'jean claude'
date: '2026-01-17'
epic_count: 11
fr_count: 73
nfr_count: 55
story_count: 78
validation_passed: true
ready_for_development: true
---

# IOT START SAFEWIRE - Epic Breakdown

## Overview

This document provides the complete epic and story breakdown for IOT START SAFEWIRE, decomposing the requirements from the PRD, UX Design, and Architecture requirements into implementable stories.

## Requirements Inventory

### Functional Requirements

**Agent IA & Automatisation (FR1-FR12)**

- **FR1:** L'Agent IA peut recevoir et parser automatiquement les emails entrants (factures, devis, documents)
- **FR2:** L'Agent IA peut catégoriser automatiquement les documents selon les catégories budgétaires
- **FR3:** L'Agent IA peut générer des alertes prédictives basées sur l'analyse des tendances
- **FR4:** L'Agent IA peut produire des comparatifs automatiques entre plusieurs devis
- **FR5:** L'Agent IA peut générer des rapports de santé projet hebdomadaires
- **FR6:** L'Agent IA peut suggérer des actions correctives aux utilisateurs
- **FR7:** Le MOE peut activer le Mode Supervision Active pour prévisualiser les actions IA avant envoi
- **FR8:** L'Agent IA peut détecter les écarts significatifs et alerter avant validation
- **FR9:** L'Agent IA peut versionner automatiquement les documents mis à jour
- **FR10:** L'utilisateur peut interagir avec le Chat IA pour rédiger des consultations
- **FR11:** L'utilisateur peut demander au Chat IA une analyse de conformité d'un document
- **FR12:** Le système peut fonctionner en mode dégradé si les services externes sont indisponibles

**Gestion Documentaire GED (FR13-FR21)**

- **FR13:** L'utilisateur peut uploader des documents sur la plateforme
- **FR14:** Le système peut versionner automatiquement les documents modifiés
- **FR15:** Le MOE peut définir un circuit de validation pour un document
- **FR16:** Le validateur peut approuver ou rejeter un document en attente
- **FR17:** L'utilisateur peut signer électroniquement un document via Yousign
- **FR18:** Le fabricant peut télécharger les documents auxquels il a accès
- **FR19:** Le système peut appliquer un watermark invisible sur les PDF confidentiels
- **FR20:** L'utilisateur peut consulter l'historique des versions d'un document
- **FR21:** Le système peut archiver les documents signés au format PDF/A-3

**Suivi Projet Earned Value (FR22-FR28)**

- **FR22:** L'utilisateur peut visualiser le planning Gantt avec les jalons
- **FR23:** L'utilisateur peut visualiser la consommation budgétaire par catégorie
- **FR24:** Le système peut afficher une vue unifiée Gantt + Budget (Earned Value)
- **FR25:** L'utilisateur peut voir les projections de fin de projet
- **FR26:** Le système peut calculer et afficher les écarts avancement vs coût
- **FR27:** Le MOA peut valider un ajustement de planning proposé par l'Agent IA
- **FR28:** L'utilisateur peut configurer les seuils d'alerte par métrique

**Gestion Budgétaire (FR29-FR35)**

- **FR29:** Le MOE peut créer et gérer les catégories budgétaires
- **FR30:** Le MOE peut saisir manuellement une dépense
- **FR31:** Le système peut importer automatiquement les factures depuis l'email
- **FR32:** Le MOA peut valider ou rejeter une dépense
- **FR33:** Le MOA peut valider une dépense en un clic depuis un magic link
- **FR34:** L'utilisateur peut consulter l'historique des dépenses par catégorie
- **FR35:** Le système peut alerter quand un seuil budgétaire est atteint

**Accès & Sécurité (FR36-FR44)**

- **FR36:** L'Admin peut inviter un utilisateur avec un rôle spécifique
- **FR37:** L'utilisateur interne peut s'authentifier par email + MFA
- **FR38:** L'utilisateur externe peut accéder via magic link sans créer de compte
- **FR39:** Le fabricant/investisseur peut vérifier son identité via Stripe Identity
- **FR40:** Le système peut régénérer automatiquement un magic link expiré sur demande
- **FR41:** L'Admin peut définir les permissions par rôle et par document
- **FR42:** Le système peut cloisonner les accès entre fabricants concurrents
- **FR43:** L'utilisateur peut consulter ses propres traces d'accès
- **FR44:** L'Admin peut consulter l'audit trail complet des accès

**Communication & Notifications (FR45-FR50)**

- **FR45:** L'Agent IA peut envoyer des notifications par email
- **FR46:** L'utilisateur peut recevoir des notifications push
- **FR47:** L'investisseur peut recevoir un rapport hebdomadaire automatique
- **FR48:** Le fabricant peut recevoir un accusé de réception automatique après soumission
- **FR49:** Le système peut envoyer des emails sobres sans branding excessif
- **FR50:** L'utilisateur peut choisir ses préférences de notification

**Formulaires & Onboarding (FR51-FR55)**

- **FR51:** Le fabricant peut remplir et soumettre un formulaire de réponse à consultation
- **FR52:** L'utilisateur peut signer un NDA électroniquement
- **FR53:** L'utilisateur peut donner son consentement RGPD
- **FR54:** Le système peut afficher le comportement deadline (soumission hors délai)
- **FR55:** L'investisseur peut activer le Mode Expert après plusieurs visites

**Administration & Configuration (FR56-FR62)**

- **FR56:** L'Admin peut créer un nouveau projet via wizard guidé
- **FR57:** L'Admin peut importer un planning existant (Excel/MS Project)
- **FR58:** L'Admin peut configurer les seuils d'alerte de l'Agent IA
- **FR59:** L'Admin peut utiliser le template SAFEWIRE pré-configuré
- **FR60:** L'Admin peut personnaliser les dashboards par profil
- **FR61:** L'Admin peut pré-entraîner l'Agent IA avec le contexte projet
- **FR62:** L'Admin peut monitorer le health check des services externes

**Internationalisation & Interface (FR63-FR68)**

- **FR63:** L'utilisateur peut choisir la langue de l'interface (FR/EN)
- **FR64:** Le système peut afficher tous les contenus UI en français
- **FR65:** Le système peut afficher tous les contenus UI en anglais
- **FR66:** L'Agent IA peut générer ses réponses dans la langue préférée de l'utilisateur
- **FR67:** Les emails et notifications peuvent être envoyés dans la langue préférée
- **FR68:** Les templates de documents peuvent exister en versions FR et EN

**Conformité & RGPD (FR69-FR73)**

- **FR69:** L'utilisateur peut demander l'export de ses données personnelles
- **FR70:** L'utilisateur peut demander la suppression de ses données (droit à l'oubli)
- **FR71:** Le système peut fournir l'explication du raisonnement IA sur demande
- **FR72:** L'Admin peut consulter le registre des traitements RGPD
- **FR73:** Le système peut appliquer les durées de rétention différenciées

### Non-Functional Requirements

**Performance (NFR-P1 à NFR-P9)**

| ID | Exigence | Cible |
|----|----------|-------|
| NFR-P1 | Temps de réponse pages standard | < 500ms (P95) |
| NFR-P2 | Largest Contentful Paint (LCP) | < 2.5s |
| NFR-P3 | First Input Delay (FID) | < 100ms |
| NFR-P4 | Cumulative Layout Shift (CLS) | < 0.1 |
| NFR-P5 | Time to Interactive (TTI) | < 3s |
| NFR-P6 | Réponse API backend | < 500ms (P95) |
| NFR-P7 | Réponse Agent IA (Chat) | < 10s premier token |
| NFR-P8 | Rendu magic link page | < 1s |
| NFR-P9 | Utilisateurs simultanés supportés | 10 minimum |

**Sécurité (NFR-S1 à NFR-S10)**

| ID | Exigence | Implémentation |
|----|----------|----------------|
| NFR-S1 | Chiffrement en transit | TLS 1.3 obligatoire |
| NFR-S2 | Chiffrement au repos | AES-256 |
| NFR-S3 | Magic links | 256 bits, expiration 24h, usage unique |
| NFR-S4 | Authentification MFA | Obligatoire utilisateurs internes |
| NFR-S5 | Vérification identité externe | Stripe Identity avant accès docs sensibles |
| NFR-S6 | Cloisonnement données | Fabricants ne voient que leurs documents |
| NFR-S7 | Audit trail immuable | Toutes actions horodatées, non modifiables |
| NFR-S8 | Protection injection | Sanitization inputs, guardrails prompt IA |
| NFR-S9 | Rate limiting API | Limites par utilisateur/IP |
| NFR-S10 | WAF actif | Protection attaques courantes |

**Fiabilité & Disponibilité (NFR-R1 à NFR-R8)**

| ID | Exigence | Cible |
|----|----------|-------|
| NFR-R1 | Disponibilité globale | 99% (8.76h downtime/an max) |
| NFR-R2 | Mode dégradé Claude API | Fonctions core maintenues |
| NFR-R3 | Mode dégradé Yousign | Signatures en file d'attente |
| NFR-R4 | Mode dégradé Stripe Identity | Vérifications en file d'attente |
| NFR-R5 | Backup données | Quotidien, chiffré, testé mensuellement |
| NFR-R6 | Health check Agent IA | Monitoring externe indépendant |
| NFR-R7 | Recovery Time Objective (RTO) | < 4h |
| NFR-R8 | Recovery Point Objective (RPO) | < 24h (dernier backup) |

**Accessibilité (NFR-A1 à NFR-A8)**

| ID | Exigence | Standard |
|----|----------|----------|
| NFR-A1 | Conformité globale | WCAG 2.1 niveau AA |
| NFR-A2 | Contraste texte | 4.5:1 minimum |
| NFR-A3 | Contraste éléments UI | 3:1 minimum |
| NFR-A4 | Navigation clavier | Tab order logique, focus visible |
| NFR-A5 | Compatibilité lecteurs écran | ARIA landmarks, labels |
| NFR-A6 | Touch targets mobile | 44x44px minimum |
| NFR-A7 | Animations | Respect prefers-reduced-motion |
| NFR-A8 | Formulaires | Labels associés, erreurs accessibles |

**Intégration & Interopérabilité (NFR-I1 à NFR-I7)**

| ID | Exigence | Service |
|----|----------|---------|
| NFR-I1 | Intégration Claude API | Timeout 30s, retry 3x |
| NFR-I2 | Intégration Yousign | Webhook confirmation, retry |
| NFR-I3 | Intégration Stripe Identity | Webhook confirmation, retry |
| NFR-I4 | Parsing email entrant | Traitement < 5min |
| NFR-I5 | Export données RGPD | JSON/CSV < 30 jours |
| NFR-I6 | Import planning externe | Excel, MS Project supportés |
| NFR-I7 | Streaming SSE | Connexion stable, reconnexion auto |

**Conformité & Légal (NFR-C1 à NFR-C8)**

| ID | Exigence | Réglementation |
|----|----------|----------------|
| NFR-C1 | Conformité RGPD | RGPD EU |
| NFR-C2 | Registre traitements | Art. 30 RGPD |
| NFR-C3 | Droit à l'oubli | Art. 17 RGPD < 30 jours |
| NFR-C4 | Portabilité données | Art. 20 RGPD |
| NFR-C5 | Signatures eIDAS | Règlement eIDAS |
| NFR-C6 | Conservation documents signés | 10 ans, PDF/A-3 |
| NFR-C7 | Hébergement données | Scaleway France/EU uniquement |
| NFR-C8 | Pas de décision auto Art.22 | Humain dans la boucle |

**Maintenabilité & Opérations (NFR-M1 à NFR-M5)**

| ID | Exigence | Cible |
|----|----------|-------|
| NFR-M1 | Logs centralisés | Tous services, temps réel |
| NFR-M2 | Monitoring applicatif | Métriques clés dashboard |
| NFR-M3 | Alerting | Notification < 5min |
| NFR-M4 | Déploiement | Zero-downtime CI/CD |
| NFR-M5 | Rollback | < 15min procédure testée |

### Additional Requirements

**From Architecture Document**

**Starter Template (Critical for Epic 1 Story 1)**
- Template sélectionné: **Next Starter (Skolaczk)**
- Commande d'initialisation: `npx degit Skolaczk/next-starter safewire-app`
- Inclut: shadcn/ui + Drizzle ORM + NextAuth.js + Tests (Jest + Playwright)

**Technical Stack & Versions**
- Next.js 15 (App Router)
- React 19
- TypeScript 5 strict mode
- Drizzle ORM (PostgreSQL)
- NextAuth.js (TOTP + Magic Link)
- Tailwind CSS 4 + shadcn/ui
- TanStack Query (server state)
- Vercel AI SDK (Claude streaming)

**Infrastructure**
- Hébergement: Scaleway Serverless Containers
- Base de données: PostgreSQL Managed Scaleway
- Storage: Scaleway Object Storage (S3-compatible)
- CI/CD: GitHub Actions
- Monitoring: Scaleway Cockpit + Sentry

**Naming Conventions (Critical)**
- snake_case: DB columns, API params, JSON keys, Server Action names
- PascalCase: Components, Types, Interfaces, Enums
- camelCase: Variables, functions, hooks
- SCREAMING_SNAKE: Constants

**Patterns obligatoires**
- ActionResult pattern pour tous les Server Actions
- Error Boundaries par feature
- Query Keys factory pour TanStack Query
- Tests co-located avec les fichiers source

**From UX Design Specification**

**Design System**
- shadcn/ui + Tailwind CSS (Radix Primitives)
- Dark Mode par défaut
- Safe Mode par défaut (pas de glassmorphism, animations réduites)
- Support prefers-reduced-motion

**Custom Components à développer**
1. ChatBubble - Messages Agent IA/utilisateur
2. StreamingText - Réponses IA progressives
3. HealthScore - Widget santé projet (64x64px min)
4. MagicLinkLayout - Layout ultra-simplifié externes
5. SplitLayout - Layout 60/40 internes
6. FocusModeCard - Décision urgente mobile
7. CommandPalette - Extension shadcn/ui Command
8. SupervisionModal - Preview avant envoi externe

**Layout Strategy**
- Internes (Sophie, Marc desktop): Split 60/40 (Chat IA 60% + Dashboard 40%)
- Externes (Pierre, Claire): Magic Link full-screen
- Mobile (Marc alertes): Focus Mode

**Responsive Breakpoints**
- Mobile (<768px): Stack vertical, magic link full
- Tablet (768-1023px): Split toggle visible
- Desktop (1024px+): Split 60/40, Cmd+K activé

**Accessibility**
- WCAG 2.1 AA compliance
- Contraste: 18.1:1 (#EDEDED/#050505)
- Touch targets: 44x44px minimum (48px CTA externes)
- Focus visible: ring-2 ring-accent-business ring-offset-2

**Color System (Dark Mode)**
- Background primary: #050505
- Background elevated: #0A0A0A
- Text primary: #EDEDED
- Text secondary: #A0A0A0
- Accent IA: #00D1FF (cyan)
- Accent business: #3B82F6 (blue)
- Success: #10B981 (green)
- Warning: #F59E0B (amber)
- Error: #EF4444 (red)

### FR Coverage Map

| FR | Epic | Description |
|----|------|-------------|
| FR1 | Epic 5 | Agent IA - Parsing emails entrants |
| FR2 | Epic 5 | Agent IA - Catégorisation automatique documents |
| FR3 | Epic 5 | Agent IA - Alertes prédictives tendances |
| FR4 | Epic 5 | Agent IA - Comparatifs devis automatiques |
| FR5 | Epic 5 | Agent IA - Rapports santé hebdomadaires |
| FR6 | Epic 5 | Agent IA - Suggestions actions correctives |
| FR7 | Epic 5 | Agent IA - Mode Supervision Active |
| FR8 | Epic 5 | Agent IA - Détection écarts significatifs |
| FR9 | Epic 5 | Agent IA - Versioning auto documents |
| FR10 | Epic 5 | Agent IA - Chat rédaction consultations |
| FR11 | Epic 5 | Agent IA - Analyse conformité documents |
| FR12 | Epic 5 | Agent IA - Mode dégradé services externes |
| FR13 | Epic 2 | GED - Upload documents |
| FR14 | Epic 2 | GED - Versioning automatique |
| FR15 | Epic 2 | GED - Circuit validation MOE |
| FR16 | Epic 2 | GED - Approbation/rejet documents |
| FR17 | Epic 2 | GED - Signature électronique Yousign |
| FR18 | Epic 2 | GED - Téléchargement fabricants |
| FR19 | Epic 2 | GED - Watermark invisible PDF |
| FR20 | Epic 2 | GED - Historique versions |
| FR21 | Epic 2 | GED - Archivage PDF/A-3 |
| FR22 | Epic 4 | Earned Value - Planning Gantt |
| FR23 | Epic 4 | Earned Value - Consommation budget |
| FR24 | Epic 4 | Earned Value - Vue unifiée Gantt+Budget |
| FR25 | Epic 4 | Earned Value - Projections fin projet |
| FR26 | Epic 4 | Earned Value - Écarts avancement/coût |
| FR27 | Epic 4 | Earned Value - Validation ajustement MOA |
| FR28 | Epic 4 | Earned Value - Configuration seuils alerte |
| FR29 | Epic 3 | Budget - Catégories budgétaires |
| FR30 | Epic 3 | Budget - Saisie manuelle dépenses |
| FR31 | Epic 3 | Budget - Import factures email |
| FR32 | Epic 3 | Budget - Validation/rejet MOA |
| FR33 | Epic 3 | Budget - Validation magic link |
| FR34 | Epic 3 | Budget - Historique dépenses |
| FR35 | Epic 3 | Budget - Alertes seuils |
| FR36 | Epic 1 | Auth - Invitation utilisateur par Admin |
| FR37 | Epic 1 | Auth - Authentification email + MFA |
| FR38 | Epic 1 | Auth - Accès magic link externes |
| FR39 | Epic 7 | External - Vérification Stripe Identity |
| FR40 | Epic 1 | Auth - Régénération magic link |
| FR41 | Epic 1 | Auth - Permissions par rôle/document |
| FR42 | Epic 1 | Auth - Cloisonnement fabricants |
| FR43 | Epic 1 | Auth - Traces accès utilisateur |
| FR44 | Epic 1 | Auth - Audit trail Admin |
| FR45 | Epic 6 | Notif - Email Agent IA |
| FR46 | Epic 6 | Notif - Push notifications |
| FR47 | Epic 6 | Notif - Rapport hebdo investisseur |
| FR48 | Epic 6 | Notif - Accusé réception fabricant |
| FR49 | Epic 6 | Notif - Emails sobres |
| FR50 | Epic 6 | Notif - Préférences utilisateur |
| FR51 | Epic 7 | External - Formulaire consultation |
| FR52 | Epic 7 | External - Signature NDA |
| FR53 | Epic 7 | External - Consentement RGPD |
| FR54 | Epic 7 | External - Comportement deadline |
| FR55 | Epic 7 | External - Mode Expert investisseur |
| FR56 | Epic 8 | Admin - Wizard création projet |
| FR57 | Epic 8 | Admin - Import planning externe |
| FR58 | Epic 8 | Admin - Configuration seuils IA |
| FR59 | Epic 8 | Admin - Template SAFEWIRE |
| FR60 | Epic 8 | Admin - Dashboards par profil |
| FR61 | Epic 8 | Admin - Pré-entraînement Agent IA |
| FR62 | Epic 8 | Admin - Health check services |
| FR63 | Epic 9 | i18n - Choix langue FR/EN |
| FR64 | Epic 9 | i18n - UI français |
| FR65 | Epic 9 | i18n - UI anglais |
| FR66 | Epic 9 | i18n - Réponses IA langue préférée |
| FR67 | Epic 9 | i18n - Emails langue préférée |
| FR68 | Epic 9 | i18n - Templates documents bilingues |
| FR69 | Epic 10 | RGPD - Export données personnelles |
| FR70 | Epic 10 | RGPD - Droit à l'oubli |
| FR71 | Epic 10 | RGPD - Explication raisonnement IA |
| FR72 | Epic 10 | RGPD - Registre traitements |
| FR73 | Epic 10 | RGPD - Rétention différenciée |

---

## Epic List

### Epic 0: Foundation & Infrastructure Setup

**Objectif:** Établir les fondations techniques du projet SAFEWIRE avec le starter template et l'infrastructure Scaleway.

**Valeur utilisateur:** L'équipe de développement peut commencer l'implémentation sur une base solide et conforme aux décisions architecturales.

**Contenu:**
- Initialisation du starter template Next.js (Skolaczk)
- Configuration Scaleway (Containers, PostgreSQL Managed, Object Storage)
- Setup CI/CD GitHub Actions
- Schéma Drizzle initial + migrations
- Configuration de base NextAuth.js
- Setup des design tokens Tailwind + shadcn/ui

**FRs couverts:** Aucun directement (prérequis technique pour tous les autres epics)

**NFRs adressés:** NFR-M1, NFR-M2, NFR-M3, NFR-M4, NFR-M5 (Maintenabilité)

---

### Epic 1: Authentication & User Access Control

**Objectif:** Permettre aux utilisateurs de s'authentifier et d'accéder à la plateforme selon leur rôle avec sécurité renforcée.

**Valeur utilisateur:** Les utilisateurs internes accèdent via MFA, les externes via magic links, tous ont des permissions adaptées à leur rôle.

**Contenu:**
- Authentification email + MFA (TOTP) pour internes
- Magic links 256 bits, expiration 24h, usage unique
- Système de rôles (Admin, MOA, MOE, Fabricant, Investisseur, Partenaire)
- Permissions par rôle et par document
- Cloisonnement accès fabricants concurrents
- Audit trail complet des accès
- Régénération magic links expirés

**FRs couverts:** FR36, FR37, FR38, FR40, FR41, FR42, FR43, FR44

**NFRs adressés:** NFR-S1, NFR-S2, NFR-S3, NFR-S4, NFR-S6, NFR-S7 (Sécurité)

---

### Epic 2: Document Management (GED)

**Objectif:** Permettre la gestion complète du cycle de vie des documents projet avec versioning, validation et signature.

**Valeur utilisateur:** Les utilisateurs peuvent uploader, versionner, valider et signer des documents avec traçabilité complète.

**Contenu:**
- Upload documents vers Scaleway Object Storage
- Versioning automatique avec historique
- Circuit de validation configurable par MOE
- Approbation/rejet par validateurs
- Intégration signature électronique Yousign (eIDAS)
- Accès sécurisé via signed URLs
- Watermark invisible sur PDF confidentiels
- Archivage format PDF/A-3

**FRs couverts:** FR13, FR14, FR15, FR16, FR17, FR18, FR19, FR20, FR21

**NFRs adressés:** NFR-I2, NFR-C5, NFR-C6 (Intégration Yousign, Conformité)

---

### Epic 3: Budget & Expense Management

**Objectif:** Permettre le suivi et la validation des dépenses projet par catégorie avec alertes automatiques.

**Valeur utilisateur:** Le MOE saisit les dépenses, le MOA valide en un clic, tous visualisent l'état budgétaire en temps réel.

**Contenu:**
- Création et gestion des catégories budgétaires (R&D, Fabrication, Certification, etc.)
- Saisie manuelle des dépenses par MOE
- Import automatique factures depuis email
- Validation/rejet des dépenses par MOA
- Validation express via magic link
- Historique des dépenses par catégorie
- Alertes seuils budgétaires (70%, 90%)

**FRs couverts:** FR29, FR30, FR31, FR32, FR33, FR34, FR35

**NFRs adressés:** NFR-P6 (Performance API)

---

### Epic 4: Project Tracking & Earned Value

**Objectif:** Visualiser l'avancement projet avec vue unifiée temps/budget et projections intelligentes.

**Valeur utilisateur:** Les utilisateurs voient le planning Gantt, le budget consommé, les écarts et les projections de fin de projet.

**Contenu:**
- Visualisation planning Gantt avec jalons
- Affichage consommation budgétaire par catégorie
- Vue unifiée Gantt + Budget (Earned Value)
- Calcul et affichage écarts avancement vs coût
- Projections de fin de projet avec intervalles de confiance
- Validation ajustements planning par MOA
- Configuration personnalisée des seuils d'alerte

**FRs couverts:** FR22, FR23, FR24, FR25, FR26, FR27, FR28

**NFRs adressés:** NFR-P1, NFR-P2, NFR-P3, NFR-P4, NFR-P5 (Performance Frontend)

---

### Epic 5: Agent IA Conversationnel

**Objectif:** Permettre l'interaction conversationnelle avec l'Agent IA pour automatiser et assister les tâches projet.

**Valeur utilisateur:** Les utilisateurs dialoguent avec l'IA pour rédiger, analyser, comparer et automatiser les tâches répétitives.

**Contenu:**
- Interface Chat IA avec streaming (Vercel AI SDK + Claude)
- Parsing automatique emails entrants (factures, devis)
- Catégorisation automatique documents
- Génération comparatifs devis automatiques
- Alertes prédictives basées sur tendances
- Suggestions actions correctives
- Mode Supervision Active (preview avant envoi)
- Rapports santé projet hebdomadaires
- Analyse conformité documents
- Mode dégradé si Claude API indisponible

**FRs couverts:** FR1, FR2, FR3, FR4, FR5, FR6, FR7, FR8, FR9, FR10, FR11, FR12

**NFRs adressés:** NFR-P7, NFR-I1, NFR-I7, NFR-R2, NFR-S8 (Performance IA, Intégration, Fiabilité)

---

### Epic 6: Notifications & Communication

**Objectif:** Informer les utilisateurs des événements importants via emails et notifications push.

**Valeur utilisateur:** Les utilisateurs reçoivent des alertes pertinentes, des rapports automatiques et peuvent personnaliser leurs préférences.

**Contenu:**
- Notifications par email (Agent IA)
- Notifications push (Push API + fallback email)
- Rapports hebdomadaires automatiques investisseurs
- Accusés de réception automatiques fabricants
- Emails sobres sans branding excessif
- Préférences de notification par utilisateur

**FRs couverts:** FR45, FR46, FR47, FR48, FR49, FR50

**NFRs adressés:** NFR-I4 (Traitement email)

---

### Epic 7: External User Experience (Magic Links & KYC)

**Objectif:** Permettre aux partenaires externes d'interagir avec la plateforme sans créer de compte.

**Valeur utilisateur:** Fabricants et investisseurs peuvent accéder, soumettre des offres et signer des documents en quelques clics.

**Contenu:**
- Layout Magic Link ultra-simplifié (Direction 06 UX)
- Vérification identité Stripe Identity (KYC)
- Formulaire réponse à consultation
- Signature NDA électronique
- Consentement RGPD
- Affichage comportement deadline (soumission hors délai)
- Mode Expert progressif après 4 visites (investisseurs)

**FRs couverts:** FR39, FR51, FR52, FR53, FR54, FR55

**NFRs adressés:** NFR-I3, NFR-S5, NFR-P8 (Intégration Stripe, Sécurité, Performance)

---

### Epic 8: Administration & Platform Configuration

**Objectif:** Permettre aux administrateurs de configurer et gérer la plateforme et les projets.

**Valeur utilisateur:** L'admin peut créer des projets via wizard, importer des plannings et configurer l'Agent IA.

**Contenu:**
- Wizard création nouveau projet
- Import planning existant (Excel, MS Project)
- Configuration seuils d'alerte Agent IA
- Template SAFEWIRE pré-configuré
- Personnalisation dashboards par profil
- Pré-entraînement Agent IA avec contexte projet
- Monitoring health check services externes

**FRs couverts:** FR56, FR57, FR58, FR59, FR60, FR61, FR62

**NFRs adressés:** NFR-I6, NFR-R6 (Import planning, Health check)

---

### Epic 9: Internationalization (FR/EN)

**Objectif:** Permettre l'utilisation de la plateforme en français et en anglais.

**Valeur utilisateur:** Les utilisateurs peuvent choisir leur langue préférée pour l'interface, les réponses IA et les communications.

**Contenu:**
- Sélection langue interface (FR/EN)
- Traduction complète UI français
- Traduction complète UI anglais
- Réponses Agent IA dans langue préférée
- Emails et notifications dans langue préférée
- Templates documents bilingues

**FRs couverts:** FR63, FR64, FR65, FR66, FR67, FR68

**NFRs adressés:** Aucun spécifique

---

### Epic 10: RGPD Compliance & Data Rights

**Objectif:** Assurer la conformité RGPD et permettre aux utilisateurs d'exercer leurs droits sur leurs données.

**Valeur utilisateur:** Les utilisateurs peuvent exporter leurs données, demander leur suppression et comprendre le raisonnement de l'IA.

**Contenu:**
- Export données personnelles (JSON/CSV)
- Droit à l'oubli (suppression sous 30 jours)
- Explication raisonnement IA sur demande
- Registre des traitements RGPD pour Admin
- Application durées de rétention différenciées

**FRs couverts:** FR69, FR70, FR71, FR72, FR73

**NFRs adressés:** NFR-C1, NFR-C2, NFR-C3, NFR-C4, NFR-C7, NFR-C8 (Conformité RGPD)

---

## Epic Summary

| Epic | Titre | FRs | Valeur Principale |
|------|-------|-----|-------------------|
| 0 | Foundation & Infrastructure | 0 | Base technique solide |
| 1 | Authentication & Access | 8 | Accès sécurisé multi-rôles |
| 2 | Document Management (GED) | 9 | Gestion documents + signatures |
| 3 | Budget & Expenses | 7 | Suivi budgétaire + validation |
| 4 | Project Tracking | 7 | Vue Earned Value + projections |
| 5 | Agent IA | 12 | Automatisation + assistance IA |
| 6 | Notifications | 6 | Communication + alertes |
| 7 | External Access | 6 | UX zéro friction partenaires |
| 8 | Administration | 7 | Configuration + setup projets |
| 9 | Internationalization | 6 | Support bilingue FR/EN |
| 10 | RGPD Compliance | 5 | Droits données utilisateurs |
| **Total** | | **73** | **100% FRs couverts** |

---

## Epic 0: Foundation & Infrastructure Setup - Stories

### Story 0.1: Initialize Next.js Starter Template

**As a** developer,
**I want** to initialize the project with the Skolaczk Next.js starter template,
**So that** I have a production-ready foundation with shadcn/ui, Drizzle, and NextAuth pre-configured.

**Acceptance Criteria:**

**Given** the development environment is ready
**When** I run `npx degit Skolaczk/next-starter safewire-app && cd safewire-app && npm install`
**Then** the project is initialized with Next.js 15, React 19, TypeScript 5 strict mode
**And** shadcn/ui components are available in `src/components/ui/`
**And** Drizzle ORM is configured with PostgreSQL adapter
**And** NextAuth.js base configuration exists
**And** Jest and Playwright test frameworks are set up
**And** ESLint and Prettier are configured
**And** the project builds without errors (`npm run build`)
**And** the development server starts correctly (`npm run dev`)

---

### Story 0.2: Configure Scaleway Infrastructure

**As a** developer,
**I want** to configure the Scaleway infrastructure (PostgreSQL, Object Storage, Container Registry),
**So that** the application has its production hosting environment ready.

**Acceptance Criteria:**

**Given** a Scaleway account is available
**When** I configure the infrastructure
**Then** a PostgreSQL Managed Database is created in the Paris region (fr-par)
**And** connection string is stored in environment variables (`DATABASE_URL`)
**And** an Object Storage bucket is created for document storage
**And** S3 credentials are configured (`SCW_ACCESS_KEY`, `SCW_SECRET_KEY`, `SCW_BUCKET`)
**And** a Container Registry is created for Docker images
**And** environment variables are documented in `.env.example`
**And** local development can connect to the database via `docker-compose.yml`
**And** database connection is tested successfully

---

### Story 0.3: Setup CI/CD Pipeline

**As a** developer,
**I want** to configure GitHub Actions for continuous integration and deployment,
**So that** code is automatically tested and deployed on push.

**Acceptance Criteria:**

**Given** the project is in a GitHub repository
**When** I push code to the main branch
**Then** GitHub Actions runs lint checks (`npm run lint`)
**And** GitHub Actions runs type checks (`npm run type-check`)
**And** GitHub Actions runs unit tests (`npm run test`)
**And** on success, a Docker image is built and pushed to Scaleway Container Registry
**And** the image is deployed to Scaleway Serverless Containers
**And** deployment uses zero-downtime strategy
**And** secrets are stored in GitHub Secrets (not in code)
**And** the workflow files are in `.github/workflows/`

---

### Story 0.4: Create Base Drizzle Schema

**As a** developer,
**I want** to create the foundational database schema with Drizzle,
**So that** user authentication and basic data models are available.

**Acceptance Criteria:**

**Given** the Drizzle ORM is configured
**When** I define the base schema
**Then** a `users` table is created with columns: `id` (UUID), `email` (unique), `name`, `role` (enum), `created_at`, `updated_at`
**And** a `sessions` table is created for NextAuth database sessions
**And** a `accounts` table is created for OAuth providers
**And** a `verification_tokens` table is created for email verification
**And** all column names use snake_case convention
**And** migrations are generated with `drizzle-kit generate`
**And** migrations are applied with `drizzle-kit migrate`
**And** TypeScript types are inferred from schema
**And** a `UserRole` enum is defined with values: `admin`, `moa`, `moe`, `fabricant`, `investisseur`, `partenaire`

---

### Story 0.5: Configure Authentication Foundation

**As a** developer,
**I want** to configure NextAuth.js with the Drizzle adapter and email provider,
**So that** users can authenticate via email magic links.

**Acceptance Criteria:**

**Given** the Drizzle schema includes auth tables
**When** I configure NextAuth.js
**Then** the Drizzle adapter is connected to PostgreSQL
**And** an Email provider is configured (using Resend for development)
**And** session strategy is set to `database` (not JWT)
**And** session includes user `id`, `email`, `name`, `role`
**And** `NEXTAUTH_SECRET` is generated and stored in environment
**And** `NEXTAUTH_URL` is configured for the deployment URL
**And** a login page exists at `/login`
**And** protected routes redirect to login if unauthenticated
**And** successful login redirects to dashboard

---

### Story 0.6: Setup Design System Foundation

**As a** developer,
**I want** to configure the design system with Tailwind tokens and shadcn/ui theme,
**So that** the UI is consistent with the UX specification.

**Acceptance Criteria:**

**Given** shadcn/ui is installed
**When** I configure the design tokens
**Then** color variables are defined matching the UX spec:
  - `--color-bg-primary`: #050505
  - `--color-bg-elevated`: #0A0A0A
  - `--color-text-primary`: #EDEDED
  - `--color-accent-ia`: #00D1FF
  - `--color-accent-business`: #3B82F6
  - `--color-success`: #10B981
  - `--color-warning`: #F59E0B
  - `--color-error`: #EF4444
**And** dark mode is set as default
**And** Inter font is configured for headings and body
**And** JetBrains Mono is configured for code
**And** the `cn()` utility function is available for conditional classes
**And** a theme provider wraps the application in `src/providers/`
**And** `prefers-reduced-motion` is detected via a custom hook `useReducedMotion()`

---

## Epic 1: Authentication & User Access Control - Stories

### Story 1.1: User Invitation by Admin

**As an** Admin,
**I want** to invite new users with a specific role,
**So that** I can control who has access to the platform and with what permissions.

**Acceptance Criteria:**

**Given** I am logged in as Admin
**When** I navigate to the user management section and click "Invite User"
**Then** a form is displayed with fields: email, name, role selection
**And** role options are: MOA, MOE, Fabricant, Investisseur, Partenaire
**And** when I submit the form, an invitation email is sent to the user
**And** the email contains a magic link to complete registration
**And** the invited user appears in the user list with status "pending"
**And** the invitation expires after 7 days if not accepted
**And** a `user_invitations` table is created with columns: `id`, `email`, `role`, `invited_by`, `token`, `expires_at`, `accepted_at`

---

### Story 1.2: Internal User Login with Email + MFA

**As an** internal user (Admin, MOA, MOE),
**I want** to authenticate with email and MFA (TOTP),
**So that** my account is protected by two-factor authentication.

**Acceptance Criteria:**

**Given** I am an internal user with MFA enabled
**When** I enter my email on the login page
**Then** a magic link is sent to my email
**And** after clicking the link, I am prompted to enter my TOTP code
**And** if the TOTP code is valid, I am logged in and redirected to the dashboard
**And** if the TOTP code is invalid, an error message is displayed
**And** after 5 failed attempts, the account is temporarily locked for 15 minutes
**And** a `mfa_secrets` table is created with columns: `user_id`, `secret`, `enabled`, `created_at`
**And** MFA setup page is available at `/settings/security`

---

### Story 1.3: External User Access via Magic Link

**As an** external user (Fabricant, Investisseur, Partenaire),
**I want** to access the platform via magic link without creating a password,
**So that** I can interact with minimal friction.

**Acceptance Criteria:**

**Given** I receive a magic link by email
**When** I click on the link
**Then** I am authenticated and redirected to the relevant context (document, form, dashboard)
**And** the magic link is 256 bits, expires after 24 hours, and is single-use
**And** if the link has already been used, I see a message "Link already used"
**And** if the link has expired, I see a message "Link expired - request a new one"
**And** the `magic_links` table is created with: `id`, `user_id`, `token` (hashed), `context_type`, `context_id`, `expires_at`, `used_at`
**And** external users do NOT require MFA

---

### Story 1.4: Magic Link Regeneration

**As an** external user,
**I want** to request a new magic link when mine has expired,
**So that** I can still access the platform without contacting support.

**Acceptance Criteria:**

**Given** I click on an expired magic link
**When** I see the "Link expired" message
**Then** a button "Request new link" is displayed
**And** when I click it, a new magic link is sent to my email
**And** I receive a confirmation "New link sent to your email"
**And** the old link is invalidated
**And** rate limiting is applied: max 5 requests per hour per email
**And** the regeneration action is logged in the audit trail

---

### Story 1.5: Role-Based Permissions System

**As an** Admin,
**I want** to define permissions per role and per document,
**So that** users only see and do what they are authorized for.

**Acceptance Criteria:**

**Given** the role system is configured
**When** a user accesses a resource
**Then** the system checks their role permissions
**And** Admin has full access to all resources
**And** MOA can view all, validate expenses, approve documents
**And** MOE can create/edit documents, manage budgets, use Chat IA
**And** Fabricant can only access documents shared with them
**And** Investisseur can only view health reports and dashboard
**And** Partenaire can access their collaboration space only
**And** a `permissions` table is created with: `role`, `resource_type`, `action`, `allowed`
**And** a `document_access` table is created for document-level permissions
**And** unauthorized access attempts return 403 Forbidden

---

### Story 1.6: Manufacturer Data Isolation

**As a** Fabricant,
**I want** to be sure that competing manufacturers cannot see my submissions,
**So that** my commercial information remains confidential.

**Acceptance Criteria:**

**Given** multiple manufacturers are registered on the platform
**When** Fabricant A views documents
**Then** they only see documents explicitly shared with them
**And** they cannot see documents shared with Fabricant B
**And** they cannot see other manufacturers' submissions or offers
**And** comparatives and analyses are only visible to MOE/MOA roles
**And** database queries include `project_id` AND `organization_id` filters
**And** an `organizations` table is created with: `id`, `name`, `type` (enum: iot_start, labor_control, fabricant, investisseur, partenaire)
**And** users are linked to organizations via `user_organizations` join table

---

### Story 1.7: User Access History

**As a** user,
**I want** to view my own access history,
**So that** I can verify no unauthorized access occurred on my account.

**Acceptance Criteria:**

**Given** I am logged in
**When** I navigate to `/settings/access-history`
**Then** I see a list of my login events with: date, time, IP address, device info
**And** I see a list of documents I accessed with: document name, action (view/download), timestamp
**And** the list is sorted by most recent first
**And** I can filter by date range
**And** only MY access history is visible (not other users')
**And** an `access_logs` table is created with: `id`, `user_id`, `action`, `resource_type`, `resource_id`, `ip_address`, `user_agent`, `created_at`

---

### Story 1.8: Admin Audit Trail

**As an** Admin,
**I want** to view the complete audit trail of all user actions,
**So that** I can investigate security incidents and ensure compliance.

**Acceptance Criteria:**

**Given** I am logged in as Admin
**When** I navigate to `/admin/audit`
**Then** I see all access logs from all users
**And** I can filter by user, action type, resource, date range
**And** I can search by user email or resource name
**And** I can export the audit trail to CSV
**And** logs are immutable (no DELETE or UPDATE operations allowed)
**And** logs include: timestamp, user_id, user_email, action, resource_type, resource_id, details (JSON), ip_address
**And** the export includes headers and follows GDPR data format requirements
**And** pagination is implemented with 50 items per page

---

## Epic 2: Document Management (GED) - Stories

### Story 2.1: Document Upload to Object Storage

**As a** user (MOE, Admin),
**I want** to upload documents to the platform,
**So that** project files are centralized and accessible to authorized users.

**Acceptance Criteria:**

**Given** I am logged in with upload permissions
**When** I drag and drop or select a file to upload
**Then** the file is uploaded to Scaleway Object Storage
**And** a progress indicator shows upload status
**And** maximum file size is 50MB per file
**And** allowed formats include: PDF, DOC, DOCX, XLS, XLSX, PNG, JPG
**And** a `documents` table is created with: `id`, `project_id`, `name`, `mime_type`, `size_bytes`, `storage_key`, `uploaded_by`, `created_at`
**And** files are stored with a unique key: `{project_id}/{document_id}/{filename}`
**And** signed URLs are generated for secure download (expiration: 1 hour)
**And** upload action is logged in audit trail

---

### Story 2.2: Automatic Document Versioning

**As a** user,
**I want** document versions to be tracked automatically,
**So that** I can view the history of changes and revert if needed.

**Acceptance Criteria:**

**Given** a document already exists in the system
**When** I upload a new version of the same document
**Then** the new version is stored with incremented version number
**And** the previous version remains accessible in history
**And** a `document_versions` table is created with: `id`, `document_id`, `version_number`, `storage_key`, `size_bytes`, `uploaded_by`, `created_at`, `change_notes`
**And** I can view version history at `/documents/{id}/versions`
**And** I can download any previous version
**And** version comparison is available (metadata only, not content diff)
**And** the latest version is always displayed by default

---

### Story 2.3: Validation Workflow Definition

**As a** MOE,
**I want** to define a validation workflow for a document,
**So that** the right people approve documents before they are finalized.

**Acceptance Criteria:**

**Given** I have uploaded a document
**When** I click "Configure validation"
**Then** I can select validators from the user list
**And** I can set validation order (sequential or parallel)
**And** I can set a deadline for validation
**And** a `validation_workflows` table is created with: `id`, `document_id`, `workflow_type` (sequential/parallel), `deadline`, `status`, `created_by`
**And** a `validation_steps` table is created with: `id`, `workflow_id`, `validator_id`, `order`, `status`, `validated_at`, `comments`
**And** validators receive email notification when their turn arrives
**And** the document shows status: "pending_validation", "validated", "rejected"

---

### Story 2.4: Document Approval or Rejection

**As a** validator (MOA, Admin),
**I want** to approve or reject a document pending validation,
**So that** the document can progress in the workflow.

**Acceptance Criteria:**

**Given** I have a document pending my validation
**When** I open the document validation page
**Then** I can view the document content
**And** I can click "Approve" or "Reject"
**And** if I reject, I must provide a comment explaining why
**And** my decision is recorded with timestamp
**And** the next validator is notified (if sequential workflow)
**And** the document owner is notified of the decision
**And** if all validators approve, document status becomes "validated"
**And** if any validator rejects, document status becomes "rejected"
**And** validation actions are logged in audit trail

---

### Story 2.5: Electronic Signature with Yousign

**As a** user,
**I want** to sign documents electronically via Yousign,
**So that** signatures have legal value (eIDAS compliant).

**Acceptance Criteria:**

**Given** a document is validated and ready for signature
**When** I initiate the signature process
**Then** the document is sent to Yousign API
**And** signers receive an email with a signature link
**And** signature level is set to "advanced" for NDA and contracts
**And** the signer can sign directly in the Yousign interface
**And** upon completion, the signed document is downloaded back
**And** signature proof is stored with the document
**And** a `signatures` table is created with: `id`, `document_id`, `yousign_procedure_id`, `signer_email`, `status`, `signed_at`, `proof_url`
**And** Yousign webhook updates signature status in real-time
**And** NFR-I2 timeout (30s) and retry (3x) are implemented

---

### Story 2.6: Manufacturer Document Access

**As a** Fabricant,
**I want** to download documents that have been shared with me,
**So that** I can review specifications and submit my offer.

**Acceptance Criteria:**

**Given** I am logged in as Fabricant via magic link
**When** I access the document list
**Then** I only see documents explicitly shared with my organization
**And** I can download documents using signed URLs
**And** download action is logged with my user ID
**And** I cannot see documents shared with other manufacturers
**And** I see document status (draft, validated, signed)
**And** I receive notification when new documents are shared with me
**And** the UI uses the MagicLinkLayout (simplified external layout)

---

### Story 2.7: Invisible PDF Watermarking

**As a** system administrator,
**I want** confidential PDFs to have invisible watermarks,
**So that** leaked documents can be traced back to their source.

**Acceptance Criteria:**

**Given** a confidential document is downloaded
**When** the download is processed
**Then** an invisible watermark is embedded in the PDF
**And** the watermark contains: user ID, timestamp, document ID
**And** watermark uses steganographic technique (not visible to naked eye)
**And** watermark can be extracted with a verification tool (admin only)
**And** documents marked as "public" are not watermarked
**And** a `watermark_logs` table tracks: `document_id`, `user_id`, `watermark_hash`, `created_at`
**And** watermarking is performed server-side before generating signed URL

---

### Story 2.8: PDF/A-3 Archival Format

**As a** compliance officer,
**I want** signed documents to be archived in PDF/A-3 format,
**So that** they remain readable and legally valid for 10 years.

**Acceptance Criteria:**

**Given** a document has been signed via Yousign
**When** the signature is complete
**Then** the signed document is converted to PDF/A-3 format
**And** the original signature proof is embedded as an attachment
**And** the archived document is stored in a separate archival bucket
**And** the archive is immutable (no delete/modify operations)
**And** SHA-256 hash is computed and stored for integrity verification
**And** annual integrity verification job runs automatically
**And** a `document_archives` table is created with: `id`, `document_id`, `archive_storage_key`, `sha256_hash`, `archived_at`, `verified_at`
**And** archived documents are accessible for 10 years per NFR-C6

---

## Epic 3: Budget & Expense Management

Permettre le suivi et la validation des dépenses projet par catégorie avec alertes automatiques.

### Story 3.1: Create Budget Categories

**As a** MOE (Maître d'Œuvre),
**I want** to create and manage budget categories for a project,
**So that** expenses can be organized and tracked by type.

**Acceptance Criteria:**

**Given** I am logged in as MOE
**When** I access the budget configuration for a project
**Then** I can create a new budget category with: name, initial budget, description
**And** a `budget_categories` table is created with: `id`, `project_id`, `name`, `initial_budget`, `spent_amount`, `description`, `created_at`, `updated_at`
**And** I can edit existing categories (name, description)
**And** I cannot modify `initial_budget` once expenses are recorded
**And** default categories are suggested: R&D, Fabrication, Certification, Marketing, Juridique
**And** each category displays current spent percentage with color coding (green < 70%, orange 70-90%, red > 90%)

---

### Story 3.2: Manual Expense Entry

**As a** MOE,
**I want** to manually enter an expense with supporting document,
**So that** the budget tracking reflects actual spending.

**Acceptance Criteria:**

**Given** I am logged in as MOE and budget categories exist
**When** I click "Add Expense" on a budget category
**Then** I can enter: amount, description, date, vendor, document reference
**And** an `expenses` table is created with: `id`, `category_id`, `amount`, `description`, `expense_date`, `vendor`, `document_id`, `status`, `created_by`, `created_at`
**And** I can attach an existing document from GED or upload a new one
**And** the expense is created with status "pending_validation"
**And** the category `spent_amount` is NOT updated until expense is validated
**And** the MOA is notified of the new expense requiring validation
**And** a success toast confirms the expense was submitted for validation

---

### Story 3.3: Automatic Invoice Import from Email

**As a** system,
**I want** to automatically import invoices received by email,
**So that** expenses can be recorded without manual data entry.

**Acceptance Criteria:**

**Given** an email with invoice attachment arrives at the project inbox
**When** the email parsing job runs (every 5 minutes per NFR-I4)
**Then** the invoice PDF is extracted and uploaded to GED
**And** an `email_imports` table tracks: `id`, `email_subject`, `sender`, `received_at`, `document_id`, `parsed_data`, `status`
**And** the Agent IA extracts: vendor name, invoice number, amount, date
**And** a draft expense is created with status "draft" for MOE review
**And** if parsing fails, the email is marked for manual review with error details
**And** the MOE receives a notification: "New invoice imported - review required"
**And** original email metadata is preserved for audit trail

---

### Story 3.4: Expense Validation by MOA

**As a** MOA (Maître d'Ouvrage),
**I want** to validate or reject expenses submitted by MOE,
**So that** budget spending is controlled and approved.

**Acceptance Criteria:**

**Given** I am logged in as MOA with pending expenses
**When** I access the validation queue
**Then** I see all expenses with status "pending_validation" for my projects
**And** I can view the expense details and attached document
**And** I can approve the expense (changes status to "validated")
**And** I can reject the expense with a mandatory reason
**And** when approved, the category `spent_amount` is incremented
**And** an `expense_validations` table logs: `id`, `expense_id`, `validated_by`, `status`, `reason`, `validated_at`
**And** the MOE is notified of the validation/rejection decision
**And** rejected expenses can be corrected and resubmitted by MOE

---

### Story 3.5: One-Click Magic Link Validation

**As a** MOA,
**I want** to validate an expense directly from a magic link email,
**So that** I can approve spending without logging into the platform.

**Acceptance Criteria:**

**Given** an expense is pending my validation
**When** I receive the notification email
**Then** the email contains a magic link with action "approve" and "reject" buttons
**And** clicking "approve" validates the expense immediately
**And** clicking "reject" opens a simple form for rejection reason
**And** the magic link is single-use per NFR-S3
**And** the magic link expires after 24h with option to regenerate
**And** the page shows confirmation: "Expense of {amount} for {category} has been approved"
**And** if already processed, the page shows: "This expense has already been processed"
**And** the MagicLinkLayout is used per UX specification

---

### Story 3.6: Expense History by Category

**As a** user (MOE, MOA, Admin),
**I want** to view the history of expenses by category,
**So that** I can analyze spending patterns and audit transactions.

**Acceptance Criteria:**

**Given** I am logged in with appropriate permissions
**When** I access the expense history for a budget category
**Then** I see a list of all expenses: date, vendor, amount, status, validator
**And** I can filter by: date range, status (draft, pending, validated, rejected), vendor
**And** I can sort by: date, amount, status
**And** I can export the filtered list to CSV
**And** clicking an expense shows full details including attached document
**And** the total validated amount matches the category `spent_amount`
**And** pagination is applied for lists > 20 items

---

### Story 3.7: Budget Threshold Alerts

**As a** system,
**I want** to alert users when budget thresholds are reached,
**So that** overspending can be prevented proactively.

**Acceptance Criteria:**

**Given** budget categories have configurable alert thresholds
**When** a validated expense causes the category to reach a threshold
**Then** an alert is created in the `alerts` table: `id`, `project_id`, `category_id`, `alert_type`, `threshold_percentage`, `current_percentage`, `created_at`, `acknowledged_at`
**And** default thresholds are 70% (warning) and 90% (critical)
**And** MOE and MOA receive notifications at 70% threshold
**And** Admin is additionally notified at 90% threshold
**And** the HealthScore widget displays budget health status
**And** alerts are displayed in the dashboard with color coding
**And** users can acknowledge alerts to hide them from active list
**And** acknowledged alerts remain visible in alert history

---

## Epic 4: Project Tracking & Earned Value

Visualiser l'avancement projet avec vue unifiée temps/budget et projections intelligentes.

### Story 4.1: Gantt Chart Visualization

**As a** user,
**I want** to view the project planning as a Gantt chart,
**So that** I can understand the project timeline and milestones.

**Acceptance Criteria:**

**Given** I am logged in and the project has tasks defined
**When** I access the project tracking view
**Then** I see a Gantt chart with tasks displayed as horizontal bars
**And** a `tasks` table exists with: `id`, `project_id`, `name`, `start_date`, `end_date`, `progress_percentage`, `parent_task_id`, `milestone`, `created_at`
**And** milestones are displayed as diamond markers on the timeline
**And** I can zoom in/out to view daily, weekly, monthly granularity
**And** tasks can be grouped by phase (parent_task_id)
**And** today's date is indicated by a vertical line
**And** completed tasks are visually differentiated (strikethrough or color)
**And** the chart is responsive per breakpoints (stack on mobile)

---

### Story 4.2: Budget Consumption by Category

**As a** user,
**I want** to visualize budget consumption by category,
**So that** I can identify which areas are consuming the most resources.

**Acceptance Criteria:**

**Given** I am logged in and budget categories have expenses
**When** I access the budget dashboard
**Then** I see a horizontal bar chart showing each category: initial budget vs spent
**And** each bar uses color coding: green < 70%, orange 70-90%, red > 90%
**And** I can click a category to drill down into expense details
**And** a summary shows: total budget, total spent, remaining, percentage
**And** I can toggle between absolute values (€) and percentages (%)
**And** the view updates in real-time when expenses are validated
**And** export to PNG/PDF is available for reporting

---

### Story 4.3: Unified Earned Value View

**As a** user,
**I want** to see a unified view combining Gantt timeline with budget consumption,
**So that** I can assess if the project is on track both time-wise and budget-wise.

**Acceptance Criteria:**

**Given** I am logged in and the project has tasks and budget data
**When** I access the Earned Value dashboard
**Then** I see a combined visualization with:
- Top: Gantt chart with task progress
- Bottom: Budget burn-down chart aligned to same timeline
**And** the SplitLayout 60/40 is used on desktop (Chart 60%, Summary 40%)
**And** key metrics are displayed: SPI (Schedule Performance Index), CPI (Cost Performance Index)
**And** SPI and CPI are calculated: SPI = EV/PV, CPI = EV/AC
**And** an `earned_value_metrics` table tracks: `id`, `project_id`, `date`, `planned_value`, `earned_value`, `actual_cost`, `spi`, `cpi`
**And** metrics are recalculated daily by a scheduled job
**And** color indicators: Green (>0.9), Orange (0.8-0.9), Red (<0.8)

---

### Story 4.4: End-of-Project Projections

**As a** user,
**I want** to see projections for project completion date and final cost,
**So that** I can anticipate outcomes and take corrective action if needed.

**Acceptance Criteria:**

**Given** I am logged in and sufficient project data exists (at least 4 weeks)
**When** I access the projections panel
**Then** I see estimated completion date (EAC - Estimate at Completion)
**And** I see estimated final cost with confidence intervals (best case, expected, worst case)
**And** projections use linear regression on historical SPI/CPI trends
**And** I can hover over projections to see methodology and assumptions
**And** if data is insufficient, a message explains: "At least 4 weeks of data required"
**And** projections are recalculated daily with historical projection history stored
**And** a `projections` table stores: `id`, `project_id`, `date`, `eac_date`, `eac_cost_low`, `eac_cost_expected`, `eac_cost_high`

---

### Story 4.5: Schedule vs Cost Variance Display

**As a** user,
**I want** to see the variances between planned schedule/budget and actual performance,
**So that** I can identify problem areas quickly.

**Acceptance Criteria:**

**Given** I am logged in and the project has tracking data
**When** I access the variance dashboard
**Then** I see Schedule Variance (SV = EV - PV) displayed in days
**And** I see Cost Variance (CV = EV - AC) displayed in currency
**And** positive variances are shown in green (ahead/under), negative in red (behind/over)
**And** I can filter variances by task phase or budget category
**And** a trend line shows variance evolution over time
**And** clicking a variance opens detail explaining contributing factors
**And** the HealthScore widget summarizes overall project health (1-100 score)

---

### Story 4.6: MOA Planning Adjustment Validation

**As a** MOA,
**I want** to validate planning adjustments proposed by the Agent IA,
**So that** changes to the project timeline are approved before taking effect.

**Acceptance Criteria:**

**Given** the Agent IA has proposed a planning adjustment
**When** I access my pending approvals
**Then** I see the proposed change with: current value, proposed value, reason
**And** a `planning_adjustments` table stores: `id`, `project_id`, `task_id`, `adjustment_type`, `current_value`, `proposed_value`, `reason`, `proposed_by`, `status`, `reviewed_by`, `reviewed_at`
**And** I can view the impact simulation (how it affects milestones)
**And** I can approve the adjustment (applies changes to tasks)
**And** I can reject the adjustment with feedback for the Agent IA
**And** I can modify the proposed value before approving
**And** approved adjustments trigger task recalculation and notification to team

---

### Story 4.7: Custom Alert Threshold Configuration

**As a** user,
**I want** to configure personalized alert thresholds for project metrics,
**So that** I receive notifications based on my specific concerns.

**Acceptance Criteria:**

**Given** I am logged in with appropriate permissions
**When** I access the alert configuration for a project
**Then** I can set thresholds for: SPI, CPI, budget percentage, task delay
**And** a `user_alert_thresholds` table stores: `id`, `user_id`, `project_id`, `metric_type`, `warning_threshold`, `critical_threshold`, `enabled`
**And** default values are provided but can be overridden
**And** I can enable/disable specific alert types
**And** I can choose notification channels: email, push, both
**And** threshold changes are logged for audit purposes
**And** a preview shows: "You will be alerted when CPI drops below 0.85"

---

## Epic 5: Agent IA Conversationnel

Permettre l'interaction conversationnelle avec l'Agent IA pour automatiser et assister les tâches projet.

### Story 5.1: Chat Interface with Streaming

**As a** user,
**I want** to chat with the Agent IA through a conversational interface,
**So that** I can ask questions and get assistance naturally.

**Acceptance Criteria:**

**Given** I am logged in as internal user (MOE, MOA, Admin)
**When** I access the Chat IA panel (60% of SplitLayout on desktop)
**Then** I can type messages in a text input field
**And** the Agent IA responds using SSE streaming (Vercel AI SDK + Claude)
**And** streaming displays token-by-token using StreamingText component
**And** a `chat_sessions` table stores: `id`, `user_id`, `project_id`, `created_at`, `last_message_at`
**And** a `chat_messages` table stores: `id`, `session_id`, `role` (user/assistant), `content`, `created_at`
**And** I can see typing indicator while response is being generated
**And** first token appears within 10s per NFR-P7
**And** I can cancel a pending response by pressing Escape

---

### Story 5.2: Chat Bubbles and Message History

**As a** user,
**I want** to see my conversation history with distinct message bubbles,
**So that** I can review past interactions and context.

**Acceptance Criteria:**

**Given** I have an active chat session
**When** I view the chat interface
**Then** user messages appear as ChatBubble (right-aligned, accent color)
**And** AI messages appear as ChatBubble (left-aligned, secondary color)
**And** each message shows timestamp on hover
**And** messages are loaded with infinite scroll (newest at bottom)
**And** I can copy message content to clipboard
**And** long messages are collapsed with "Show more" option
**And** markdown formatting in AI responses is rendered correctly
**And** code blocks have syntax highlighting and copy button

---

### Story 5.3: Email Parsing and Document Ingestion

**As a** system,
**I want** to parse incoming emails and extract document data,
**So that** invoices and quotes are automatically categorized.

**Acceptance Criteria:**

**Given** the email inbox receives a new message with attachments
**When** the parsing job runs every 5 minutes
**Then** the email is parsed using Claude API with structured output
**And** attachments are extracted and uploaded to Object Storage
**And** the Agent IA identifies document type: invoice, quote, contract, other
**And** extracted data: vendor, amount, date, reference number, line items
**And** a `parsed_documents` table stores: `id`, `email_import_id`, `document_type`, `extracted_data`, `confidence_score`, `parsed_at`
**And** low confidence extractions (< 0.8) are flagged for human review
**And** parsing errors are logged with the raw email content preserved
**And** the user is notified: "New document parsed: Invoice from {vendor}"

---

### Story 5.4: Automatic Document Categorization

**As a** system,
**I want** to automatically categorize parsed documents by budget category,
**So that** expenses are organized without manual intervention.

**Acceptance Criteria:**

**Given** a document has been parsed with extracted data
**When** categorization runs after parsing
**Then** the Agent IA suggests a budget category based on: vendor, description, amount patterns
**And** historical categorization patterns are used for learning
**And** a `categorization_suggestions` table stores: `id`, `document_id`, `suggested_category_id`, `confidence`, `reasoning`, `accepted`
**And** high confidence (> 0.9) categorizations can be auto-applied per project settings
**And** medium confidence (0.7-0.9) categorizations require MOE confirmation
**And** low confidence (< 0.7) categorizations require manual selection
**And** user feedback improves future categorization accuracy

---

### Story 5.5: Quote Comparison Generation

**As a** user,
**I want** the Agent IA to generate comparisons between multiple quotes,
**So that** I can make informed procurement decisions.

**Acceptance Criteria:**

**Given** I have selected multiple quote documents for comparison
**When** I ask "Compare these quotes" in the chat
**Then** the Agent IA generates a structured comparison including:
- Price comparison table
- Scope differences highlighted
- Delivery time comparison
- Terms and conditions summary
- Risk assessment for each option
**And** the comparison is displayed using markdown tables
**And** I can export the comparison as PDF
**And** the Agent IA provides a recommendation with justification
**And** if quotes have different scopes, differences are clearly highlighted
**And** the comparison is saved for future reference

---

### Story 5.6: Predictive Alerts Based on Trends

**As a** system,
**I want** to generate predictive alerts based on trend analysis,
**So that** problems can be anticipated before they occur.

**Acceptance Criteria:**

**Given** the project has at least 4 weeks of tracking data
**When** the daily trend analysis job runs
**Then** the Agent IA analyzes: SPI trends, CPI trends, budget burn rate
**And** predictive alerts are generated for: expected threshold breach dates
**And** a `predictive_alerts` table stores: `id`, `project_id`, `metric_type`, `predicted_date`, `predicted_value`, `confidence`, `reasoning`, `created_at`
**And** alerts include: "Budget category X predicted to exceed 90% by {date}"
**And** alerts are delivered via configured notification channels
**And** users can view the trend data that triggered the alert
**And** false positive feedback is collected to improve predictions

---

### Story 5.7: Corrective Action Suggestions

**As a** user,
**I want** the Agent IA to suggest corrective actions for project issues,
**So that** I can take proactive steps to keep the project on track.

**Acceptance Criteria:**

**Given** the project has deviations from plan (SPI < 1 or CPI < 1)
**When** I ask "What should we do?" or deviations exceed thresholds
**Then** the Agent IA generates contextual suggestions:
- Task prioritization changes
- Budget reallocation options
- Resource adjustment recommendations
- Timeline adjustment proposals
**And** each suggestion includes: impact assessment, implementation steps, risks
**And** a `action_suggestions` table stores: `id`, `project_id`, `trigger_type`, `suggestion_content`, `impact_assessment`, `status`, `created_at`
**And** I can accept, reject, or modify suggestions
**And** accepted suggestions create actionable tasks or planning adjustments
**And** suggestion history is retained for project retrospective

---

### Story 5.8: Supervision Mode (Preview Before Send)

**As a** MOE,
**I want** to preview Agent IA communications before they are sent externally,
**So that** I maintain control over external communications.

**Acceptance Criteria:**

**Given** the Supervision Mode is enabled for the project
**When** the Agent IA prepares to send external communication
**Then** the SupervisionModal opens showing: recipient, subject, content
**And** a `supervision_queue` table stores: `id`, `project_id`, `action_type`, `content`, `recipient`, `status`, `reviewed_by`, `reviewed_at`
**And** I can approve (sends immediately), edit and approve, or reject
**And** rejected actions are logged with reason
**And** I can toggle Supervision Mode on/off in project settings
**And** when disabled, actions are sent automatically with audit log
**And** urgent actions are highlighted for immediate attention
**And** time in queue is tracked and escalated if pending > 2h

---

### Story 5.9: Weekly Project Health Reports

**As a** user,
**I want** to receive weekly project health reports generated by the Agent IA,
**So that** I have a regular summary of project status.

**Acceptance Criteria:**

**Given** it is the configured report day (default: Monday 9 AM)
**When** the weekly report job runs
**Then** the Agent IA generates a health report including:
- Executive summary (2-3 sentences)
- Key metrics: SPI, CPI, budget consumption, milestones status
- Accomplishments this week
- Issues and risks identified
- Recommendations for next week
**And** a `weekly_reports` table stores: `id`, `project_id`, `week_start`, `content`, `metrics_snapshot`, `generated_at`
**And** reports are sent to: MOE, MOA, and subscribed investors
**And** reports are stored and accessible in the project archive
**And** report language matches user's language preference (FR/EN)

---

### Story 5.10: Document Compliance Analysis

**As a** user,
**I want** to ask the Agent IA to analyze document compliance,
**So that** I can ensure documents meet project requirements.

**Acceptance Criteria:**

**Given** I have a document that needs compliance review
**When** I ask "Analyze compliance of this document"
**Then** the Agent IA checks the document against:
- Project requirements
- Standard templates
- Regulatory requirements (if applicable)
**And** generates a compliance report with: compliant items, non-compliant items, missing elements
**And** non-compliant items include: specific clause, expected value, actual value
**And** the report provides a compliance score (0-100%)
**And** I can export the compliance report as PDF
**And** compliance history is stored for audit trail

---

### Story 5.11: Graceful Degradation Mode

**As a** system,
**I want** to continue operating when external services are unavailable,
**So that** users can still access core functionality.

**Acceptance Criteria:**

**Given** Claude API becomes unavailable (timeout or error)
**When** a user attempts to use AI features
**Then** the system displays: "AI assistant temporarily unavailable"
**And** a `service_health` table tracks: `id`, `service_name`, `status`, `last_check`, `error_message`
**And** core features remain accessible: document viewing, budget tracking, task viewing
**And** AI-dependent features show: "This feature requires AI services - please try again later"
**And** queued operations are stored for retry when service recovers
**And** health check runs every 60 seconds per NFR-R6
**And** automatic recovery triggers pending operations when service returns
**And** users are notified when services are restored

---

### Story 5.12: Automatic Document Versioning

**As a** system,
**I want** to automatically version documents when updates are detected,
**So that** the complete document history is preserved.

**Acceptance Criteria:**

**Given** a document already exists in the GED
**When** an updated version is uploaded or imported
**Then** the Agent IA detects it is an update (same vendor/reference, newer date)
**And** a new version is created in the `document_versions` table
**And** the previous version remains accessible in version history
**And** version number is auto-incremented (1, 2, 3...)
**And** the document list shows the latest version by default
**And** changes between versions can be highlighted (diff view for text content)
**And** notification sent: "Document {name} updated to version {N}"

---

## Epic 6: Notifications & Communication

Informer les utilisateurs des événements importants via emails et notifications push.

### Story 6.1: Email Notifications from Agent IA

**As a** system,
**I want** to send email notifications for important events,
**So that** users are informed even when not on the platform.

**Acceptance Criteria:**

**Given** a notification-worthy event occurs (expense pending, document ready, alert)
**When** the notification job processes the event
**Then** an email is sent to relevant users via configured SMTP/transactional service
**And** a `notifications` table stores: `id`, `user_id`, `type`, `subject`, `content`, `channel`, `sent_at`, `read_at`
**And** email uses sober template per FR49 (no excessive branding)
**And** email includes magic link for direct action when applicable
**And** failed emails are retried up to 3 times with exponential backoff
**And** notification types: expense_pending, document_ready, threshold_alert, report_available
**And** unsubscribe link is included in all non-critical emails

---

### Story 6.2: Push Notifications (Progressive Web App)

**As a** user,
**I want** to receive push notifications on my device,
**So that** I'm alerted immediately for urgent matters.

**Acceptance Criteria:**

**Given** I have granted notification permission in my browser
**When** an urgent event occurs
**Then** a push notification is sent via Web Push API
**And** a `push_subscriptions` table stores: `id`, `user_id`, `endpoint`, `p256dh_key`, `auth_key`, `created_at`
**And** the notification shows: title, brief description, action link
**And** clicking the notification opens the relevant page
**And** push notifications are used for: critical budget alerts, validation requests, urgent documents
**And** if push fails, fallback to email is triggered
**And** users can manage push preferences separately from email preferences

---

### Story 6.3: Automated Investor Weekly Reports

**As an** investor,
**I want** to receive automated weekly project reports,
**So that** I stay informed about project progress without logging in.

**Acceptance Criteria:**

**Given** I am registered as an investor for a project
**When** the weekly report is generated (Monday 9 AM)
**Then** I receive a personalized email summary with:
- Project health score
- Budget status overview
- Key milestones achieved/upcoming
- Any alerts or concerns
**And** the report includes a magic link to view details on platform
**And** the report uses the investor's preferred language (FR/EN)
**And** I can unsubscribe from automatic reports
**And** if I have multiple projects, I receive a consolidated report
**And** the report respects NDA confidentiality (no sensitive details)

---

### Story 6.4: Automatic Acknowledgment for Manufacturers

**As a** fabricant,
**I want** to receive automatic acknowledgment when I submit documents,
**So that** I know my submission was received successfully.

**Acceptance Criteria:**

**Given** I have submitted a consultation response or document
**When** the submission is processed successfully
**Then** I receive an acknowledgment email within 5 minutes
**And** the email confirms: submission date/time, document names, next steps
**And** a reference number is provided for tracking
**And** if submission fails, I receive an error email with instructions to retry
**And** the acknowledgment includes contact information for support
**And** acknowledgments are logged in the `notifications` table

---

### Story 6.5: Sober Email Design

**As a** system,
**I want** to send emails with minimal, professional design,
**So that** communication feels trustworthy and uncluttered.

**Acceptance Criteria:**

**Given** the email template system is configured
**When** any email is sent from the platform
**Then** the design follows: clean typography, minimal colors, no excessive graphics
**And** the header shows only: project name, simple logo (optional)
**And** the body uses: clear hierarchy, readable font size (16px minimum)
**And** CTAs are styled as simple buttons, not aggressive marketing buttons
**And** the footer includes: contact info, unsubscribe, legal mentions
**And** emails render correctly in major clients: Gmail, Outlook, Apple Mail
**And** a single reusable email template is used for all notification types

---

### Story 6.6: User Notification Preferences

**As a** user,
**I want** to configure my notification preferences,
**So that** I only receive alerts I care about.

**Acceptance Criteria:**

**Given** I am logged in and access my profile settings
**When** I navigate to "Notification Preferences"
**Then** I can toggle notification types: expense alerts, document updates, weekly reports, AI suggestions
**And** I can choose channel per type: email only, push only, both, none
**And** a `user_notification_preferences` table stores: `id`, `user_id`, `notification_type`, `email_enabled`, `push_enabled`, `updated_at`
**And** default preferences are set on account creation
**And** critical notifications (security, access) cannot be disabled
**And** changes take effect immediately
**And** a preview shows: "You will receive: 3 email types, 2 push types"

---

## Epic 7: External User Experience (Magic Links & KYC)

Permettre aux partenaires externes d'interagir avec la plateforme sans créer de compte.

### Story 7.1: Stripe Identity KYC Verification

**As a** fabricant or investisseur,
**I want** to verify my identity through Stripe Identity,
**So that** I can access sensitive documents after passing KYC.

**Acceptance Criteria:**

**Given** I accessed the platform via magic link
**When** I attempt to access a document requiring KYC
**Then** I am redirected to Stripe Identity verification flow
**And** I can verify using: ID document scan, selfie, liveness check
**And** a `kyc_verifications` table stores: `id`, `user_id`, `stripe_session_id`, `status`, `verified_at`, `expires_at`
**And** successful verification grants access to sensitive documents
**And** verification is valid for 12 months (configurable)
**And** failed verification shows clear error message and retry option
**And** if Stripe Identity is unavailable, verification is queued per NFR-R4
**And** KYC status is displayed in user profile

---

### Story 7.2: Consultation Response Form

**As a** fabricant,
**I want** to fill and submit a response to a consultation,
**So that** I can participate in procurement processes.

**Acceptance Criteria:**

**Given** I accessed a consultation via magic link
**When** I view the consultation details
**Then** I see: project description, requirements, deadline, required documents
**And** I can fill a structured response form with: company info, proposed pricing, technical specifications
**And** I can upload required documents (quotes, certifications)
**And** a `consultation_responses` table stores: `id`, `consultation_id`, `vendor_id`, `response_data`, `documents`, `submitted_at`, `status`
**And** I can save draft and return later (via new magic link)
**And** submission is confirmed with reference number
**And** I cannot submit after the deadline (late submission warning shown before deadline)
**And** all form fields are validated before submission

---

### Story 7.3: Electronic NDA Signature

**As a** user,
**I want** to sign an NDA electronically,
**So that** I can access confidential project information.

**Acceptance Criteria:**

**Given** I am accessing a project that requires NDA
**When** NDA has not been signed by my organization
**Then** I am presented with the NDA document to review
**And** I can sign electronically using Yousign integration
**And** a `nda_signatures` table stores: `id`, `document_id`, `organization_id`, `signed_by`, `yousign_signature_id`, `signed_at`
**And** the signature is eIDAS compliant per NFR-C5
**And** after signing, I gain access to confidential documents
**And** NDA signature is valid for the project duration
**And** MOE is notified when NDA is signed
**And** signed NDA is archived in PDF/A-3 format

---

### Story 7.4: RGPD Consent Collection

**As a** user,
**I want** to give my RGPD consent before using the platform,
**So that** my data processing rights are protected.

**Acceptance Criteria:**

**Given** I am a new user accessing the platform (internal or external)
**When** I have not yet given consent
**Then** I am shown a clear consent form explaining: data collected, purpose, retention, rights
**And** consent is granular: essential (required), analytics (optional), communications (optional)
**And** a `user_consents` table stores: `id`, `user_id`, `consent_type`, `granted`, `ip_address`, `user_agent`, `granted_at`
**And** I can access the platform only after giving essential consent
**And** I can modify my consent later in profile settings
**And** consent records are immutable (new record for changes)
**And** consent text is available in FR and EN

---

### Story 7.5: Deadline Behavior Display

**As a** fabricant,
**I want** to see clear deadline information and warnings,
**So that** I can submit my response on time.

**Acceptance Criteria:**

**Given** I am viewing a consultation with a deadline
**When** the page loads
**Then** I see the deadline prominently displayed with countdown
**And** if deadline is < 24h, a warning banner appears (orange)
**And** if deadline is < 4h, a critical warning appears (red)
**And** if deadline has passed, submission is blocked with clear message
**And** timezone is displayed to avoid confusion
**And** if I have a draft, I see: "Draft saved - X hours remaining to submit"
**And** email reminder is sent 24h before deadline if draft exists
**And** late submission attempts are logged for audit

---

### Story 7.6: Progressive Expert Mode for Investors

**As an** investor,
**I want** to access an expert mode after multiple visits,
**So that** I can see more detailed information efficiently.

**Acceptance Criteria:**

**Given** I have accessed the platform more than 4 times (tracked by cookie/session)
**When** I log in for the 5th+ time
**Then** I am offered: "Enable Expert Mode for faster navigation?"
**And** a `user_experience_mode` field tracks: normal, expert
**And** Expert Mode displays: denser data tables, less explanatory text, keyboard shortcuts
**And** I can toggle between Normal and Expert mode at any time
**And** Expert Mode is device-specific (cookie-based)
**And** visit count is tracked in `user_sessions` table with `device_fingerprint`
**And** Expert Mode includes CommandPalette (Cmd+K) for quick navigation

---

## Epic 8: Administration & Platform Configuration

Permettre aux administrateurs de configurer et gérer la plateforme et les projets.

### Story 8.1: Project Creation Wizard

**As an** Admin,
**I want** to create a new project using a guided wizard,
**So that** all required information is collected systematically.

**Acceptance Criteria:**

**Given** I am logged in as Admin
**When** I click "Create New Project"
**Then** a multi-step wizard guides me through:
- Step 1: Project basics (name, description, dates, client)
- Step 2: Budget setup (categories, initial amounts)
- Step 3: Team setup (invite internal users, assign roles)
- Step 4: Integration setup (email inbox, notifications)
**And** a `projects` table stores: `id`, `name`, `description`, `start_date`, `end_date`, `client_id`, `status`, `created_by`, `created_at`
**And** I can save progress and continue later
**And** I can use the SAFEWIRE template to pre-fill common settings
**And** validation ensures required fields are complete before project activation
**And** a success message confirms: "Project {name} created successfully"

---

### Story 8.2: Planning Import (Excel/MS Project)

**As an** Admin,
**I want** to import an existing planning from Excel or MS Project,
**So that** I don't have to recreate the timeline manually.

**Acceptance Criteria:**

**Given** I am in the project setup or editing a project
**When** I click "Import Planning"
**Then** I can upload a file: .xlsx, .mpp, .xml (MS Project format)
**And** the system parses: task names, start dates, end dates, dependencies, milestones
**And** a preview shows the parsed tasks with validation status
**And** I can map imported columns to system fields
**And** conflicts with existing tasks are highlighted for resolution
**And** I can select: replace all, merge, or cancel
**And** import logs are stored in `import_logs` table: `id`, `project_id`, `file_name`, `status`, `rows_imported`, `errors`, `imported_at`
**And** imported tasks are marked with source for traceability

---

### Story 8.3: Agent IA Alert Threshold Configuration

**As an** Admin,
**I want** to configure the thresholds that trigger Agent IA alerts,
**So that** alerts are relevant to each project's context.

**Acceptance Criteria:**

**Given** I am configuring a project's settings
**When** I access "Agent IA Configuration"
**Then** I can set thresholds for:
- Budget warning (default 70%)
- Budget critical (default 90%)
- Schedule variance warning (default -5%)
- Schedule variance critical (default -10%)
- CPI/SPI warning (default 0.9)
- CPI/SPI critical (default 0.8)
**And** a `project_alert_config` table stores: `id`, `project_id`, `metric`, `warning_threshold`, `critical_threshold`, `updated_at`
**And** I can preview: "With these settings, you would have received X alerts last month"
**And** changes take effect for future calculations
**And** I can reset to defaults with one click

---

### Story 8.4: SAFEWIRE Template Pre-configuration

**As an** Admin,
**I want** to use a SAFEWIRE template when creating projects,
**So that** standard configurations are applied automatically.

**Acceptance Criteria:**

**Given** I am creating a new project
**When** I select "Use SAFEWIRE Template"
**Then** the following are pre-configured:
- Standard budget categories (R&D, Fabrication, Certification, etc.)
- Standard milestones (Discovery, Development, Certification, Launch)
- Default alert thresholds optimized for hardware projects
- Document templates (NDA, consultation, etc.)
- User role templates with typical permissions
**And** a `project_templates` table stores template configurations
**And** I can modify pre-filled values before saving
**And** the template version is recorded in project metadata
**And** future template updates do not affect existing projects

---

### Story 8.5: Dashboard Customization by Profile

**As an** Admin,
**I want** to customize default dashboard widgets per user profile,
**So that** each role sees the most relevant information first.

**Acceptance Criteria:**

**Given** I am in platform administration settings
**When** I access "Dashboard Configuration"
**Then** I can configure default widgets per role:
- MOA: Budget overview, pending validations, project health
- MOE: Task timeline, AI chat, recent documents
- Fabricant: My submissions, upcoming deadlines, messages
- Investisseur: Portfolio summary, project updates, reports
**And** a `dashboard_templates` table stores: `id`, `role`, `widget_layout`, `widget_config`
**And** users can further personalize their dashboard
**And** I can preview each role's default dashboard
**And** changes apply to new users; existing users can reset to new defaults

---

### Story 8.6: Agent IA Context Pre-training

**As an** Admin,
**I want** to pre-train the Agent IA with project-specific context,
**So that** it provides more relevant responses.

**Acceptance Criteria:**

**Given** I am configuring a project
**When** I access "Agent IA Context"
**Then** I can upload context documents: technical specs, glossary, team structure
**And** I can define key entities: company names, product names, acronyms
**And** a `project_context` table stores: `id`, `project_id`, `context_type`, `content`, `created_at`
**And** context is included in the Agent IA system prompt for this project
**And** I can test the context: "Ask the AI about {topic}"
**And** context size is displayed with warning if exceeding limits
**And** I can update context at any time (effective immediately)

---

### Story 8.7: External Service Health Monitoring

**As an** Admin,
**I want** to monitor the health of external services,
**So that** I can be alerted to integration issues.

**Acceptance Criteria:**

**Given** I am in the platform administration
**When** I access "Service Health"
**Then** I see status for: Claude API, Yousign, Stripe Identity, Email service
**And** each service shows: current status (green/yellow/red), last checked, uptime %
**And** a `service_health_checks` table logs: `id`, `service_name`, `status`, `response_time`, `error_message`, `checked_at`
**And** health checks run every 60 seconds per NFR-R6
**And** I receive alert if a service is down for > 5 minutes
**And** historical uptime graphs show last 30 days
**And** degraded services show impact: "AI features affected: Chat, Parsing"

---

## Epic 9: Internationalization (FR/EN)

Permettre l'utilisation de la plateforme en français et en anglais.

### Story 9.1: Language Selection Interface

**As a** user,
**I want** to choose my preferred language (French or English),
**So that** I can use the platform in my native language.

**Acceptance Criteria:**

**Given** I am accessing the platform
**When** I have not set a language preference
**Then** the language is detected from browser locale (Accept-Language header)
**And** a language selector is available in the header (dropdown: FR, EN)
**And** selecting a language updates: `user_preferences.language`
**And** the preference is persisted across sessions
**And** the entire UI updates immediately without page reload
**And** for magic link users without account, language is stored in cookie
**And** default fallback is French (FR)

---

### Story 9.2: French UI Translation

**As a** user who prefers French,
**I want** all interface elements in French,
**So that** I can navigate and use the platform comfortably.

**Acceptance Criteria:**

**Given** my language preference is French (FR)
**When** I use the platform
**Then** all UI elements are displayed in French:
- Navigation labels, buttons, form labels, error messages
- Placeholder text, tooltips, modal titles
- Date/time format: DD/MM/YYYY, 24h format
- Number format: 1 234 567,89 €
**And** translations are stored in `/locales/fr.json`
**And** missing translations fall back to key name (for debugging)
**And** accessibility labels (ARIA) are also translated
**And** legal content (CGU, privacy) is available in French

---

### Story 9.3: English UI Translation

**As a** user who prefers English,
**I want** all interface elements in English,
**So that** I can navigate and use the platform comfortably.

**Acceptance Criteria:**

**Given** my language preference is English (EN)
**When** I use the platform
**Then** all UI elements are displayed in English:
- Navigation labels, buttons, form labels, error messages
- Placeholder text, tooltips, modal titles
- Date/time format: MM/DD/YYYY or YYYY-MM-DD (ISO)
- Number format: 1,234,567.89 €
**And** translations are stored in `/locales/en.json`
**And** missing translations fall back to French (FR)
**And** accessibility labels (ARIA) are also translated
**And** legal content (CGU, privacy) is available in English

---

### Story 9.4: Agent IA Language-Aware Responses

**As a** user,
**I want** the Agent IA to respond in my preferred language,
**So that** conversations are natural and understandable.

**Acceptance Criteria:**

**Given** my language preference is set
**When** I interact with the Agent IA chat
**Then** the Agent IA responds in my preferred language
**And** the system prompt includes: "Respond in {language}"
**And** if I write in the other language, the AI responds in my preferred language
**And** I can override per message: "Réponds en anglais"
**And** generated reports and summaries use my preferred language
**And** technical terms remain in their original language when appropriate

---

### Story 9.5: Localized Email Notifications

**As a** user,
**I want** to receive emails and notifications in my preferred language,
**So that** all communications are consistent.

**Acceptance Criteria:**

**Given** my language preference is set
**When** a notification is sent to me
**Then** the email subject and body are in my preferred language
**And** email templates exist in both FR and EN: `/email-templates/{lang}/`
**And** dynamic content (project names, amounts) is formatted per locale
**And** if recipient has no preference, sender's project language is used
**And** unsubscribe and legal footer are in the recipient's language
**And** for multi-recipient emails, each receives their preferred language version

---

### Story 9.6: Bilingual Document Templates

**As an** Admin,
**I want** document templates available in both French and English,
**So that** documents can be generated in the appropriate language.

**Acceptance Criteria:**

**Given** I am generating a document from template
**When** I select the output language
**Then** the template in the selected language is used
**And** templates exist in pairs: `nda_fr.docx`, `nda_en.docx`
**And** a `document_templates` table stores: `id`, `name`, `language`, `template_file`, `version`
**And** if template doesn't exist in selected language, fallback to French with warning
**And** generated documents include language indicator in filename
**And** I can preview templates before generating final document

---

## Epic 10: RGPD Compliance & Data Rights

Garantir la conformité RGPD et respecter les droits des utilisateurs sur leurs données.

### Story 10.1: Personal Data Export (Portability)

**As a** user,
**I want** to export all my personal data,
**So that** I can exercise my data portability rights (Art. 20 RGPD).

**Acceptance Criteria:**

**Given** I am logged in and access my profile settings
**When** I click "Export My Data"
**Then** a data export request is created
**And** a `data_export_requests` table stores: `id`, `user_id`, `status`, `requested_at`, `completed_at`, `download_link`, `expires_at`
**And** the export includes: profile data, activity logs, documents I uploaded, chat history
**And** the export is generated in JSON and CSV formats (zipped)
**And** the export is available for download within 30 days per NFR-I5
**And** I receive an email when the export is ready
**And** the download link expires after 7 days
**And** re-export is rate-limited to once per 30 days

---

### Story 10.2: Data Deletion (Right to be Forgotten)

**As a** user,
**I want** to request deletion of my personal data,
**So that** I can exercise my right to be forgotten (Art. 17 RGPD).

**Acceptance Criteria:**

**Given** I am logged in and access my profile settings
**When** I click "Delete My Account and Data"
**Then** a confirmation dialog explains: what will be deleted, what will be anonymized, irreversibility
**And** I must type "DELETE" to confirm
**And** a `data_deletion_requests` table stores: `id`, `user_id`, `status`, `requested_at`, `scheduled_at`, `completed_at`
**And** deletion is scheduled after 14-day cooling-off period (can be cancelled)
**And** after execution:
- Personal data is deleted: name, email, preferences
- Activity data is anonymized: user_id → "anonymous-{hash}"
- Documents are retained per legal requirements (10 years for signed docs)
**And** I receive confirmation email when deletion is complete
**And** deletion is completed within 30 days per NFR-C3

---

### Story 10.3: AI Decision Explanation

**As a** user,
**I want** to understand how the Agent IA made a decision,
**So that** I can verify the reasoning (Art. 22 RGPD).

**Acceptance Criteria:**

**Given** the Agent IA has made a suggestion or categorization
**When** I click "Explain this decision"
**Then** the system displays:
- The input data used
- The reasoning steps
- Confidence level
- Alternative options considered
**And** explanations are stored in `ai_explanations` table: `id`, `action_id`, `explanation_text`, `created_at`
**And** explanations are human-readable (not raw model output)
**And** if the decision involves external data, sources are cited
**And** I can provide feedback: "This explanation is helpful/not helpful"
**And** per NFR-C8, all AI decisions can be overridden by humans

---

### Story 10.4: RGPD Treatment Registry

**As an** Admin,
**I want** to access the RGPD treatment registry,
**So that** I can demonstrate compliance to regulators (Art. 30 RGPD).

**Acceptance Criteria:**

**Given** I am logged in as Admin
**When** I access "RGPD Compliance" in administration
**Then** I see the treatment registry listing:
- Treatment name and purpose
- Data categories processed
- Legal basis
- Retention period
- Security measures
- Third-party transfers
**And** a `rgpd_treatments` table stores: `id`, `name`, `purpose`, `data_categories`, `legal_basis`, `retention_period`, `security_measures`, `third_parties`, `created_at`, `updated_at`
**And** the registry is pre-populated with platform treatments
**And** I can export the registry as PDF or CSV
**And** last update date is prominently displayed
**And** missing or incomplete entries are flagged

---

### Story 10.5: Differentiated Retention Periods

**As a** system,
**I want** to apply different retention periods to different data types,
**So that** data is kept only as long as legally required.

**Acceptance Criteria:**

**Given** retention policies are configured
**When** the daily retention job runs
**Then** data past its retention period is:
- Deleted (for non-essential data)
- Anonymized (for analytics data)
- Archived (for legal retention data)
**And** a `retention_policies` table stores: `id`, `data_type`, `retention_days`, `action` (delete/anonymize/archive)
**And** default policies:
- Activity logs: 365 days → anonymize
- Unsigned documents: 180 days → delete
- Signed documents: 3650 days (10 years) → archive
- Chat messages: 730 days → delete
**And** a `retention_audit_log` tracks all retention actions
**And** retention runs during low-traffic hours (2-4 AM)
**And** I can preview: "X records would be affected by this policy"

---

