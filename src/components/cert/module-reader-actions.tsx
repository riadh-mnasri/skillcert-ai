"use client";

import Link from "next/link";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import { toggleModuleRead } from "@/lib/progress";
import { useCertProgress } from "@/lib/use-progress";
import { Button } from "@/components/ui/button";

export function ModuleReadToggle({ certSlug, moduleSlug }: { certSlug: string; moduleSlug: string }) {
  const progress = useCertProgress(certSlug);
  const isRead = progress.modulesRead.includes(moduleSlug);

  return (
    <Button
      variant={isRead ? "default" : "outline"}
      onClick={() => toggleModuleRead(certSlug, moduleSlug)}
      className="w-full sm:w-auto"
    >
      <Check className="size-4" />
      {isRead ? "Module lu" : "Marquer comme lu"}
    </Button>
  );
}

export function ModulePagination({
  certSlug,
  prevHref,
  prevLabel,
  nextHref,
  nextLabel,
}: {
  certSlug: string;
  prevHref?: string;
  prevLabel?: string;
  nextHref?: string;
  nextLabel?: string;
}) {
  return (
    <div className="flex items-center justify-between gap-3">
      {prevHref ? (
        <Button nativeButton={false} render={<Link href={prevHref} />} variant="outline" className="flex-1 justify-start sm:flex-none">
          <ChevronLeft className="size-4" />
          <span className="truncate">{prevLabel}</span>
        </Button>
      ) : (
        <Button nativeButton={false}
          render={<Link href={`/certifications/${certSlug}/cours`} />}
          variant="outline"
          className="flex-1 justify-start sm:flex-none"
        >
          <ChevronLeft className="size-4" />
          Tous les modules
        </Button>
      )}
      {nextHref && (
        <Button nativeButton={false} render={<Link href={nextHref} />} className="flex-1 justify-end sm:flex-none">
          <span className="truncate">{nextLabel}</span>
          <ChevronRight className="size-4" />
        </Button>
      )}
    </div>
  );
}
