---
stepsCompleted:
  - 'step-01-init'
  - 'step-02-discovery'
  - 'step-03-success'
  - 'step-04-journeys'
  - 'step-05-domain'
  - 'step-06-innovation'
  - 'step-07-project-type'
  - 'step-08-scoping'
  - 'step-09-functional'
  - 'step-10-nonfunctional'
  - 'step-11-polish'
classification:
  projectType: 'web_app'
  domain: 'project_management'
  complexity: 'high'
  projectContext: 'greenfield'
  productStrategy: 'ai_first'
  businessModel: 'internal_tool'
inputDocuments:
  - '01_Synthese_Projet_Antivol_IRVE.pdf'
  - '02_CCTP_Antivol_IRVE.pdf'
  - '03_DCE_Antivol_IRVE.pdf'
  - 'brainstorming-session-2026-01-16.md'
  - 'business-model-paas-safewire.md'
  - 'garantie-zero-impact-specification.md'
  - 'NDA-fabricants-gaine-template.md'
workflowType: 'prd'
documentCounts:
  briefs: 0
  research: 0
  brainstorming: 1
  projectDocs: 6
---

# Product Requirements Document - Plateforme Projet SAFEWIRE

**Auteur:** jean claude
**Date:** 2026-01-16

---

## Executive Summary

**Produit:** Plateforme de gestion de projet pour le développement du produit SAFEWIRE (solution anti-vol câbles IRVE)

**Différenciateur clé:** Agent IA omniprésent comme interface principale. Vision : "La meilleure plateforme de gestion de projet est celle qu'on n'utilise pas - parce que l'Agent IA gère tout."

**Utilisateurs cibles:**
- IOT START (MOA) - Validation, suivi stratégique
- LABOR CONTROL (MOE) - Coordination, rédaction, analyse
- Fabricants - Soumission offres, signatures NDA
- Investisseurs - Rapports santé projet
- Partenaires - Collaboration

**Approche MVP:** Platform MVP complet avec toutes intégrations (Claude API, Yousign eIDAS, Stripe Identity) dès le jour 1

**Scope document:**
- 73 Functional Requirements (contrat de capacités)
- 55 Non-Functional Requirements (attributs qualité)
- 7 User Journeys détaillés
- 4 axes domaine (RGPD, IA, Signatures, Confidentialité)

**Stack technique:** Next.js sur Scaleway (40-90€/mois)

---

## Contexte

Ce PRD décrit la **plateforme de gestion de projet** pour le développement du produit SAFEWIRE (solution anti-vol pour câbles IRVE). La plateforme est un outil interne pour coordonner IOT START, LABOR CONTROL, fabricants, partenaires et investisseurs.

**Note:** Le produit SAFEWIRE lui-même (gaine anti-vol + plateforme NFC traçabilité) n'est PAS l'objet de ce PRD. Le SaaS de traçabilité NFC existe déjà et sera adapté en T2.

---

## Success Criteria

### User Success

| Utilisateur | Critère | Cible |
|-------------|---------|-------|
| **IOT START (MOA)** | Visibilité projet temps réel | Dashboard KPI actualisé <1h |
| **IOT START (MOA)** | Alertes prédictives Agent IA | Notification <24h avant problème |
| **IOT START (MOA)** | Validation dépenses | 1 clic depuis email/dashboard |
| **LABOR CONTROL (MOE)** | Gain temps rédaction | -50% via Chat IA |
| **LABOR CONTROL (MOE)** | Analyse devis | Comparatif auto <10 min |
| **LABOR CONTROL (MOE)** | Saisie factures | Email → parsing auto |
| **Fabricant** | Onboarding | Vérif Stripe + Signature NDA <10 min |
| **Investisseur** | Confiance | Rapport santé projet hebdo |
| **Partenaire** | Traçabilité | Historique complet échanges |

### Business Success

| Critère | Cible |
|---------|-------|
| Adoption interne | 100% équipe projet |
| Adoption externe | >80% fabricants/partenaires actifs |
| Gain productivité MOE | -30% temps coordination |
| Traçabilité décisions | 100% documentées |
| Risques détectés proactivement | +80% |
| Temps sur plateforme/semaine | <30 min (moins = mieux) |
| Réunions de suivi/mois | 0 (objectif zéro réunion) |

### Technical Success

| Critère | Cible |
|---------|-------|
| Utilisateurs simultanés | 10 |
| Disponibilité | 99% |
| Temps réponse | <3s |
| Agent IA réponse | <10s |
| Chiffrement | TLS 1.3 (transit) + AES-256 (rest) |
| Vérification identité | Stripe Identity (KYC) |
| Signatures | Yousign eIDAS |
| Audit trail | 100% actions tracées |
| RGPD | Conformité complète |
| Hébergement | Scaleway uniquement |
| Backup | Quotidien chiffré |

---

## Philosophie Produit (First Principles)

| Principe | Application |
|----------|-------------|
| **FP1** | Agent IA = interface principale (dashboard = backup) |
| **FP2** | Zéro connexion obligatoire pour externes (magic links) |
| **FP3** | Objectif zéro réunion de suivi (tout asynchrone) |
| **FP4** | Temps = Argent fusionnés (Earned Value natif) |
| **FP5** | Prédiction > Réaction (alertes tendances, pas seuils) |
| **FP6** | Succès = temps minimal sur la plateforme |

> **Vision :** "La meilleure plateforme de gestion de projet est celle qu'on n'utilise pas - parce que l'Agent IA gère tout."

---

## Product Scope

### MVP - Minimum Viable Product

#### Architecture centrée Agent IA

| Composant | Rôle | Interaction utilisateur |
|-----------|------|-------------------------|
| **Agent IA** | Interface principale | Email, chat, notifications push |
| **Dashboard** | Vue de backup/exploration | Connexion occasionnelle |
| **Magic Links** | Accès contextuels | 1 clic = action directe |

#### Modules MVP

