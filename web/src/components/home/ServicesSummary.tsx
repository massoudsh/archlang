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
    <section className="border-t border-warm-grey bg-warm-white py-20">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-medium text-charcoal sm:text-3xl">
          خدمات
        </h2>
        <div className="mt-12 grid gap-12 sm:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="space-y-3">
              <h3 className="text-lg font-medium text-charcoal">{s.title}</h3>
              <p className="text-charcoal/80 leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
