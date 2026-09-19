# SkillCert AI

Plateforme independante de preparation aux certifications IA : cours, fiches de revision, QCM par domaine et examens blancs chronometres pour les certifications Anthropic Claude, OpenAI, AWS, Google Cloud et Microsoft Azure.

> Ressource independante, non affiliee ni approuvee par Anthropic, OpenAI, Amazon Web Services, Google ou Microsoft. Les formats d'examen (nombre de questions, duree, prix, seuil de reussite) sont indiques a titre indicatif : verifiez toujours les informations a jour sur le site officiel du fournisseur avant de vous inscrire.

## Certifications couvertes (v1)

- **Anthropic** — Claude Certified Associate
- **OpenAI** — AI Foundations (OpenAI Academy, badge de completion)
- **AWS** — AWS Certified AI Practitioner (AIF-C01)
- **Google Cloud** — Generative AI Leader
- **Microsoft Azure** — Azure AI Fundamentals (AI-900)

Chaque certification suit la meme structure : domaines d'examen ponderes, modules de cours, glossaire en fiches a retourner, banque de QCM avec correction immediate, et un examen blanc qui recompose une simulation chronometree respectant la ponderation officielle.

## Stack technique

- [Next.js](https://nextjs.org/) 16 (App Router, Turbopack)
- TypeScript
- Tailwind CSS v4
- [shadcn/ui](https://ui.shadcn.com/) sur base [Base UI](https://base-ui.com/)
- Contenu et progression : fichiers TypeScript statiques + `localStorage` (aucune base de donnees, aucun compte requis)

## Demarrage local

```bash
npm install
npm run dev
```

L'application est servie sur [http://localhost:3520](http://localhost:3520).

## Scripts disponibles

- `npm run dev` — serveur de developpement (port 3520)
- `npm run build` — build de production
- `npm run start` — sert le build de production
- `npm run lint` — verifie le code avec ESLint

## Structure du contenu

Le contenu pedagogique vit dans `src/content/certifications/*.ts`, un fichier par certification, conforme a l'interface `Certification` definie dans `src/content/types.ts` (domaines, modules de cours, glossaire, banque de QCM, plan de revision). Ajouter une certification consiste a creer un nouveau fichier suivant ce modele et a l'enregistrer dans `src/content/index.ts`.

La progression de l'utilisateur (modules lus, scores de QCM, tentatives d'examen blanc) est stockee uniquement dans le `localStorage` du navigateur : aucune donnee n'est envoyee a un serveur.

## Deploiement

Projet concu pour un deploiement sur [Vercel](https://vercel.com/).

## Licence

© 2026 Riadh MNASRI. Tous droits reserves.
