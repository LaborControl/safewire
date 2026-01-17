# Business Model - Protection as a Service (PaaS)
## SAFEWIRE - Modèle Économique Subscription

**Version:** 1.0
**Date:** 2026-01-16
**Auteur:** IOT START

---

## Executive Summary

Transformation du modèle de vente de gaines anti-vol (CAPEX one-shot) vers un modèle d'abonnement récurrent (OPEX) incluant produit + plateforme + services + garanties. Ce modèle génère un ARR prévisible et crée une barrière à l'entrée pour les concurrents.

---

## 1. Offres et Pricing

### 1.1 Grille Tarifaire

| Offre | Prix/mois/gaine | Engagement | Cible |
|-------|-----------------|------------|-------|
| **ESSENTIAL** | 12€ | 24 mois | PME, petits opérateurs |
| **PROFESSIONAL** | 18€ | 36 mois | Opérateurs régionaux |
| **ENTERPRISE** | 25€ | 48 mois | Grands comptes (Electra, Ionity) |

### 1.2 Détail des Offres

#### ESSENTIAL (12€/mois)
**Inclus :**
- Gaine SAFEWIRE (propriété IOT START, mise à disposition)
- Marquage ADN forensique
- Tag NFC intégré
- Accès plateforme NFC (consultation uniquement)
- Support email J+2
- Remplacement en cas de vol avéré (franchise 50€)

**Non inclus :**
- Personnalisation
- API plateforme
- Garantie indisponibilité

---

#### PROFESSIONAL (18€/mois)
**Inclus :**
- Tout ESSENTIAL +
- Accès plateforme NFC complet (export, alertes)
- Support prioritaire J+1
- Remplacement vol sans franchise
- Dashboard analytics par site
- Formation initiale (2h visio)

**Non inclus :**
- Personnalisation couleur/logo
- Garantie Zéro Impact
- API temps réel

---

#### ENTERPRISE (25€/mois)
**Inclus :**
- Tout PROFESSIONAL +
- **Garantie Zéro Impact** (voir section 4)
- Personnalisation (couleurs, logo, marquage)
- API temps réel + webhooks
- Account manager dédié
- Support 24/7
- Rapports mensuels personnalisés
- Formation sur site
- Intégration SI client

---

### 1.3 Options Additionnelles

| Option | Prix/mois | Compatible |
|--------|-----------|------------|
| Garantie Zéro Impact | +5€ | ESSENTIAL, PROFESSIONAL |
| Personnalisation | +3€ | ESSENTIAL, PROFESSIONAL |
| API temps réel | +4€ | ESSENTIAL, PROFESSIONAL |
| Support 24/7 | +6€ | ESSENTIAL, PROFESSIONAL |
| Scoring risque site | +2€ | Toutes offres |

---

## 2. Service Level Agreement (SLA)

### 2.1 Disponibilité Plateforme NFC

| Offre | Disponibilité | Temps réponse incident |
|-------|---------------|------------------------|
| ESSENTIAL | 99.0% | 24h |
| PROFESSIONAL | 99.5% | 8h |
| ENTERPRISE | 99.9% | 2h |

**Calcul :** Mesuré mensuellement, hors maintenance planifiée (communiquée 72h avant).

### 2.2 Pénalités SLA

| Disponibilité réelle | Crédit |
|----------------------|--------|
| < engagement -0.5% | 10% mensualité |
| < engagement -1.0% | 25% mensualité |
| < engagement -2.0% | 50% mensualité |
| < engagement -5.0% | 100% mensualité |

### 2.3 Délais de Remplacement (Vol Avéré)

| Offre | Délai livraison | Conditions |
|-------|-----------------|------------|
| ESSENTIAL | 10 jours ouvrés | Dépôt plainte + déclaration plateforme |
| PROFESSIONAL | 5 jours ouvrés | Déclaration plateforme uniquement |
| ENTERPRISE | 48h | Déclaration plateforme uniquement |

### 2.4 Support

| Offre | Canaux | Horaires | Temps réponse |
|-------|--------|----------|---------------|
| ESSENTIAL | Email | L-V 9h-18h | 48h |
| PROFESSIONAL | Email, Téléphone | L-V 8h-20h | 24h |
| ENTERPRISE | Email, Téléphone, Chat | 24/7 | 4h |

---

## 3. Plateforme NFC - Fonctionnalités par Offre

