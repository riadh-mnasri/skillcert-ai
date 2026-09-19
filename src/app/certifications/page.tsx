import type { Metadata } from "next";
import Link from "next/link";
import { certifications } from "@/content";
import { providerList } from "@/content/providers";
import type { ProviderId } from "@/content/types";
import { CertCard } from "@/components/cert/cert-card";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Toutes les certifications",
  description:
    "Parcourez les certifications IA disponibles sur SkillCert AI : Anthropic Claude, OpenAI, AWS, Google Cloud et Microsoft Azure.",
};

export default async function CertificationsPage(props: PageProps<"/certifications">) {
  const searchParams = await props.searchParams;
  const rawFilter = typeof searchParams.fournisseur === "string" ? searchParams.fournisseur : undefined;
  const activeFilter = providerList.some((p) => p.id === rawFilter) ? (rawFilter as ProviderId) : undefined;

  const filtered = activeFilter
    ? certifications.filter((c) => c.providerId === activeFilter)
    : certifications;

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      <div className="max-w-2xl">
        <h1 className="font-heading text-3xl font-semibold sm:text-4xl">Certifications</h1>
        <p className="mt-3 text-muted-foreground">
          5 certifications phares pour demarrer, une par grand fournisseur d&apos;IA. Chacune
          inclut ses cours, ses fiches, son QCM et son examen blanc.
        </p>
      </div>

      <div className="mt-7 flex flex-wrap gap-2">
        <Link
          href="/certifications"
          className={cn(
            "rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors",
            !activeFilter ? "border-primary bg-primary text-primary-foreground" : "border-border hover:border-primary/60",
          )}
        >
          Tous
        </Link>
        {providerList.map((provider) => (
          <Link
            key={provider.id}
            href={`/certifications?fournisseur=${provider.id}`}
            className={cn(
              "rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors",
              activeFilter === provider.id
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border hover:border-primary/60",
            )}
          >
            {provider.shortName}
          </Link>
        ))}
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((cert) => (
          <CertCard key={cert.slug} cert={cert} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-10 text-center text-sm text-muted-foreground">
          Aucune certification pour ce fournisseur pour le moment.
        </p>
      )}
    </div>
  );
}
