import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, GraduationCap, ListChecks, Timer } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Methode",
  description: "Comment SkillCert AI structure la preparation aux certifications IA.",
};

const steps = [
  {
    icon: BookOpen,
    title: "1. Cours par domaine",
    body: "Chaque certification est decoupee selon ses domaines d'examen officiels. Un module de cours par domaine, avec les concepts, les services concernes et les points a retenir. Pas de remplissage : l'objectif est de couvrir ce qui est reellement teste.",
  },
  {
    icon: ListChecks,
    title: "2. Fiches de revision",
    body: "Un glossaire en cartes a retourner pour chaque certification. Utile en revision rapide, dans les transports ou juste avant l'examen, pour verifier que le vocabulaire technique est acquis.",
  },
  {
    icon: GraduationCap,
    title: "3. QCM par domaine",
    body: "Une fois un domaine lu, entrainez-vous avec des questions ciblees. Chaque reponse est corrigee immediatement avec une explication, pour comprendre l'erreur plutot que la memoriser.",
  },
  {
    icon: Timer,
    title: "4. Examen blanc chronometre",
    body: "Une simulation complete qui melange les domaines dans les proportions officielles, avec un minuteur et un bilan detaille par domaine a la fin, pour reperer precisement ou reviser avant le jour J.",
  },
];

export default function MethodePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <h1 className="font-heading text-3xl font-semibold sm:text-4xl">Notre methode</h1>
      <p className="mt-4 text-pretty text-muted-foreground">
        SkillCert AI applique la meme structure a chaque certification du catalogue, pour que
        vous n&apos;ayez pas a reapprendre une nouvelle organisation a chaque fois.
      </p>

      <div className="mt-10 space-y-6">
        {steps.map((step) => (
          <div key={step.title} className="flex gap-4 rounded-xl border border-border bg-card p-5">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <step.icon className="size-5" />
            </span>
            <div>
              <h2 className="font-heading text-base font-semibold sm:text-lg">{step.title}</h2>
              <p className="mt-1.5 text-sm text-muted-foreground">{step.body}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-xl border border-dashed border-border p-5">
        <h2 className="font-heading text-base font-semibold">A propos du contenu</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          SkillCert AI est une ressource independante de preparation, non affiliee ni approuvee
          par Anthropic, OpenAI, Amazon Web Services, Google ou Microsoft. Les formats d&apos;examen
          (nombre de questions, duree, prix, seuil de reussite) sont indiques a titre indicatif :
          verifiez toujours les informations a jour sur le site officiel du fournisseur avant de
          vous inscrire a un examen. Le score affiche dans les examens blancs de ce site utilise
          un seuil indicatif de 70%, distinct du seuil de reussite reel de chaque certification.
        </p>
      </div>

      <Button nativeButton={false} render={<Link href="/certifications" />} className="mt-8">
        Choisir une certification
      </Button>
    </div>
  );
}
