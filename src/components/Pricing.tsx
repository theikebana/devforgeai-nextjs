import { Check } from "lucide-react";
import SectionHeader from "./SectionHeader";

export default function Pricing() {
  return (
    <section id="pricing" className="py-8  md:py-12 lg:py-16 lg:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Pricing"
          title="Simple, Transparent Pricing"
          description="No hidden fees. No long-term contracts. Just powerful cloud management."
          descriptionVariant="secondary"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {/* Plan 1 */}
          <div
            className="
    group
    relative
    p-5 sm:p-6 lg:p-7 2xl:p-8
    rounded-2xl
    h-auto
    flex
    flex-col
    gap-6 sm:gap-7 2xl:gap-8

    border border-[#0C0E1380]
    hover:border-white/20

    bg-[#0C0E13]
    overflow-hidden

    shadow-[inset_0_-1px_2px_rgba(255,255,255,0.05),inset_0_1px_1px_rgba(255,255,255,0.20)]
    hover:shadow-[inset_0_-1px_2px_rgba(255,255,255,0.08),inset_0_1px_1px_rgba(255,255,255,0.25)]

    transition-[border-color,box-shadow]
    duration-500
    ease-out
  "
          >
            {/* Hover Gradient Overlay */}
            <div
              className="
      absolute inset-0
      bg-[linear-gradient(0deg,#0078D4_0%,#02355C_100%)]
      opacity-0
      group-hover:opacity-100
      transition-opacity
      duration-500
      pointer-events-none
    "
            />

            {/* Content */}
            <div className="relative z-10">
              <h3 className="text-base sm:text-lg text-[#FFFFFF99] mb-4 sm:mb-6">
                Silver Plan
              </h3>

              <div className="flex items-end gap-2 mb-2 sm:mb-3">
                <span className="text-3xl sm:text-4xl lg:text-5xl font-medium text-white">
                  $150
                </span>
                <span className="text-xs sm:text-sm mb-1 text-white">
                  Account
                </span>
              </div>

              <p className="text-sm sm:text-base text-[#FFFFFF99] font-light">
                InfraLens monitoring solution
              </p>
            </div>

            {/* CTA */}
            <div className="relative z-10">
              <button
                className="
      w-full
      py-2.5 sm:py-3
      rounded-lg
      bg-white
      text-[#07090E]
      font-semibold
      text-sm sm:text-base
      hover:bg-gray-200
      transition-colors
      mb-3 sm:mb-4
    "
              >
                Get Started
              </button>

              <p className="text-center text-xs sm:text-sm text-[#FFFFFF99]">
                Billed in one month payment.
              </p>
            </div>

            {/* Features */}
            <div className="relative z-10 border-t border-[#FFFFFF1A] pt-4 sm:pt-6 space-y-3 font-light">
              <h4 className="text-sm sm:text-base text-white mb-4">
                What&apos;s included:
              </h4>

              {[
                "Full access to IAN (Virtual Infra Advisor)",
                "Real-time monitoring",
                "24/7 support",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-white mt-1 shrink-0" />
                  <span className="text-sm sm:text-base text-white">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div
  className="
    group
    relative
    p-5 sm:p-6 lg:p-7 2xl:p-8
    rounded-2xl
    h-auto
    flex
    flex-col
    gap-6 sm:gap-7 2xl:gap-8

    border border-[#0C0E1380]
    hover:border-white/20

    bg-[#0C0E13]
    overflow-hidden

    shadow-[inset_0_-1px_2px_rgba(255,255,255,0.05),inset_0_1px_1px_rgba(255,255,255,0.20)]
    hover:shadow-[inset_0_-1px_2px_rgba(255,255,255,0.08),inset_0_1px_1px_rgba(255,255,255,0.25)]

    transition-[border-color,box-shadow]
    duration-500
    ease-out
  "
>
  {/* Hover Gradient Overlay */}
  <div
    className="
      absolute inset-0
      bg-[linear-gradient(0deg,#0078D4_0%,#02355C_100%)]
      opacity-0
      group-hover:opacity-100
      transition-opacity
      duration-500
      pointer-events-none
    "
  />

  {/* Content */}
  <div className="relative z-10">
    <h3 className="text-base sm:text-lg text-[#FFFFFF99] mb-4 sm:mb-6">
      Team
    </h3>

    <div className="flex items-end gap-2 mb-2 sm:mb-3">
      <span className="text-3xl sm:text-4xl lg:text-5xl font-medium text-white">
        $250
      </span>
      <span className="text-xs sm:text-sm mb-1 text-white">
        Account
      </span>
    </div>

    <p className="text-sm sm:text-base text-[#FFFFFF99] font-light">
      Complete collaboration for larger teams.
    </p>
  </div>

  {/* CTA */}
  <div className="relative z-10">
    <button
      className="
        w-full
        py-2.5 sm:py-3
        rounded-lg
        bg-white
        text-[#07090E]
        font-semibold
        text-sm sm:text-base
        hover:bg-gray-200
        transition-colors
        mb-3 sm:mb-4
      "
    >
      Get Started
    </button>

    <p className="text-center text-xs sm:text-sm text-[#FFFFFF99]">
      Billed in one month payment.
    </p>
  </div>

  {/* Features */}
  <div className="relative z-10 border-t border-[#FFFFFF1A] pt-4 sm:pt-6 space-y-3 font-light">
    <h4 className="text-sm sm:text-base text-white mb-4">
      What&apos;s included:
    </h4>

    <div className="flex items-start gap-2">
      <Check className="w-4 h-4 text-white mt-1 shrink-0" />
      <span className="text-sm sm:text-base text-white">
        Full access to IAN and VIRA
      </span>
    </div>

    <div className="flex items-start gap-2">
      <Check className="w-4 h-4 text-white mt-1 shrink-0" />
      <span className="text-sm sm:text-base text-white">
        Unlimited security scans
      </span>
    </div>

    <div className="flex items-start gap-2">
      <Check className="w-4 h-4 text-white mt-1 shrink-0" />
      <span className="text-sm sm:text-base text-white">
        24/7 support
      </span>
    </div>
  </div>
</div>

        </div>
      </div>
    </section>
  );
}
