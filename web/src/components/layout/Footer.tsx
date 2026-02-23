import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-warm-grey bg-warm-grey/30">
      <div className="mx-auto max-w-content px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-charcoal/80 text-sm">
            معماری مسکونی لوکس — طراحی و مدیریت اجرا
          </p>
          <nav className="flex gap-6">
            <Link
              href="/contact"
              className="text-charcoal/80 text-sm transition-colors hover:text-charcoal"
            >
              تماس
            </Link>
            <Link
              href="/projects"
              className="text-charcoal/80 text-sm transition-colors hover:text-charcoal"
            >
              پروژه‌ها
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
