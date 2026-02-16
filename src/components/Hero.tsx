"use client";

import { IconType } from "react-icons";

interface ToolCardProps {
  title: string;
  description: string;
  Icon: IconType;
  className?: string;
}

export default function ToolCard({
  title,
  description,
  Icon,
  className = "",
}: ToolCardProps) {
  return (
    <div
      className={`rounded-xl bg-slate-950/30 border border-sky-300/25 
      shadow-[0_0_18px_rgba(56,189,248,0.25)] 
      backdrop-blur-sm p-3 ${className}`}
    >
      <div className="flex items-center gap-2">
        <div className="h-7 w-7 rounded-md bg-sky-500/10 flex items-center justify-center">
          <Icon className="text-sky-200 text-base" />
        </div>

        <span className="text-sm font-medium text-white">
          {title}
        </span>
      </div>

      <p className="text-xs text-sky-100/65 mt-1 line-clamp-2">
        {description}
      </p>
    </div>
  );
}
