import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import TargetMarket from "@/components/sections/TargetMarket";
import MarketingStrategy from "@/components/sections/MarketingStrategy";
import SWOT from "@/components/sections/SWOT";
import Portfolio from "@/components/sections/Portfolio";
import Projects from "@/components/sections/Projects";
import CTA from "@/components/sections/CTA";
import GetStarted from "@/components/sections/GetStarted";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <TargetMarket />
      <MarketingStrategy />
      <SWOT />
      <Projects />
      <Portfolio />
      <CTA />
      <GetStarted />
      <Footer />
    </>
  );
};

export default Index;
