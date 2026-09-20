import type { Metadata } from "next";
import { AboutContent } from "@/components/site/about-content";

export const metadata: Metadata = {
  title: "A propos",
  description: "Qui a cree SkillCert AI et pourquoi.",
};

export default function AboutPage() {
  return <AboutContent />;
}
