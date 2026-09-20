import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { certifications, getCertification } from "@/content";
import { CourseListContent } from "@/components/cert/course-list-content";

export function generateStaticParams() {
  return certifications.map((cert) => ({ slug: cert.slug }));
}

export async function generateMetadata(props: PageProps<"/certifications/[slug]/cours">): Promise<Metadata> {
  const { slug } = await props.params;
  const cert = getCertification(slug);
  return cert ? { title: `Cours · ${cert.name}` } : {};
}

export default async function CoursePage(props: PageProps<"/certifications/[slug]/cours">) {
  const { slug } = await props.params;
  if (!getCertification(slug)) notFound();
  return <CourseListContent slug={slug} />;
}