| Module | Fonctionnalités |
|--------|-----------------|
| **Agent IA Omniprésent** | Email dédié (agent@safewire.io), parsing factures/devis, alertes prédictives, résumés asynchrones, rapport santé hebdo, préconisations proactives |
| **Earned Value** | Vue unifiée Gantt + Budget, avancement vs coût, projection fin de projet |
| **GED** | Upload, versioning, circuit validation, signatures Yousign, magic links |
| **Formulaires** | NDA, consentements, templates dynamiques |
| **Gestion budgétaire** | Catégories (R&D, Fabrication, Certification, Marketing, Juridique, NFC), validation IOT START, import factures auto |
| **Dashboard KPI** | Avancement, budget, risques, personnalisable par profil |
| **Gestion accès** | Multi-profils (MOA, MOE, fabricants, investisseurs, partenaires), magic links, Stripe Identity |
| **Chat IA** | Rédaction consultations, analyse devis, comparatifs fournisseurs, scan conformité |

#### Catégories budgétaires

| Catégorie | Exemples |
|-----------|----------|
| R&D / Prototype | Tests matériaux, maquettes |
| Fabrication | Devis fabricants, outillage |
| Certification | Tests normes, ADN forensique |
| Marketing | Site vitrine, supports commerciaux |
| Juridique | NDA, brevets, contrats |
| Plateforme NFC | Adaptation SaaS T2 |

#### Agent IA - Seuils d'alerte

| Métrique | Seuil jaune | Seuil rouge |
|----------|-------------|-------------|
| Budget consommé | 70% | 90% |
| Retard jalon | 2 jours | 5 jours |
| Docs en attente validation | 3 docs | 5 docs |
| Écart prévisionnel | 10% | 20% |

#### Sécurité MVP

| Mesure | Implémentation |
|--------|----------------|
| Magic links | 256 bits, expiration 24h, usage unique |
| Chiffrement | TLS 1.3 (transit), AES-256 (rest) |
| Signatures | Yousign eIDAS |
| Vérification identité | Stripe Identity (KYC) |
| Agent IA | Sanitization inputs, guardrails prompt injection |
| Stockage | Scaleway Object Storage, signed URLs uniquement |
| Audit trail | Logs immuables horodatés |
| RGPD | Consentement, droit suppression, registre traitements |

#### Checklist sécurité MVP

- [ ] Politique de confidentialité
- [ ] Mentions légales
- [ ] Registre des traitements RGPD
- [ ] Procédure droit à l'oubli
- [ ] Logs d'audit immuables
- [ ] Chiffrement at rest (AES-256) et in transit (TLS 1.3)
- [ ] Backup chiffré quotidien
- [ ] Rate limiting API
- [ ] WAF (Web Application Firewall)

### Growth Features (Post-MVP)

| Fonctionnalité | Description |
|----------------|-------------|
| Agent IA multi-modal | Voix (interaction vocale) |
| Scan IA conformité avancé | Validation réglementaire automatique |
| Vitrine investisseur | Présentation projet, métriques |
| Site vitrine commerciale | Présentation SAFEWIRE prospects |
| Intégration SaaS NFC | Lien avec plateforme traçabilité (T2) |
| Mini-réunions audio | Huddles intégrés (style Slack) |
| Kanban optionnel | Vue tâches simplifiée |

### Vision (Future)

| Opportunité | Description |
|-------------|-------------|
| Template projet réutilisable | Pour autres projets IOT START |
| Offre SaaS | Gestion projet hardware pour startups |
| Agent IA générique | Commercialisable |
| Marketplace | Partenaires/fabricants |

---

## Architecture Technique

### Stack technologique

| Composant | Technologie | Hébergement |
|-----------|-------------|-------------|
| Application | Next.js | Scaleway Serverless Container |
| Base de données | PostgreSQL | Scaleway Managed Database |
| Stockage GED | Object Storage | Scaleway S3-compatible |
| Chat IA | API Claude | Service externe |
| Signatures | Yousign | Service externe |
| Vérification identité | Stripe Identity | Service externe |

### Coût infrastructure estimé

| Service | Coût mensuel |
|---------|--------------|
| Scaleway Container | 20-50€ |
| Scaleway PostgreSQL | 15-30€ |
| Scaleway Object Storage | 5-10€ |
| **Total** | **40-90€/mois** |

### Schéma architecture

```
┌─────────────────────────────────────────────────────┐
│                    SCALEWAY                          │
├─────────────────────────────────────────────────────┤
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐ │
│  │  Next.js    │  │  PostgreSQL │  │   Object    │ │
│  │  + WAF      │  │  + Encrypt  │  │   Storage   │ │
│  │  + Rate     │  │  + Backup   │  │  + Signed   │ │
│  │    Limit    │  │             │  │    URLs     │ │
│  └─────────────┘  └─────────────┘  └─────────────┘ │
│         │                │                │        │
│         └────────────────┼────────────────┘        │
│                          │                          │
│              ┌───────────▼───────────┐             │
│              │    AUDIT TRAIL        │             │
│              │  (Logs immuables)     │             │
│              └───────────────────────┘             │
└─────────────────────────────────────────────────────┘
            │              │              │
    ┌───────▼───┐  ┌───────▼───┐  ┌──────▼────┐
    │  Claude   │  │  Yousign  │  │  Stripe   │
    │  (API)    │  │ (Signature)│  │ (Identity)│
    └───────────┘  └───────────┘  └───────────┘
```

---

## Utilisateurs et Rôles

| Rôle | Organisation | Accès | Authentification |
|------|--------------|-------|------------------|
| **Admin** | LABOR CONTROL | Tout | Email + MFA |
| **MOA** | IOT START | Dashboard, validation, budget | Email + MFA |
| **MOE** | LABOR CONTROL | GED, Gantt, Chat IA, budget | Email + MFA |
| **Fabricant** | PLASTUB, OMERIN, etc. | Docs techniques, soumission offres | Magic link + Stripe Identity |
| **Investisseur** | - | Vue synthétique, rapports | Magic link + Stripe Identity |
| **Partenaire** | ID4 MOBILITY, etc. | Espace collaboratif | Magic link |

