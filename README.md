# Lili Land

**English overview:** Website for Lili Land, presenting attractions, packages, partners and contact information. Built with Next.js and React. The French documentation below describes the local setup and project structure.

Site vitrine de Lili Land, avec présentation des attractions, formules, partenaires et informations de contact.

**[Voir le site](https://lililand.tn)**

## Technologies

Next.js 14, React 18, Tailwind CSS et daisyUI.

## Développement local

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

Le déploiement référencé par le dépôt est hébergé sur Vercel. Les dépendances reflètent la version historique du projet ; les commandes ci-dessus correspondent aux scripts présents dans `package.json`.
