# Garantie Zéro Impact - Spécification Complète
## SAFEWIRE - Engagement de Résultat

**Version:** 1.0
**Date:** 2026-01-16
**Statut:** Draft - À valider avec actuaire/assureur

---

## 1. Principe Fondamental

> **"En cas de vol d'une gaine SAFEWIRE, le client ne subit aucune perte financière."**

IOT START assume 100% du risque résiduel. Le client paie pour une **solution**, pas pour un **produit**.

### 1.1 Positionnement Stratégique

| Approche traditionnelle | Garantie Zéro Impact |
|-------------------------|----------------------|
| "Nous vendons une protection" | "Nous garantissons un résultat" |
| Risque reste chez le client | Risque transféré à IOT START |
| Relation transactionnelle | Partenariat aligné |
| Concurrence sur le prix | Concurrence sur la valeur |

### 1.2 Justification du Premium

La Garantie Zéro Impact justifie un pricing +40% vs offre standard :
- PROFESSIONAL sans garantie : 18€/mois
- ENTERPRISE avec garantie : 25€/mois
- Option garantie seule : +5€/mois

---

## 2. Périmètre de Couverture

### 2.1 Ce qui est couvert

| Poste | Description | Plafond |
|-------|-------------|---------|
| **Remplacement gaine** | Nouvelle gaine identique livrée | Valeur neuve |
| **Frais de livraison** | Express 48h | Inclus |
| **Indemnité indisponibilité** | Compensation perte d'exploitation borne | Voir barème |
| **Frais administratifs** | Temps passé déclarations | Forfait 50€ |
| **Coordination installation** | Si installateur partenaire | Inclus |

### 2.2 Barème Indemnité Indisponibilité

Basé sur le manque à gagner estimé par type de borne :

| Type borne | Puissance | Indemnité/jour | Justification |
|------------|-----------|----------------|---------------|
| AC lente | 7 kW | 10€ | ~2 sessions/jour × 5€ marge |
| AC standard | 22 kW | 15€ | ~3 sessions/jour × 5€ marge |
| DC moyenne | 50 kW | 40€ | ~5 sessions/jour × 8€ marge |
| DC rapide | 150 kW | 80€ | ~8 sessions/jour × 10€ marge |
| DC ultra-rapide | 350 kW | 150€ | ~12 sessions/jour × 12€ marge |

**Période indemnisée :** De la déclaration de vol jusqu'à la remise en service (installation nouvelle gaine).

### 2.3 Plafonds

| Plafond | Valeur | Rationale |
|---------|--------|-----------|
| Par incident | 30 jours d'indemnité | Délai max raisonnable de remise en service |
| Par an et par client | 90 jours d'indemnité | Protection contre abus/sinistralité anormale |
| Par an et par gaine | 2 incidents | Au-delà : audit sécurité site obligatoire |

### 2.4 Exclusions

**Ne sont PAS couverts :**

1. **Vol avec violence** - Agression du personnel lors de l'intervention
2. **Catastrophe naturelle** - Inondation, tempête, séisme
3. **Acte de guerre/terrorisme** - Définition code des assurances
4. **Négligence manifeste** :
   - Gaine non installée conformément aux specs
   - Gaine laissée non fixée sur site
   - Absence d'enregistrement NFC
5. **Fraude** - Fausse déclaration, vol simulé
6. **Site non sécurisé** - Absence totale de surveillance (caméra OU éclairage OU passage)
7. **Récidive sans action corrective** - 3ème vol sur même site sans mesures de sécurisation

---

## 3. Processus de Réclamation

### 3.1 Workflow Sinistre

```
┌─────────────────────────────────────────────────────────────────┐
│                     DÉCLARATION (J0)                            │
│  Client déclare vol sur plateforme NFC (obligatoire)            │
│  Informations requises : date, heure estimée, circonstances     │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│                     VÉRIFICATION (J0-J1)                        │
│  IOT START vérifie :                                            │
│  - Gaine enregistrée et active                                  │
│  - Contrat avec Garantie Zéro Impact                            │
│  - Pas d'exclusion évidente                                     │
│  - Historique client (récidive ?)                               │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│                     VALIDATION (J1)                             │
│  Notification client : réclamation acceptée/refusée             │
│  Si acceptée : déclenchement livraison + début indemnité        │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│                     LIVRAISON (J1-J2)                           │
│  Expédition gaine de remplacement en express                    │
│  Tracking communiqué au client                                  │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│                     INSTALLATION (J2-J5)                        │
│  Client ou installateur partenaire                              │
│  Activation NFC nouvelle gaine                                  │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│                     CLÔTURE (J5-J7)                             │
│  Confirmation remise en service sur plateforme                  │
│  Calcul indemnité finale (nb jours × tarif borne)               │
│  Émission avoir ou virement sous 15 jours                       │
└─────────────────────────────────────────────────────────────────┘
```

