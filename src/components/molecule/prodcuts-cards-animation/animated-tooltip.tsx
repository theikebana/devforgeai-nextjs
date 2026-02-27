"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "motion/react";

interface Item {
  id: number;
  name: string;
  designation: string;
  image: string;
  present: number;
  absent: number;
}

export const AnimatedTooltip = ({ items }: { items: Item[] }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [autoIndex, setAutoIndex] = useState<number>(0);

  const springConfig = { stiffness: 100, damping: 15 };
  const x = useMotionValue(0);

  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );

  const animationFrameRef = useRef<number | null>(null);

  // Auto-cycle tooltip every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setAutoIndex((prev) => (prev + 1) % items.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [items.length]);

  const handleMouseMove = (event: React.MouseEvent<HTMLImageElement>) => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    animationFrameRef.current = requestAnimationFrame(() => {
      const el = event.currentTarget;
      const halfWidth = el ? el.offsetWidth / 2 : 0;
      x.set(event.nativeEvent.offsetX - halfWidth);
    });
  };

  // Compute total attendance
  const totalPresent = items.reduce((sum, i) => sum + i.present, 0);
  const totalAbsent = items.reduce((sum, i) => sum + i.absent, 0);
  const total = totalPresent + totalAbsent;

  const presentPercent = (totalPresent / total) * 100;
  const absentPercent = (totalAbsent / total) * 100;

  return (
    <div className="flex flex-col items-center gap-2 mt-12">
      {/* Tooltip & avatars */}
      <div className="flex items-center">
        {items.map((item, idx) => {
          const isActive = hoveredIndex === item.id || autoIndex === idx;

          return (
            <div
              className="group relative -mr-3"
              key={item.id}
              onMouseEnter={() => setHoveredIndex(item.id)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 12, scale: 0.6 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      transition: { type: "spring", stiffness: 260, damping: 12 },
                    }}
                    exit={{ opacity: 0, y: 12, scale: 0.6, transition: { duration: 0.2 } }}
                    style={{
                      translateX: translateX,
                      rotate: rotate,
                      whiteSpace: "nowrap",
                    }}
                    className="absolute -top-14 left-1/2 z-50 flex -translate-x-1/2 flex-col items-center justify-center rounded-md bg-black px-3 py-1.5 text-xs shadow-xl"
                  >
                    <div className="relative z-30 text-sm font-bold text-white">
                      {item.name}
                    </div>
                    <div className="text-[10px] text-white">{item.designation}</div>
                  </motion.div>
                )}
              </AnimatePresence>

              <Image
                onMouseMove={handleMouseMove}
                height={48}
                width={48}
                src={item.image}
                alt={item.name}
                className="relative !m-0 h-12 w-12 rounded-full border-2 border-white object-cover object-top !p-0 transition duration-500 group-hover:z-30 group-hover:scale-105"
              />
            </div>
          );
        })}
      </div>

      {/* Enhanced Attendance Bar */}
      <div className="w-full max-w-5xl">
        <div className="flex justify-between mb-2 text-xs text-white ">
          <span className="flex flex-col items-center text-green-500">{totalPresent}<span>Present</span></span>
          <span className="flex flex-col items-center text-red-500">{totalAbsent}<span>Absent</span></span>
          <span className="flex flex-col items-center text-gray-500">{total}<span>Total</span></span>
        </div>

        <div className="relative h-2 w-full rounded-full bg-gray-800 overflow-hidden shadow-inner">
          {/* Present segment */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${presentPercent}%` }}
            transition={{ duration: 1 }}
            className="absolute left-0 top-0 h-full bg-emerald-500"
          />
          {/* Absent segment */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${presentPercent + absentPercent}%` }}
            transition={{ duration: 1 }}
            className="absolute left-0 top-0 h-full bg-red-500 opacity-80"
          />

          {/* Optional labels inside the bar */}
          <div className="absolute inset-0 flex items-center justify-between px-2 text-[10px] text-white font-bold">
            <span>{Math.round(presentPercent)}%</span>
            <span>{Math.round(absentPercent)}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};