---

## User Journeys

### Parcours 1 : Sophie - L'Assistante Chef de Projet (MOE - LABOR CONTROL)

**Persona:** Sophie, 32 ans, assistante chef de projet chez LABOR CONTROL. Rigoureuse et organisée, elle jongle entre plusieurs projets et redoute les oublis.

**Situation:** Sophie gère la coordination du projet SAFEWIRE. Elle passe des heures à rédiger des consultations, comparer des devis, et relancer les parties prenantes.

**Parcours narratif:**

*Scène d'ouverture:* Lundi matin, Sophie ouvre sa boîte mail - 47 messages non lus dont 3 devis fabricants, 2 relances en attente, et une demande urgente de Marc (IOT START). Elle soupire devant l'ampleur de la coordination manuelle.

*Action montante:* Sophie découvre la plateforme. Elle dicte au Chat IA les critères de la consultation gaine anti-vol. En 10 minutes, le document est prêt - formaté, référencé, professionnel. Elle importe les 3 devis par email. L'Agent IA parse automatiquement les données et génère un comparatif avec analyse des écarts.

**Mode Supervision Active:** Avant que l'Agent IA n'envoie une relance automatique ou un rapport, Sophie peut voir le contenu en preview et valider/modifier. Elle garde le contrôle tout en bénéficiant de l'automatisation.

*Climax:* L'Agent IA détecte un écart de 15% sur un devis et alerte Sophie AVANT qu'elle ne le présente à Marc. Il suggère une négociation sur le volume. Sophie ajuste et économise 8000€ sur la commande.

*Résolution:* Sophie termine sa journée à 17h30 au lieu de 20h. Elle a confiance dans ses livrables. L'Agent IA prépare déjà le brief du lendemain.

---

### Parcours 2 : Marc - Le Directeur Projet (MOA - IOT START)

**Persona:** Marc, 45 ans, directeur associé IOT START. Visionnaire mais débordé, il a besoin de voir l'essentiel sans se noyer dans les détails.

**Situation:** Marc doit suivre l'avancement du projet SAFEWIRE tout en gérant 5 autres initiatives. Il veut des alertes, pas des réunions.

**Parcours narratif:**

*Scène d'ouverture:* Marc est en déplacement. Entre deux rendez-vous, il reçoit une notification : "Alerte jaune - Retard potentiel jalon T3 : 2 jours. Action suggérée : valider priorité prototype."

*Action montante:* Marc clique sur le magic link dans l'email. Sans login, il accède directement à la vue Earned Value. Le Gantt montre le jalon en jaune. Le budget associé clignote - 70% consommé. L'Agent IA propose : "Décaler tests certification de 3 jours pour absorber retard prototype ?"

**Page d'accueil personnalisée + Mode Focus:** À chaque retour sur la plateforme, Marc voit le contexte : dernières actions, alertes en cours, décisions en attente. **Mode Focus activé par défaut** : UNE seule métrique critique mise en avant (le problème du jour), le reste accessible en un tap. Pas de surcharge cognitive.

*Climax:* Marc valide la proposition en un tap depuis son téléphone. L'Agent IA recalcule automatiquement le planning, notifie les parties concernées, et met à jour le rapport investisseur.

*Résolution:* Marc n'a pas eu besoin de réunion de suivi. Il a pris une décision informée en 2 minutes. Son objectif "zéro réunion" devient réalité.

---

### Parcours 3 : Pierre - Le Fabricant (PLASTUB)

**Persona:** Pierre, 52 ans, responsable commercial chez PLASTUB. Méfiant envers les "plateformes de plus", il veut du simple et du concret.

**Situation:** PLASTUB répond à la consultation pour la fabrication des gaines. Pierre reçoit des dizaines de RFQ par semaine et déteste les portails complexes.

**Parcours narratif:**

*Scène d'ouverture:* Pierre reçoit un email **ultra sobre** : logo IOT START discret, nom du projet, action demandée. Pas de branding excessif. Confiance = simplicité. Un bouton : "Voir le cahier des charges".

**Vérification identité AVANT accès docs confidentiels:** Le magic link déclenche d'abord Stripe Identity (photo pièce d'identité + selfie - 2 minutes). Une fois vérifié, Pierre accède au CCTP. Les documents sensibles ne sont jamais exposés à des identités non vérifiées.

*Action montante:* Pierre lit le CCTP, télécharge le PDF pour son équipe technique. Une semaine plus tard, il reçoit un nouveau lien : "Soumettre votre offre". Il remplit un formulaire simple, joint son devis PDF.

**Comportement deadline transparent:** Si Pierre soumet après la date limite, le système affiche clairement : "Soumission hors délai - sera traitée selon disponibilité MOE" avec transparence sur le processus.

**Test charge deadline:** Le système supporte 10+ soumissions simultanées à l'approche de la deadline sans dégradation.

*Climax:* Pierre signe électroniquement le NDA via Yousign. Tout est tracé, légal, sans paperasse.

*Résolution:* Pierre a répondu à une consultation complète en moins de 30 minutes cumulées. Il reçoit un accusé de réception automatique et sera notifié du résultat. Simple, professionnel, efficace.

---

### Parcours 4 : Claire - L'Investisseuse

**Persona:** Claire, 38 ans, analyste chez un fonds d'investissement cleantech. Elle évalue des dizaines de dossiers et a besoin de confiance, pas de promesses.

**Situation:** Claire envisage d'investir dans IOT START via le projet SAFEWIRE. Elle veut des métriques fiables, pas des slides marketing.

**Parcours narratif:**

*Scène d'ouverture:* Claire reçoit un rapport hebdomadaire automatique : **email teaser uniquement** - "Santé projet SAFEWIRE - Semaine 12 : Score 87/100" avec lien sécurisé. Aucune donnée sensible dans l'email lui-même.

