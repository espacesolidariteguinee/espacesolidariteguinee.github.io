# Site officiel — ESPACE SOLIDARITÉ GUINÉE

Site web statique de l'association **Espace Solidarité Guinée** (association loi 1901, RNA **W932014102**).
Aucun outil technique n'est nécessaire pour le modifier : ce sont de simples fichiers HTML.

---

## 1. Publier le site gratuitement (GitHub Pages)

Durée : environ 15 minutes. Coût : 0 €. Aucune carte bancaire.

1. **Créez un compte GitHub** sur [github.com](https://github.com).
   Le compte de l'association est `espacesolidariteguinee` : c'est lui qui donne l'adresse du site.
2. Une fois connecté, cliquez sur le **+** en haut à droite → **New repository**.
3. Nommez le dépôt **exactement** : `espacesolidariteguinee.github.io`
   (c'est-à-dire `VOTRE-NOM-UTILISATEUR.github.io`).
4. Cochez **Public**, puis **Create repository**.
5. Sur la page qui s'affiche, cliquez sur **uploading an existing file**.
6. **Glissez-déposez tout le contenu du dossier `site`** (le fichier `index.html`, les dossiers
   `assets`, `association`, `actions`, `projets`, `transparence`, `soutenir`, `actualites`,
   `contact`, `mentions-legales`, ainsi que `sitemap.xml`, `robots.txt`, `404.html` et `.nojekyll`).
   ⚠️ Déposez le **contenu** du dossier, pas le dossier lui-même.
7. En bas, cliquez sur **Commit changes**.
8. Allez dans l'onglet **Settings** → **Pages** (menu de gauche).
   Sous *Build and deployment* → *Source*, choisissez **Deploy from a branch**,
   branche **main**, dossier **/ (root)**, puis **Save**.
9. Patientez 1 à 3 minutes. Votre site est en ligne à l'adresse :
   **https://espacesolidariteguinee.github.io**

> Le fichier `.nojekyll` est indispensable : ne le supprimez pas.

**Autres hébergeurs gratuits possibles** (même principe) : Netlify (glisser-déposer du dossier sur
[app.netlify.com/drop](https://app.netlify.com/drop)) ou Cloudflare Pages.

---

## 2. Connecter un vrai nom de domaine plus tard

Exemple avec `espacesolidariteguinee.org` ou `espacesolidariteguinee.org` (environ 10 à 15 € par an chez OVH, Gandi, Infomaniak…).

1. Achetez le domaine chez le registrar de votre choix.
2. Dans la zone DNS du registrar, créez :
   - 4 enregistrements **A** pour `@` pointant vers : `185.199.108.153`, `185.199.109.153`,
     `185.199.110.153`, `185.199.111.153`
   - 1 enregistrement **CNAME** pour `www` pointant vers `espacesolidariteguinee.github.io`
3. Dans GitHub : **Settings → Pages → Custom domain**, saisissez votre domaine, puis **Save**.
   Cochez ensuite **Enforce HTTPS** (le certificat est gratuit et automatique).
4. **Important pour Google** : remplacez l'ancienne adresse par la nouvelle partout dans le site.
   Ouvrez un terminal dans le dossier du site et lancez :

   ```bash
   grep -rl "espacesolidariteguinee.github.io" . | xargs sed -i 's|espacesolidariteguinee.github.io|espacesolidariteguinee.org|g'
   ```

   Sinon, faites un simple « Rechercher / Remplacer » dans un éditeur de texte sur tous les fichiers
   `.html`, `sitemap.xml` et `robots.txt`.

---

## 3. Modifier une information sur le site

Tout se modifie directement sur GitHub, sans rien installer :

1. Ouvrez votre dépôt sur github.com.
2. Cliquez sur le fichier à modifier (ex. `contact/index.html`).
3. Cliquez sur l'icône **crayon** (✏️ *Edit this file*).
4. Modifiez le texte, puis **Commit changes** en bas de page.
5. Le site est mis à jour automatiquement en 1 à 2 minutes.

**Où trouver quoi :**

| Ce que vous voulez changer | Fichier |
|---|---|
| Page d'accueil | `index.html` |
| Informations officielles, dirigeants | `association/index.html` |
| Description des 4 axes d'action | `actions/index.html` |
| Projets (préparation / en cours / réalisés) | `projets/index.html` |
| Documents, comptes, justificatifs | `transparence/index.html` |
| Dons, IBAN, HelloAsso, campagnes | `soutenir/index.html` |
| Actualités | `actualites/index.html` |
| E-mail, téléphone, formulaire | `contact/index.html` |
| Mentions légales | `mentions-legales/index.html` |
| Couleurs, polices, mise en page | `assets/css/style.css` |

Les emplacements à compléter sont signalés dans le texte par la mention **« À compléter »**
(surlignée en orange sur le site) et, dans le code, par des commentaires
`<!-- EMPLACEMENT RÉSERVÉ ... -->`.

---

## 4. Ajouter un nouveau projet

1. Ouvrez `projets/index.html`.
2. Cherchez le bloc de commentaire **« MODÈLE DE PROJET »**.
3. Copiez le bloc `<article class="projet"> ... </article>` qui s'y trouve.
4. Collez-le dans la bonne section :
   - `<section id="preparation">` pour un projet **en préparation**
   - `<section id="en-cours">` pour un projet **en cours**
   - `<section id="realises">` pour un projet **réalisé**
5. Remplacez tous les textes entre crochets `[ ... ]`.
6. Adaptez deux valeurs :
   - `data-statut="preparation"` → `preparation`, `en-cours` ou `realise`
   - `class="badge badge-prepa"` → `badge-prepa`, `badge-cours` ou `badge-realise`
7. Supprimez le bloc « Aucun projet… » de cette section s'il n'est plus pertinent.
8. **Commit changes**.

Champs à renseigner pour chaque projet : nom, localisation, objectif, description, bénéficiaires,
budget prévisionnel, montant collecté, état d'avancement, photos, résultats obtenus, date de réalisation.

> Règle d'or : ne publiez jamais un projet, un montant ou un résultat qui n'est pas réellement
> documenté. La crédibilité de l'association en dépend.

---

## 5. Ajouter des photos

1. Créez (une seule fois) le dossier `assets/img/projets/` dans votre dépôt.
   Sur GitHub : **Add file → Create new file**, tapez `assets/img/projets/.gitkeep`, puis *Commit*.
2. Pour envoyer une photo : ouvrez `assets/img/projets/` → **Add file → Upload files** → déposez
   l'image → *Commit*.
3. Dans le HTML, remplacez le bloc `placeholder-photo` par :

   ```html
   <img src="../assets/img/projets/mon-image.jpg" alt="Description précise de la photo"
        loading="lazy" width="800" height="450">
   ```

**Conseils :**

- Format **JPG**, largeur **1200 px maximum**, poids **inférieur à 300 Ko** (compressez sur
  [squoosh.app](https://squoosh.app), gratuit) — sinon le site devient lent sur mobile.
- Nommez les fichiers sans accents ni espaces : `forage-sackodou-2026.jpg`.
- Renseignez toujours l'attribut `alt` : c'est utile aux personnes malvoyantes **et** à Google.
- N'publiez pas de photo permettant d'identifier un bénéficiaire d'une aide médicale, et demandez
  l'accord des personnes photographiées.

---

## 6. Ajouter une actualité

1. Ouvrez `actualites/index.html`.
2. Repérez le commentaire **« MODÈLE D'ACTUALITÉ »** en bas de la liste.
3. Copiez le bloc `<article class="actu"> ... </article>`.
4. Collez-le **tout en haut de la liste**, juste après `<div class="grille" style="gap:20px">`,
   pour que la plus récente apparaisse en premier.
5. Remplacez le jour, le mois, le titre et le texte. **Commit changes**.

---

## 7. Faire apparaître le site dans Google

**a) Déclarer le site dans Google Search Console** (gratuit)

1. Allez sur [search.google.com/search-console](https://search.google.com/search-console).
2. Connectez-vous avec un compte Google et choisissez **Préfixe d'URL**.
3. Saisissez l'adresse complète du site (ex. `https://espacesolidariteguinee.github.io`).
4. Méthode de validation : choisissez **Balise HTML**. Google vous donne une ligne du type
   `<meta name="google-site-verification" content="xxxxx">`.
5. Collez cette ligne dans `index.html`, juste après `<head>`. **Commit changes**, attendez
   2 minutes, puis cliquez sur **Valider** dans Search Console.
6. Une fois validé : menu **Sitemaps** → saisissez `sitemap.xml` → **Envoyer**.
7. Menu **Inspection de l'URL** → collez l'adresse de votre site → **Demander une indexation**.
   Répétez pour les pages importantes (`/association/`, `/projets/`, `/transparence/`, `/soutenir/`).

L'indexation prend généralement **de quelques jours à trois semaines** pour un site neuf.

**b) Renforcer le référencement sur « Espace Solidarité Guinée »**

Google fait davantage confiance à un site cité ailleurs. Actions gratuites et efficaces :

- Créez une **fiche Google Business Profile** si l'association reçoit du public.
- Inscrivez l'association sur les annuaires associatifs gratuits :
  [Net1901.org](https://www.net1901.org), [Helloasso](https://www.helloasso.com),
  [Journal des Associations](https://www.journal-officiel.gouv.fr).
- Créez des pages sur les réseaux sociaux (Facebook, Instagram, LinkedIn) **en mettant le lien du
  site dans la biographie**, puis ajoutez ces liens sur la page Contact.
- Demandez à la mairie de Sevran ou aux partenaires de mentionner l'association avec un lien.
- Publiez régulièrement des actualités : un site qui bouge est mieux référencé qu'un site figé.

**c) Ce qui est déjà en place sur ce site**

- Titres SEO et meta-descriptions uniques sur chaque page
- Structure Hn correcte (un seul `<h1>` par page)
- URL propres (`/projets/`, `/transparence/`…)
- `sitemap.xml` et `robots.txt`
- Données structurées Schema.org (`NGO`, `BreadcrumbList`, `FAQPage`, `ContactPage`)
- Open Graph et Twitter Cards (aperçu enrichi lors du partage sur les réseaux sociaux)
- Site rapide, responsive et sans cookie de traçage

---

## 8. Informations qu'il reste à fournir

Ces éléments ne figuraient dans aucun document officiel fourni. Ils sont signalés sur le site par la
mention « À compléter » :

- [ ] Adresse e-mail de contact de l'association
- [ ] Numéro de téléphone (facultatif)
- [ ] Sigle officiel (si l'association souhaite en adopter un)
- [ ] Numéro SIREN / SIRET (si demandé)
- [ ] Coordonnées bancaires (IBAN / BIC) une fois le compte ouvert
- [ ] Lien de la page de collecte en ligne (HelloAsso ou équivalent)
- [ ] Comptes officiels sur les réseaux sociaux
- [ ] Montant de la cotisation d'adhésion
- [ ] Situation vis-à-vis des reçus fiscaux
- [ ] Projets réels : nom, lieu, objectif, bénéficiaires, budget, avancement, photos, résultats, dates
- [ ] Détail des besoins recensés dans la sous-préfecture de Sackodou
- [ ] Versions expurgées des documents officiels à mettre en téléchargement

---

## Sources des informations officielles publiées

Toutes les données administratives du site proviennent exclusivement des documents suivants :

| Information | Source |
|---|---|
| Nom, objet, siège, RNA, date de déclaration | Publication au JOAFE n° 11 du 17/03/2026, annonce n° 3049 |
| RNA W932014102, récépissé | Récépissé de déclaration de création, préfecture de Seine-Saint-Denis, 12/03/2026 |
| Objet détaillé, gouvernance, ressources | Statuts de l'association (17 articles) |
| Fondation, bureau, siège | Procès-verbal de l'assemblée générale constitutive du 01/02/2026 |
| Dirigeants et fonctions | Déclaration des dirigeants et liste des personnes chargées de l'administration |

Aucune autre information administrative n'a été ajoutée, déduite ou inventée.