### 3.1 Matrice Fonctionnalités

| Fonctionnalité | ESSENTIAL | PROFESSIONAL | ENTERPRISE |
|----------------|-----------|--------------|------------|
| Enregistrement gaines | ✅ | ✅ | ✅ |
| Consultation inventaire | ✅ | ✅ | ✅ |
| Déclaration vol | ✅ | ✅ | ✅ |
| Historique scans NFC | 30 jours | 12 mois | Illimité |
| Export données (CSV) | ❌ | ✅ | ✅ |
| Alertes email | ❌ | ✅ | ✅ |
| Dashboard analytics | ❌ | ✅ | ✅ |
| API lecture | ❌ | ❌ | ✅ |
| API temps réel + webhooks | ❌ | ❌ | ✅ |
| Rapports personnalisés | ❌ | ❌ | ✅ |
| Multi-utilisateurs | 1 | 5 | Illimité |
| Partage forces de l'ordre | ✅ | ✅ | ✅ |

### 3.2 Intégrations Disponibles (ENTERPRISE)

- Systèmes de supervision IRVE (OCPP)
- ERP/GMAO clients
- Outils de ticketing (Zendesk, ServiceNow)
- BI (PowerBI, Tableau)
- Assureurs partenaires (API dédiée)

---

## 4. Garantie Zéro Impact (Incluse ENTERPRISE / Option autres)

### 4.1 Principe

En cas de vol d'une gaine SAFEWIRE, IOT START s'engage à ce que le client ne subisse **aucune perte financière**, incluant :

1. **Remplacement gaine** - Nouvelle gaine livrée sous 48h
2. **Compensation indisponibilité** - Forfait par jour d'indisponibilité borne
3. **Frais administratifs** - Prise en charge démarches (déclaration, etc.)

### 4.2 Barème Compensation Indisponibilité

| Type de borne | Compensation/jour |
|---------------|-------------------|
| AC 7-22 kW | 15€ |
| DC 50 kW | 40€ |
| DC 150 kW | 80€ |
| DC 350 kW | 150€ |

**Plafond :** 30 jours par incident, 90 jours par an par client.

### 4.3 Conditions d'Activation

- Gaine enregistrée sur plateforme NFC
- Déclaration vol sous 48h sur plateforme
- Pas de négligence manifeste (gaine non installée, etc.)

### 4.4 Exclusions

- Vol avec violence/effraction sur personnel
- Catastrophe naturelle
- Acte de guerre/terrorisme
- Gaine non conforme aux specs d'installation

### 4.5 Provisionnement

**Hypothèses :**
- Taux de vol estimé : 2-3% du parc/an (source : étude marché)
- Avec SAFEWIRE : réduction estimée à 0.5%/an (dissuasion + traçabilité)

**Provision recommandée :** 8% du CA PaaS annuel

---

## 5. Modèle Économique

### 5.1 Unit Economics (par gaine/mois)

| Poste | ESSENTIAL | PROFESSIONAL | ENTERPRISE |
|-------|-----------|--------------|------------|
| **Revenu** | 12€ | 18€ | 25€ |
| Coût gaine (amorti 36 mois) | -2.50€ | -2.50€ | -3.50€ |
| Plateforme NFC (infra) | -0.80€ | -1.20€ | -1.50€ |
| Support (prorata) | -0.50€ | -1.00€ | -2.00€ |
| Provision Zéro Impact | -0€ | -0€ | -2.00€ |
| Provision remplacement | -0.60€ | -0.80€ | -0.80€ |
| **Marge brute** | **7.60€** | **12.50€** | **15.20€** |
| **Marge %** | **63%** | **69%** | **61%** |

### 5.2 Projections ARR (Année 1-3)

**Hypothèses :**
- Lancement T4 2026
- Parc cible : 5% du marché français (400 000 bornes en 2030)
- Mix : 50% ESSENTIAL, 35% PROFESSIONAL, 15% ENTERPRISE

| Année | Gaines déployées | ARR |
|-------|------------------|-----|
| 2027 (Y1) | 2 000 | 360 K€ |
| 2028 (Y2) | 8 000 | 1.44 M€ |
| 2029 (Y3) | 20 000 | 3.60 M€ |

### 5.3 Comparaison vs Vente One-Shot