*Action montante:* Via magic link + vérification Stripe Identity, Claire accède à sa vue investisseur. Elle voit : avancement réel vs prévu (Earned Value), consommation budget par catégorie, risques identifiés et mitigations, jalons atteints avec preuves.

**Magic link expiré = régénération automatique:** Si Claire clique 25h après réception, le système propose : "Lien expiré - Recevoir un nouveau lien ?" Un clic et elle reçoit un magic link frais.

**Mode Expert progressif:** Après 4 visites, Claire connaît l'interface. Le système propose : "Activer mode Expert ?" qui retire les explications et affiche plus de données. L'UX s'adapte à son niveau.

**Fallback services externes:** Si Claude API est indisponible, Claire voit une notification : "Mode dégradé - analyses IA temporairement limitées, données brutes disponibles". La plateforme reste fonctionnelle.

*Climax:* L'Agent IA a généré une projection : "À rythme actuel, livraison MVP dans 14 semaines (+/- 2 semaines intervalle confiance 80%)". Claire peut zoomer sur chaque hypothèse. Transparence totale.

*Résolution:* Claire présente le dossier SAFEWIRE à son comité avec des données vérifiables. Elle fait confiance au projet parce qu'elle voit la réalité, pas une façade. L'investissement est approuvé.

---

### Parcours 5 : L'Agent IA - Le Collaborateur Invisible

**Persona:** L'Agent IA SAFEWIRE, disponible 24/7, patient infatigable, mémoire parfaite.

**Situation:** L'Agent IA orchestre les flux, anticipe les problèmes, et libère les humains des tâches répétitives.

**Parcours narratif:**

*Scène d'ouverture:* 6h du matin. L'Agent IA analyse les données de la nuit : 2 factures reçues par email, 1 document uploadé, 3 deadlines dans les 5 prochains jours.

**Health check externe + alertes:** Un monitoring indépendant vérifie que l'Agent IA fonctionne. Si l'analyse nocturne plante, l'admin LABOR CONTROL reçoit une alerte immédiate. Pas de silence radio.

*Action montante:* Il parse les factures automatiquement, les catégorise (R&D, Fabrication), prépare la validation pour Marc. Il détecte que le document uploadé est une version mise à jour du CCTP - il le versione automatiquement et notifie les parties prenantes concernées.

*Climax:* L'Agent IA identifie une tendance : les réponses fabricants arrivent en moyenne 1.5 jour avant deadline. Il calcule que la prochaine consultation risque de n'avoir qu'une seule réponse si lancée vendredi. Il suggère à Sophie : "Lancer consultation lundi pour maximiser les réponses ?"

**Mode dégradé intelligent avec priorités:**

| Service indisponible | Fonctions maintenues | Fonctions dégradées |
|---------------------|---------------------|---------------------|
| Claude API | Dashboard, alertes basiques, GED | Parsing factures, Chat IA, analyses prédictives |
| Yousign | Tout sauf signatures | Signatures en file d'attente |
| Stripe Identity | Tout sauf vérification | Vérifs en file d'attente |

**File d'attente** : Priorité par deadline > type d'action critique > FIFO. À la reprise du service, traitement automatique dans l'ordre de priorité.

*Résolution:* Les humains arrivent le matin avec un brief clair : voici ce qui s'est passé, voici ce qui vous attend, voici mes suggestions. Le projet avance même quand personne ne travaille.

---

### Parcours 6 : Admin - Le Bootstrap Initial

**Persona:** Administrateur technique (LABOR CONTROL) qui configure un nouveau projet.

**Situation:** Nouveau projet à créer dans la plateforme avec tous les paramètres initiaux.

**Parcours narratif:**

*Scène d'ouverture:* L'admin accède au mode Setup. Un wizard le guide : nom du projet, parties prenantes, catégories budgétaires, jalons clés.

*Action montante:* Il importe un planning existant (Excel/MS Project), configure les seuils d'alerte Agent IA, invite les premiers utilisateurs avec leurs rôles.

*Climax:* La plateforme génère automatiquement les espaces GED, les dashboards par profil, et active l'Agent IA avec le contexte projet.

*Résolution:* En moins d'une heure, le projet est opérationnel. Les premiers magic links partent aux parties prenantes.

---

### Parcours 7 : Onboarding Initial - Le Tout Premier Projet

**Persona:** L'équipe LABOR CONTROL qui déploie la plateforme pour la première fois.

**Situation:** La plateforme est installée mais vide. Il faut créer le projet SAFEWIRE comme premier projet.

**Parcours narratif:**

*Scène d'ouverture:* Premier accès à la plateforme vierge. Un assistant d'onboarding s'affiche : "Bienvenue ! Créons votre premier projet ensemble."

*Action montante:* Le wizard propose : "Utiliser le template SAFEWIRE (pré-configuré) ou créer un projet vide ?" Le template SAFEWIRE inclut : catégories budgétaires adaptées, jalons types projet hardware, rôles pré-définis (MOA, MOE, Fabricant, Investisseur).

*Climax:* L'admin personnalise le template : dates réelles, budgets réels, parties prenantes réelles. L'Agent IA est pré-entraîné avec le contexte SAFEWIRE (CCTP, brief, objectifs).

*Résolution:* En 2 heures, le projet SAFEWIRE est opérationnel avec historique, contexte et configuration complète. Le template peut servir de base pour les futurs projets IOT START.

---

### Journey Requirements Summary

| Parcours | Capacités révélées |
|----------|-------------------|
| Sophie (MOE) | Chat IA rédaction, parsing devis, comparatifs, alertes écarts, mode supervision active |
| Marc (MOA) | Dashboard Earned Value, magic links, alertes prédictives, validation mobile, page accueil contextualisée, mode Focus |
| Pierre (Fabricant) | Vérif identité AVANT docs, email sobre, GED simplifiée, Yousign, comportement deadline, test charge |
| Claire (Investisseur) | Email teaser only, régénération magic link, mode Expert progressif, fallback services |
| Agent IA | Health check externe, parsing auto, versioning, analyses tendances, mode dégradé documenté, file prioritaire |
| Admin (Setup) | Wizard configuration, import planning, templates projet, activation Agent IA |
| Onboarding Initial | Template SAFEWIRE, wizard premier projet, Agent IA pré-entraîné |

