import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock3, DollarSign, ExternalLink, ListChecks, Monitor, Target } from "lucide-react";
import { certifications, getCertification } from "@/content";
import { ProviderBadge } from "@/components/cert/provider-badge";
import { DomainOverview } from "@/components/cert/domain-overview";
import { SectionNavCards } from "@/components/cert/section-nav-cards";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

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

const formatChips = (cert: NonNullable<ReturnType<typeof getCertification>>) => [
  { icon: ListChecks, label: `${cert.format.questionCount} questions` },
  { icon: Clock3, label: `${cert.format.durationMinutes} minutes` },
  { icon: Target, label: cert.format.passingScore },
  { icon: DollarSign, label: cert.format.price },
  { icon: Monitor, label: cert.format.deliveryMode },
];

export default async function CertificationDetailPage(props: PageProps<"/certifications/[slug]">) {
  const { slug } = await props.params;
  const cert = getCertification(slug);
  if (!cert) notFound();

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14">
      <div className="flex flex-wrap items-center gap-2">
        <ProviderBadge providerId={cert.providerId} />
        <Badge variant="outline">{cert.level}</Badge>
        {!cert.format.isOfficialCertification && (
          <Badge variant="outline" className="text-muted-foreground">
            Badge de completion, pas un examen surveille
          </Badge>
        )}
      </div>

      <h1 className="mt-4 font-heading text-3xl font-semibold sm:text-4xl">{cert.name}</h1>
      <p className="mt-1 font-mono text-sm text-muted-foreground">{cert.code}</p>
      <p className="mt-4 max-w-3xl text-pretty text-muted-foreground">{cert.description}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {formatChips(cert).map((chip) => (
          <span
            key={chip.label}
            className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-xs text-foreground/80"
          >
            <chip.icon className="size-3.5 text-primary" />
            {chip.label}
          </span>
        ))}
      </div>

      {cert.officialUrl && (
        <a
          href={cert.officialUrl}
          target="_blank"
          rel="noreferrer noopener"
          className="mt-4 inline-flex items-center gap-1.5 text-sm text-primary hover:underline"
        >
          Voir la page officielle
          <ExternalLink className="size-3.5" />
        </a>
      )}

      <div className="mt-8">
        <SectionNavCards cert={cert} />
      </div>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1.5fr_1fr]">
        <div>
          <h2 className="font-heading text-xl font-semibold">Domaines d&apos;examen</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Ponderation officielle indicative et votre maitrise mesuree via le QCM.
          </p>
          <div className="mt-5">
            <DomainOverview cert={cert} />
          </div>
        </div>

        <div>
          <h2 className="font-heading text-xl font-semibold">Plan de revision suggere</h2>
          <ol className="mt-5 space-y-4">
            {cert.studyPlan.map((step, i) => (
              <li key={step.label} className="flex gap-3">
                <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary/10 font-mono text-xs font-semibold text-primary">
                  {i + 1}
                </span>
                <div>
                  <p className="text-sm font-medium">{step.label}</p>
                  <p className="text-sm text-muted-foreground">{step.detail}</p>
                </div>
              </li>
            ))}
          </ol>
          <Button nativeButton={false} render={<Link href={`/certifications/${cert.slug}/cours`} />} className="mt-6 w-full">
            Commencer le premier module
          </Button>
        </div>
      </div>
    </div>
  );
}
