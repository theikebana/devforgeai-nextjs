"use client";

import { LucideIcon } from "lucide-react";

interface HeroCardProps {
  title?: string;
  description?: string;
  icon?: LucideIcon;
  className?: string;
  onClick?: () => void;
}

export default function HeroCard({
  title,
  description,
  icon: Icon,
  className = "",
  onClick,
}: HeroCardProps) {
  return (
    <div
      role={onClick ? "button" : undefined}
      onClick={onClick}
      className={`
        absolute w-[208px] h-[96px] p-3
        rounded-xl
        bg-[#0C122812] border border-white/5 
        backdrop-blur-sm
        shadow-[inset_0_-1px_2px_rgba(255,255,255,0.05),inset_0_1px_1px_rgba(255,255,255,0.10)]
        
        transition-all duration-300 ease-out
        hover:scale-110
        hover:-translate-y-2
        hover:shadow-[0_20px_40px_rgba(0,150,255,0.35)]
        
        will-change-transform
        cursor-pointer
        
        ${className}
      `}
    >
      {/* Top Section */}
      <div className="flex items-center gap-3 mb-2">
        {Icon && (
          <div className="w-8 h-8 flex items-center justify-center rounded-md bg-[#AEDCFF]/20 transition-transform duration-300 group-hover:scale-110">
            <Icon className="w-5 h-5 text-[#AEDCFF]" />
          </div>
        )}

        <h3 className="text-sm font-semibold text-white">
          {title}
        </h3>
      </div>

      <p className="text-xs text-[#DFF2FE]/80 line-clamp-2">
        {description}
      </p>
    </div>
  );
}
