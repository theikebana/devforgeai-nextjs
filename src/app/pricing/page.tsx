import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Pricing from "@/components/Pricing";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#07090e] text-white overflow-hidden">
      <Navbar />
      <main className="pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Pricing />
        </div>
      </main>
      <Footer />
    </div>
  );
}

