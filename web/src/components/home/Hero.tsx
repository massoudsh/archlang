import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-[85vh] flex flex-col justify-end bg-warm-grey">
      {/* Placeholder for full-width image; use next/image when asset ready */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-charcoal/20 to-warm-grey"
        aria-hidden
      />
      <div className="relative z-10 mx-auto w-full max-w-content px-4 pb-20 pt-32 sm:px-6 lg:px-8">
        <p className="max-w-2xl text-2xl font-light leading-relaxed text-charcoal sm:text-3xl">
          ساختمان‌های مسکونی اختصاصی با طراحی و مدیریت اجرای دقیق، از مفهوم تا
          تحویل.
        </p>
        <div className="mt-10">
          <Link
            href="/contact"
            className="inline-block border border-charcoal bg-charcoal px-8 py-3 text-warm-white transition-colors hover:bg-charcoal/90"
          >
            درخواست جلسه مشاوره
          </Link>
        </div>
      </div>
    </section>
  );
}
