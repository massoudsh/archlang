const testimonials = [
  {
    rating: "۴.۸",
    quote:
      "تیم فا از ایده تا اجرا همراه ما بود و ارتباطی محکم و شفاف برقرار کرد.",
    name: "بهرام وثیقی",
    role: "کارفرما — ویلا شمیران",
    tone: "bg-pastel-blue",
  },
  {
    rating: "۴.۹",
    quote:
      "تمرکز روی عملکرد و بودجه، در کنار نوآوری در طراحی — دقیقاً چیزی که می‌خواستیم.",
    name: "مریم وودز",
    role: "کارفرما — پنت‌هاوس الهیه",
    tone: "bg-pastel-pink",
  },
  {
    rating: "۴.۹",
    quote:
      "در هر مرحله سخت تلاش کردند تا بهترین نتیجه ممکن را برای پروژه ما رقم بزنند.",
    name: "سینا بلندی",
    role: "کارفرما — مسکونی لواسان",
    tone: "bg-pastel-peach",
  },
];

const stats = [
  { value: "۱۵+", label: "سال تجربه" },
  { value: "۴۰+", label: "پروژه اجراشده" },
  { value: "۱۲۰+", label: "خانواده خشنود" },
];

export function AuthorityBlock() {
  return (
    <section className="bg-warm-white py-24 sm:py-28">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl font-black text-charcoal sm:text-4xl">
          مشتریان <span className="text-coral">موفق</span> در حال رشدند
        </h2>

        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {testimonials.map((t) => (
            <article
              key={t.name}
              className={`${t.tone} flex flex-col justify-between rounded-arch-xl p-6 shadow-arch-sm`}
            >
              <div className="mb-6 flex items-center justify-between">
                <span className="text-xs font-medium tracking-wide text-charcoal/50 uppercase">
                  [ نظر مشتری ]
                </span>
                <span className="flex items-center gap-1 text-sm font-bold text-charcoal">
                  {t.rating}
                  <span className="text-coral" aria-hidden="true">★</span>
                </span>
              </div>
              <p className="text-sm leading-relaxed text-charcoal/80">
                {t.quote}
              </p>
              <div className="mt-6 flex items-center gap-3">
                <span
                  className="h-9 w-9 shrink-0 rounded-full bg-espresso/15"
                  aria-hidden="true"
                />
                <div>
                  <p className="text-sm font-bold text-charcoal">{t.name}</p>
                  <p className="text-xs text-charcoal/50">{t.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Stats row */}
        <div className="mt-14 grid gap-6 border-t border-warm-grey-deep/50 pt-10 sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label} className="text-center sm:text-right">
              <p className="font-display text-4xl font-black text-coral sm:text-5xl">
                {s.value}
              </p>
              <p className="mt-1 text-sm text-charcoal/60">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
