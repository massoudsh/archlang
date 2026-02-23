const stats = [
  { value: "۱۵+", label: "سال تجربه" },
  { value: "۴۰+", label: "پروژه اجراشده" },
];

export function AuthorityBlock() {
  return (
    <section className="border-t border-warm-grey bg-warm-white py-20">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2">
          {stats.map((s) => (
            <div key={s.label} className="text-center sm:text-left">
              <p className="text-4xl font-light text-accent-bronze sm:text-5xl">
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
