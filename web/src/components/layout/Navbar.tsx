import Link from "next/link";

const navItems = [
  { href: "/projects", label: "پروژه‌ها" },
  { href: "/services", label: "خدمات" },
  { href: "/about", label: "درباره" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-warm-white/90 backdrop-blur-md">
      <div className="mx-auto max-w-content px-4 py-3 sm:px-6 lg:px-8">
        <nav className="flex h-14 items-center justify-between gap-4 rounded-full border border-warm-grey-deep/50 bg-warm-white px-3 shadow-arch-sm sm:px-5">
          <Link
            href="/"
            className="flex items-center gap-2 font-display text-lg font-black tracking-tight text-charcoal transition-opacity hover:opacity-80 focus-visible:rounded focus-visible:ring-2 focus-visible:ring-charcoal/20"
          >
            <span
              className="flex h-8 w-8 items-center justify-center rounded-full bg-coral text-warm-white text-sm"
              aria-hidden="true"
            >
              ف
            </span>
            فا
          </Link>

          <ul className="hidden items-center gap-1 sm:flex">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="rounded-full px-4 py-2 text-sm font-medium tracking-wide text-charcoal/70 transition-colors hover:bg-warm-grey/70 hover:text-charcoal focus-visible:ring-2 focus-visible:ring-charcoal/20"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-coral px-4 py-2.5 text-sm font-medium text-warm-white transition-all hover:bg-coral-dark hover:shadow-arch-md focus-visible:ring-2 focus-visible:ring-coral/40 focus-visible:ring-offset-2 sm:px-5"
          >
            تماس با ما
            <span aria-hidden="true" className="inline-block -rotate-45">↗</span>
          </Link>
        </nav>

        <ul className="mt-2 flex items-center justify-center gap-1 sm:hidden">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="rounded-full px-3 py-1.5 text-xs font-medium text-charcoal/70 transition-colors hover:bg-warm-grey/70 hover:text-charcoal"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
