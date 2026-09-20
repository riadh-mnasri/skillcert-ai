import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { certifications, getCertification } from "@/content";
import { ExamContent } from "@/components/cert/exam-content";

export function generateStaticParams() {
  return certifications.map((cert) => ({ slug: cert.slug }));
}

export async function generateMetadata(
  props: PageProps<"/certifications/[slug]/examen-blanc">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const cert = getCertification(slug);
  return cert ? { title: `Examen blanc · ${cert.name}` } : {};
}

export default async function MockExamPage(props: PageProps<"/certifications/[slug]/examen-blanc">) {
  const { slug } = await props.params;
  if (!getCertification(slug)) notFound();
  return <ExamContent slug={slug} />;
}
