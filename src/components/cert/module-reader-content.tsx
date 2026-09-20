"use client";

import { Clock3 } from "lucide-react";
import { getModule } from "@/content";
import { useLanguage } from "@/components/site/language-provider";
import { CertSectionHeader } from "@/components/cert/cert-section-header";
import { ModuleBody } from "@/components/cert/module-body";
import { ModulePagination, ModuleReadToggle } from "@/components/cert/module-reader-actions";
import { Badge } from "@/components/ui/badge";

export function ModuleReaderContent({ slug, moduleSlug }: { slug: string; moduleSlug: string }) {
  const { t, lang } = useLanguage();
  const found = getModule(slug, moduleSlug, lang);
  if (!found) return null;
  const { cert, courseModule } = found;

  const domain = cert.domains.find((d) => d.id === courseModule.domainId);
  const moduleIndex = cert.modules.findIndex((m) => m.slug === courseModule.slug);
  const prev = moduleIndex > 0 ? cert.modules[moduleIndex - 1] : undefined;
  const next = moduleIndex < cert.modules.length - 1 ? cert.modules[moduleIndex + 1] : undefined;

  return (
    <article className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <CertSectionHeader cert={cert} title={courseModule.title} />

      <div className="mt-4 flex flex-wrap items-center gap-2">
        {domain && <Badge variant="secondary">{domain.title}</Badge>}
        <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
          <Clock3 className="size-3.5" />
          {courseModule.readMinutes} {t("moduleUi", "readTime")}
        </span>
      </div>

      <p className="mt-4 text-pretty text-muted-foreground">{courseModule.summary}</p>

      <div className="mt-6 rounded-xl border border-border bg-secondary/40 p-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          {t("moduleUi", "keyTakeaways")}
        </p>
        <ul className="mt-2.5 space-y-1.5">
          {courseModule.keyPoints.map((point, i) => (
            <li key={i} className="flex gap-2 text-sm">
              <span className="text-primary">•</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8 space-y-8">
        {courseModule.sections.map((section, i) => (
          <section key={i}>
            <h2 className="font-heading text-lg font-semibold sm:text-xl">{section.heading}</h2>
            <div className="mt-3">
              <ModuleBody body={section.body} />
            </div>
          </section>
        ))}
      </div>

      <div className="mt-10 flex flex-col gap-4 border-t border-border/80 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <ModuleReadToggle certSlug={cert.slug} moduleSlug={courseModule.slug} />
      </div>
      <div className="mt-4">
        <ModulePagination
          certSlug={cert.slug}
          prevHref={prev ? `/certifications/${cert.slug}/cours/${prev.slug}` : undefined}
          prevLabel={prev?.title}
          nextHref={next ? `/certifications/${cert.slug}/cours/${next.slug}` : undefined}
          nextLabel={next?.title}
        />
      </div>
    </article>
  );
}
