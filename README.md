# OUATTFOLIO — Portfolio + Dashboard (Next.js + Supabase)

Application **unique** réunissant l'ancien front React/Vite et l'API FastAPI :
site public bilingue (FR/EN), **blog**, **idées** (publiées + boîte à idées),
et un **dashboard d'administration** pour gérer tout le contenu (CRUD).

- **Next.js 16** (App Router, TypeScript)
- **Supabase** : base PostgreSQL + Auth (admin) + Storage (images/CV)
- **Design conservé à l'identique** (thème DevFolio + Bootstrap, accent vert `#006400`)

> Sans Supabase configuré, le site public fonctionne avec des **données de
> démonstration** (seed local) ; le dashboard affiche un message tant que la
> base n'est pas branchée.

## Stack & structure

```
app/
  page.tsx               Accueil (Hero, À propos, CV, Portfolio, Services, Contact)
  realisations/          Liste + détail des projets
  blog/                  Liste + détail des articles
  idees/                 Idées publiées + formulaire de proposition
  login/                 Connexion admin
  dashboard/             Espace admin protégé (CRUD de toutes les entités)
  api/contact/           Réception + email du formulaire de contact
  api/idea-proposals/    Réception des propositions d'idées
components/               Composants publics portés 1:1 (design inchangé)
lib/
  data.ts                Lecture publique (Supabase, fallback seed)
  admin-data.ts          Lecture dashboard
  seed-data.ts           Contenu existant (projets, profil, skills…)
  supabase/              Clients SSR / browser / admin / public
i18n/labels.ts           Libellés UI bilingues
supabase/migrations/     Schéma SQL (tables, RLS, bucket media)
scripts/seed.ts          Remplit la base avec le contenu existant
```

## Mise en route locale

1. **Installer les dépendances**
   ```bash
   npm install
   ```

2. **Créer un projet Supabase** sur https://supabase.com, puis dans
   *SQL Editor* exécuter le contenu de [`supabase/migrations/0001_init.sql`](supabase/migrations/0001_init.sql)
   (crée les tables, les politiques RLS et le bucket `media`).

3. **Variables d'environnement** — copier `.env.example` en `.env.local` :
   ```bash
   cp .env.example .env.local
   ```
   Renseigner (Settings → API du projet Supabase) :
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY` (secret, **serveur uniquement**)
   - `EMAIL_USER`, `EMAIL_PASSWORD` (mot de passe d'application Gmail), `MAIL_USERNAME_RECEPTION`

4. **Importer le contenu existant** (11 projets, profil, compétences, services,
   certifications, formations, exemples blog/idées) :
   ```bash
   npm run seed
   ```

5. **Créer le compte administrateur** — dans Supabase → *Authentication → Users
   → Add user* (email + mot de passe). C'est le compte de connexion au dashboard.

6. **Lancer le serveur de dev**
   ```bash
   npm run dev
   ```
   - Site public : http://localhost:3000
   - Dashboard : http://localhost:3000/login → http://localhost:3000/dashboard

## Contenu bilingue

Chaque contenu géré possède des champs `*_fr` et `*_en`. Le sélecteur **FR/EN**
de la barre de navigation bascule l'affichage côté client ; si une traduction
EN manque, le français est utilisé en repli.

## Déploiement (Vercel)

Le projet est déjà hébergé sur Vercel. Pour pointer sur cette nouvelle app :

1. **Root Directory** du projet Vercel = `okmfolio`.
2. Ajouter les mêmes variables d'environnement que `.env.local`
   (les `NEXT_PUBLIC_*` côté client, les autres côté serveur).
3. Dans Supabase → *Authentication → URL Configuration*, ajouter le domaine
   Vercel aux *Redirect URLs* si besoin.

Supabase reste hébergé séparément (cloud Supabase).

## Migration depuis l'ancien code

`../FontEnd` (React/Vite) et `../API` (FastAPI) sont **remplacés** par cette app.
Ils peuvent être archivés/supprimés une fois la migration validée.

⚠️ **Sécurité** : l'ancien fichier `../API/.env` contient un mot de passe Gmail
en clair — pensez à le **révoquer/régénérer** côté Google.
