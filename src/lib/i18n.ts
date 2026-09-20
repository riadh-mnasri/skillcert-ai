export type Lang = "fr" | "en";

export const dictionary = {
  nav: {
    certifications: { fr: "Certifications", en: "Certifications" },
    progression: { fr: "Ma progression", en: "My progress" },
    methode: { fr: "Méthode", en: "Method" },
    cta: { fr: "Choisir ma certification", en: "Choose my certification" },
  },
  footer: {
    tagline: {
      fr: "Cours, fiches, QCM et examens blancs pour réussir vos certifications IA, rédigés en français et en anglais, mis à jour régulièrement.",
      en: "Courses, flashcards, quizzes and mock exams to pass your AI certifications, available in French and English and updated regularly.",
    },
    providers: { fr: "Fournisseurs", en: "Providers" },
    certificationsHeading: { fr: "Certifications", en: "Certifications" },
    resources: { fr: "Ressources", en: "Resources" },
    allCertifications: { fr: "Toutes les certifications", en: "All certifications" },
    ourMethod: { fr: "Notre méthode", en: "Our method" },
    myProgress: { fr: "Ma progression", en: "My progress" },
    rights: { fr: "SkillCert AI est une ressource indépendante.", en: "SkillCert AI is an independent resource." },
    disclaimer: {
      fr: "Non affilié à Anthropic, OpenAI, Amazon Web Services, Google ou Microsoft. Les noms et marques citées appartiennent à leurs propriétaires respectifs.",
      en: "Not affiliated with Anthropic, OpenAI, Amazon Web Services, Google, or Microsoft. All names and trademarks mentioned belong to their respective owners.",
    },
    author: { fr: "Auteur", en: "Author" },
    createdBy: { fr: "Créé par Riadh MNASRI", en: "Built by Riadh MNASRI" },
    aboutLink: { fr: "À propos de ce projet", en: "About this project" },
  },
  home: {
    badge: { fr: "5 fournisseurs IA, une seule méthode de révision", en: "5 AI providers, one revision method" },
    heroTitle1: { fr: "Réussissez vos certifications IA,", en: "Pass your AI certifications" },
    heroTitle2: { fr: "sans deviner ce qui va tomber", en: "without guessing what's on the exam" },
    heroBody: {
      fr: "Cours, fiches, QCM et examens blancs pour Anthropic Claude, OpenAI, AWS, Google Cloud et Microsoft Azure. Organisé par domaine officiel, utilisable entièrement depuis votre téléphone.",
      en: "Courses, flashcards, quizzes and mock exams for Anthropic Claude, OpenAI, AWS, Google Cloud, and Microsoft Azure. Organized by official exam domain, fully usable from your phone.",
    },
    ctaPrimary: { fr: "Choisir ma certification", en: "Choose my certification" },
    ctaSecondary: { fr: "Découvrir la méthode", en: "Discover the method" },
    statsModules: { fr: "Modules de cours", en: "Course modules" },
    statsQuestions: { fr: "Questions QCM", en: "Quiz questions" },
    statsGlossary: { fr: "Fiches glossaire", en: "Glossary flashcards" },
    demoExam: { fr: "EXAMEN BLANC", en: "MOCK EXAM" },
    demoScore: { fr: "Score", en: "Score" },
    demoPassed: { fr: "Niveau atteint", en: "Level reached" },
    providersHeading: { fr: "Cinq fournisseurs, une seule plateforme", en: "Five providers, one platform" },
    methodHeading: { fr: "Comment ça marche", en: "How it works" },
    methodSub: {
      fr: "La même méthode en quatre étapes pour chaque certification du catalogue.",
      en: "The same four-step method for every certification in the catalog.",
    },
    step1Title: { fr: "Cours structurés", en: "Structured courses" },
    step1Body: {
      fr: "Un module par domaine d'examen, avec les concepts et cadres de décision qui comptent vraiment.",
      en: "One module per exam domain, with the concepts and decision frameworks that actually matter.",
    },
    step2Title: { fr: "Fiches de révision", en: "Revision flashcards" },
    step2Body: {
      fr: "Glossaire en cartes à retourner pour mémoriser le vocabulaire technique avant l'examen.",
      en: "A flip-card glossary to memorize technical vocabulary before the exam.",
    },
    step3Title: { fr: "QCM par domaine", en: "Quizzes by domain" },
    step3Body: {
      fr: "Entraînez-vous domaine par domaine, avec correction et explication immédiates.",
      en: "Practice domain by domain, with instant correction and explanations.",
    },
    step4Title: { fr: "Examen blanc chronométré", en: "Timed mock exam" },
    step4Body: {
      fr: "Simulation complète avec minuteur, navigation entre questions et bilan par domaine.",
      en: "A full simulation with a timer, question navigation, and a per-domain breakdown.",
    },
    catalogueHeading: { fr: "Le catalogue", en: "The catalog" },
    catalogueSub: { fr: "5 certifications phares pour commencer.", en: "5 flagship certifications to get started." },
    seeAll: { fr: "Tout voir", en: "See all" },
  },
  methode: {
    title: { fr: "Notre méthode", en: "Our method" },
    intro: {
      fr: "SkillCert AI applique la même structure à chaque certification du catalogue, pour que vous n'ayez pas à réapprendre une nouvelle organisation à chaque fois.",
      en: "SkillCert AI applies the same structure to every certification in the catalog, so you never have to relearn a new layout.",
    },
    step1Title: { fr: "1. Cours par domaine", en: "1. Courses by domain" },
    step1Body: {
      fr: "Chaque certification est découpée selon ses domaines d'examen officiels. Un module de cours par domaine, avec les concepts, les services concernés et les points à retenir. Pas de remplissage : l'objectif est de couvrir ce qui est réellement testé.",
      en: "Every certification is broken down by its official exam domains. One course module per domain, with the concepts, relevant services, and key points. No filler: the goal is to cover what's actually tested.",
    },
    step2Title: { fr: "2. Fiches de révision", en: "2. Revision flashcards" },
    step2Body: {
      fr: "Un glossaire en cartes à retourner pour chaque certification. Utile en révision rapide, dans les transports ou juste avant l'examen, pour vérifier que le vocabulaire technique est acquis.",
      en: "A flip-card glossary for each certification. Useful for a quick review on the go or right before the exam, to check that the technical vocabulary is solid.",
    },
    step3Title: { fr: "3. QCM par domaine", en: "3. Quizzes by domain" },
    step3Body: {
      fr: "Une fois un domaine lu, entraînez-vous avec des questions ciblées. Chaque réponse est corrigée immédiatement avec une explication, pour comprendre l'erreur plutôt que la mémoriser.",
      en: "Once you've read a domain, practice with targeted questions. Every answer is corrected immediately with an explanation, so you understand the mistake rather than just memorize it.",
    },
    step4Title: { fr: "4. Examen blanc chronométré", en: "4. Timed mock exam" },
    step4Body: {
      fr: "Une simulation complète qui mélange les domaines dans les proportions officielles, avec un minuteur et un bilan détaillé par domaine à la fin, pour repérer précisément où réviser avant le jour J.",
      en: "A full simulation mixing domains in their official proportions, with a timer and a detailed per-domain breakdown at the end, to pinpoint exactly what to review before exam day.",
    },
    aboutTitle: { fr: "À propos du contenu", en: "About the content" },
    aboutBody: {
      fr: "SkillCert AI est une ressource indépendante de préparation, non affiliée ni approuvée par Anthropic, OpenAI, Amazon Web Services, Google ou Microsoft. Les formats d'examen (nombre de questions, durée, prix, seuil de réussite) sont indiqués à titre indicatif : vérifiez toujours les informations à jour sur le site officiel du fournisseur avant de vous inscrire à un examen. Le score affiché dans les examens blancs de ce site utilise un seuil indicatif de 70%, distinct du seuil de réussite réel de chaque certification.",
      en: "SkillCert AI is an independent study resource, not affiliated with or endorsed by Anthropic, OpenAI, Amazon Web Services, Google, or Microsoft. Exam format details (question count, duration, price, passing score) are indicative only: always check the official provider website before registering for an exam. The score shown in this site's mock exams uses an indicative 70% threshold, distinct from each certification's actual passing score.",
    },
    cta: { fr: "Choisir une certification", en: "Choose a certification" },
  },
  cert: {
    questions: { fr: "questions", en: "questions" },
    minutes: { fr: "minutes", en: "minutes" },
    modules: { fr: "modules", en: "modules" },
    min: { fr: "min", en: "min" },
    badgeNotExam: { fr: "Badge, pas un examen officiel", en: "Badge, not a formal exam" },
  },
  pageIntros: {
    coursesDescription: {
      fr: "{count} modules, un par domaine d'examen. Marquez-les comme lus au fil de votre progression.",
      en: "{count} modules, one per exam domain. Mark them as read as you go.",
    },
    flashcardsDescription: {
      fr: "{count} termes à mémoriser. Touchez une fiche pour la retourner.",
      en: "{count} terms to learn. Tap a card to flip it.",
    },
    quizDescription: {
      fr: "Entraînement avec correction et explication immédiates après chaque réponse.",
      en: "Practice with instant correction and explanation after each answer.",
    },
    examDescription: {
      fr: "{count} questions chronométrées, réparties selon la pondération officielle des domaines. Bilan détaillé à la fin.",
      en: "{count} timed questions, distributed according to the official domain weighting. Detailed breakdown at the end.",
    },
  },
  quizUi: {
    noQuestions: {
      fr: "Aucune question disponible pour ce domaine pour le moment.",
      en: "No questions available for this domain yet.",
    },
    difficultyEasy: { fr: "Facile", en: "Easy" },
    difficultyMedium: { fr: "Moyen", en: "Medium" },
    difficultyHard: { fr: "Difficile", en: "Hard" },
    correctOutOf: { fr: "bonnes réponses sur", en: "correct out of" },
    restartSeries: { fr: "Recommencer cette série", en: "Restart this set" },
    scoreInProgress: { fr: "Score en cours", en: "Score so far" },
    goodAnswer: { fr: "Bonne réponse.", en: "Correct answer." },
    wrongAnswer: { fr: "Réponse incorrecte.", en: "Incorrect answer." },
    seeScore: { fr: "Voir le score", en: "See my score" },
    nextQuestion: { fr: "Question suivante", en: "Next question" },
  },
  examUi: {
    levelReached: { fr: "Niveau atteint (seuil indicatif 70%)", en: "Level reached (indicative 70% threshold)" },
    belowThreshold: { fr: "Sous le seuil indicatif de 70%", en: "Below the indicative 70% threshold" },
    scoreNote: {
      fr: "Score indicatif basé sur cet examen blanc. Le format et le seuil de réussite réels sont :",
      en: "Indicative score based on this mock exam. The real exam format and passing score are:",
    },
    retakeExam: { fr: "Refaire un examen blanc", en: "Retake a mock exam" },
    backToCert: { fr: "Retour à la certification", en: "Back to certification" },
    resultByDomain: { fr: "Résultat par domaine", en: "Results by domain" },
    answered: { fr: "répondues", en: "answered" },
    mark: { fr: "Marquer", en: "Flag" },
    marked: { fr: "Marquée", en: "Flagged" },
    previous: { fr: "Précédent", en: "Previous" },
    next: { fr: "Suivant", en: "Next" },
    finishExam: { fr: "Terminer l'examen", en: "Finish exam" },
    finishExamDialogTitle: { fr: "Terminer l'examen blanc ?", en: "Finish the mock exam?" },
    allAnswered: { fr: "Toutes les questions ont une réponse.", en: "All questions have an answer." },
    unansweredWarning: {
      fr: "question(s) sans réponse. Elles seront comptées comme incorrectes.",
      en: "unanswered question(s). They will be counted as incorrect.",
    },
    continueExam: { fr: "Continuer l'examen", en: "Continue exam" },
    submitExam: { fr: "Valider et voir le score", en: "Submit and see my score" },
  },
  flashcardUi: {
    noCards: {
      fr: "Aucune fiche disponible pour ce domaine pour le moment.",
      en: "No flashcards available for this domain yet.",
    },
    card: { fr: "Fiche", en: "Card" },
    shuffle: { fr: "Mélanger", en: "Shuffle" },
    flipAria: { fr: "Retourner la fiche", en: "Flip the card" },
    term: { fr: "Terme", en: "Term" },
    tapToReveal: { fr: "Touchez pour voir la définition", en: "Tap to reveal the definition" },
    definition: { fr: "Définition", en: "Definition" },
    flipButton: { fr: "Retourner", en: "Flip" },
    prevAria: { fr: "Fiche précédente", en: "Previous card" },
    nextAria: { fr: "Fiche suivante", en: "Next card" },
  },
  moduleUi: {
    keyTakeaways: { fr: "À retenir", en: "Key takeaways" },
    readTime: { fr: "min de lecture", en: "min read" },
    allModules: { fr: "Tous les modules", en: "All modules" },
    markAsRead: { fr: "Marquer comme lu", en: "Mark as read" },
    moduleRead: { fr: "Module lu", en: "Module read" },
  },
  domainUi: {
    mastery: { fr: "maîtrise", en: "mastery" },
  },
  sectionNav: {
    courses: { fr: "Cours", en: "Courses" },
    allDomains: { fr: "Tous les domaines", en: "All domains" },
    modulesRead: { fr: "modules lus", en: "modules read" },
    flashcards: { fr: "Fiches de révision", en: "Revision flashcards" },
    termsToLearn: { fr: "termes à mémoriser", en: "terms to learn" },
    quiz: { fr: "QCM par domaine", en: "Quiz by domain" },
    questionsInBank: { fr: "questions dans la banque", en: "questions in the bank" },
    mockExam: { fr: "Examen blanc", en: "Mock exam" },
    lastScore: { fr: "Dernier score", en: "Last score" },
    timedSimulation: { fr: "Simulation chronométrée", en: "Timed simulation" },
  },
  browse: {
    title: { fr: "Certifications", en: "Certifications" },
    subtitle: {
      fr: "5 certifications phares pour démarrer, une par grand fournisseur d'IA. Chacune inclut ses cours, ses fiches, son QCM et son examen blanc.",
      en: "5 flagship certifications to get started, one per major AI provider. Each includes its own courses, flashcards, quiz, and mock exam.",
    },
    all: { fr: "Tous", en: "All" },
    empty: { fr: "Aucune certification pour ce fournisseur pour le moment.", en: "No certification for this provider yet." },
  },
  progression: {
    title: { fr: "Ma progression", en: "My progress" },
    subtitle: {
      fr: "Votre avancement est enregistré localement sur cet appareil, certification par certification.",
      en: "Your progress is stored locally on this device, certification by certification.",
    },
    empty: {
      fr: "Aucune progression enregistrée pour le moment. Ouvrez un module de cours ou un QCM pour commencer à suivre votre avancement.",
      en: "No progress recorded yet. Open a course module or a quiz to start tracking your progress.",
    },
    browse: { fr: "Parcourir les certifications", en: "Browse certifications" },
    continue: { fr: "Continuer", en: "Continue" },
    courses: { fr: "Cours", en: "Courses" },
    quiz: { fr: "QCM", en: "Quiz" },
    mockExam: { fr: "Examen blanc", en: "Mock exam" },
    answersGiven: { fr: "réponses données", en: "answers given" },
    notAttempted: { fr: "Pas encore tenté", en: "Not attempted yet" },
    attempt: { fr: "tentative", en: "attempt" },
    attempts: { fr: "tentatives", en: "attempts" },
  },
  about: {
    title: { fr: "À propos de SkillCert AI", en: "About SkillCert AI" },
    p1: {
      fr: "SkillCert AI est conçu et développé par Riadh MNASRI, tech lead freelance spécialisé en architecture logicielle et en risque financier (marchés de capitaux, risque de contrepartie). C'est l'un de ses projets personnels : une plateforme complète de préparation aux certifications IA, pensée pour être utilisable entièrement depuis un téléphone.",
      en: "SkillCert AI is designed and built by Riadh MNASRI, a freelance tech lead specialized in software architecture and financial risk (capital markets, counterparty risk). It is one of his personal projects: a complete AI certification prep platform, designed to be fully usable from a phone.",
    },
    p2: {
      fr: "Le contenu (domaines d'examen, cours, glossaire, QCM) est rédigé à partir des guides d'examen publics de chaque fournisseur, puis vérifié et mis en forme pour la révision. Le code est écrit en Next.js/TypeScript, sans base de données : la progression reste dans le navigateur de chaque utilisateur.",
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
