import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-warm-grey-deep/50 bg-warm-grey/40">
      <div className="mx-auto max-w-content px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-charcoal/75">
            معماری مسکونی لوکس — طراحی و مدیریت اجرا
          </p>
          <nav className="flex gap-6">
            <Link
              href="/contact"
              className="text-sm text-charcoal/75 transition-colors hover:text-charcoal focus-visible:rounded focus-visible:ring-2 focus-visible:ring-charcoal/20"
            >
              تماس
            </Link>
            <Link
              href="/projects"
              className="text-sm text-charcoal/75 transition-colors hover:text-charcoal focus-visible:rounded focus-visible:ring-2 focus-visible:ring-charcoal/20"
            >
              پروژه‌ها
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
