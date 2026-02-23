import { Hero } from "@/components/home/Hero";
import { ServicesSummary } from "@/components/home/ServicesSummary";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { AuthorityBlock } from "@/components/home/AuthorityBlock";
import { CtaSection } from "@/components/home/CtaSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesSummary />
      <FeaturedProjects />
      <AuthorityBlock />
      <CtaSection />
    </>
  );
}
