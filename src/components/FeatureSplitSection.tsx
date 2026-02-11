import Image from "next/image";
import { Zap } from "lucide-react";

interface Feature {
  title: string;
  description: string;
}

interface FeatureSplitSectionProps {
  badge: string;
  title: string;
  description: string;
  features: Feature[];
  ctaText: string;
  ctaUrl?: string;
  imageSrc: string;
  imageAlt?: string;
}

const FeatureSplitSection = ({
  badge,
  title,
  description,
  features,
  ctaText,
  ctaUrl,
  imageSrc,
  imageAlt = "Dashboard Image",
}: FeatureSplitSectionProps) => {
  return (
    <section>
      {/* DESKTOP (XL+) */}
      <div className="hidden lg:flex flex-col lg:flex-row items-stretch gap-8 lg:gap-12 2xl:gap-16">
        {/* LEFT */}
        <div className="w-full lg:w-2/5 space-y-8">
          {/* Custom Header */}
          <div className="flex flex-col gap-4 max-w-[564.4px]">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-[#0078D4]" />
              <span className="font-satoshi font-bold text-sm leading-5 tracking-[0.35px] uppercase text-[#0078D4]">
                {badge}
              </span>
            </div>

            <h3 className="font-satoshi font-bold text-[36px] leading-tight text-white max-w-[515px]">
              {title}
            </h3>

            <p className="font-satoshi text-[18px] leading-[29px] text-[#FFFFFF99] max-w-[550px]">
              {description}
            </p>
          </div>

          {/* FEATURES */}
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-4 mb-4 rounded-xl bg-[#FFFFFF0D] border border-white/5 "
            >
              <div className="flex items-start gap-4">
                <Image
                  src="/icons/circle-pointer.svg"
                  alt="Feature icon"
                  width={32}
                  height={32}
                  className="w-8 h-8 mt-1"
                />
                <div>
                  <h3 className="text-white font-semibold mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-[#FFFFFF99]">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* CTA */}
          {ctaUrl ? (
            <a
              href={ctaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 mt-8 py-3 rounded-lg bg-[#0078D4] text-white hover:scale-105 transition-transform"
            >
              {ctaText} →
            </a>
          ) : (
            <button className="px-8 mt-8 py-3 rounded-lg bg-[#0078D4] text-white hover:scale-105 transition-transform">
              {ctaText} →
            </button>
          )}
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full lg:w-3/5 rounded-l-xl relative  ">
          {/* Background decorative image */}
          <Image
            src="/card-overlay.png"
            alt=""
            aria-hidden="true"
            width={300}
            height={300}
            className="absolute top-0 left-0 w-auto h-auto max-w-[300px] object-fill opacity-64 z-0 pointer-events-none"
          />

          {/* Main image container */}
          <div className="relative h-[600px] border border-[#FFFFFF]/6 bg-[#0C0E13] 2xl:p-8 p-6 pr-0 rounded-l-xl  shadow-2xl w-[70vw] z-10">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="w-full h-full object-fill "
            />
          </div>
        </div>
      </div>

      {/* MOBILE / TABLET */}
      <div className="xl:hidden">
        <div className="flex flex-col gap-6  sm:p-4 shadow-2xl">
          {/* LEFT CONTENT */}
          <div className="w-full flex flex-col gap-6">
            {/* HEADER */}
            <div className="flex flex-col items-center md:items-start md:gap-3 gap-2 text-center md:text-left">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-[#0078D4]" />
                <span className="font-satoshi font-bold text-xs md:text-sm tracking-[0.35px] uppercase text-[#0078D4]">
                  {badge}
                </span>
              </div>

              <h3 className="font-satoshi font-semibold md:font-bold text-xl md:text-3xl text-white">
                {title}
              </h3>

              <p className="text-[#FFFFFF99] text-sm sm:text-base leading-relaxed max-w-xl">
                {description}
              </p>
            </div>

            {/* IMAGE (MOBILE + TABLET) */}
            <div className="rounded-xl overflow-hidden border border-white/16">
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={800}
                height={400}
                className="w-full h-[200px] sm:h-[260px] md:h-[300px] object-fill"
              />
            </div>

            {/* FEATURES */}
            <div className="space-y-3">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="w-full flex items-start bg-white/5 border border-white/5 md:rounded-xl rounded-md px-4 md:py-4 py-2"
                >
                  <div className="flex gap-4">
                    {/* ICON */}
                    <div className="hidden sm:flex items-center justify-center w-8 h-8 rounded-full bg-[#0078D41A] shrink-0">
                      <Image
                        src="/icons/circle-pointer.svg"
                        alt="Feature icon"
                        width={16}
                        height={16}
                        className="w-4 h-4"
                      />
                    </div>

                    {/* TEXT */}
                    <div className="flex flex-col md:gap-1">
                      <h3 className="font-satoshi font-medium md:font-semibold text-base text-white leading-6">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-[#FFFFFF80] leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex justify-center md:justify-start pt-2">
              {ctaUrl ? (
                <a
                  href={ctaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-3 rounded-lg bg-[#0078D4] text-white text-sm font-medium"
                >
                  {ctaText} →
                </a>
              ) : (
                <button className="px-8 py-3 rounded-lg bg-[#0078D4] text-white text-sm font-medium">
                  {ctaText} →
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSplitSection;
