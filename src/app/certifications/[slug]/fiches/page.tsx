import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { certifications, getCertification } from "@/content";
import { CertSectionHeader } from "@/components/cert/cert-section-header";
import { FlashcardDeck } from "@/components/quiz/flashcard-deck";
import { cn } from "@/lib/utils";

export function generateStaticParams() {
  return certifications.map((cert) => ({ slug: cert.slug }));
}

export async function generateMetadata(props: PageProps<"/certifications/[slug]/fiches">): Promise<Metadata> {
  const { slug } = await props.params;
  const cert = getCertification(slug);
  return cert ? { title: `Fiches de revision · ${cert.name}` } : {};
}

export default async function FlashcardsPage(
  props: PageProps<"/certifications/[slug]/fiches">,
) {
  const { slug } = await props.params;
  const searchParams = await props.searchParams;
  const cert = getCertification(slug);
  if (!cert) notFound();

  const rawDomain = typeof searchParams.domaine === "string" ? searchParams.domaine : undefined;
  const activeDomain = cert.domains.some((d) => d.id === rawDomain) ? rawDomain : undefined;

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <CertSectionHeader
        cert={cert}
        title="Fiches de revision"
        description={`${cert.glossary.length} termes a memoriser. Touchez une fiche pour la retourner.`}
      />

      <div className="mt-6 flex flex-wrap gap-2">
        <Link
          href={`/certifications/${cert.slug}/fiches`}
          className={cn(
            "rounded-full border px-3 py-1.5 text-xs font-medium",
            !activeDomain ? "border-primary bg-primary text-primary-foreground" : "border-border hover:border-primary/60",
          )}
        >
          Tous les domaines
        </Link>
        {cert.domains.map((domain) => (
          <Link
            key={domain.id}
            href={`/certifications/${cert.slug}/fiches?domaine=${domain.id}`}
            className={cn(
              "rounded-full border px-3 py-1.5 text-xs font-medium",
              activeDomain === domain.id
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border hover:border-primary/60",
            )}
          >
            {domain.title}
          </Link>
        ))}
      </div>

      <div className="mt-8">
        <FlashcardDeck key={activeDomain ?? "all"} cert={cert} domainId={activeDomain} />
      </div>
    </div>
  );
}
