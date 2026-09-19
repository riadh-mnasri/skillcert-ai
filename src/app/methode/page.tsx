import type { Metadata } from "next";
import { MethodeContent } from "@/components/site/methode-content";

export const metadata: Metadata = {
  title: "Methode",
  description: "Comment SkillCert AI structure la preparation aux certifications IA.",
};

export default function MethodePage() {
  return <MethodeContent />;
}
