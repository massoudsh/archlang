import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "@/data/projects";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.title} | فا`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <main>
      {/* Hero banner */}
      <section
        className="relative min-h-[55vh] flex flex-col justify-end overflow-hidden rounded-b-arch-xl"
        style={{ backgroundColor: project.coverColor }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-espresso/90 via-espresso/30 to-transparent" />
        <div className="relative z-10 mx-auto w-full max-w-content px-4 pb-16 pt-32 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav aria-label="مسیر" className="mb-6 flex items-center gap-2 text-sm text-warm-white/60">
            <Link href="/" className="hover:text-warm-white transition-colors">خانه</Link>
            <span aria-hidden>/</span>
            <Link href="/projects" className="hover:text-warm-white transition-colors">پروژه‌ها</Link>
            <span aria-hidden>/</span>
            <span className="text-warm-white/90">{project.title}</span>
          </nav>

          <span
            className={[
              "inline-block rounded-full px-3 py-1 text-xs font-medium mb-4",
              project.type === "ساخته‌شده"
                ? "bg-coral text-warm-white"
                : "bg-warm-white/90 text-charcoal",
            ].join(" ")}
          >
            {project.type}
          </span>
          <h1 className="font-display text-4xl font-black text-warm-white sm:text-5xl lg:text-6xl">
            {project.title}
          </h1>
          <p className="mt-3 text-lg text-warm-white/70">{project.subtitle}</p>
        </div>
      </section>

      {/* Gallery — vertical scroll */}
      {project.gallery.length > 0 && (
        <section
          aria-label="گالری تصاویر پروژه"
          className="mx-auto max-w-content px-4 pt-12 sm:px-6 lg:px-8"
        >
          <p className="mb-6 text-sm font-medium tracking-[0.3em] text-coral uppercase">
            Gallery
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {project.gallery.map((item, i) => (
              <figure
                key={i}
                className={[
                  "overflow-hidden rounded-arch-xl shadow-arch-sm",
                  i === 0 ? "sm:col-span-2" : "",
                  item.aspect,
                ].join(" ")}
              >
                {/* Color placeholder — replace with next/image when assets are ready */}
                <div
                  className="h-full w-full"
                  style={{ backgroundColor: item.color }}
                  role="img"
                  aria-label={item.caption}
                />
                <figcaption className="sr-only">{item.caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}

      {/* Content */}
      <div className="mx-auto max-w-content px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-3">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Description */}
            <section>
              <h2 className="mb-4 text-sm font-medium tracking-[0.3em] text-coral uppercase">درباره پروژه</h2>
              <p className="text-charcoal/80 leading-[2] text-lg font-light">
                {project.description}
              </p>
            </section>

            {/* Designer note */}
            <section className="border-r-2 border-coral pr-6">
              <p className="mb-2 text-sm font-medium tracking-[0.3em] text-coral uppercase">یادداشت طراح</p>
              <blockquote className="text-charcoal/70 leading-[1.9] text-base">
                «{project.designerNote}»
              </blockquote>
            </section>

            {/* Role clarification */}
            {project.roleNote && (
              <section className="rounded-arch-xl bg-pastel-peach px-5 py-4">
                <p className="text-xs font-medium tracking-widest text-espresso/60 uppercase mb-1">نقش طراح در این پروژه</p>
                <p className="text-sm text-charcoal/70">{project.roleNote}</p>
              </section>
            )}

            {/* Scope */}
            <section>
              <h2 className="mb-5 text-sm font-medium tracking-[0.3em] text-coral uppercase">حوزه کار</h2>
              <ul className="grid gap-3 sm:grid-cols-2">
                {project.scope.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-charcoal/70">
                    <span className="h-1 w-4 rounded-full bg-coral/50 shrink-0" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Sidebar metadata */}
          <aside className="space-y-8">
            <div className="rounded-arch-xl bg-warm-grey/40 p-6 space-y-5">
              {(
                [
                  { label: "سال", value: project.year },
                  { label: "موقعیت", value: project.location },
                  { label: "مساحت", value: project.area },
                  { label: "وضعیت", value: project.status },
                ] as { label: string; value: string }[]
              ).map(({ label, value }) => (
                <div key={label} className="border-b border-warm-grey-deep/40 pb-4 last:border-none last:pb-0">
                  <p className="text-xs text-charcoal/40 mb-1">{label}</p>
                  <p className="text-charcoal font-medium text-sm">{value}</p>
                </div>
              ))}
            </div>

            {/* Materials */}
            <div>
              <h3 className="mb-4 text-sm font-medium tracking-[0.3em] text-coral uppercase">مصالح</h3>
              <ul className="space-y-2">
                {project.materials.map((m) => (
                  <li key={m} className="flex items-center gap-2 text-sm text-charcoal/60">
                    <span
                      className="h-2 w-2 rounded-full shrink-0"
                      style={{ backgroundColor: project.accentColor }}
                      aria-hidden
                    />
                    {m}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="rounded-arch-xl bg-coral p-6 text-center shadow-arch-md">
              <p className="text-sm text-warm-white/85 mb-4 leading-relaxed">
                پروژه مشابهی در ذهن دارید؟
              </p>
              <Link
                href="/contact"
                className="inline-block w-full rounded-full bg-warm-white px-4 py-3 text-sm font-medium text-charcoal transition-all hover:bg-espresso hover:text-warm-white hover:shadow-arch-md"
              >
                درخواست مشاوره
              </Link>
            </div>
          </aside>
        </div>

        {/* Back link */}
        <div className="mt-16 pt-8 border-t border-warm-grey-deep/40">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-charcoal/50 hover:text-coral transition-colors"
          >
            <span aria-hidden>←</span>
            بازگشت به همه پروژه‌ها
          </Link>
        </div>
      </div>
    </main>
  );
}
