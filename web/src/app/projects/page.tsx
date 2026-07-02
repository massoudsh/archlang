import type { Metadata } from "next";
import { ProjectFilter } from "@/components/projects/ProjectFilter";

export const metadata: Metadata = {
  title: "پروژه‌ها | فا",
  description:
    "مجموعه پروژه‌های معماری مسکونی لوکس — از ویلاهای اجراشده تا مطالعات مفهومی",
};

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-content px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      {/* Page header */}
      <header className="mb-16 border-b border-warm-grey-deep/40 pb-12">
        <p className="mb-3 text-sm tracking-widest text-accent-olive uppercase">
          Portfolio
        </p>
        <h1 className="text-4xl font-light text-charcoal sm:text-5xl">
          پروژه‌ها
        </h1>
        <p className="mt-4 max-w-xl text-charcoal/60 leading-relaxed">
          هر پروژه روایتی است از یک دیدگاه واحد — از مرحله ایده تا لحظه تحویل.
        </p>
      </header>

      <ProjectFilter />
    </main>
  );
}
