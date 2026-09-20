import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { certifications, getCertification } from "@/content";
import { FlashcardsContent } from "@/components/cert/flashcards-content";

export function generateStaticParams() {
  return certifications.map((cert) => ({ slug: cert.slug }));
}

export async function generateMetadata(props: PageProps<"/certifications/[slug]/fiches">): Promise<Metadata> {
  const { slug } = await props.params;
  const cert = getCertification(slug);
  return cert ? { title: `Fiches de révision · ${cert.name}` } : {};
}

export default async function FlashcardsPage(props: PageProps<"/certifications/[slug]/fiches">) {
  const { slug } = await props.params;
  const searchParams = await props.searchParams;
  if (!getCertification(slug)) notFound();

  const rawDomain = typeof searchParams.domaine === "string" ? searchParams.domaine : undefined;

  return <FlashcardsContent slug={slug} activeDomainId={rawDomain} />;
}
