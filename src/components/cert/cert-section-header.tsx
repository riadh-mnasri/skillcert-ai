import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import type { Certification } from "@/content/types";
import { ContentLanguageNotice } from "@/components/cert/content-language-notice";

export function CertSectionHeader({
  cert,
  title,
  description,
}: {
  cert: Certification;
  title: string;
  description?: string;
}) {
  return (
    <div>
      <Link
        href={`/certifications/${cert.slug}`}
        className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary"
      >
        <ChevronLeft className="size-4" />
        {cert.name}
      </Link>
      <h1 className="mt-3 font-heading text-2xl font-semibold sm:text-3xl">{title}</h1>
      {description && <p className="mt-2 max-w-2xl text-muted-foreground">{description}</p>}
      <ContentLanguageNotice />
    </div>
  );
}
