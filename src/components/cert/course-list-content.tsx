"use client";

import { getCertification } from "@/content";
import { useLanguage } from "@/components/site/language-provider";
import { CertSectionHeader } from "@/components/cert/cert-section-header";
import { ModuleList } from "@/components/cert/module-list";

export function CourseListContent({ slug }: { slug: string }) {
  const { t, lang } = useLanguage();
  const cert = getCertification(slug, lang);
  if (!cert) return null;

  const description = t("pageIntros", "coursesDescription").replace("{count}", String(cert.modules.length));

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <CertSectionHeader cert={cert} title={t("sectionNav", "courses")} description={description} />
      <div className="mt-7">
        <ModuleList cert={cert} />
      </div>
    </div>
  );
}
