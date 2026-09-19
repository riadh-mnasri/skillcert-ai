import type { Certification, ProviderId } from "@/content/types";
import anthropicClaudeCertifiedAssociate from "@/content/certifications/anthropic-claude-certified-associate";
import openaiAiFoundations from "@/content/certifications/openai-ai-foundations";
import awsAiPractitioner from "@/content/certifications/aws-ai-practitioner";
import gcpGenerativeAiLeader from "@/content/certifications/gcp-generative-ai-leader";
import azureAiFundamentals from "@/content/certifications/azure-ai-fundamentals";

export const certifications: Certification[] = [
  anthropicClaudeCertifiedAssociate,
  openaiAiFoundations,
  awsAiPractitioner,
  gcpGenerativeAiLeader,
  azureAiFundamentals,
];

export function getCertification(slug: string): Certification | undefined {
  return certifications.find((c) => c.slug === slug);
}

export function getCertificationsByProvider(providerId: ProviderId): Certification[] {
  return certifications.filter((c) => c.providerId === providerId);
}

export function getModule(certSlug: string, moduleSlug: string) {
  const cert = getCertification(certSlug);
  const courseModule = cert?.modules.find((m) => m.slug === moduleSlug);
  return cert && courseModule ? { cert, courseModule } : undefined;
}

export function totalQuestionBankSize(): number {
  return certifications.reduce((sum, c) => sum + c.quizBank.length, 0);
}

export {
  anthropicClaudeCertifiedAssociate,
  openaiAiFoundations,
  awsAiPractitioner,
  gcpGenerativeAiLeader,
  azureAiFundamentals,
};
