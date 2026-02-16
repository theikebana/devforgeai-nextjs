"use client";

import React from "react";
import {
  ShieldCheck,
  Cloud,
  Bot,
  Search,
  MessageSquareText,
  Camera,
  Briefcase,
  FileText,
  Database,
  PlayCircle,
  LucideIcon,
} from "lucide-react";
import type { ProductId } from "@/config/products";

const STAT_PRODUCT_IDS: ProductId[] = [
  "rex",
  "ian",
  "vira",
  "mooglemind",
  "review-attendant",
  "attendai",
  "elvis",
  "thinkdocs",
  "alluvium",
  "demo-agent",
];

type StatItem = {
  title: string;
  icon: LucideIcon;
};

export default function HeroStatSection({
  onStatClick,
  centerSlot,
}: {
  onStatClick?: (productId: ProductId) => void;
  centerSlot?: React.ReactNode;
}) {
  const stats: StatItem[] = [
    { title: "REX", icon: ShieldCheck },
    { title: "IAN", icon: Cloud },
    { title: "VIRA", icon: Bot },
    { title: "MoogleMind", icon: Search },
    { title: "Review Attendant", icon: MessageSquareText },
    { title: "AttendAI", icon: Camera },
    { title: "Elvis", icon: Briefcase },
    { title: "ThinkDocs", icon: FileText },
    { title: "Alluvium", icon: Database },
    { title: "Demo Agent", icon: PlayCircle },
  ];

  const mid = Math.floor(stats.length / 2);
  const leftStats = stats.slice(0, mid);
  const rightStats = stats.slice(mid);

  return (
    <section className="relative w-full">
      <div className="w-full flex items-center bg-white/[0.04] border-y border-white/10 backdrop-blur-xl h-12">

        {/* LEFT SIDE */}
        <div className="flex flex-1 items-center justify-end">
          {leftStats.map((stat, index) => {
            const Icon = stat.icon;
            const productId = STAT_PRODUCT_IDS[index];

            return (
              <React.Fragment key={stat.title}>
                <Stat
                  stat={stat}
                  Icon={Icon}
                  onClick={() => onStatClick?.(productId)}
                />
                <Divider />
              </React.Fragment>
            );
          })}
        </div>

        {/* CENTER SLOT */}
        {centerSlot && (
          <div className="hidden lg:flex shrink-0 px-8">
            {centerSlot}
          </div>
        )}

        {/* RIGHT SIDE */}
        <div className="flex flex-1 items-center justify-start">
          {rightStats.map((stat, index) => {
            const realIndex = index + mid;
            const Icon = stat.icon;
            const productId = STAT_PRODUCT_IDS[realIndex];

            return (
              <React.Fragment key={stat.title}>
                <Divider />
                <Stat
                  stat={stat}
                  Icon={Icon}
                  onClick={() => onStatClick?.(productId)}
                />
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Mobile Center */}
      {centerSlot && (
        <div className="lg:hidden w-full flex justify-center py-4 border-t border-white/10">
          {centerSlot}
        </div>
      )}
    </section>
  );
}

/* ---------------------------
   Sub Components
----------------------------*/

function Divider() {
  return (
    <div className="hidden lg:block w-px h-10 bg-white/10 mx-3" />
  );
}

function Stat({
  stat,
  Icon,
  onClick,
}: {
  stat: StatItem;
  Icon: LucideIcon;
  onClick?: () => void;
}) {
  return (
    <div
      role={onClick ? "button" : undefined}
      onClick={onClick}
      className="group flex flex-col items-center gap-2 px-4 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:scale-105 pb-8"
    >
      <div className="w-10 h-10 flex items-center justify-center rounded-md bg-[#AEDCFF]/12 transition-all duration-300 group-hover:bg-[#AEDCFF]/20 group-hover:shadow-[0_0_20px_rgba(0,150,255,0.35)]">
        <Icon className="w-6 h-6 text-[#AEDCFF]" />
      </div>

      <p className="text-[#DFF2FE]/80 text-sm font-medium whitespace-nowrap">
        {stat.title}
      </p>
    </div>
  );
}