### 3.2 Délais Engagés

| Étape | Délai SLA | Pénalité si dépassé |
|-------|-----------|---------------------|
| Accusé réception déclaration | 4h | - |
| Décision validation | 24h | +1 jour indemnité offert |
| Expédition gaine | 48h | +2 jours indemnité offerts |
| Versement indemnité | 15 jours | Intérêts légaux |

### 3.3 Pièces Justificatives

**Obligatoires :**
- Déclaration sur plateforme NFC (horodatée)
- Photo du site post-vol (si possible)

**Optionnelles mais recommandées :**
- Dépôt de plainte (accélère traitement assurance client)
- Vidéosurveillance (si disponible)

**NON exigées :**
- Dépôt de plainte n'est PAS obligatoire pour activer la garantie
- Aucun formulaire papier

---

## 4. Calcul de Provision

### 4.1 Hypothèses Actuarielles

| Paramètre | Hypothèse basse | Hypothèse centrale | Hypothèse haute |
|-----------|-----------------|--------------------|--------------------|
| Taux vol marché (sans protection) | 2%/an | 3%/an | 5%/an |
| Réduction grâce SAFEWIRE | 80% | 75% | 60% |
| **Taux vol résiduel SAFEWIRE** | **0.4%/an** | **0.75%/an** | **2%/an** |

**Justification réduction 75% :**
- Dissuasion visuelle (gaine renforcée visible) : -30%
- Dissuasion technique (temps de découpe x3) : -25%
- Dissuasion traçabilité (ADN + NFC connu) : -20%

### 4.2 Coût Moyen par Sinistre

| Poste | Montant estimé |
|-------|----------------|
| Gaine remplacement (coût de revient) | 45€ |
| Livraison express | 25€ |
| Indemnité indisponibilité (5 jours × 40€ moyen) | 200€ |
| Forfait administratif | 50€ |
| **TOTAL PAR SINISTRE** | **320€** |

### 4.3 Calcul Provision Annuelle

**Formule :**
```
Provision = Parc gaines × Taux sinistre × Coût moyen sinistre × Marge sécurité
```

**Scénarios (pour parc de 10 000 gaines) :**

| Scénario | Taux sinistre | Nb sinistres | Coût total | Provision (avec marge 25%) |
|----------|---------------|--------------|------------|----------------------------|
| Optimiste | 0.4% | 40 | 12 800€ | 16 000€ |
| **Central** | **0.75%** | **75** | **24 000€** | **30 000€** |
| Pessimiste | 2.0% | 200 | 64 000€ | 80 000€ |

### 4.4 Ratio Provision / CA

**Hypothèse centrale (parc 10 000 gaines, 75% avec garantie) :**

| Métrique | Valeur |
|----------|--------|
| Gaines avec garantie | 7 500 |
| Revenu garantie (5€/mois × 12) | 450 000€/an |
| Provision nécessaire | 30 000€ |
| **Ratio provision/revenu** | **6.7%** |

**Recommandation :** Provisionner **8% du CA garantie** pour absorber les variations.

### 4.5 Sensibilité

| Si taux sinistre... | Impact provision | Action |
|---------------------|------------------|--------|
| < 0.5% | Excédent → marge | Réduire prix ou améliorer couverture |
| 0.5% - 1.0% | Dans les clous | Maintenir |
| 1.0% - 1.5% | Tension | Analyser causes, ajuster pricing |
| > 1.5% | Déficit | Revoir exclusions ou augmenter tarif |

---

## 5. Réassurance

### 5.1 Options de Transfert de Risque

| Option | Description | Avantages | Inconvénients |
|--------|-------------|-----------|---------------|
| **Auto-assurance** | IOT START porte 100% du risque | Marge maximale, simplicité | Exposition totale |
| **Captive** | Filiale d'assurance dédiée | Optimisation fiscale | Complexité, capital |
| **Réassurance** | Contrat avec assureur (AXA, Allianz) | Risque plafonné | Coût prime, dépendance |
| **Hybride** | Auto-assurance + stop-loss | Équilibre risque/coût | Complexité modérée |

### 5.2 Recommandation

**Phase 1 (Lancement - 5 000 gaines) :** Auto-assurance
- Provision 8% du CA garantie
- Suivi mensuel sinistralité
- Ajustement tarif si dérive

**Phase 2 (Croissance - 5 000 à 20 000 gaines) :** Hybride
- Auto-assurance jusqu'à 50 000€/an de sinistres
- Contrat stop-loss au-delà (réassureur)

**Phase 3 (Scale - > 20 000 gaines) :** Partenariat assureur
- Co-branding avec assureur partenaire
- Mutualisation du risque
- Offre intégrée assurance RC + Zéro Impact

---

## 6. Conditions Générales (Draft)

