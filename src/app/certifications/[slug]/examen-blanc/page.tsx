import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { certifications, getCertification } from "@/content";
import { CertSectionHeader } from "@/components/cert/cert-section-header";
import { ExamRunnerClient } from "@/components/quiz/exam-runner-client";
import { MOCK_EXAM_SIZE } from "@/lib/exam";

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
  const cert = getCertification(slug);
  if (!cert) notFound();

  const examSize = Math.min(MOCK_EXAM_SIZE, cert.quizBank.length);

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <CertSectionHeader
        cert={cert}
        title="Examen blanc"
        description={`${examSize} questions chronometrees, reparties selon la ponderation officielle des domaines. Bilan detaille a la fin.`}
      />
      <div className="mt-8">
        <ExamRunnerClient cert={cert} />
      </div>
    </div>
  );
}
