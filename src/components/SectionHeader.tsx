import React from "react";

type Alignment = "center" | "left" | "right";
type HeadingVariant = "primary" | "secondary";
type DescriptionVariant = "primary" | "secondary";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  align?: Alignment;
  variant?: HeadingVariant;
  descriptionVariant?: DescriptionVariant; // new prop
}

const alignmentClasses: Record<Alignment, string> = {
  center: "text-center items-center",
  left: "text-left items-start",
  right: "text-right items-end",
};

const headingClasses: Record<HeadingVariant, string> = {
  primary: "text-3xl md:text-4xl lg:text-5xl my-2 lg:my-4",
  secondary: "text-xl md:text-2xl lg:text-4xl py-3",
};

const descriptionClasses: Record<DescriptionVariant, string> = {
  primary: "text-[#FFFFFF]",       // default
  secondary: "text-[#FFFFFF99]",  // new secondary color
};

const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  description,
  align = "center",
  variant = "primary",
  descriptionVariant = "primary", // default
}) => {
  const containerMbClass = variant === "secondary" ? "mb-6" : "mb-8 lg:mb-12 xl:mb-15";

  return (
    <div
      className={`flex flex-col ${alignmentClasses[align]} ${containerMbClass} px-4 sm:px-6 lg:px-0`}
    >
      {badge && (
        <span className="px-3 py-1 leading-tight rounded-full bg-[#00FFA608] backdrop-blur-md border border-[#FFFFFF1A] hover:border-white/20 hover:bg-white/10 transition-all text-white font-medium shadow-lg shadow-black/20 text-xs sm:text-base">
          <span className="bg-gradient-to-b from-[#0078D4] to-white bg-clip-text text-transparent">
            {badge}
          </span>
        </span>
      )}

      <h2 className={`${headingClasses[variant]} text-white font-medium`}>{title}</h2>

      {description && (
        <p
          className={`leading-tight max-w-full !font-light sm:max-w-xl md:max-w-2xl ${
            align === "center" ? "mx-auto" : ""
          } text-sm sm:text-base ${descriptionClasses[descriptionVariant]}`}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
