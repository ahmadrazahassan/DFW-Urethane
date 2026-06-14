import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { IntroStats } from "@/components/intro-stats";
import { ServicesCarousel } from "@/components/services-carousel";
import { VideoBand } from "@/components/video-band";
import { WhyChoose } from "@/components/why-choose";
import { Projects } from "@/components/projects";
import { Testimonials } from "@/components/testimonials";
import { Faq } from "@/components/faq";
import { ContactSection } from "@/components/contact-section";
import { Cta } from "@/components/cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <IntroStats />
        <ServicesCarousel />
        <VideoBand />
        <WhyChoose />
        <Projects />
        <Testimonials />
        <Faq />
        <ContactSection />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
