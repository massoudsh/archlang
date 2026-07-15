import type { Metadata } from "next";
import { ProjectFilter } from "@/components/projects/ProjectFilter";

export const metadata: Metadata = {
  title: "پروژه‌ها | فا",
  description:
    "مجموعه پروژه‌های معماری مسکونی لوکس — از ویلاهای اجراشده تا مطالعات مفهومی",
};

export default function ProjectsPage() {
  return (
    <main>
      {/* Dark header band */}
      <section className="bg-espresso py-20 sm:py-24">
        <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
          <p className="mb-3 text-sm font-medium tracking-[0.3em] text-coral uppercase">
            Portfolio
          </p>
          <h1 className="font-display text-4xl font-black text-warm-white sm:text-5xl">
            پروژه‌های <span className="text-coral">ما</span>
          </h1>
          <p className="mt-4 max-w-xl text-warm-white/50 leading-relaxed">
            هر پروژه روایتی است از یک دیدگاه واحد — از مرحله ایده تا لحظه
            تحویل.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-content px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <ProjectFilter />
      </div>
    </main>
  );
}
