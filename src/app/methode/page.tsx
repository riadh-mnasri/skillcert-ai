import type { Metadata } from "next";
import { MethodeContent } from "@/components/site/methode-content";

export const metadata: Metadata = {
  title: "Méthode",
  description: "Comment SkillCert AI structure la préparation aux certifications IA.",
};

export default function MethodePage() {
  return <MethodeContent />;
}
