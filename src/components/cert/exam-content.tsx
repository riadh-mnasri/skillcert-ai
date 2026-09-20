"use client";

import { getCertification } from "@/content";
import { useLanguage } from "@/components/site/language-provider";
import { CertSectionHeader } from "@/components/cert/cert-section-header";
import { ExamRunnerClient } from "@/components/quiz/exam-runner-client";
import { MOCK_EXAM_SIZE } from "@/lib/exam";

export function ExamContent({ slug }: { slug: string }) {
  const { t, lang } = useLanguage();
  const cert = getCertification(slug, lang);
  if (!cert) return null;

  const examSize = Math.min(MOCK_EXAM_SIZE, cert.quizBank.length);
  const description = t("pageIntros", "examDescription").replace("{count}", String(examSize));

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <CertSectionHeader cert={cert} title={t("sectionNav", "mockExam")} description={description} />
      <div className="mt-8">
        <ExamRunnerClient cert={cert} />
      </div>
    </div>
  );
}
