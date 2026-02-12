"use client";

import { useEffect, useState } from "react";
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
} from "lucide-react";

export default function HeroStatSection() {
  const stats = [
    { title: "REX", icon: ShieldCheck, value: 98, suffix: "%" },
    { title: "IAN", icon: Cloud, value: 24, suffix: "K+" },
    { title: "VIRA", icon: Bot, value: 12, suffix: "K+" },
    { title: "MoogleMind", icon: Search, value: 150, suffix: "+" },
    { title: "Review Attendant", icon: MessageSquareText, value: 4.9, suffix: "/5" },
    { title: "AttendAI", icon: Camera, value: 99, suffix: "%" },
    { title: "Elvis", icon: Briefcase, value: 320, suffix: "+" },
    { title: "ThinkDocs", icon: FileText, value: 85, suffix: "%" },
    { title: "Alluvium", icon: Database, value: 1.2, suffix: "M+" },
    { title: "Demo Agent", icon: PlayCircle, value: 500, suffix: "+" },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));

  // Initial animated count
  useEffect(() => {
    const intervals = stats.map((stat, index) => {
      let start = 0;
      const end = stat.value;
      const duration = 1200;
      const increment = end / (duration / 16);

      return setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(intervals[index]);
        }

        setCounts((prev) => {
          const updated = [...prev];
          updated[index] =
            stat.value % 1 !== 0
              ? parseFloat(start.toFixed(1))
              : Math.floor(start);
          return updated;
        });
      }, 16);
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  // Live fluctuation after initial count
  useEffect(() => {
    const liveInterval = setInterval(() => {
      setCounts((prev) =>
        prev.map((val, i) => {
          const fluct = (Math.random() - 0.5) * (stats[i].value * 0.02); // ±2%
          let newVal = val + fluct;
          if (newVal < 0) newVal = 0;
          if (newVal > stats[i].value * 1.1) newVal = stats[i].value * 1.1; // cap at 110%
          return stats[i].value % 1 !== 0 ? parseFloat(newVal.toFixed(1)) : Math.floor(newVal);
        })
      );
    }, 2000); // update every 2s

    return () => clearInterval(liveInterval);
  }, []);

  return (
    <section className="relative flex justify-center w-full">
      {/* Soft Ambient Glow */}
      <div className="absolute w-[900px] h-[300px] bg-[#0360A7]/30 blur-[180px] rounded-full pointer-events-none" />

      <div className="relative container mx-auto px-6">
        <div className="
          flex flex-wrap lg:flex-nowrap
          items-center justify-between
          gap-y-6
          rounded-2xl
          bg-white/[0.03]
          border border-white/10
          backdrop-blur-xl
          p-3
        ">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <div
                key={index}
                className="
                  group flex items-center gap-3
                  cursor-pointer
                  transition-transform duration-300
                  hover:scale-110 hover:translate-y-[-2px]
                  hover:shadow-[0_0_20px_rgba(0,150,255,0.4)]
                "
              >
                {/* Icon */}
                <div className="
                  w-10 h-10 flex items-center justify-center
                  rounded-lg
                  bg-[#AEDCFF]/10
                  group-hover:bg-[#AEDCFF]/20
                  transition-all duration-300
                ">
                  <Icon className="w-5 h-5 text-[#AEDCFF]" />
                </div>

                {/* Text */}
                <div className="leading-tight">
                  <p className="text-white font-semibold text-sm tracking-tight">
                    {counts[index]}
                    {stat.suffix}
                  </p>
                  <p className="text-[#DFF2FE]/60 text-xs">
                    {stat.title}
                  </p>
                </div>

                {/* Divider */}
                {index !== stats.length - 1 && (
                  <div className="hidden lg:block w-px h-8 bg-white/10 ml-4" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
