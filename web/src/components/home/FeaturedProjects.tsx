import Link from "next/link";
import { projects } from "@/data/projects";

const featured = projects.slice(0, 3);
const tickerItems = projects.map((p) => `${p.title} — ${p.year}`);

const cardTones = ["bg-pastel-pink", "bg-pastel-blue", "bg-pastel-peach"];

export function FeaturedProjects() {
  return (
    <section className="bg-warm-grey/30 py-24 sm:py-28">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-display text-3xl font-black text-charcoal sm:text-4xl">
            پروژه‌های <span className="text-coral">منتخب</span>
          </h2>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-full border border-charcoal/15 px-5 py-2.5 text-sm font-medium text-charcoal/80 transition-colors hover:bg-charcoal hover:text-warm-white focus-visible:ring-2 focus-visible:ring-charcoal/20"
          >
            همه پروژه‌ها
            <span aria-hidden="true">←</span>
          </Link>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p, i) => (
            <Link
              key={p.slug}
              href={`/projects/${p.slug}`}
              className="group block overflow-hidden rounded-arch-xl bg-warm-white shadow-arch-sm transition-all hover:-translate-y-1 hover:shadow-arch-md focus-visible:ring-2 focus-visible:ring-charcoal/20 focus-visible:ring-offset-2"
            >
              <div
                className={`${cardTones[i % cardTones.length]} relative aspect-[4/3] overflow-hidden`}
                style={{ backgroundColor: p.coverColor }}
              >
                <span
                  className={[
                    "absolute right-3 top-3 rounded-full px-3 py-1 text-xs font-medium",
                    p.type === "ساخته‌شده"
                      ? "bg-espresso text-warm-white"
                      : "bg-warm-white/90 text-charcoal",
                  ].join(" ")}
                >
                  {p.type}
                </span>
              </div>
              <div className="p-5 sm:p-6">
                <p className="text-xs text-charcoal/40">{p.year} — {p.location}</p>
                <h3 className="mt-1 text-lg font-bold text-charcoal transition-colors group-hover:text-coral">
                  {p.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Marquee ticker */}
      <div
        className="mt-16 overflow-hidden border-y border-charcoal/10 py-4"
        aria-hidden="true"
      >
        <div className="flex w-max animate-marquee gap-8 whitespace-nowrap">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span
              key={i}
              className="flex items-center gap-8 text-lg font-medium text-charcoal/40"
            >
              {item}
              <span className="text-coral">✱</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
