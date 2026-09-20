import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { certifications, getCertification } from "@/content";
import { CertDetailContent } from "@/components/cert/cert-detail-content";

export function generateStaticParams() {
  return certifications.map((cert) => ({ slug: cert.slug }));
}

export async function generateMetadata(props: PageProps<"/certifications/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const cert = getCertification(slug);
  if (!cert) return {};
  return {
    title: cert.name,
    description: cert.description,
  };
}

export default async function CertificationDetailPage(props: PageProps<"/certifications/[slug]">) {
  const { slug } = await props.params;
  if (!getCertification(slug)) notFound();
  return <CertDetailContent slug={slug} />;
}
