const stats = [
  { value: "۱۵+", label: "سال تجربه" },
  { value: "۴۰+", label: "پروژه اجراشده" },
];

export function AuthorityBlock() {
  return (
    <section className="border-t border-warm-grey-deep/50 bg-warm-white py-24 sm:py-28">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 sm:gap-12">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-arch-lg border border-warm-grey-deep/40 bg-warm-grey/20 px-8 py-10 text-center shadow-arch-sm sm:text-left sm:px-10"
            >
              <p className="text-4xl font-light tracking-tight text-accent-bronze sm:text-5xl">
                {s.value}
              </p>
              <p className="mt-2 text-charcoal/80">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
