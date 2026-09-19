import Link from "next/link";
import { Seal } from "@/components/site/seal";
import { providerList } from "@/content/providers";
import { certifications } from "@/content";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/80 bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="sm:col-span-2 md:col-span-1">
            <div className="flex items-center gap-2">
              <Seal className="h-7 w-8" />
              <span className="font-heading text-base font-semibold">SkillCert AI</span>
            </div>
            <p className="mt-3 max-w-xs text-sm text-muted-foreground">
              Cours, fiches, QCM et examens blancs pour reussir vos certifications IA,
              redige en francais et mis a jour regulierement.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Fournisseurs
            </h3>
            <ul className="mt-3 space-y-2 text-sm">
              {providerList.map((provider) => (
                <li key={provider.id}>
                  <Link
                    href={`/certifications?fournisseur=${provider.id}`}
                    className="text-foreground/80 hover:text-primary"
                  >
                    {provider.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Certifications
            </h3>
            <ul className="mt-3 space-y-2 text-sm">
              {certifications.slice(0, 5).map((cert) => (
                <li key={cert.slug}>
                  <Link
                    href={`/certifications/${cert.slug}`}
                    className="text-foreground/80 hover:text-primary"
                  >
                    {cert.code}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Ressources
            </h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link href="/certifications" className="text-foreground/80 hover:text-primary">
                  Toutes les certifications
                </Link>
              </li>
              <li>
                <Link href="/methode" className="text-foreground/80 hover:text-primary">
                  Notre methode
                </Link>
              </li>
              <li>
                <Link href="/progression" className="text-foreground/80 hover:text-primary">
                  Ma progression
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-border/80 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Riadh MNASRI. SkillCert AI est une ressource independante.</p>
          <p>
            Non affilie a Anthropic, OpenAI, Amazon Web Services, Google ou Microsoft.
            Les noms et marques citees appartiennent a leurs proprietaires respectifs.
          </p>
        </div>
      </div>
    </footer>
  );
}
