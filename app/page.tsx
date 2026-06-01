import Hero from "@/components/home/Hero";
import Services from "@/components/home/ServicesPreview";
import WorkPreview from "@/components/home/WorkPreview";
import WhyUs from "@/components/home/WhyUs";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <WhyUs />
      <WorkPreview />
      <CTA />
    </>
  );
}
