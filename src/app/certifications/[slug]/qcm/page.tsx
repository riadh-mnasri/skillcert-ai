import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { certifications, getCertification } from "@/content";
import { QuizContent } from "@/components/cert/quiz-content";

export function generateStaticParams() {
  return certifications.map((cert) => ({ slug: cert.slug }));
}

export async function generateMetadata(props: PageProps<"/certifications/[slug]/qcm">): Promise<Metadata> {
  const { slug } = await props.params;
  const cert = getCertification(slug);
  return cert ? { title: `QCM · ${cert.name}` } : {};
}

export default async function QuizPage(props: PageProps<"/certifications/[slug]/qcm">) {
  const { slug } = await props.params;
  const searchParams = await props.searchParams;
  if (!getCertification(slug)) notFound();

  const rawDomain = typeof searchParams.domaine === "string" ? searchParams.domaine : undefined;

  return <QuizContent slug={slug} activeDomainId={rawDomain} />;
}
