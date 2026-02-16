"use client";
import Navbar from "@/components/Navbar";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import OurProdcuts from "@/components/OurProdcuts";
import AnimateSection from "@/components/AnimateSection"; // <-- import wrapper

import HomePageHero from "@/components/Organisms/HomePageHero";

function App() {
  return (
    <div className="min-h-screen bg-[#07090e] text-white overflow-hidden ">
      <Navbar />

      <main>
        {/* Hero – static, no scroll animation */}
        {/* <Hero /> */}

        <HomePageHero />


        <AnimateSection type="fadeUp">
          <OurProdcuts />
        </AnimateSection>

     
        <AnimateSection type="zoomIn">
          <Testimonials />
        </AnimateSection>

        

        <AnimateSection type="scaleUp">
          <Pricing />
        </AnimateSection>

        <AnimateSection type="fadeUp" delay={0.1}>
          <CallToAction />
        </AnimateSection>
      </main>

      <Footer />
    </div>
  );
}

export default App;
