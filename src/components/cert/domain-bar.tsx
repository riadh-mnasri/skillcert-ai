import type { Domain } from "@/content/types";
import type { DomainStat } from "@/lib/progress";
import { cn } from "@/lib/utils";

export function DomainBar({
  domain,
  stat,
  index,
}: {
  domain: Domain;
  stat?: DomainStat;
  index: number;
}) {
  const masteryPercent = stat && stat.attempts > 0 ? Math.round((stat.correct / stat.attempts) * 100) : null;

  return (
    <div className="rounded-lg border border-border bg-card p-4">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-2.5">
          <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-secondary font-mono text-[11px] font-semibold text-secondary-foreground">
            {index + 1}
          </span>
          <div>
            <p className="text-sm font-medium leading-snug">{domain.title}</p>
            <p className="mt-1 text-xs text-muted-foreground">{domain.summary}</p>
          </div>
        </div>
        <span className="shrink-0 rounded-full bg-secondary px-2 py-0.5 font-mono text-xs font-semibold text-secondary-foreground">
          {domain.weightPercent}%
        </span>
      </div>
      <div className="mt-3 flex items-center gap-2">
        <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-muted">
          <div
            className="h-full rounded-full bg-primary"
            style={{ width: `${domain.weightPercent}%` }}
          />
        </div>
        {masteryPercent !== null && (
          <span
            className={cn(
              "shrink-0 text-xs font-medium",
              masteryPercent >= 70 ? "text-primary" : "text-muted-foreground",
            )}
          >
            {masteryPercent}% maitrise
          </span>
        )}
      </div>
    </div>
  );
}
