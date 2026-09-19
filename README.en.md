# SkillCert AI

An independent study platform for AI certification exam preparation: courses, revision flashcards, domain-by-domain quizzes, and timed mock exams for Anthropic Claude, OpenAI, AWS, Google Cloud, and Microsoft Azure certifications.

> Independent resource, not affiliated with or endorsed by Anthropic, OpenAI, Amazon Web Services, Google, or Microsoft. Exam format details (question count, duration, price, passing score) are indicative only: always check the official provider website before registering for an exam.

## Certifications covered (v1)

- **Anthropic** — Claude Certified Associate
- **OpenAI** — AI Foundations (OpenAI Academy, completion badge)
- **AWS** — AWS Certified AI Practitioner (AIF-C01)
- **Google Cloud** — Generative AI Leader
- **Microsoft Azure** — Azure AI Fundamentals (AI-900)

Every certification follows the same structure: weighted exam domains, course modules, a flip-card glossary, a quiz bank with instant feedback, and a mock exam that assembles a timed simulation respecting the official domain weighting.

## Tech stack

- [Next.js](https://nextjs.org/) 16 (App Router, Turbopack)
- TypeScript
- Tailwind CSS v4
- [shadcn/ui](https://ui.shadcn.com/) on top of [Base UI](https://base-ui.com/)
- Content and progress tracking: static TypeScript files + `localStorage` (no database, no account required)

## Local development

```bash
npm install
npm run dev
```

The app runs at [http://localhost:3520](http://localhost:3520).

## Available scripts

- `npm run dev` — development server (port 3520)
- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run lint` — run ESLint

## Content structure

Learning content lives in `src/content/certifications/*.ts`, one file per certification, matching the `Certification` interface defined in `src/content/types.ts` (domains, course modules, glossary, quiz bank, study plan). Adding a certification means creating a new file following that model and registering it in `src/content/index.ts`.

User progress (modules read, quiz scores, mock exam attempts) is stored only in the browser's `localStorage`: no data is sent to a server.

## Deployment

Built to be deployed on [Vercel](https://vercel.com/).

## License

© 2026 Riadh MNASRI. All rights reserved.
