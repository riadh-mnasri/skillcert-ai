import type { Metadata } from "next";
import { certifications } from "@/content";
import { providerList } from "@/content/providers";
import type { ProviderId } from "@/content/types";
import { CertificationsBrowser } from "@/components/cert/certifications-browser";

export const metadata: Metadata = {
  title: "Toutes les certifications",
  description:
    "Parcourez les certifications IA disponibles sur SkillCert AI : Anthropic Claude, OpenAI, AWS, Google Cloud et Microsoft Azure.",
};

export default async function CertificationsPage(props: PageProps<"/certifications">) {
  const searchParams = await props.searchParams;
  const rawFilter = typeof searchParams.fournisseur === "string" ? searchParams.fournisseur : undefined;
  const activeFilter = providerList.some((p) => p.id === rawFilter) ? (rawFilter as ProviderId) : undefined;

  const slugs = (activeFilter ? certifications.filter((c) => c.providerId === activeFilter) : certifications).map(
    (c) => c.slug,
  );

  return <CertificationsBrowser slugs={slugs} activeFilter={activeFilter} />;
}
