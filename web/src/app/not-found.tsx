import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "صفحه یافت نشد | فا",
};

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <p className="text-8xl font-light text-warm-grey-deep select-none" aria-hidden>
        ۴۰۴
      </p>
      <h1 className="mt-6 text-2xl font-light text-charcoal">
        این صفحه وجود ندارد
      </h1>
      <p className="mt-3 max-w-sm text-charcoal/50 text-sm leading-relaxed">
        شاید آدرس اشتباه وارد شده یا صفحه جابه‌جا شده است.
      </p>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/"
          className="rounded-arch-md bg-charcoal px-7 py-3 text-sm font-medium text-warm-white shadow-arch-sm transition-all hover:bg-charcoal/90 hover:shadow-arch-md"
        >
          برگشت به صفحه اصلی
        </Link>
        <Link
          href="/projects"
          className="rounded-arch-md border border-warm-grey-deep/50 px-7 py-3 text-sm font-medium text-charcoal/80 transition-all hover:bg-warm-grey/50"
        >
          مشاهده پروژه‌ها
        </Link>
      </div>
    </main>
  );
}
