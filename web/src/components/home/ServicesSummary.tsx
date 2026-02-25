const services = [
  {
    title: "طراحی",
    description: "از ایده اولیه تا نقشه‌های اجرایی با یک دید واحد.",
  },
  {
    title: "توسعه فنی",
    description: "جزئیات فنی و هماهنگی با مشاوران و ناظرین.",
  },
  {
    title: "مدیریت اجرا",
    description: "کنترل کیفیت، زمان و هزینه تا تحویل نهایی.",
  },
];

export function ServicesSummary() {
  return (
    <section className="border-t border-warm-grey-deep/50 bg-warm-white py-24 sm:py-28">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-medium tracking-tight text-charcoal sm:text-3xl">
          خدمات
        </h2>
        <div className="mt-14 grid gap-6 sm:grid-cols-3 sm:gap-8">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-arch-lg border border-warm-grey-deep/40 bg-warm-white p-6 shadow-arch-sm transition-shadow hover:shadow-arch-md sm:p-8"
            >
              <h3 className="text-lg font-medium text-charcoal">{s.title}</h3>
              <p className="mt-3 text-charcoal/80 leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
