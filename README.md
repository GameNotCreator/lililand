# Lili Land

**English overview:** Website for Lili Land, presenting attractions, packages, partners and contact information. Built with Next.js and React. The French documentation below describes the local setup and project structure.

Site vitrine de Lili Land, avec présentation des attractions, formules, partenaires et informations de contact.

**[Voir le site](https://lililand.tn)**

## Technologies

Next.js 15.5.28, React 18, Tailwind CSS, daisyUI et next-pwa.

## Développement local

Utiliser Node.js 24.x et npm. Aucune variable d’environnement ni base de données n’est nécessaire pour ce site vitrine.

```bash
git clone https://github.com/GameNotCreator/lililand.git
cd lililand
npm ci
npm run dev
```

Ouvrir [localhost:3000](http://localhost:3000).

## Commandes

| Commande | Rôle |
| --- | --- |
| `npm run dev` | Serveur de développement |
| `npm run build` | Compilation de production |
| `npm start` | Serveur de production après compilation |
| `npm run lint` | Vérification du code |

## Structure

- `app/page.jsx` assemble les sections de la page d'accueil.
- `components/` contient les sections Home, Attractions, Formules, Partenaire et Contact.
- `public/` contient les ressources statiques.
- `styles/` et `tailwind.config.js` définissent la présentation.

Le site est une application Next.js avec l’App Router ; son point d’entrée est `app/page.jsx`. Sur Vercel, utiliser le préréglage **Next.js**, la racine du dépôt, `npm ci` et `npm run build`, sans répertoire de sortie personnalisé.

## Ancienneté du projet

La version Lili Land de ce dépôt commence avec le [commit du 1er mars 2024, heure suisse](https://github.com/GameNotCreator/lililand/commit/c3d4824436332e43cc99cb23a6077dbaed79e510). Les commits plus anciens appartiennent à une base de site réutilisée.

La dernière évolution du contenu et de l’interface avant maintenance est le [commit du 18 mars 2024](https://github.com/GameNotCreator/lililand/commit/c30cc9deced729fd631c810b060c98cebd9d256a). Les changements de documentation, de compatibilité et de sécurité réalisés en octobre 2026 ne changent pas l’ancienneté fonctionnelle de cette version.