| Modèle | Revenu Y1 | Revenu Y3 cumulé | Relation client |
|--------|-----------|------------------|-----------------|
| Vente (90€/gaine) | 180 K€ | 1.8 M€ | Transactionnelle |
| **PaaS (15€ moyen)** | 360 K€ | **5.4 M€** | Continue |

**Avantage PaaS :** +200% de revenu cumulé sur 3 ans + relation client durable.

---

## 6. Conditions Contractuelles

### 6.1 Engagement Minimum

| Offre | Engagement | Sortie anticipée |
|-------|------------|------------------|
| ESSENTIAL | 24 mois | 6 mois de pénalité |
| PROFESSIONAL | 36 mois | 9 mois de pénalité |
| ENTERPRISE | 48 mois | 12 mois de pénalité |

### 6.2 Propriété des Gaines

Les gaines restent **propriété d'IOT START** pendant toute la durée du contrat. Le client en a l'usage exclusif.

**À l'issue du contrat :**
- Renouvellement : gaines restent en place
- Non-renouvellement : restitution des gaines ou rachat (valeur résiduelle)
- Option d'achat : disponible après engagement minimum

### 6.3 Révision Tarifaire

- Indexation annuelle sur indice INSEE des prix à la consommation
- Plafond : +5%/an
- Notification 3 mois avant échéance

### 6.4 Résiliation pour Faute

**Par IOT START :**
- Non-paiement > 60 jours
- Usage frauduleux de la plateforme
- Dégradation volontaire des gaines

**Par le client :**
- Non-respect SLA répété (3 mois consécutifs)
- Cessation d'activité IOT START

---

## 7. Mise en Oeuvre

### 7.1 Parcours Client Type

```
1. Contact commercial
      ↓
2. Audit site (scoring risque)
      ↓
3. Proposition personnalisée
      ↓
4. Signature contrat PaaS
      ↓
5. Livraison gaines (J+15)
      ↓
6. Installation client ou partenaire
      ↓
7. Activation plateforme NFC
      ↓
8. Formation (PROFESSIONAL/ENTERPRISE)
      ↓
9. Suivi mensuel (ENTERPRISE)
```

### 7.2 Outils Nécessaires

- [ ] Contrat type PaaS (juridique)
- [ ] Plateforme NFC avec gestion abonnements
- [ ] Système de facturation récurrente (Stripe, Chargebee)
- [ ] CRM pour suivi client
- [ ] Outil de ticketing support
- [ ] Dashboard KPI (churn, ARR, NPS)

### 7.3 KPIs à Suivre

| KPI | Cible Y1 | Cible Y3 |
|-----|----------|----------|
| ARR | 360 K€ | 3.6 M€ |
| Churn mensuel | < 2% | < 1% |
| NPS | > 40 | > 50 |
| Taux upsell | 10% | 20% |
| Délai moyen remplacement | < 7j | < 3j |

---

## 8. Risques et Mitigations

| Risque | Impact | Mitigation |
|--------|--------|------------|
| Taux de vol supérieur aux prévisions | Provision insuffisante | Ajuster pricing, revoir garantie |
| Churn élevé | ARR instable | Programme fidélité, amélioration continue |
| Concurrents copient le modèle | Perte avantage | Brevets, avance technologique, relation client |
| Client souhaite achat one-shot | Perte opportunité | Proposer option hybride (achat + maintenance) |

---

## 9. Prochaines Étapes

1. [ ] Validation juridique du modèle (propriété gaines, responsabilités)
2. [ ] Développement module abonnement plateforme NFC
3. [ ] Intégration système facturation récurrente
4. [ ] Rédaction contrat type PaaS
5. [ ] Test pricing avec 2-3 prospects pilotes
6. [ ] Calcul provision Zéro Impact avec actuaire/assureur

---

## Annexe : Comparatif Concurrentiel

| Critère | SAFEWIRE PaaS | CableGuard (UK) | CatStrap (US) |
|---------|---------------|-----------------|---------------|
| Modèle | Subscription | Vente | Vente |
| Garantie Zéro Impact | ✅ | ❌ | ❌ |
| Plateforme traçabilité | ✅ Incluse | ❌ Option payante | ❌ |
| Marquage ADN | ✅ | ❌ | ✅ |
| Support 24/7 | ✅ (ENTERPRISE) | ❌ | ❌ |
| Présence France | ✅ Native | ❌ Import | ❌ Import |

**Différenciation clé :** Seul acteur à proposer un modèle tout-inclus avec garantie de résultat.
