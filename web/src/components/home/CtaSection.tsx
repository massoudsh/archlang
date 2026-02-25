import Link from "next/link";

export function CtaSection() {
  return (
    <section className="border-t border-warm-grey-deep/50 bg-charcoal py-24 text-warm-white sm:py-28">
      <div className="mx-auto max-w-content px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-2xl font-medium tracking-tight sm:text-3xl">
          درخواست جلسه مشاوره
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-warm-white/85">
          برای گفتگو درباره پروژه خود، فرم تماس را پر کنید یا از طریق واتساپ
          در ارتباط باشید.
        </p>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-arch-md bg-warm-white px-8 py-4 text-charcoal shadow-arch-md transition-all hover:bg-warm-grey hover:shadow-arch-lg focus-visible:ring-2 focus-visible:ring-warm-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal"
          >
            ارسال درخواست
          </Link>
        </div>
      </div>
    </section>
  );
}
