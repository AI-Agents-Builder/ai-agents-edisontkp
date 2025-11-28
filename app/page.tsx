import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { WhyAgents } from "@/components/WhyAgents";
import { PackagesSection } from "@/components/PackagesSection";
import { HowItWorks } from "@/components/HowItWorks";
import { UseCases } from "@/components/UseCases";
import { About } from "@/components/About";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <WhyAgents />
        <PackagesSection />
        <HowItWorks />
        <UseCases />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
