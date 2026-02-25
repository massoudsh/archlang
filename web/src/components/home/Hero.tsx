import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-end overflow-hidden rounded-b-arch-xl bg-warm-grey sm:min-h-[85vh]">
      {/* Placeholder for full-width image; use next/image when asset ready */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-charcoal/10 to-transparent"
        aria-hidden
      />
      <div className="relative z-10 mx-auto w-full max-w-content px-4 pb-24 pt-40 sm:px-6 sm:pb-28 lg:px-8">
        <p className="max-w-2xl text-2xl font-light leading-[1.7] text-warm-white drop-shadow-sm sm:text-3xl md:text-4xl md:leading-[1.6]">
          زبان معماری
        </p>
        <div className="mt-12">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-arch-md bg-warm-white px-8 py-4 text-charcoal shadow-arch-md transition-all hover:bg-warm-grey hover:shadow-arch-lg focus-visible:ring-2 focus-visible:ring-warm-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal"
          >
            درخواست جلسه مشاوره
          </Link>
        </div>
      </div>
    </section>
  );
}
