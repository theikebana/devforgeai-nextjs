import Link from "next/link";
import Image from "next/image";

export default function CallToAction() {
  return (
    <section className=" relative overflow-hidden">
      {/* Background Image */}
      <Image
        src="/banner-overlay.png"
        alt="Call to action background"
        fill
        className="block absolute inset-0 w-full h-full xl:object-contain"
        priority
      />

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-0 text-center relative xl:pt-60 xl:pb-50 py-16 lg:py-20 z-10 flex flex-col items-center justify-center gap-4 md:gap-6 xl:gap-8">
        <h2
          className="
      text-4xl md:text-5xl 2xl:text-[64px]
      tracking-tight
      font-medium
      leading-tight
     

      bg-[radial-gradient(60%_200%_at_50%_50%,#FFFFFF_0%,rgba(255,255,255,0)_100%)]
      bg-clip-text
      text-transparent
    "
        >
          Ready to take control
          <br />
          of your cloud?
        </h2>

        <p className="text-[#FFFFFF99] font-light  max-w-xs md:max-w-none mx-auto">
          Start securing and optimizing your Azure infrastructure today.
        </p>

        <div className="flex flex-row gap-4 justify-center">
          <Link
            href="/book-demo"
            className="px-5 lg:px-8 py-2 lg:py-3 rounded-lg bg-[#0078D4] font-medium text-sm lg:text-base font-light text-white transition-all cursor-pointer hover:scale-105"
          >
            Schedule a Demo
          </Link>
          <button className="px-5 lg:px-8 py-3 rounded-lg border cursor-pointer font-medium text-sm lg:text-base font-light border-white hover:border-gray-500 text-white transition-all">
            Contact Sales
          </button>
        </div>
      </div>
    </section>
  );
}
