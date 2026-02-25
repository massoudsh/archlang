import Link from "next/link";

// Placeholder data; replace with content/projects.json
const featured = [
  { slug: "villa-north", title: "ویلای شمال تهران", type: "ساخته‌شده" },
  { slug: "lavasan-concept", title: "طرح لواسان", type: "مفهومی" },
  { slug: "residence-2", title: "مجتمع مسکونی", type: "ساخته‌شده" },
];

export function FeaturedProjects() {
  return (
    <section className="border-t border-warm-grey-deep/50 bg-warm-grey/30 py-24 sm:py-28">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-medium tracking-tight text-charcoal sm:text-3xl">
          پروژه‌های منتخب
        </h2>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => (
            <Link
              key={p.slug}
              href={`/projects/${p.slug}`}
              className="group block overflow-hidden rounded-arch-lg border border-warm-grey-deep/40 bg-warm-white shadow-arch-sm transition-all hover:-translate-y-0.5 hover:shadow-arch-md focus-visible:ring-2 focus-visible:ring-charcoal/20 focus-visible:ring-offset-2"
            >
              <div className="aspect-[4/3] bg-warm-grey-deep/50 transition-colors group-hover:bg-warm-grey-deep/70" />
              <div className="p-5 sm:p-6">
                <h3 className="font-medium text-charcoal group-hover:text-accent-olive">
                  {p.title}
                </h3>
                <p className="mt-1.5 text-sm text-charcoal/70">{p.type}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-12">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-charcoal/80 transition-colors hover:text-charcoal focus-visible:rounded focus-visible:ring-2 focus-visible:ring-accent-olive/40"
          >
            <span className="border-b border-accent-olive/60 pb-0.5">مشاهده همه پروژه‌ها</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
