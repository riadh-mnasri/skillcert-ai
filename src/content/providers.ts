import type { Provider, ProviderId } from "@/content/types";

export const providers: Record<ProviderId, Provider> = {
  anthropic: {
    id: "anthropic",
    name: "Anthropic",
    shortName: "Anthropic",
    tagline: "Les modeles Claude et l'API Anthropic",
    tint: "oklch(0.58 0.11 40)",
  },
  openai: {
    id: "openai",
    name: "OpenAI",
    shortName: "OpenAI",
    tagline: "ChatGPT, l'API OpenAI et OpenAI Academy",
    tint: "oklch(0.35 0.01 200)",
  },
  aws: {
    id: "aws",
    name: "Amazon Web Services",
    shortName: "AWS",
    tagline: "Services IA et ML du cloud AWS",
    tint: "oklch(0.62 0.15 55)",
  },
  gcp: {
    id: "gcp",
    name: "Google Cloud",
    shortName: "GCP",
    tagline: "Vertex AI et l'ecosysteme Google Cloud",
    tint: "oklch(0.55 0.19 255)",
  },
  azure: {
    id: "azure",
    name: "Microsoft Azure",
    shortName: "Azure",
    tagline: "Azure AI et l'ecosysteme Microsoft",
    tint: "oklch(0.5 0.14 250)",
  },
};

export const providerList = Object.values(providers);
