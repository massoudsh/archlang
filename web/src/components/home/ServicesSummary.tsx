import Link from "next/link";

const services = [
  {
    title: "طراحی معماری",
    desc: "ساختمان‌های تجاری و مسکونی",
    tone: "bg-pastel-pink",
  },
  {
    title: "آینده معماری",
    desc: "پیش‌نمایش طرح‌های آینده",
    tone: "bg-pastel-blue",
  },
  {
    title: "خانه رویایی شما",
    desc: "ساختن خلاقانه خانه دلخواه",
    tone: "bg-pastel-peach",
  },
];

export function ServicesSummary() {
  return (
    <section className="bg-warm-white py-24 sm:py-28">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center">
          <p className="mb-2 text-sm font-medium tracking-[0.3em] text-coral uppercase">
            رهاشده
          </p>
          <h2 className="font-display text-3xl font-black text-charcoal sm:text-4xl">
            رویاها را به واقعیت تبدیل کن
          </h2>
        </div>

        {/* Category row */}
        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-y border-warm-grey-deep/50 py-5 text-sm sm:flex-row sm:items-center">
          <span className="font-medium tracking-widest text-charcoal/50 uppercase">
            طراحی معماری
          </span>
          <span className="text-charcoal/60">خدمات سفارشی برای هر پروژه</span>
          <div className="flex items-center gap-3">
            <span className="text-charcoal/60">{services.length} خدمت</span>
            <Link
              href="/services"
              aria-label="مشاهده همه خدمات"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-pastel-blue text-charcoal transition-transform hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-charcoal/20"
            >
              ↗
            </Link>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {services.map((s) => (
            <Link
              key={s.title}
              href="/services"
              className={`${s.tone} group block rounded-arch-xl p-6 shadow-arch-sm transition-all hover:-translate-y-1 hover:shadow-arch-md focus-visible:ring-2 focus-visible:ring-charcoal/20 sm:p-7`}
            >
              <h3 className="text-xl font-bold text-charcoal">{s.title}</h3>
              <p className="mt-1 text-sm text-charcoal/60">{s.desc}</p>

              {/* Placeholder building block */}
              <div className="mt-8 h-40 rounded-arch-lg bg-espresso/85 p-3">
                <div className="grid h-full grid-cols-4 gap-1">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <span
                      key={i}
                      className="rounded-[2px] bg-warm-white/10 transition-colors group-hover:bg-coral/40"
                      aria-hidden="true"
                    />
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
