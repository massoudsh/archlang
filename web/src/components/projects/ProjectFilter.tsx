"use client";

import { useState } from "react";
import Link from "next/link";
import { projects, type ProjectType } from "@/data/projects";

const filterOptions: { label: string; value: "all" | ProjectType }[] = [
  { label: "همه", value: "all" },
  { label: "ساخته‌شده", value: "ساخته‌شده" },
  { label: "مفهومی", value: "مفهومی" },
];

export function ProjectFilter() {
  const [active, setActive] = useState<"all" | ProjectType>("all");

  const filtered =
    active === "all" ? projects : projects.filter((p) => p.type === active);

  return (
    <div>
      {/* Filter tabs */}
      <div
        role="tablist"
        className="mb-12 flex items-center gap-2"
        aria-label="فیلتر پروژه‌ها"
      >
        {filterOptions.map((opt) => (
          <button
            key={opt.value}
            role="tab"
            aria-selected={active === opt.value}
            onClick={() => setActive(opt.value)}
            className={[
              "rounded-full px-5 py-2.5 text-sm font-medium transition-all focus-visible:ring-2 focus-visible:ring-charcoal/20",
              active === opt.value
                ? "bg-coral text-warm-white shadow-arch-sm"
                : "text-charcoal/70 hover:bg-warm-grey/70 hover:text-charcoal",
            ].join(" ")}
          >
            {opt.label}
            <span className="mr-2 text-xs opacity-70">
              {opt.value === "all"
                ? projects.length
                : projects.filter((p) => p.type === opt.value).length}
            </span>
          </button>
        ))}
      </div>

      {/* Projects grid */}
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project) => (
          <li key={project.slug}>
            <Link
              href={`/projects/${project.slug}`}
              className="group block overflow-hidden rounded-arch-xl bg-warm-white shadow-arch-sm transition-all hover:-translate-y-1 hover:shadow-arch-md focus-visible:ring-2 focus-visible:ring-charcoal/20"
            >
              {/* Placeholder image area */}
              <div
                className="relative aspect-[4/3] overflow-hidden"
                style={{ backgroundColor: project.coverColor }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/30 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                {/* Type badge */}
                <span
                  className={[
                    "absolute right-3 top-3 rounded-full px-3 py-1 text-xs font-medium",
                    project.type === "ساخته‌شده"
                      ? "bg-espresso text-warm-white"
                      : "bg-warm-white/90 text-charcoal",
                  ].join(" ")}
                >
                  {project.type}
                </span>
              </div>
              {/* Card content */}
              <div className="p-5">
                <p className="text-xs text-charcoal/50 mb-1">
                  {project.year} — {project.location}
                </p>
                <h2 className="text-lg font-bold text-charcoal transition-colors group-hover:text-coral">
                  {project.title}
                </h2>
                <p className="mt-1 text-sm text-charcoal/60">
                  {project.subtitle}
                </p>
                <p className="mt-3 text-xs text-charcoal/40">{project.area}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      {filtered.length === 0 && (
        <p className="py-20 text-center text-charcoal/40">
          پروژه‌ای یافت نشد.
        </p>
      )}
    </div>
  );
}
