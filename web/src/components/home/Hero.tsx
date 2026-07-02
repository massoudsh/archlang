import Link from "next/link";
import Image from "next/image";

// Replace src with real hero image path when available
const HERO_IMAGE_SRC = "/images/hero.jpg";
const HAS_HERO_IMAGE = false; // flip to true once /public/images/hero.jpg is added

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-end overflow-hidden rounded-b-arch-xl bg-charcoal sm:min-h-[85vh]">
      {/* Hero image — lazy-loaded with blur placeholder once asset is ready */}
      {HAS_HERO_IMAGE && (
        <Image
          src={HERO_IMAGE_SRC}
          alt="نمای یک پروژه معماری مسکونی"
          fill
          priority
          quality={85}
          sizes="100vw"
          className="object-cover object-center"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAABAAEDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgUEA/8QAIxAAAQMEAgMBAAAAAAAAAAAAAQIDBAAFERIhMUFRYf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwClrFGO2e0A21baaRktttJVKZY5n9wHpDx67M5fShQJU3DktJWlaFJUAUqBBBHgg8gjjAP/2Q=="
        />
      )}

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/30 to-charcoal/10"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-content px-4 pb-24 pt-40 sm:px-6 sm:pb-28 lg:px-8">
        <p className="mb-3 text-xs tracking-widest text-warm-white/50 uppercase">
          Architecture
        </p>
        <h1 className="max-w-2xl text-3xl font-light leading-[1.7] text-warm-white drop-shadow-sm sm:text-4xl md:text-5xl md:leading-[1.5]">
          زبان معماری
        </h1>
        <p className="mt-4 max-w-md text-warm-white/60 text-base leading-relaxed">
          مسکن لوکس خصوصی — طراحی و مدیریت اجرا از ایده تا تحویل.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-arch-md bg-warm-white px-8 py-4 text-sm font-medium text-charcoal shadow-arch-md transition-all hover:bg-warm-grey hover:shadow-arch-lg focus-visible:ring-2 focus-visible:ring-warm-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal"
          >
            درخواست جلسه مشاوره
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-warm-white/70 hover:text-warm-white transition-colors"
          >
            مشاهده پروژه‌ها
            <span aria-hidden="true">←</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
