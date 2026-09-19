import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { certifications, getCertification } from "@/content";
import { CertSectionHeader } from "@/components/cert/cert-section-header";
import { QuizRunnerClient } from "@/components/quiz/quiz-runner-client";
import { cn } from "@/lib/utils";

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
  const cert = getCertification(slug);
  if (!cert) notFound();

  const rawDomain = typeof searchParams.domaine === "string" ? searchParams.domaine : undefined;
  const activeDomain = cert.domains.find((d) => d.id === rawDomain);

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <CertSectionHeader
        cert={cert}
        title="QCM par domaine"
        description="Entrainement avec correction et explication immediates apres chaque reponse."
      />

      <div className="mt-6 flex flex-wrap gap-2">
        <Link
          href={`/certifications/${cert.slug}/qcm`}
          className={cn(
            "rounded-full border px-3 py-1.5 text-xs font-medium",
            !activeDomain ? "border-primary bg-primary text-primary-foreground" : "border-border hover:border-primary/60",
          )}
        >
          Tous les domaines ({cert.quizBank.length})
        </Link>
        {cert.domains.map((domain) => {
          const count = cert.quizBank.filter((q) => q.domainId === domain.id).length;
          return (
            <Link
              key={domain.id}
              href={`/certifications/${cert.slug}/qcm?domaine=${domain.id}`}
              className={cn(
                "rounded-full border px-3 py-1.5 text-xs font-medium",
                activeDomain?.id === domain.id
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border hover:border-primary/60",
              )}
            >
              {domain.title} ({count})
            </Link>
          );
        })}
      </div>

      <div className="mt-8">
        <QuizRunnerClient
          key={activeDomain?.id ?? "all"}
          cert={cert}
          domainId={activeDomain?.id}
          domainTitle={activeDomain?.title}
        />
      </div>
    </div>
  );
}
