import type { Metadata } from "next";
import { ProgressionDashboard } from "@/components/cert/progression-dashboard";

export const metadata: Metadata = {
  title: "Ma progression",
  description: "Suivez votre avancement sur les cours, QCM et examens blancs de chaque certification.",
};

export default function ProgressionPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-14">
      <h1 className="font-heading text-3xl font-semibold sm:text-4xl">Ma progression</h1>
      <p className="mt-3 max-w-xl text-muted-foreground">
        Votre avancement est enregistre localement sur cet appareil, certification par
        certification.
      </p>
      <div className="mt-8">
        <ProgressionDashboard />
      </div>
    </div>
  );
}