---

## Domain-Specific Requirements

### RGPD & Données Personnelles

**Stockage Stripe Identity:**
- Les données biométriques (photos pièce d'identité, selfies) restent chez Stripe
- Seul le résultat de vérification (vérifié/non vérifié + ID session) est stocké côté plateforme
- Pas de réplication des documents d'identité sur Scaleway

**Durée de rétention:**

| Type de données | Durée | Justification légale |
|-----------------|-------|---------------------|
| Données projet actif | Durée du projet | Exécution contrat |
| Audit trail | 10 ans après clôture | Obligation légale (Code Commerce) |
| Données personnelles fabricants | 3 ans après dernier contact | Intérêt légitime prospection |
| Résultats vérification Stripe | Durée collaboration + 1 an | Preuve de diligence |
| Signatures Yousign | 10 ans | Valeur probante contrats |

**Portabilité:**
- Export complet des données personnelles en format JSON/CSV sur demande
- Délai : 30 jours maximum (conformité RGPD)
- Inclut : profil, historique actions, documents uploadés par le demandeur

### Agent IA & Responsabilité

**Responsabilité erreurs IA:**

| Scénario | Responsable | Mitigation |
|----------|-------------|------------|
| Parsing incorrect facture | LABOR CONTROL (opérateur) | Mode Supervision Active obligatoire pour montants > seuil |
| Suggestion erronée acceptée | Décideur humain (Marc/Sophie) | Traçabilité décision humaine explicite |
| Relance auto inappropriée | LABOR CONTROL | Preview obligatoire avant envoi |

**Traçabilité décisions IA:**
- Chaque suggestion IA est loggée avec : timestamp, contexte, données utilisées, suggestion générée
- Si suggestion acceptée : log de qui a accepté, quand, modification éventuelle
- Rétention : 5 ans (audit interne)

**Droit à l'explication (Art. 22 RGPD):**
- L'Agent IA ne prend PAS de décision automatisée produisant des effets juridiques
- Toutes les décisions sont validées par un humain
- Sur demande : export du raisonnement IA pour une décision spécifique

### Signatures Électroniques & Valeur Légale

**Niveau de signature Yousign:**

| Document | Niveau requis | Justification |
|----------|---------------|---------------|
| NDA fabricants | Avancée (eIDAS) | Valeur probante renforcée |
| Validation dépense interne | Simple | Usage interne, pas de tiers |
| Contrats fabrication | Avancée (eIDAS) | Engagement financier significatif |
| Consentements RGPD | Simple | Preuve de consentement suffit |

**Conservation preuves:**
- Fichiers de preuve Yousign : 10 ans (hébergés chez Yousign)
- Copie du document signé : Scaleway Object Storage, 10 ans
- Horodatage : qualifié eIDAS via Yousign

**Archivage légal:**
- Les documents signés sont archivés avec leur preuve de signature
- Format : PDF/A-3 (archivage long terme)
- Intégrité : hash SHA-256 vérifié annuellement

### Confidentialité Projet Hardware

**Cloisonnement fabricants:**

| Règle | Implémentation |
|-------|----------------|
| Fabricant A ne voit pas les offres de B | Isolation par projet + rôle |
| Fabricant ne voit que SES documents | ACL par document + utilisateur |
| Comparatif devis = MOE only | Rôle MOE exclusif |

**Traces d'accès:**
- Log immuable : qui a accédé à quel document, quand, action (vue/download/upload)
- Alerte si accès inhabituel (hors heures, depuis IP non reconnue)
- Export des logs pour audit sur demande

**Watermarking documents confidentiels:**
- PDF téléchargés : watermark invisible avec ID utilisateur + timestamp
- En cas de fuite : traçabilité source possible
- Désactivable par document si non pertinent

### Synthèse Exigences Domaine

| Catégorie | Exigence | Implémentation |
|-----------|----------|----------------|
| **RGPD** | Données Stripe chez Stripe | Pas de réplication biométrique |
| **RGPD** | Rétention différenciée | 3 ans contacts, 10 ans audit/signatures |
| **RGPD** | Portabilité 30 jours | Export JSON/CSV automatisé |
| **IA** | Responsabilité humaine | Mode Supervision Active, validation explicite |
| **IA** | Traçabilité décisions | Logs raisonnement IA 5 ans |
| **IA** | Pas de décision auto Art.22 | Humain dans la boucle obligatoire |
| **Signatures** | Niveau avancé NDA/contrats | Yousign eIDAS |
| **Signatures** | Conservation 10 ans | PDF/A-3 + preuves Yousign |
| **Confidentialité** | Cloisonnement fabricants | ACL par document + rôle |
| **Confidentialité** | Audit accès | Logs immuables horodatés |
| **Confidentialité** | Watermarking | ID utilisateur invisible sur PDF |

---

## Web App Specific Requirements

### Architecture de Rendu

| Section | Stratégie | Justification |
|---------|-----------|---------------|
| Landing / Vitrine | SSR (Next.js) | SEO, premier affichage rapide |
| Dashboard authentifié | CSR/SPA | Interactivité, état complexe |
| Pages Magic Link | SSR | Premier accès rapide, pas de JS requis pour afficher |
| Chat IA | CSR + SSE streaming | Réponses progressives |

### Matrice Navigateurs

| Navigateur | Version | Support |
|------------|---------|---------|
| Chrome | 2 dernières | Complet |
| Firefox | 2 dernières | Complet |
| Safari | 2 dernières | Complet |
| Edge | 2 dernières | Complet |
| Safari iOS | 2 dernières | Complet |
| Chrome Android | 2 dernières | Complet |
| IE11 | Toutes | Non supporté |

### Design Responsive

| Breakpoint | Cible | Priorité |
|------------|-------|----------|
| Mobile (<640px) | Marc sur téléphone, Pierre en déplacement | Haute (magic links) |
| Tablet (640-1024px) | Usage occasionnel | Moyenne |
| Desktop (>1024px) | Sophie, Claire (usage principal) | Haute |

**Mobile-first pour magic links** : Les pages accessibles via magic link doivent être parfaitement utilisables sur mobile (validation 1-tap, formulaires simples).

### Objectifs Performance

| Métrique | Cible | Justification |
|----------|-------|---------------|
| LCP (Largest Contentful Paint) | <2.5s | Standard Core Web Vitals |
| FID (First Input Delay) | <100ms | Réactivité interactions |
| CLS (Cumulative Layout Shift) | <0.1 | Stabilité visuelle |
| TTI (Time to Interactive) | <3s | Objectif technique défini |
| Réponse API | <500ms (P95) | UX fluide |
| Réponse Agent IA | <10s | Déjà défini |

### Stratégie SEO

| Section | SEO | Actions |
|---------|-----|---------|
| **MVP** | | |
| Dashboard | Non | noindex, nofollow |
| Magic link pages | Non | noindex (privées) |
| **Growth** | | |
| Vitrine investisseur | Oui | SSR, meta tags, sitemap |
| Site vitrine commerciale | Oui | SSR, structured data, blog |

### Accessibilité (WCAG 2.1 AA)

| Critère | Implémentation |
|---------|----------------|
| Contraste | 4.5:1 minimum (texte), 3:1 (éléments UI) |
| Navigation clavier | Tab order logique, focus visible |
| Screen readers | Labels ARIA, landmarks, alt text |
| Formulaires | Labels associés, messages d'erreur accessibles |
| Animations | Respect prefers-reduced-motion |
| Touch targets | 44x44px minimum (mobile) |

### Real-Time & Notifications

| Fonctionnalité | Technologie | Justification |
|----------------|-------------|---------------|
| Chat IA streaming | SSE (Server-Sent Events) | Réponses progressives, unidirectionnel |
| Dashboard refresh | Polling (5 min) ou manual | Pas besoin temps réel strict |
| Notifications | Push API + fallback email | Fonctionne même app fermée |
| Alertes Agent IA | Email + push | Déjà défini comme canal principal |

**Pas de WebSocket permanent** : Économie ressources serveur, SSE suffit pour le streaming IA.

---

## Project Scoping & Phased Development

### MVP Strategy & Philosophy

**Approche MVP:** Platform MVP complet - toutes les fonctionnalités core avec intégrations externes dès le jour 1.

**Justification:**
- La valeur différenciante repose sur l'écosystème complet (Agent IA + signatures légales + vérification identité)
- Un MVP partiel sans Yousign/Stripe diluerait la proposition de valeur
- Les fabricants et investisseurs attendent un processus professionnel dès le premier contact

**Ressources MVP:**
- 2 développeurs full-stack senior
- 1 spécialiste IA/backend
- Infrastructure : 40-90€/mois Scaleway

### MVP Feature Set (Phase 1)

**Parcours utilisateurs couverts:**

| Parcours | Couvert MVP | Commentaire |
|----------|-------------|-------------|
| Sophie (MOE) | Complet | Chat IA, parsing, comparatifs |
| Marc (MOA) | Complet | Dashboard, validations, magic links |
| Pierre (Fabricant) | Complet | Stripe Identity + Yousign |
| Claire (Investisseur) | Complet | Rapports auto, vue santé projet |
| Agent IA | Complet | Email dédié, parsing, alertes |
| Admin | Complet | Wizard setup, templates |

**Modules MVP:**

| Module | Fonctionnalités clés |
|--------|---------------------|
| Agent IA Omniprésent | Email dédié, parsing factures/devis, alertes prédictives, rapports hebdo, mode supervision |
| Earned Value | Vue Gantt + Budget unifiée, projections, alertes seuils |
| GED | Upload, versioning, circuit validation, signed URLs |
| Gestion budgétaire | Catégories, validation MOA, import factures auto |
| Dashboard KPI | Vue par profil, mode Focus, page accueil personnalisée |
| Chat IA | Rédaction consultations, analyse devis, comparatifs |
| Gestion accès | Multi-profils, magic links 256 bits, MFA internes |
| Stripe Identity | Vérification KYC fabricants/investisseurs |
| Yousign | Signatures eIDAS NDA et contrats |

### Post-MVP Features

**Phase 2 - Growth:**

| Feature | Priorité | Dépendance |
|---------|----------|------------|
| Vitrine investisseur publique | Haute | SEO, landing pages |
| Site vitrine commerciale | Haute | Marketing SAFEWIRE |
| Agent IA multi-modal (voix) | Moyenne | API vocale |
| Scan IA conformité avancé | Moyenne | Fine-tuning modèle |
| Mini-réunions audio (Huddles) | Basse | Si objectif zéro réunion échoue |
| Kanban optionnel | Basse | Si demande utilisateurs |

**Phase 3 - Expansion:**

| Feature | Opportunité |
|---------|-------------|
| Template projet réutilisable | Autres projets IOT START |
| Offre SaaS externe | Gestion projet hardware startups |
| Agent IA générique | Commercialisable |
| Marketplace partenaires | Écosystème fabricants |
| Intégration SaaS NFC | Lien traçabilité T2 |

### Risk Mitigation Strategy

**Risques techniques:**

| Risque | Probabilité | Impact | Mitigation |
|--------|-------------|--------|------------|
| Parsing IA imprécis | Moyenne | Haut | Mode Supervision Active obligatoire, amélioration continue |
| Indisponibilité Claude API | Faible | Moyen | Mode dégradé documenté, file d'attente |
| Intégration Yousign/Stripe | Faible | Moyen | SDKs matures, sandbox testing |
| Performance streaming | Faible | Faible | SSE éprouvé, Scaleway dimensionné |

**Risques marché:**

| Risque | Mitigation |
|--------|------------|
| Adoption fabricants | Email ultra sobre, friction minimale, pas de compte |
| Confiance investisseurs | Données vérifiables, transparence totale, pas de slides |
| Résistance au changement MOE | Gain temps visible rapidement (-50% rédaction) |

**Risques ressources:**

| Scénario | Contingence |
|----------|-------------|
| Équipe réduite | Prioriser Agent IA + GED, reporter Dashboard avancé |
| Budget limité | Scaleway très économique (40-90€), pas de vendor lock-in |
| Délais serrés | Template SAFEWIRE pré-configuré accélère onboarding |

---

## Functional Requirements

### Agent IA & Automatisation

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

### Gestion Documentaire (GED)

- **FR13:** L'utilisateur peut uploader des documents sur la plateforme
- **FR14:** Le système peut versionner automatiquement les documents modifiés
- **FR15:** Le MOE peut définir un circuit de validation pour un document
- **FR16:** Le validateur peut approuver ou rejeter un document en attente
- **FR17:** L'utilisateur peut signer électroniquement un document via Yousign
- **FR18:** Le fabricant peut télécharger les documents auxquels il a accès
- **FR19:** Le système peut appliquer un watermark invisible sur les PDF confidentiels
- **FR20:** L'utilisateur peut consulter l'historique des versions d'un document
- **FR21:** Le système peut archiver les documents signés au format PDF/A-3

### Suivi Projet (Earned Value)

- **FR22:** L'utilisateur peut visualiser le planning Gantt avec les jalons
- **FR23:** L'utilisateur peut visualiser la consommation budgétaire par catégorie
- **FR24:** Le système peut afficher une vue unifiée Gantt + Budget (Earned Value)
- **FR25:** L'utilisateur peut voir les projections de fin de projet
- **FR26:** Le système peut calculer et afficher les écarts avancement vs coût
- **FR27:** Le MOA peut valider un ajustement de planning proposé par l'Agent IA
- **FR28:** L'utilisateur peut configurer les seuils d'alerte par métrique

### Gestion Budgétaire

- **FR29:** Le MOE peut créer et gérer les catégories budgétaires
- **FR30:** Le MOE peut saisir manuellement une dépense
- **FR31:** Le système peut importer automatiquement les factures depuis l'email
- **FR32:** Le MOA peut valider ou rejeter une dépense
- **FR33:** Le MOA peut valider une dépense en un clic depuis un magic link
- **FR34:** L'utilisateur peut consulter l'historique des dépenses par catégorie
- **FR35:** Le système peut alerter quand un seuil budgétaire est atteint

### Accès & Sécurité

- **FR36:** L'Admin peut inviter un utilisateur avec un rôle spécifique
- **FR37:** L'utilisateur interne peut s'authentifier par email + MFA
- **FR38:** L'utilisateur externe peut accéder via magic link sans créer de compte
- **FR39:** Le fabricant/investisseur peut vérifier son identité via Stripe Identity
- **FR40:** Le système peut régénérer automatiquement un magic link expiré sur demande
- **FR41:** L'Admin peut définir les permissions par rôle et par document
- **FR42:** Le système peut cloisonner les accès entre fabricants concurrents
- **FR43:** L'utilisateur peut consulter ses propres traces d'accès
- **FR44:** L'Admin peut consulter l'audit trail complet des accès

### Communication & Notifications

- **FR45:** L'Agent IA peut envoyer des notifications par email
- **FR46:** L'utilisateur peut recevoir des notifications push
- **FR47:** L'investisseur peut recevoir un rapport hebdomadaire automatique
- **FR48:** Le fabricant peut recevoir un accusé de réception automatique après soumission
- **FR49:** Le système peut envoyer des emails sobres sans branding excessif
- **FR50:** L'utilisateur peut choisir ses préférences de notification

### Formulaires & Onboarding

- **FR51:** Le fabricant peut remplir et soumettre un formulaire de réponse à consultation
- **FR52:** L'utilisateur peut signer un NDA électroniquement
- **FR53:** L'utilisateur peut donner son consentement RGPD
- **FR54:** Le système peut afficher le comportement deadline (soumission hors délai)
- **FR55:** L'investisseur peut activer le Mode Expert après plusieurs visites

### Administration & Configuration

- **FR56:** L'Admin peut créer un nouveau projet via wizard guidé
- **FR57:** L'Admin peut importer un planning existant (Excel/MS Project)
- **FR58:** L'Admin peut configurer les seuils d'alerte de l'Agent IA
- **FR59:** L'Admin peut utiliser le template SAFEWIRE pré-configuré
- **FR60:** L'Admin peut personnaliser les dashboards par profil
- **FR61:** L'Admin peut pré-entraîner l'Agent IA avec le contexte projet
- **FR62:** L'Admin peut monitorer le health check des services externes

### Internationalisation & Interface

- **FR63:** L'utilisateur peut choisir la langue de l'interface (FR/EN)
- **FR64:** Le système peut afficher tous les contenus UI en français
- **FR65:** Le système peut afficher tous les contenus UI en anglais
- **FR66:** L'Agent IA peut générer ses réponses dans la langue préférée de l'utilisateur
- **FR67:** Les emails et notifications peuvent être envoyés dans la langue préférée
- **FR68:** Les templates de documents peuvent exister en versions FR et EN

### Conformité & RGPD

- **FR69:** L'utilisateur peut demander l'export de ses données personnelles
- **FR70:** L'utilisateur peut demander la suppression de ses données (droit à l'oubli)
- **FR71:** Le système peut fournir l'explication du raisonnement IA sur demande
- **FR72:** L'Admin peut consulter le registre des traitements RGPD
- **FR73:** Le système peut appliquer les durées de rétention différenciées

