import Link from "next/link";

// Simple geometric "tower" silhouette built with CSS grid — swap for real photography later
function BuildingIllustration() {
  return (
    <div className="relative mx-auto flex h-full w-full max-w-xs items-end justify-center sm:max-w-sm">
      {/* Decorative circle (compass motif) */}
      <div
        aria-hidden="true"
        className="absolute -left-6 top-4 hidden h-40 w-40 rounded-full border border-warm-white/10 sm:block lg:h-52 lg:w-52"
      />
      <div
        aria-hidden="true"
        className="absolute -left-2 top-10 hidden h-28 w-28 rounded-full border border-warm-white/10 sm:block lg:h-36 lg:w-36"
      />

      {/* Floating clouds */}
      <span
        aria-hidden="true"
        className="absolute -top-4 right-2 h-6 w-14 rounded-full bg-warm-white/10 blur-[1px]"
      />
      <span
        aria-hidden="true"
        className="absolute top-16 right-16 h-5 w-10 rounded-full bg-warm-white/10 blur-[1px]"
      />

      {/* Stacked tower blocks */}
      <div className="relative flex flex-col items-center">
        {[
          { w: "w-44", h: "h-24", tone: "bg-pastel-peach" },
          { w: "w-36", h: "h-28", tone: "bg-pastel-peach-deep" },
          { w: "w-48", h: "h-32", tone: "bg-coral-light" },
        ].map((block, i) => (
          <div
            key={i}
            className={`${block.w} ${block.h} ${block.tone} relative -mb-1 rounded-t-2xl shadow-arch-lg`}
          >
            <div className="grid h-full grid-cols-4 gap-1.5 p-2.5">
              {Array.from({ length: 8 }).map((_, j) => (
                <span
                  key={j}
                  className="rounded-sm bg-espresso/25"
                  aria-hidden="true"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden rounded-b-arch-xl bg-espresso">
      {/* Subtle dot grid texture */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      <div className="relative z-10 mx-auto grid max-w-content gap-10 px-4 pb-16 pt-14 sm:px-6 sm:pt-20 lg:grid-cols-2 lg:items-center lg:gap-8 lg:px-8 lg:pb-24 lg:pt-24">
        {/* Text column */}
        <div>
          <h1 className="max-w-lg font-display text-4xl font-black leading-[1.25] text-warm-white sm:text-5xl lg:text-6xl">
            طراحی با <span className="text-coral">حس زیبایی‌شناسی</span>
          </h1>
          <p className="mt-6 max-w-md text-warm-white/50 leading-relaxed">
            مسکن‌های لوکس خصوصی را از ایده تا تحویل، با کنترل کامل بر طراحی و
            اجرا، می‌سازیم.
          </p>

          {/* Avatar stack + note */}
          <div className="mt-10 flex items-center gap-3">
            <div className="flex -space-x-3 space-x-reverse" aria-hidden="true">
              {["bg-pastel-blue", "bg-pastel-pink", "bg-coral"].map((c, i) => (
                <span
                  key={i}
                  className={`h-9 w-9 rounded-full border-2 border-espresso ${c}`}
                />
              ))}
            </div>
            <p className="text-sm text-warm-white/50">
              معماران ارشد آماده مشاوره
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-coral px-7 py-3.5 text-sm font-medium text-warm-white shadow-arch-md transition-all hover:bg-coral-dark hover:shadow-arch-lg focus-visible:ring-2 focus-visible:ring-coral/40 focus-visible:ring-offset-2 focus-visible:ring-offset-espresso"
            >
              درخواست جلسه مشاوره
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-warm-white/70 transition-colors hover:text-warm-white"
            >
              مشاهده پروژه‌ها
              <span aria-hidden="true">←</span>
            </Link>
          </div>
        </div>

        {/* Illustration column */}
        <div className="relative flex h-72 items-end justify-center sm:h-80 lg:h-[26rem]">
          <BuildingIllustration />

          {/* Floating badge */}
          <Link
            href="/about"
            className="absolute left-0 top-0 hidden -rotate-3 rounded-2xl bg-coral px-5 py-4 text-center text-xs font-bold leading-tight text-warm-white shadow-arch-lg transition-transform hover:rotate-0 focus-visible:ring-2 focus-visible:ring-warm-white/40 sm:block"
          >
            داستان
            <br />
            ما را
            <br />
            بخوانید
          </Link>
        </div>
      </div>
    </section>
  );
}
