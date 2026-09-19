import type { Metadata, Viewport } from "next";
import { Fraunces, Figtree, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/site/theme-provider";
import { LanguageProvider } from "@/components/site/language-provider";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const fontDisplay = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
});

const fontBody = Figtree({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const fontMonoExam = JetBrains_Mono({
  variable: "--font-mono-exam",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://skillcert-ai.vercel.app"),
  title: {
    default: "SkillCert AI — Préparation aux certifications IA",
    template: "%s · SkillCert AI",
  },
  description:
    "Cours, fiches de révision, QCM et examens blancs pour réussir les certifications IA : Anthropic Claude, OpenAI, AWS, Google Cloud et Microsoft Azure.",
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "oklch(0.975 0.013 84)" },
    { media: "(prefers-color-scheme: dark)", color: "oklch(0.222 0.041 259.3)" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      suppressHydrationWarning
      className={`${fontDisplay.variable} ${fontBody.variable} ${fontMonoExam.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            <TooltipProvider delay={150}>
              <SiteHeader />
              <main className="flex-1">{children}</main>
              <SiteFooter />
              <Toaster />
            </TooltipProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
