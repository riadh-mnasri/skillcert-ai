function isListLine(line: string) {
  return /^[-•]\s+/.test(line.trim());
}

export function ModuleBody({ body }: { body: string }) {
  const blocks = body
    .split(/\n\s*\n/)
    .map((block) => block.trim())
    .filter(Boolean);

  return (
    <div className="space-y-4">
      {blocks.map((block, blockIndex) => {
        const lines = block
          .split("\n")
          .map((l) => l.trim())
          .filter(Boolean);
        const isList = lines.length > 0 && lines.every(isListLine);

        if (isList) {
          return (
            <ul key={blockIndex} className="ml-1 list-disc space-y-1.5 pl-5 marker:text-primary">
              {lines.map((line, i) => (
                <li key={i} className="text-muted-foreground">
                  {line.replace(/^[-•]\s+/, "")}
                </li>
              ))}
            </ul>
          );
        }

        return (
          <p key={blockIndex} className="leading-relaxed text-muted-foreground">
            {lines.join(" ")}
          </p>
        );
      })}
    </div>
  );
}
