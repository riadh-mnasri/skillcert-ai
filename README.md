# SkillCert AI

Plateforme indépendante de préparation aux certifications IA : cours, fiches de révision, QCM par domaine et examens blancs chronométrés pour les certifications Anthropic Claude, OpenAI, AWS, Google Cloud et Microsoft Azure. Disponible en français et en anglais.

> Ressource indépendante, non affiliée ni approuvée par Anthropic, OpenAI, Amazon Web Services, Google ou Microsoft. Les formats d'examen (nombre de questions, durée, prix, seuil de réussite) sont indiqués à titre indicatif : vérifiez toujours les informations à jour sur le site officiel du fournisseur avant de vous inscrire.

## Certifications couvertes (v1)

- **Anthropic** — Claude Certified Associate
- **OpenAI** — AI Foundations (OpenAI Academy, badge de complétion)
- **AWS** — AWS Certified AI Practitioner (AIF-C01)
- **Google Cloud** — Generative AI Leader
- **Microsoft Azure** — Azure AI Fundamentals (AI-900)

Chaque certification suit la même structure : domaines d'examen pondérés, modules de cours, glossaire en fiches à retourner, banque de QCM avec correction immédiate, et un examen blanc qui recompose une simulation chronométrée respectant la pondération officielle.

## Stack technique

- [Next.js](https://nextjs.org/) 16 (App Router, Turbopack)
- TypeScript
- Tailwind CSS v4
- [shadcn/ui](https://ui.shadcn.com/) sur base [Base UI](https://base-ui.com/)
- Contenu et progression : fichiers TypeScript statiques + `localStorage` (aucune base de données, aucun compte requis)
- Interface bilingue (français/anglais) via un contexte de langue côté client, sans routage par locale

## Démarrage local

```bash
npm install
npm run dev
```

L'application est servie sur [http://localhost:3520](http://localhost:3520).

## Scripts disponibles

- `npm run dev` — serveur de développement (port 3520)
- `npm run build` — build de production
- `npm run start` — sert le build de production
- `npm run lint` — vérifie le code avec ESLint

## Structure du contenu

Le contenu pédagogique vit dans `src/content/certifications/*.ts` (français) et `*.en.ts` (anglais), un fichier par certification et par langue, conforme à l'interface `Certification` définie dans `src/content/types.ts` (domaines, modules de cours, glossaire, banque de QCM, plan de révision). Les deux versions d'une même certification partagent exactement les mêmes identifiants (slugs de domaine, de module, de question) afin que la progression de l'utilisateur reste cohérente quelle que soit la langue choisie. Ajouter une certification consiste à créer les deux fichiers suivant ce modèle et à les enregistrer dans `src/content/index.ts`.

Les textes de l'interface (navigation, boutons, libellés) vivent dans `src/lib/i18n.ts`.

La progression de l'utilisateur (modules lus, scores de QCM, tentatives d'examen blanc) est stockée uniquement dans le `localStorage` du navigateur : aucune donnée n'est envoyée à un serveur.

## Déploiement

Projet conçu pour un déploiement sur [Vercel](https://vercel.com/).

## Licence

© 2026 Riadh MNASRI. Tous droits réservés.
