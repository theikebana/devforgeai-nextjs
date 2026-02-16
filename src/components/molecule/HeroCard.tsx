"use client";

import { useState, useRef, useEffect } from "react";
import { LucideIcon } from "lucide-react";

interface HeroCardProps {
  title?: string;
  description?: string;
  icon?: LucideIcon;
  className?: string;
}

export default function HeroCard({
  title,
  description,
  icon: Icon,
  className = "",
}: HeroCardProps) {
  const [open, setOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <>
      {/* Card */}
      <div
        onClick={() => setOpen(true)}
        className={`
          absolute w-[208px]
          p-2
          rounded-md
          bg-[#0C122812] 
          border border-white/5
          backdrop-blur-md
          shadow-[inset_0_-1px_2px_rgba(255,255,255,0.05),inset_0_1px_1px_rgba(255,255,255,0.10)]
          transition-all duration-500
          cursor-pointer
          group
          ${className}
        `}
      >
        <div className="flex items-center gap-3">
          {Icon && (
            <div className="w-10 h-10 flex items-center justify-center rounded-md bg-[#AEDCFF]/20">
              <Icon className="w-6 h-6 text-[#AEDCFF]" />
            </div>
          )}
          <h3 className="font-medium text-white">{title}</h3>
        </div>
      </div>

      {/* Modal Overlay */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-black/30">
          
          {/* Expanded Card (Same Style) */}
          <div
            ref={modalRef}
            className="
              relative
              w-[420px]
              p-6
              rounded-md
              bg-[#0C122812]
              border border-white/5
              backdrop-blur-md
              shadow-[inset_0_-1px_2px_rgba(255,255,255,0.05),inset_0_1px_1px_rgba(255,255,255,0.10)]
              transition-all duration-300
            "
          >
            {/* Header Section (Same as Card) */}
            <div className="flex items-center gap-3">
              {Icon && (
                <div className="w-10 h-10 flex items-center justify-center rounded-md bg-[#AEDCFF]/20">
                  <Icon className="w-6   h-6 text-[#AEDCFF]" />
                </div>
              )}
              <h3 className=" text-xl font-medium text-white">{title}</h3>
            </div>

            {/* Description */}
            <div className="mt-4">
              <p className=" text-[#DFF2FE]/80 leading-relaxed">
                {description}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
