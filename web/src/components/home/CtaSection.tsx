import Link from "next/link";

export function CtaSection() {
  return (
    <section className="bg-espresso py-24 sm:py-28">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          {/* Specialist card */}
          <Link
            href="/contact"
            className="group relative flex h-52 flex-col justify-between overflow-hidden rounded-arch-xl bg-coral p-6 shadow-arch-lg transition-transform hover:-translate-y-1 focus-visible:ring-2 focus-visible:ring-warm-white/40 sm:h-64"
          >
            <span
              aria-hidden="true"
              className="absolute -left-6 -top-6 h-28 w-28 rounded-full bg-warm-white/10"
            />
            <span
              aria-hidden="true"
              className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-espresso/10"
            />
            <p className="relative font-display text-2xl font-black leading-tight text-warm-white">
              صحبت با
              <br />
              کارشناس ما
            </p>
            <span className="relative inline-flex w-fit items-center gap-2 rounded-full bg-warm-white px-4 py-2 text-sm font-medium text-charcoal transition-colors group-hover:bg-espresso group-hover:text-warm-white">
              رزرو تماس
              <span aria-hidden="true">↗</span>
            </span>
          </Link>

          {/* Text block */}
          <div>
            <h2 className="font-display text-3xl font-black leading-tight text-warm-white sm:text-4xl">
              فا یک آژانس خلاق{" "}
              <span className="text-coral">معماری مسکونی</span> است
            </h2>
            <p className="mt-5 max-w-xl text-warm-white/50 leading-relaxed">
              نوآوری و مهارت را در هم می‌آمیزیم تا راه‌حل‌های معماری خلق کنیم
              که عملکرد، خلاقیت و دقت اجرا را کاملاً هماهنگ می‌کند.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-warm-white px-7 py-3.5 text-sm font-medium text-charcoal shadow-arch-md transition-all hover:bg-warm-grey hover:shadow-arch-lg focus-visible:ring-2 focus-visible:ring-warm-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-espresso"
            >
              ارسال درخواست
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