---

## Non-Functional Requirements

### Performance

| ID | Exigence | Cible | Mesure |
|----|----------|-------|--------|
| **NFR-P1** | Temps de réponse pages standard | < 500ms (P95) | Monitoring APM |
| **NFR-P2** | Largest Contentful Paint (LCP) | < 2.5s | Core Web Vitals |
| **NFR-P3** | First Input Delay (FID) | < 100ms | Core Web Vitals |
| **NFR-P4** | Cumulative Layout Shift (CLS) | < 0.1 | Core Web Vitals |
| **NFR-P5** | Time to Interactive (TTI) | < 3s | Lighthouse |
| **NFR-P6** | Réponse API backend | < 500ms (P95) | Monitoring |
| **NFR-P7** | Réponse Agent IA (Chat) | < 10s premier token | Timer applicatif |
| **NFR-P8** | Rendu magic link page | < 1s | Tests automatisés |
| **NFR-P9** | Utilisateurs simultanés supportés | 10 minimum | Tests de charge |

### Sécurité

| ID | Exigence | Implémentation | Vérification |
|----|----------|----------------|--------------|
| **NFR-S1** | Chiffrement en transit | TLS 1.3 obligatoire | SSL Labs A+ |
| **NFR-S2** | Chiffrement au repos | AES-256 | Audit technique |
| **NFR-S3** | Magic links | 256 bits, expiration 24h, usage unique | Tests automatisés |
| **NFR-S4** | Authentification MFA | Obligatoire utilisateurs internes | Audit accès |
| **NFR-S5** | Vérification identité externe | Stripe Identity avant accès docs sensibles | Logs audit |
| **NFR-S6** | Cloisonnement données | Fabricants ne voient que leurs documents | Tests isolation |
| **NFR-S7** | Audit trail immuable | Toutes actions horodatées, non modifiables | Intégrité logs |
| **NFR-S8** | Protection injection | Sanitization inputs, guardrails prompt IA | OWASP ZAP |
| **NFR-S9** | Rate limiting API | Limites par utilisateur/IP | Tests charge |
| **NFR-S10** | WAF actif | Protection attaques courantes | Logs WAF |

