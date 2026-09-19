import Link from "next/link";
import { ArrowRight, BookOpen, GraduationCap, ListChecks, Timer } from "lucide-react";
import { certifications } from "@/content";
import { providerList } from "@/content/providers";
import { CertCard } from "@/components/cert/cert-card";
import { Seal } from "@/components/site/seal";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: BookOpen,
    title: "Cours structures",
    description: "Un module par domaine d'examen, avec les concepts et cadres de decision qui comptent vraiment.",
  },
  {
    icon: ListChecks,
    title: "Fiches de revision",
    description: "Glossaire en cartes a retourner pour memoriser le vocabulaire technique avant l'examen.",
  },
  {
    icon: GraduationCap,
    title: "QCM par domaine",
    description: "Entrainez-vous domaine par domaine, avec correction et explication immediates.",
  },
  {
    icon: Timer,
    title: "Examen blanc chronometre",
    description: "Simulation complete avec minuteur, navigation entre questions et bilan par domaine.",
  },
];

export default function HomePage() {
  const moduleCount = certifications.reduce((sum, c) => sum + c.modules.length, 0);
  const questionCount = certifications.reduce((sum, c) => sum + c.quizBank.length, 0);
  const glossaryCount = certifications.reduce((sum, c) => sum + c.glossary.length, 0);

  return (
    <>
      <section className="relative overflow-hidden border-b border-border/80">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-24">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
              <Seal className="h-4 w-5" />
              5 fournisseurs IA, une seule methode de revision
            </div>
            <h1 className="mt-5 text-balance font-heading text-4xl font-semibold leading-[1.08] sm:text-5xl lg:text-[3.4rem]">
              Reussissez vos certifications IA,{" "}
              <span className="text-primary">sans deviner ce qui va tomber</span>.
            </h1>
            <p className="mt-5 max-w-xl text-pretty text-base text-muted-foreground sm:text-lg">
              Cours, fiches, QCM et examens blancs pour Anthropic Claude, OpenAI, AWS, Google
              Cloud et Microsoft Azure. Contenu en francais, organise par domaine officiel,
              utilisable entierement depuis votre telephone.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button nativeButton={false} render={<Link href="/certifications" />} size="lg" className="text-base">
                Choisir ma certification
                <ArrowRight className="size-4" />
              </Button>
              <Button nativeButton={false} render={<Link href="/methode" />} size="lg" variant="outline" className="text-base">
                Decouvrir la methode
              </Button>
            </div>
            <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-border/80 pt-6 sm:max-w-md">
              <div>
                <dt className="text-xs text-muted-foreground">Modules de cours</dt>
                <dd className="font-heading text-2xl font-semibold">{moduleCount}</dd>
              </div>
              <div>
                <dt className="text-xs text-muted-foreground">Questions QCM</dt>
                <dd className="font-heading text-2xl font-semibold">{questionCount}+</dd>
              </div>
              <div>
                <dt className="text-xs text-muted-foreground">Fiches glossaire</dt>
                <dd className="font-heading text-2xl font-semibold">{glossaryCount}+</dd>
              </div>
            </dl>
          </div>

          <div className="relative mx-auto w-full max-w-sm">
            <div className="stamp paper-noise rounded-2xl bg-card p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <Seal className="h-10 w-12" />
                <span className="rounded-full bg-primary/10 px-2.5 py-1 font-mono text-[11px] font-semibold text-primary">
                  EXAMEN BLANC
                </span>
              </div>
              <p className="mt-5 font-heading text-lg font-semibold">AWS Certified AI Practitioner</p>
              <div className="mt-4 space-y-2.5">
                {[
                  { label: "Fondamentaux IA/ML", value: 20 },
                  { label: "IA generative", value: 24 },
                  { label: "Modeles de fondation", value: 28 },
                ].map((row) => (
                  <div key={row.label}>
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>{row.label}</span>
                      <span>{row.value}%</span>
                    </div>
                    <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-muted">
                      <div className="h-full rounded-full bg-primary" style={{ width: `${row.value}%` }} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-5 flex items-center justify-between border-t border-border/80 pt-4 text-sm">
                <span className="text-muted-foreground">Score</span>
                <span className="font-heading text-xl font-semibold text-primary">82%</span>
              </div>
            </div>
            <div className="stamp absolute -bottom-5 -left-5 hidden rotate-[-6deg] rounded-xl bg-gold/90 px-4 py-2 text-xs font-semibold text-gold-foreground shadow-sm sm:block">
              Niveau atteint
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border/80 bg-secondary/30">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <h2 className="text-center font-heading text-2xl font-semibold sm:text-3xl">
            Cinq fournisseurs, une seule plateforme
          </h2>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-5">
            {providerList.map((provider) => (
              <Link
                key={provider.id}
                href={`/certifications?fournisseur=${provider.id}`}
                className="group flex flex-col items-center gap-2 rounded-xl border border-border bg-card p-4 text-center transition-colors hover:border-primary/50"
              >
                <span
                  className="size-2.5 rounded-full"
                  style={{ backgroundColor: provider.tint }}
                  aria-hidden="true"
                />
                <span className="text-sm font-semibold">{provider.shortName}</span>
                <span className="text-xs text-muted-foreground">{provider.tagline}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-2xl font-semibold sm:text-3xl">Comment ca marche</h2>
          <p className="mt-3 text-muted-foreground">
            La meme methode en quatre etapes pour chaque certification du catalogue.
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div key={step.title} className="relative rounded-xl border border-border bg-card p-5">
              <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
              <step.icon className="mt-2 size-6 text-primary" />
              <h3 className="mt-3 font-heading text-base font-semibold">{step.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border/80 bg-secondary/30">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="font-heading text-2xl font-semibold sm:text-3xl">Le catalogue</h2>
              <p className="mt-2 text-muted-foreground">5 certifications phares pour commencer.</p>
            </div>
            <Button nativeButton={false} render={<Link href="/certifications" />} variant="ghost" className="self-start">
              Tout voir
              <ArrowRight className="size-4" />
            </Button>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert) => (
              <CertCard key={cert.slug} cert={cert} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
