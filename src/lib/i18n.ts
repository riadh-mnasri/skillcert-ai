export type Lang = "fr" | "en";

export const dictionary = {
  nav: {
    certifications: { fr: "Certifications", en: "Certifications" },
    progression: { fr: "Ma progression", en: "My progress" },
    methode: { fr: "Methode", en: "Method" },
    cta: { fr: "Choisir ma certification", en: "Choose my certification" },
  },
  footer: {
    tagline: {
      fr: "Cours, fiches, QCM et examens blancs pour reussir vos certifications IA, redige en francais et mis a jour regulierement.",
      en: "Courses, flashcards, quizzes and mock exams to pass your AI certifications. Detailed content is written in French, English interface is being extended.",
    },
    providers: { fr: "Fournisseurs", en: "Providers" },
    certificationsHeading: { fr: "Certifications", en: "Certifications" },
    resources: { fr: "Ressources", en: "Resources" },
    allCertifications: { fr: "Toutes les certifications", en: "All certifications" },
    ourMethod: { fr: "Notre methode", en: "Our method" },
    myProgress: { fr: "Ma progression", en: "My progress" },
    rights: { fr: "SkillCert AI est une ressource independante.", en: "SkillCert AI is an independent resource." },
    disclaimer: {
      fr: "Non affilie a Anthropic, OpenAI, Amazon Web Services, Google ou Microsoft. Les noms et marques citees appartiennent a leurs proprietaires respectifs.",
      en: "Not affiliated with Anthropic, OpenAI, Amazon Web Services, Google, or Microsoft. All names and trademarks mentioned belong to their respective owners.",
    },
    author: { fr: "Auteur", en: "Author" },
    createdBy: { fr: "Cree par Riadh MNASRI", en: "Built by Riadh MNASRI" },
    aboutLink: { fr: "A propos de ce projet", en: "About this project" },
  },
  home: {
    badge: { fr: "5 fournisseurs IA, une seule methode de revision", en: "5 AI providers, one revision method" },
    heroTitle1: { fr: "Reussissez vos certifications IA,", en: "Pass your AI certifications" },
    heroTitle2: { fr: "sans deviner ce qui va tomber", en: "without guessing what's on the exam" },
    heroBody: {
      fr: "Cours, fiches, QCM et examens blancs pour Anthropic Claude, OpenAI, AWS, Google Cloud et Microsoft Azure. Contenu en francais, organise par domaine officiel, utilisable entierement depuis votre telephone.",
      en: "Courses, flashcards, quizzes and mock exams for Anthropic Claude, OpenAI, AWS, Google Cloud, and Microsoft Azure. Organized by official exam domain, fully usable from your phone. Detailed study content is currently written in French.",
    },
    ctaPrimary: { fr: "Choisir ma certification", en: "Choose my certification" },
    ctaSecondary: { fr: "Decouvrir la methode", en: "Discover the method" },
    statsModules: { fr: "Modules de cours", en: "Course modules" },
    statsQuestions: { fr: "Questions QCM", en: "Quiz questions" },
    statsGlossary: { fr: "Fiches glossaire", en: "Glossary flashcards" },
    demoExam: { fr: "EXAMEN BLANC", en: "MOCK EXAM" },
    demoScore: { fr: "Score", en: "Score" },
    demoPassed: { fr: "Niveau atteint", en: "Level reached" },
    providersHeading: { fr: "Cinq fournisseurs, une seule plateforme", en: "Five providers, one platform" },
    methodHeading: { fr: "Comment ca marche", en: "How it works" },
    methodSub: {
      fr: "La meme methode en quatre etapes pour chaque certification du catalogue.",
      en: "The same four-step method for every certification in the catalog.",
    },
    step1Title: { fr: "Cours structures", en: "Structured courses" },
    step1Body: {
      fr: "Un module par domaine d'examen, avec les concepts et cadres de decision qui comptent vraiment.",
      en: "One module per exam domain, with the concepts and decision frameworks that actually matter.",
    },
    step2Title: { fr: "Fiches de revision", en: "Revision flashcards" },
    step2Body: {
      fr: "Glossaire en cartes a retourner pour memoriser le vocabulaire technique avant l'examen.",
      en: "A flip-card glossary to memorize technical vocabulary before the exam.",
    },
    step3Title: { fr: "QCM par domaine", en: "Quizzes by domain" },
    step3Body: {
      fr: "Entrainez-vous domaine par domaine, avec correction et explication immediates.",
      en: "Practice domain by domain, with instant correction and explanations.",
    },
    step4Title: { fr: "Examen blanc chronometre", en: "Timed mock exam" },
    step4Body: {
      fr: "Simulation complete avec minuteur, navigation entre questions et bilan par domaine.",
      en: "A full simulation with a timer, question navigation, and a per-domain breakdown.",
    },
    catalogueHeading: { fr: "Le catalogue", en: "The catalog" },
    catalogueSub: { fr: "5 certifications phares pour commencer.", en: "5 flagship certifications to get started." },
    seeAll: { fr: "Tout voir", en: "See all" },
  },
  methode: {
    title: { fr: "Notre methode", en: "Our method" },
    intro: {
      fr: "SkillCert AI applique la meme structure a chaque certification du catalogue, pour que vous n'ayez pas a reapprendre une nouvelle organisation a chaque fois.",
      en: "SkillCert AI applies the same structure to every certification in the catalog, so you never have to relearn a new layout.",
    },
    step1Title: { fr: "1. Cours par domaine", en: "1. Courses by domain" },
    step1Body: {
      fr: "Chaque certification est decoupee selon ses domaines d'examen officiels. Un module de cours par domaine, avec les concepts, les services concernes et les points a retenir. Pas de remplissage : l'objectif est de couvrir ce qui est reellement teste.",
      en: "Every certification is broken down by its official exam domains. One course module per domain, with the concepts, relevant services, and key points. No filler: the goal is to cover what's actually tested.",
    },
    step2Title: { fr: "2. Fiches de revision", en: "2. Revision flashcards" },
    step2Body: {
      fr: "Un glossaire en cartes a retourner pour chaque certification. Utile en revision rapide, dans les transports ou juste avant l'examen, pour verifier que le vocabulaire technique est acquis.",
      en: "A flip-card glossary for each certification. Useful for a quick review on the go or right before the exam, to check that the technical vocabulary is solid.",
    },
    step3Title: { fr: "3. QCM par domaine", en: "3. Quizzes by domain" },
    step3Body: {
      fr: "Une fois un domaine lu, entrainez-vous avec des questions ciblees. Chaque reponse est corrigee immediatement avec une explication, pour comprendre l'erreur plutot que la memoriser.",
      en: "Once you've read a domain, practice with targeted questions. Every answer is corrected immediately with an explanation, so you understand the mistake rather than just memorize it.",
    },
    step4Title: { fr: "4. Examen blanc chronometre", en: "4. Timed mock exam" },
    step4Body: {
      fr: "Une simulation complete qui melange les domaines dans les proportions officielles, avec un minuteur et un bilan detaille par domaine a la fin, pour reperer precisement ou reviser avant le jour J.",
      en: "A full simulation mixing domains in their official proportions, with a timer and a detailed per-domain breakdown at the end, to pinpoint exactly what to review before exam day.",
    },
    aboutTitle: { fr: "A propos du contenu", en: "About the content" },
    aboutBody: {
      fr: "SkillCert AI est une ressource independante de preparation, non affiliee ni approuvee par Anthropic, OpenAI, Amazon Web Services, Google ou Microsoft. Les formats d'examen (nombre de questions, duree, prix, seuil de reussite) sont indiques a titre indicatif : verifiez toujours les informations a jour sur le site officiel du fournisseur avant de vous inscrire a un examen. Le score affiche dans les examens blancs de ce site utilise un seuil indicatif de 70%, distinct du seuil de reussite reel de chaque certification.",
      en: "SkillCert AI is an independent study resource, not affiliated with or endorsed by Anthropic, OpenAI, Amazon Web Services, Google, or Microsoft. Exam format details (question count, duration, price, passing score) are indicative only: always check the official provider website before registering for an exam. The score shown in this site's mock exams uses an indicative 70% threshold, distinct from each certification's actual passing score. Detailed course, quiz, and flashcard content is currently written in French only.",
    },
    cta: { fr: "Choisir une certification", en: "Choose a certification" },
  },
  cert: {
    contentNoticeTitle: { fr: "Contenu detaille en francais", en: "Detailed content is in French" },
    contentNotice: {
      fr: "",
      en: "The courses, glossary, quiz bank, and mock exam for this certification are currently written in French only. An English version is planned.",
    },
    questions: { fr: "questions", en: "questions" },
    minutes: { fr: "minutes", en: "minutes" },
    modules: { fr: "modules", en: "modules" },
    min: { fr: "min", en: "min" },
    badgeNotExam: { fr: "Badge, pas un examen officiel", en: "Badge, not a formal exam" },
  },
  sectionNav: {
    courses: { fr: "Cours", en: "Courses" },
    modulesRead: { fr: "modules lus", en: "modules read" },
    flashcards: { fr: "Fiches de revision", en: "Revision flashcards" },
    termsToLearn: { fr: "termes a memoriser", en: "terms to learn" },
    quiz: { fr: "QCM par domaine", en: "Quiz by domain" },
    questionsInBank: { fr: "questions dans la banque", en: "questions in the bank" },
    mockExam: { fr: "Examen blanc", en: "Mock exam" },
    lastScore: { fr: "Dernier score", en: "Last score" },
    timedSimulation: { fr: "Simulation chronometree", en: "Timed simulation" },
  },
  browse: {
    title: { fr: "Certifications", en: "Certifications" },
    subtitle: {
      fr: "5 certifications phares pour demarrer, une par grand fournisseur d'IA. Chacune inclut ses cours, ses fiches, son QCM et son examen blanc.",
      en: "5 flagship certifications to get started, one per major AI provider. Each includes its own courses, flashcards, quiz, and mock exam.",
    },
    all: { fr: "Tous", en: "All" },
    empty: { fr: "Aucune certification pour ce fournisseur pour le moment.", en: "No certification for this provider yet." },
  },
  progression: {
    title: { fr: "Ma progression", en: "My progress" },
    subtitle: {
      fr: "Votre avancement est enregistre localement sur cet appareil, certification par certification.",
      en: "Your progress is stored locally on this device, certification by certification.",
    },
    empty: {
      fr: "Aucune progression enregistree pour le moment. Ouvrez un module de cours ou un QCM pour commencer a suivre votre avancement.",
      en: "No progress recorded yet. Open a course module or a quiz to start tracking your progress.",
    },
    browse: { fr: "Parcourir les certifications", en: "Browse certifications" },
    continue: { fr: "Continuer", en: "Continue" },
    courses: { fr: "Cours", en: "Courses" },
    quiz: { fr: "QCM", en: "Quiz" },
    mockExam: { fr: "Examen blanc", en: "Mock exam" },
    answersGiven: { fr: "reponses donnees", en: "answers given" },
    notAttempted: { fr: "Pas encore tente", en: "Not attempted yet" },
    attempt: { fr: "tentative", en: "attempt" },
    attempts: { fr: "tentatives", en: "attempts" },
  },
  about: {
    title: { fr: "A propos de SkillCert AI", en: "About SkillCert AI" },
    p1: {
      fr: "SkillCert AI est concu et developpe par Riadh MNASRI, tech lead freelance specialise en architecture logicielle et en risque financier (marches de capitaux, risque de contrepartie). C'est l'un de ses projets personnels : une plateforme complete de preparation aux certifications IA, pensee pour etre utilisable entierement depuis un telephone.",
      en: "SkillCert AI is designed and built by Riadh MNASRI, a freelance tech lead specialized in software architecture and financial risk (capital markets, counterparty risk). It is one of his personal projects: a complete AI certification prep platform, designed to be fully usable from a phone.",
    },
    p2: {
      fr: "Le contenu (domaines d'examen, cours, glossaire, QCM) est redige a partir des guides d'examen publics de chaque fournisseur, puis verifie et mis en forme pour la revision. Le code est ecrit en Next.js/TypeScript, sans base de donnees : la progression reste dans le navigateur de chaque utilisateur.",
      en: "The content (exam domains, courses, glossary, quizzes) is written from each provider's public exam guides, then reviewed and formatted for revision. The code is built with Next.js/TypeScript, with no database: progress stays in each user's own browser.",
    },
    linksHeading: { fr: "Retrouvez Riadh MNASRI", en: "Find Riadh MNASRI" },
    linkedin: { fr: "Profil LinkedIn", en: "LinkedIn profile" },
    portfolio: { fr: "Portfolio", en: "Portfolio" },
    blog: { fr: "Blog technique", en: "Technical blog" },
    cta: { fr: "Choisir une certification", en: "Choose a certification" },
  },
} as const;

const levelLabels: Record<string, { fr: string; en: string }> = {
  Fondamentaux: { fr: "Fondamentaux", en: "Fundamentals" },
  Associate: { fr: "Associate", en: "Associate" },
  Professionnel: { fr: "Professionnel", en: "Professional" },
  Expert: { fr: "Expert", en: "Expert" },
};

export function translateLevel(level: string, lang: Lang): string {
  return levelLabels[level]?.[lang] ?? level;
}

export type DictionarySection = keyof typeof dictionary;
export type TranslationEntry = { fr: string; en: string };