### Fiabilité & Disponibilité

| ID | Exigence | Cible | Mitigation |
|----|----------|-------|------------|
| **NFR-R1** | Disponibilité globale | 99% (8.76h downtime/an max) | Monitoring 24/7 |
| **NFR-R2** | Mode dégradé Claude API | Fonctions core maintenues | File d'attente, alertes basiques |
| **NFR-R3** | Mode dégradé Yousign | Signatures en file d'attente | Reprise auto à reconnexion |
| **NFR-R4** | Mode dégradé Stripe Identity | Vérifications en file d'attente | Reprise auto à reconnexion |
| **NFR-R5** | Backup données | Quotidien, chiffré, testé mensuellement | Restore test |
| **NFR-R6** | Health check Agent IA | Monitoring externe indépendant | Alerte admin si échec |
| **NFR-R7** | Recovery Time Objective (RTO) | < 4h | Procédure restore |
| **NFR-R8** | Recovery Point Objective (RPO) | < 24h (dernier backup) | Fréquence backup |

### Accessibilité

| ID | Exigence | Standard | Vérification |
|----|----------|----------|--------------|
| **NFR-A1** | Conformité globale | WCAG 2.1 niveau AA | Audit axe-core |
| **NFR-A2** | Contraste texte | 4.5:1 minimum | Tests automatisés |
| **NFR-A3** | Contraste éléments UI | 3:1 minimum | Tests automatisés |
| **NFR-A4** | Navigation clavier | Tab order logique, focus visible | Tests manuels |
| **NFR-A5** | Compatibilité lecteurs écran | ARIA landmarks, labels | Tests NVDA/VoiceOver |
| **NFR-A6** | Touch targets mobile | 44x44px minimum | Audit responsive |
| **NFR-A7** | Animations | Respect prefers-reduced-motion | Tests CSS |
| **NFR-A8** | Formulaires | Labels associés, erreurs accessibles | Tests automatisés |

