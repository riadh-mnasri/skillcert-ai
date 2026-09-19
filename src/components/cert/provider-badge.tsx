import { providers } from "@/content/providers";
import type { ProviderId } from "@/content/types";
import { cn } from "@/lib/utils";

export function ProviderBadge({
  providerId,
  className,
}: {
  providerId: ProviderId;
  className?: string;
}) {
  const provider = providers[providerId];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-2.5 py-1 text-xs font-medium text-foreground/80",
        className,
      )}
    >
      <span
        className="size-1.5 rounded-full"
        style={{ backgroundColor: provider.tint }}
        aria-hidden="true"
      />
      {provider.shortName}
    </span>
  );
}
