import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { certifications, getCertification } from "@/content";
import { CertSectionHeader } from "@/components/cert/cert-section-header";
import { ModuleList } from "@/components/cert/module-list";

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
  const cert = getCertification(slug);
  if (!cert) notFound();

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <CertSectionHeader
        cert={cert}
        title="Cours"
        description={`${cert.modules.length} modules, un par domaine d'examen. Marquez-les comme lus au fil de votre progression.`}
      />
      <div className="mt-7">
        <ModuleList cert={cert} />
      </div>
    </div>
  );
}
