import type { Metadata } from "next";
import { AboutContent } from "@/components/site/about-content";

export const metadata: Metadata = {
  title: "À propos",
  description: "Qui a créé SkillCert AI et pourquoi.",
};

export default function AboutPage() {
  return <AboutContent />;
}