### Intégration & Interopérabilité

| ID | Exigence | Service | SLA attendu |
|----|----------|---------|-------------|
| **NFR-I1** | Intégration Claude API | Anthropic | Timeout 30s, retry 3x |
| **NFR-I2** | Intégration Yousign | Yousign | Webhook confirmation, retry |
| **NFR-I3** | Intégration Stripe Identity | Stripe | Webhook confirmation, retry |
| **NFR-I4** | Parsing email entrant | Mailgun/Sendgrid | Traitement < 5min |
| **NFR-I5** | Export données RGPD | JSON/CSV | < 30 jours sur demande |
| **NFR-I6** | Import planning externe | Excel, MS Project | Formats standards supportés |
| **NFR-I7** | Streaming SSE | Chat IA | Connexion stable, reconnexion auto |

### Conformité & Légal

| ID | Exigence | Réglementation | Vérification |
|----|----------|----------------|--------------|
| **NFR-C1** | Conformité RGPD | RGPD EU | Audit DPO annuel |
| **NFR-C2** | Registre traitements | Art. 30 RGPD | Document maintenu |
| **NFR-C3** | Droit à l'oubli | Art. 17 RGPD | Procédure < 30 jours |
| **NFR-C4** | Portabilité données | Art. 20 RGPD | Export JSON/CSV |
| **NFR-C5** | Signatures eIDAS | Règlement eIDAS | Certificat Yousign |
| **NFR-C6** | Conservation documents signés | Code Commerce | 10 ans, PDF/A-3 |
| **NFR-C7** | Hébergement données | Souveraineté | Scaleway (France/EU uniquement) |
| **NFR-C8** | Pas de décision auto Art.22 | RGPD | Humain dans la boucle |

### Maintenabilité & Opérations

| ID | Exigence | Cible | Mesure |
|----|----------|-------|--------|
| **NFR-M1** | Logs centralisés | Tous services | Agrégation temps réel |
| **NFR-M2** | Monitoring applicatif | Métriques clés | Dashboard ops |
| **NFR-M3** | Alerting | Incidents critiques | Notification < 5min |
| **NFR-M4** | Déploiement | Zero-downtime | CI/CD automatisé |
| **NFR-M5** | Rollback | < 15min | Procédure testée |

---
