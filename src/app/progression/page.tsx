import type { Metadata } from "next";
import { ProgressionContent } from "@/components/cert/progression-content";

export const metadata: Metadata = {
  title: "Ma progression",
  description: "Suivez votre avancement sur les cours, QCM et examens blancs de chaque certification.",
};

export default function ProgressionPage() {
  return <ProgressionContent />;
}
