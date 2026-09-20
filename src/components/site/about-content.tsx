"use client";

import Link from "next/link";
import { Globe, Newspaper } from "lucide-react";
import { useLanguage } from "@/components/site/language-provider";
import { LinkedinIcon } from "@/components/site/linkedin-icon";
import { AUTHOR_LINKS } from "@/lib/author-links";
import { Button } from "@/components/ui/button";

export function AboutContent() {
  const { t } = useLanguage();

  const links = [
    { href: AUTHOR_LINKS.linkedin, label: t("about", "linkedin"), icon: LinkedinIcon },
    { href: AUTHOR_LINKS.portfolio, label: t("about", "portfolio"), icon: Globe },
    { href: AUTHOR_LINKS.blog, label: t("about", "blog"), icon: Newspaper },
  ];

  return (
    <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-14">
      <h1 className="font-heading text-3xl font-semibold sm:text-4xl">{t("about", "title")}</h1>

      <div className="mt-6 space-y-4 font-reading text-[1.0625rem] leading-[1.75] text-foreground/85">
        <p>{t("about", "p1")}</p>
        <p>{t("about", "p2")}</p>
      </div>

      <div className="mt-10 rounded-xl border border-border bg-card p-5">
        <h2 className="font-heading text-base font-semibold">{t("about", "linksHeading")}</h2>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer noopener"
              className="flex flex-1 items-center gap-2.5 rounded-lg border border-border px-4 py-2.5 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
            >
              <link.icon className="size-4" />
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <Button nativeButton={false} render={<Link href="/certifications" />} className="mt-8">
        {t("about", "cta")}
      </Button>
    </div>
  );
}
