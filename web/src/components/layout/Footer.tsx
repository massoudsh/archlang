import Link from "next/link";

const columns = [
  { href: "/services", label: "خدمات" },
  { href: "/about", label: "درباره ما" },
  { href: "/projects", label: "پروژه‌ها" },
  { href: "/contact", label: "تماس" },
];

const socials = [
  { label: "اینستاگرام", href: "https://instagram.com" },
  { label: "واتساپ", href: "https://wa.me/989121234567" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-espresso text-warm-white/70">
      <div className="mx-auto max-w-content px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 font-display text-xl font-black text-warm-white">
              <span
                className="flex h-9 w-9 items-center justify-center rounded-full bg-coral text-warm-white text-base"
                aria-hidden="true"
              >
                ف
              </span>
              فا
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-warm-white/50">
              طراحی خلاقانه می‌کنیم و باکیفیت‌ترین راه‌حل‌ها را برای معماری
              مسکونی می‌سازیم.
            </p>
          </div>

          {/* Nav */}
          <nav aria-label="لینک‌های فوتر">
            <p className="mb-4 text-xs tracking-widest text-coral uppercase">
              صفحات
            </p>
            <ul className="space-y-3">
              {columns.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-warm-white/70 transition-colors hover:text-warm-white focus-visible:rounded focus-visible:ring-2 focus-visible:ring-coral/40"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social + legal */}
          <div>
            <p className="mb-4 text-xs tracking-widest text-coral uppercase">
              ارتباط
            </p>
            <ul className="space-y-3">
              {socials.map((s) => (
                <li key={s.href}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-warm-white/70 transition-colors hover:text-warm-white focus-visible:rounded focus-visible:ring-2 focus-visible:ring-coral/40"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs text-warm-white/30">
              © {new Date().getFullYear()} فا. تمامی حقوق محفوظ است.
            </p>
          </div>
        </div>
      </div>

      {/* Giant background typography */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none border-t border-espresso-border py-4 text-center font-display text-[16vw] font-black leading-none tracking-tighter text-warm-white/5 sm:text-[10vw]"
      >
        معماری
      </div>
    </footer>
  );
}
