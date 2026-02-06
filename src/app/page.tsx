import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyDevForge from "@/components/WhyDevForge";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import OurProdcuts from "@/components/OurProdcuts";
import AnimateSection from "@/components/AnimateSection"; // <-- import wrapper

function App() {
  return (
    <div className="min-h-screen bg-[#07090E] text-white overflow-hidden ">
      <Navbar />

      <main>
        {/* Hero – static, no scroll animation */}
        <Hero />

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
