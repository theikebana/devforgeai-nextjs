import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

interface CheckItem {
  title: string;
  description: string;
}

interface ServiceItemProps {
  badge: string;
  title: string;
  description: string;
  checks: CheckItem[];
  imageSrc: string;
  reverse?: boolean;
}

export default function ServiceItem({
  badge,
  title,
  description,
  checks,
  imageSrc,
  reverse = false,
}: ServiceItemProps) {
  return (
    <div className="mb-8 lg:mb-10 ">
      {/* SINGLE CARD WRAPPER */}
      <div
        className={`flex flex-col ${
          reverse ? "lg:flex-row-reverse" : "lg:flex-row"
        }
  gap-6 md:gap-10 xl:gap-14 2xl:gap-16
  rounded-2xl border lg:border-none border-white/10
  items-center
  bg-[#0C0E13] lg:bg-transparent
  p-4 md:p-6 xl:p-0`}
      >
        {/* IMAGE */}
        <div
          className="
      w-full lg:w-1/2
      h-[200px] md:h-[280px] xl:h-[360px] 2xl:h-[420px]
      overflow-hidden rounded-xl
    "
        >
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover"
          />
        </div>

        {/* CONTENT */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <div className="flex flex-col items-start gap-4 xl:gap-6 xl:max-w-[654px]">
            {/* BADGE */}
            <div
              className="
          flex items-center justify-center
          px-3 md:px-4 py-1.5 md:py-2
          bg-[rgba(0,255,166,0.03)]
          border border-white/10
          rounded-[17px]
          w-fit
        "
            >
              <span
                className="
            font-satoshi font-normal
            text-xs md:text-sm xl:text-[14px] 2xl:text-[15px]
            leading-tight
            bg-gradient-to-b from-[#0078D4] to-[#EDFFF8]
            bg-clip-text text-transparent
          "
              >
                {badge}
              </span>
            </div>

            {/* HEADING */}
            <h2
              className="
          font-satoshi font-bold text-white xl:max-w-[424px]
          text-xl md:text-3xl xl:text-[34px] 2xl:text-[38px]
          leading-tight md:leading-snug xl:leading-[42px] 2xl:leading-[46px]
        "
            >
              {title}
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
          font-satoshi font-normal text-[#FFFFFF99] max-w-[654px] leading-snug
          text-sm md:text-base xl:text-[18px]
          leading-relaxed xl:leading-[28px] 2xl:leading-[30px]
        "
            >
              {description}
            </p>
          </div>

          {/* CHECK LIST */}
          <div className="space-y-4 md:space-y-5 xl:space-y-6 mt-6 md:mt-8">
            {checks.map((check, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2
                  className="
              w-5 h-5 md:w-6 md:h-6
              text-[#00FFA6]
              flex-shrink-0
            "
                />

                <div>
                  <h4
                    className="
                text-white font-medium
                text-sm md:text-base xl:text-lg 2xl:text-xl
              "
                  >
                    {check.title}
                  </h4>

                  <p
                    className="
                text-[#FFFFFF99]
                text-xs md:text-sm xl:text-base
                leading-relaxed
              "
                  >
                    {check.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
