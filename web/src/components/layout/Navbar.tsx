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
    <header className="sticky top-0 z-50 border-b border-warm-grey/60 bg-warm-white/95 backdrop-blur-sm">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <nav className="flex h-16 items-center justify-between gap-8">
          <Link
            href="/"
            className="text-lg font-medium text-charcoal transition-opacity hover:opacity-80"
          >
            Archlang
          </Link>
          <ul className="flex flex-wrap items-center gap-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-charcoal/90 transition-colors hover:text-charcoal"
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
