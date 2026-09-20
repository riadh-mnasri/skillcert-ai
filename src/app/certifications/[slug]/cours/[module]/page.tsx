import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { certifications, getModule } from "@/content";
import { ModuleReaderContent } from "@/components/cert/module-reader-content";

export function generateStaticParams() {
  return certifications.flatMap((cert) => cert.modules.map((m) => ({ slug: cert.slug, module: m.slug })));
}

export async function generateMetadata(
  props: PageProps<"/certifications/[slug]/cours/[module]">,
): Promise<Metadata> {
  const { slug, module } = await props.params;
  const found = getModule(slug, module);
  return found ? { title: `${found.courseModule.title} · ${found.cert.name}` } : {};
}

export default async function ModuleReaderPage(props: PageProps<"/certifications/[slug]/cours/[module]">) {
  const { slug, module } = await props.params;
  if (!getModule(slug, module)) notFound();
  return <ModuleReaderContent slug={slug} moduleSlug={module} />;
}
