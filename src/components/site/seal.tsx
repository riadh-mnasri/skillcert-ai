import { cn } from "@/lib/utils";

/**
 * Sceau hexagonal maison de SkillCert AI : sert de logo, de favicon et de
 * motif recurrent (cartes de certification, ecrans de reussite d'examen).
 * Forme geometrique dessinee a la main, volontairement eloignee des
 * pictogrammes "etincelle" / robot generiques des sites IA.
 */
export function Seal({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 40"
      aria-hidden="true"
      className={cn("shrink-0", className)}
    >
      <polygon
        points="39.59,29 24,38 8.41,29 8.41,11 24,2 39.59,11"
        className="fill-primary"
      />
      <path
        d="M16 20.5 L21.3 26 L33 13.5"
        fill="none"
        className="stroke-primary-foreground"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="24" cy="20" r="17.2" fill="none" className="stroke-gold" strokeWidth="1.4" strokeDasharray="2.5 3" />
    </svg>
  );
}
