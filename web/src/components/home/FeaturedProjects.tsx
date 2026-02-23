import Link from "next/link";

// Placeholder data; replace with content/projects.json
const featured = [
  { slug: "villa-north", title: "ویلای شمال تهران", type: "ساخته‌شده" },
  { slug: "lavasan-concept", title: "طرح لواسان", type: "مفهومی" },
  { slug: "residence-2", title: "مجتمع مسکونی", type: "ساخته‌شده" },
];

export function FeaturedProjects() {
  return (
    <section className="border-t border-warm-grey bg-warm-grey/20 py-20">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-medium text-charcoal sm:text-3xl">
          پروژه‌های منتخب
        </h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => (
            <Link
              key={p.slug}
              href={`/projects/${p.slug}`}
              className="group block overflow-hidden border border-warm-grey bg-warm-white transition-shadow hover:shadow-md"
            >
              <div className="aspect-[4/3] bg-warm-grey" />
              <div className="p-4">
                <h3 className="font-medium text-charcoal group-hover:underline">
                  {p.title}
                </h3>
                <p className="mt-1 text-sm text-charcoal/70">{p.type}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-10">
          <Link
            href="/projects"
            className="text-charcoal/80 underline decoration-accent-olive underline-offset-2 transition-colors hover:text-charcoal"
          >
            مشاهده همه پروژه‌ها
          </Link>
        </div>
      </div>
    </section>
  );
}
