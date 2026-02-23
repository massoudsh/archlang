import Link from "next/link";

export function CtaSection() {
  return (
    <section className="border-t border-warm-grey bg-warm-grey/40 py-24">
      <div className="mx-auto max-w-content px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-2xl font-medium text-charcoal sm:text-3xl">
          درخواست جلسه مشاوره
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-charcoal/80">
          برای گفتگو درباره پروژه خود، فرم تماس را پر کنید یا از طریق واتساپ
          در ارتباط باشید.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="inline-block border border-charcoal bg-charcoal px-8 py-3 text-warm-white transition-colors hover:bg-charcoal/90"
          >
            ارسال درخواست
          </Link>
        </div>
      </div>
    </section>
  );
}
