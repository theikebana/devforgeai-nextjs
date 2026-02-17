"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface HeroCardProps {
  title?: string;
  description?: string;
  icon?: LucideIcon;
  className?: string;
  waveOffset?: number; // for subtle wavy randomness
  cursorDirection?: number; // -1 (left) to 1 (right) from hero
  cursorIntensity?: number; // 0 (idle) to 1 (actively moving)
}

export default function HeroCard({
  title,
  description,
  icon: Icon,
  className = "",
  waveOffset = 0,
  cursorDirection = 0,
  cursorIntensity = 0,
}: HeroCardProps) {
  const [open, setOpen] = useState(false);
  const [cardRect, setCardRect] = useState<DOMRect | null>(null);

  const originalRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Close modal on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    if (open) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  const handleOpen = () => {
    if (originalRef.current) {
      const rect = originalRef.current.getBoundingClientRect();
      setCardRect(rect);
      setOpen(true);
    }
  };

  // Derived motion strengths so cards have a gentle idle motion
  // and a stronger, directional wave when the cursor is moving.
  const intensity = Math.max(0, Math.min(1, cursorIntensity));

  const baseVertical = 4; // idle vertical wave
  const extraVertical = 8 * intensity; // added when cursor is active
  const verticalUp = -(baseVertical + extraVertical);
  const verticalDown = (baseVertical + extraVertical) * 0.6;

  const swayStrength = 16 * intensity;
  const tiltStrength = 6 * intensity;
  const scaleStrength = 0.04 * intensity;

  return (
    <>
      {/* Original Card with subtle wavy motion */}
      {/* Moving cards  */}
      <AnimatePresence>
        {!open && (
          <motion.div
            ref={originalRef}
            onClick={handleOpen}
            className={`relative 2xl:w-[208px] w-[180px] glass-card p-2 rounded-md bg-[#0C122812] border border-white/5 backdrop-blur-md shadow cursor-pointer ${className}`}
            animate={{
              // Vertical wave: always present, stronger when cursor is active
              y: [
                0 + waveOffset,
                verticalUp + waveOffset,
                0 + waveOffset,
                verticalDown + waveOffset,
                0 + waveOffset,
              ],
              // Horizontal sway & tilt: mostly visible when cursor is moving
              x: [
                cursorDirection * swayStrength * 0.6,
                cursorDirection * swayStrength,
                cursorDirection * swayStrength * 0.7,
                cursorDirection * swayStrength * 0.4,
                cursorDirection * swayStrength * 0.6,
              ],
              rotate: [
                cursorDirection * -tiltStrength,
                cursorDirection * tiltStrength * 0.5,
                cursorDirection * -tiltStrength * 0.5,
                cursorDirection * tiltStrength * 0.35,
              ],
              // Subtle pulsing that gets a bit stronger with movement
              scale: [
                1,
                1 + scaleStrength,
                1,
                1 + scaleStrength * 0.5,
                1,
              ],
            }}
            transition={{
              // Slight, deterministic variation based on waveOffset while keeping render pure
              duration: 3 + (Math.abs(waveOffset) % 0.7),
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="flex items-center gap-3">
              {Icon && (
                <div className="2xl:w-10 2xl:h-10 w-8 h-8 flex items-center justify-center rounded-md !bg-[#AEDCFF]/20 glass-card">
                  <Icon className="w-5 h-5 2xl:w-6 2xl:h-6 text-[#AEDCFF]" />
                </div>
              )}
              <h3 className="2xl:font-medium font-normal text-white 2xl:text-base text-sm lead">{title}</h3>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Expanded Card with Backdrop */}
      <AnimatePresence>
        {open && cardRect && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-40  !backdrop-blur-md !bg-black/30 !will-change-opacity"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            />

            {/* Expanded Card */}
            <motion.div
              ref={modalRef}
              className="fixed z-50 pointer-events-auto will-change-transform "
              style={{
                top: cardRect.top + window.scrollY - 50,
                left: cardRect.left + window.scrollX - 96, // Center horizontally: (400 - 208) / 2 = 96
              }}
              initial={{
                opacity: 0,
                scale: 0.8,
                x: 0,
                y: 50,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                x: 0,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.8,
                x: 0,
                y: 50,
              }}
              transition={{ 
                duration: 0.25, 
                ease: [0.16, 1, 0.3, 1],
                type: "tween"
              }}
            >
              <div className="relative rounded-md glass-card shadow-lg w-[400px] h-[180px] p-6 overflow-y-auto">
                {/* Header */}
                <div className="flex items-center gap-3">
                  {Icon && (
                    <div className="w-10 h-10 flex items-center justify-center rounded-md bg-[#AEDCFF]/8 glass-card">
                      <Icon className="w-6 h-6 text-[#AEDCFF]" />
                    </div>
                  )}
                  <h3 className="2xl:text-xl text-lg font-medium text-white">{title}</h3>
                </div>

                {/* Description */}
                <div className="mt-4">
                  <p className="text-[#DFF2FE]/80 ">{description}</p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
