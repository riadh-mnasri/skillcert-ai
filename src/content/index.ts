import type { Certification, ProviderId } from "@/content/types";
import type { Lang } from "@/lib/i18n";

import anthropicClaudeCertifiedAssociateFr from "@/content/certifications/anthropic-claude-certified-associate";
import openaiAiFoundationsFr from "@/content/certifications/openai-ai-foundations";
import awsAiPractitionerFr from "@/content/certifications/aws-ai-practitioner";
import gcpGenerativeAiLeaderFr from "@/content/certifications/gcp-generative-ai-leader";
import azureAiFundamentalsFr from "@/content/certifications/azure-ai-fundamentals";

import anthropicClaudeCertifiedAssociateEn from "@/content/certifications/anthropic-claude-certified-associate.en";
import openaiAiFoundationsEn from "@/content/certifications/openai-ai-foundations.en";
import awsAiPractitionerEn from "@/content/certifications/aws-ai-practitioner.en";
import gcpGenerativeAiLeaderEn from "@/content/certifications/gcp-generative-ai-leader.en";
import azureAiFundamentalsEn from "@/content/certifications/azure-ai-fundamentals.en";

const certificationsByLang: Record<Lang, Certification[]> = {
  fr: [
    anthropicClaudeCertifiedAssociateFr,
    openaiAiFoundationsFr,
    awsAiPractitionerFr,
    gcpGenerativeAiLeaderFr,
    azureAiFundamentalsFr,
  ],
  en: [
    anthropicClaudeCertifiedAssociateEn,
    openaiAiFoundationsEn,
    awsAiPractitionerEn,
    gcpGenerativeAiLeaderEn,
    azureAiFundamentalsEn,
  ],
};

/**
 * Liste de reference (francaise) utilisee uniquement cote serveur pour la
 * resolution des routes statiques (slugs, generateStaticParams, notFound).
 * Les slugs, domainId, module slugs et quiz id sont identiques dans les deux
 * langues : cette liste ne sert jamais a afficher du texte a l'utilisateur.
 */
export const certifications: Certification[] = certificationsByLang.fr;

export function getAllCertifications(lang: Lang = "fr"): Certification[] {
  return certificationsByLang[lang];
}

export function getCertification(slug: string, lang: Lang = "fr"): Certification | undefined {
  return certificationsByLang[lang].find((c) => c.slug === slug);
}

export function getCertificationsByProvider(providerId: ProviderId, lang: Lang = "fr"): Certification[] {
  return certificationsByLang[lang].filter((c) => c.providerId === providerId);
}

export function getModule(certSlug: string, moduleSlug: string, lang: Lang = "fr") {
  const cert = getCertification(certSlug, lang);
  const courseModule = cert?.modules.find((m) => m.slug === moduleSlug);
  return cert && courseModule ? { cert, courseModule } : undefined;
}

export function totalQuestionBankSize(): number {
  return certifications.reduce((sum, c) => sum + c.quizBank.length, 0);
}
