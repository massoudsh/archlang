import Link from "next/link";

const services = [
  { title: "طراحی معماری", desc: "نقشه، فرم و منطق فضایی", material: "MINERAL PLASTER", tone: "bg-material-plaster text-charcoal" },
  { title: "توسعه فنی", desc: "جزئیات، دیتیل و هماهنگی سازه", material: "ARCHITECTURAL GLASS", tone: "bg-material-glass text-warm-white" },
  { title: "مدیریت اجرا", desc: "کنترل کارگاه، زمان و کیفیت", material: "STRUCTURAL CONCRETE", tone: "bg-material-concrete text-warm-white" },
];

export function ServicesSummary() {
  return (
    <section className="bg-warm-white py-20 sm:py-24">
      <div className="mx-auto max-w-content border-x border-charcoal/10 px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 border-b border-charcoal/12 pb-10 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
          <div>
            <p className="mb-4 border-r-4 border-material-glass pr-3 text-xs font-black uppercase tracking-[0.26em] text-charcoal/55">
              Materials / Services
            </p>
            <h2 className="font-display text-4xl font-black leading-tight text-charcoal sm:text-5xl">
              خدمات به شکل قطعات دقیق یک سازه
            </h2>
          </div>
          <p className="max-w-2xl text-sm leading-8 text-charcoal/60">
            هر خدمت مثل یک متریال مستقل طراحی شده: روشن، قابل اندازه‌گیری، و قابل اتصال به کل سیستم پروژه.
          </p>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {services.map((s, i) => (
            <Link key={s.title} href="/services" className={`${s.tone} group relative min-h-[25rem] overflow-hidden border border-charcoal/12 p-6 shadow-arch-sm transition-transform hover:-translate-y-1`}>
              <div className="absolute inset-0 light-grid opacity-40 mix-blend-multiply" aria-hidden="true" />
              <div className="relative z-10 flex h-full flex-col justify-between">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.22em] opacity-60">0{i + 1}</p>
                  <h3 className="mt-5 text-2xl font-black">{s.title}</h3>
                  <p className="mt-3 text-sm leading-7 opacity-70">{s.desc}</p>
                </div>
                <div>
                  <div className="mb-5 h-32 border border-current/20 concrete-texture" aria-hidden="true" />
                  <p className="border-r-4 border-current/70 pr-3 text-xs font-black uppercase tracking-[0.2em] opacity-75">
                    {s.material}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
