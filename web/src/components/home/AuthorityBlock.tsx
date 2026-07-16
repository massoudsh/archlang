const testimonials = [
  { rating: "۴.۸", quote: "انتقال از ایده به اجرا کاملاً شفاف، دقیق و قابل کنترل بود.", name: "بهرام وثیقی", role: "کارفرما — ویلا شمیران" },
  { rating: "۴.۹", quote: "جزئیات فنی و کنترل کیفیت در کارگاه، پروژه را از یک طرح معمولی جدا کرد.", name: "مریم وودز", role: "کارفرما — پنت‌هاوس الهیه" },
  { rating: "۴.۹", quote: "هر تصمیم دلیل داشت؛ همین موضوع اعتماد ما را در کل مسیر حفظ کرد.", name: "سینا بلندی", role: "کارفرما — مسکونی لواسان" },
];

const stats = [
  { value: "۱۵+", label: "سال تجربه" },
  { value: "۴۰+", label: "پروژه اجراشده" },
  { value: "۱۲۰+", label: "خانواده خشنود" },
];

export function AuthorityBlock() {
  return (
    <section className="bg-warm-white py-20 sm:py-24">
      <div className="mx-auto max-w-content border-x border-charcoal/10 px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[.7fr_1.3fr]">
          <div className="border border-charcoal/12 bg-material-asphalt p-7 text-warm-white material-grid">
            <p className="mb-6 border-r-4 border-material-glass pr-3 text-xs font-black uppercase tracking-[0.24em] text-warm-white/70">
              Proven Results
            </p>
            <h2 className="font-display text-4xl font-black leading-tight sm:text-5xl">
              اعتماد با نتیجه‌های قابل مشاهده ساخته می‌شود
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {testimonials.map((t) => (
              <article key={t.name} className="border border-charcoal/12 bg-warm-white p-5 shadow-arch-sm">
                <div className="mb-7 flex items-center justify-between border-b border-charcoal/10 pb-4">
                  <span className="text-[11px] font-black uppercase tracking-[0.2em] text-charcoal/45">[ Client ]</span>
                  <span className="text-lg font-black text-material-glass">{t.rating}</span>
                </div>
                <p className="min-h-24 text-sm leading-7 text-charcoal/72">{t.quote}</p>
                <div className="mt-7 border-t border-charcoal/10 pt-4">
                  <p className="text-sm font-black text-charcoal">{t.name}</p>
                  <p className="mt-1 text-xs text-charcoal/45">{t.role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label} className="border border-charcoal/12 bg-material-sand p-6">
              <p className="font-display text-5xl font-black text-charcoal">{s.value}</p>
              <p className="mt-3 text-xs font-black uppercase tracking-[0.2em] text-charcoal/50">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