### Article 1 - Objet
La Garantie Zéro Impact est un engagement contractuel d'IOT START envers le Client titulaire d'un contrat PaaS ENTERPRISE ou de l'option Garantie Zéro Impact, visant à indemniser intégralement le Client en cas de vol avéré d'une gaine SAFEWIRE.

### Article 2 - Activation
La garantie est activée dès l'enregistrement de la gaine sur la plateforme NFC et reste active pendant toute la durée du contrat PaaS, sous réserve du paiement des échéances.

### Article 3 - Déclaration de sinistre
Le Client doit déclarer tout vol sur la plateforme NFC dans un délai de 48 heures suivant sa constatation. Passé ce délai, IOT START se réserve le droit de refuser la prise en charge.

### Article 4 - Indemnisation
L'indemnisation comprend :
- Le remplacement de la gaine volée
- Une indemnité d'indisponibilité selon le barème en vigueur
- Un forfait de frais administratifs

### Article 5 - Plafonds
L'indemnisation est plafonnée à :
- 30 jours d'indemnité par incident
- 90 jours d'indemnité par an et par Client
- 2 incidents par an et par gaine

### Article 6 - Exclusions
Sont exclus de la garantie les cas listés à l'article 2.4 du présent document.

### Article 7 - Subrogation
En cas d'indemnisation, IOT START est subrogé dans les droits du Client à l'encontre de tout tiers responsable du vol.

### Article 8 - Modification
IOT START se réserve le droit de modifier les conditions de la garantie avec un préavis de 3 mois. Le Client pourra alors résilier sans pénalité.

---

## 7. Communication Marketing

### 7.1 Messages Clés

**Headline :**
> "SAFEWIRE : La première protection IRVE avec garantie de résultat."

**Promesse :**
> "Avec la Garantie Zéro Impact, vous ne payez plus pour un produit, mais pour une solution. Si malgré tout un vol se produit, nous assumons 100% des conséquences financières."

**Proof points :**
- Remplacement sous 48h
- Indemnité d'indisponibilité immédiate
- Aucune franchise, aucun formulaire papier
- Déclaration en 2 minutes sur la plateforme

### 7.2 FAQ Client

**Q : Et si le vol se produit quand même ?**
R : C'est précisément là que la Garantie Zéro Impact prend tout son sens. Nous vous envoyons une nouvelle gaine sous 48h et vous indemnisons pour chaque jour d'indisponibilité de votre borne.

**Q : Y a-t-il une franchise ?**
R : Non. Aucune franchise, aucun reste à charge. Zéro Impact signifie zéro euro de votre poche.

**Q : Dois-je porter plainte ?**
R : Ce n'est pas obligatoire pour activer la garantie. Nous vous le recommandons pour vos propres démarches, mais ce n'est pas une condition.

**Q : Combien de fois puis-je utiliser la garantie ?**
R : Jusqu'à 2 incidents par gaine et par an, et 90 jours d'indemnité cumulés par an sur l'ensemble de votre parc.

---

## 8. Tableau de Bord Suivi

### 8.1 KPIs Mensuels

| KPI | Cible | Alerte |
|-----|-------|--------|
| Taux sinistralité | < 0.75%/an | > 1%/an |
| Délai moyen validation | < 24h | > 48h |
| Délai moyen livraison | < 48h | > 72h |
| Coût moyen sinistre | < 320€ | > 400€ |
| Ratio provision/sinistres | > 100% | < 80% |
| NPS clients sinistrés | > 60 | < 40 |

### 8.2 Reporting Direction

**Fréquence :** Mensuel
**Contenu :**
- Nombre de déclarations
- Taux d'acceptation
- Montant total indemnisé
- Provision consommée vs budgétée
- Top 3 sites à risque
- Évolution tendance sinistralité

---

## 9. Prochaines Étapes

1. [ ] Validation juridique des conditions générales
2. [ ] Consultation actuaire pour validation hypothèses
3. [ ] Contact assureurs pour option réassurance (AXA, Allianz, Generali)
4. [ ] Développement module déclaration sinistre plateforme NFC
5. [ ] Rédaction FAQ et supports commerciaux
6. [ ] Formation équipe support au process sinistre
7. [ ] Test du process avec clients pilotes

---

## Annexe : Benchmark Garanties Concurrentes

| Acteur | Garantie | Couverture | Notre avantage |
|--------|----------|------------|----------------|
| CableGuard (UK) | Aucune | - | Garantie Zéro Impact unique |
| CatStrap (US) | "Satisfaction guarantee" | Remplacement uniquement | + Indemnité indisponibilité |
| Assureurs classiques | RC Exploitation | Franchise 500-1000€ + délais | Zéro franchise, 48h |

**Conclusion :** Aucun concurrent n'offre de garantie de résultat avec indemnisation de l'indisponibilité. Différenciation majeure.
