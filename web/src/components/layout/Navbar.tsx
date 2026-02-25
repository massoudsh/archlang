import Link from "next/link";

const navItems = [
  { href: "/", label: "خانه" },
  { href: "/projects", label: "پروژه‌ها" },
  { href: "/services", label: "خدمات" },
  { href: "/about", label: "درباره" },
  { href: "/contact", label: "تماس" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-warm-grey-deep/40 bg-warm-white/90 backdrop-blur-md">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <nav className="flex h-16 items-center justify-between gap-8">
          <Link
            href="/"
            className="text-lg font-medium tracking-tight text-charcoal transition-opacity hover:opacity-80 focus-visible:rounded focus-visible:ring-2 focus-visible:ring-charcoal/20 focus-visible:ring-offset-2"
          >
            فا
          </Link>
          <ul className="flex flex-wrap items-center gap-1 sm:gap-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="rounded-arch-sm px-3 py-2 text-charcoal/90 transition-colors hover:bg-warm-grey/50 hover:text-charcoal focus-visible:ring-2 focus-visible:ring-charcoal/20"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
