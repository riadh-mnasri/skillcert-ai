export type ProviderId = "anthropic" | "openai" | "aws" | "gcp" | "azure";

export interface Provider {
  id: ProviderId;
  name: string;
  shortName: string;
  tagline: string;
  /** Petite teinte d'accent utilisee uniquement pour les badges/tags du fournisseur, jamais pour l'UI globale du site. */
  tint: string;
}

export type CertLevel = "Fondamentaux" | "Associate" | "Professionnel" | "Expert";

export interface ExamFormat {
  questionCount: number;
  durationMinutes: number;
  passingScore: string;
  price: string;
  deliveryMode: string;
  isOfficialCertification: boolean;
}

export interface Domain {
  id: string;
  title: string;
  weightPercent: number;
  summary: string;
}

export interface ModuleSection {
  heading: string;
  body: string;
}

export interface CourseModule {
  slug: string;
  domainId: string;
  title: string;
  readMinutes: number;
  summary: string;
  keyPoints: string[];
  sections: ModuleSection[];
}

export interface GlossaryTerm {
  term: string;
  definition: string;
  domainId?: string;
}

export type QuizDifficulty = "facile" | "moyen" | "difficile";

export interface QuizQuestion {
  id: string;
  domainId: string;
  difficulty: QuizDifficulty;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface StudyPlanStep {
  label: string;
  detail: string;
}

export interface Certification {
  slug: string;
  providerId: ProviderId;
  code: string;
  name: string;
  level: CertLevel;
  tagline: string;
  description: string;
  officialUrl?: string;
  format: ExamFormat;
  domains: Domain[];
  modules: CourseModule[];
  glossary: GlossaryTerm[];
  quizBank: QuizQuestion[];
  studyPlan: StudyPlanStep[];
}
