"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LucideIcon } from "lucide-react";
import Link from "next/link";

interface HeroCardProps {
  title?: string;
  description?: string;
  icon?: LucideIcon;
  href?: string;
  className?: string;
  waveOffset?: number; // for subtle wavy randomness
  cursorDirection?: number; // -1 (left) to 1 (right) from hero
  cursorIntensity?: number; // 0 (idle) to 1 (actively moving)
}

const MODAL_WIDTH = 400;
const MODAL_PADDING = 24; // viewport padding so modal doesn't touch edges

export default function HeroCard({
  title,
  description,
  icon: Icon,
  href,
  className = "",
  waveOffset = 0,
  cursorDirection = 0,
  cursorIntensity = 0,
}: HeroCardProps) {
  const [open, setOpen] = useState(false);
  const [cardRect, setCardRect] = useState<DOMRect | null>(null);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
  const [modalWidth, setModalWidth] = useState(MODAL_WIDTH);

  const originalRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Handle mouse leave from card to close modal
  const handleCardMouseLeave = () => {
    // Small delay to allow moving to modal without closing
    closeTimeoutRef.current = setTimeout(() => {
      setOpen(false);
    }, 150);
  };

  const handleCardMouseEnter = () => {
    // Cancel close if mouse re-enters card
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  const handleModalMouseEnter = () => {
    // Cancel close if mouse enters modal
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  const handleModalMouseLeave = () => {
    // Close when leaving modal
    setOpen(false);
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  // Handle click outside to close modal
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        open &&
        modalRef.current &&
        originalRef.current &&
        !modalRef.current.contains(event.target as Node) &&
        !originalRef.current.contains(event.target as Node)
      ) {
        // Clear any pending timeout
        if (closeTimeoutRef.current) {
          clearTimeout(closeTimeoutRef.current);
          closeTimeoutRef.current = null;
        }
        setOpen(false);
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [open]);

  // Keep modal within viewport (fix cutting on screens below 1440px)
  const updateModalPosition = useCallback(() => {
    if (!cardRect || !open) return;
    const vw = typeof window !== "undefined" ? window.innerWidth : 1440;
    const effectiveWidth = Math.min(MODAL_WIDTH, vw - MODAL_PADDING * 2);
    setModalWidth(effectiveWidth);
    const offsetX = (MODAL_WIDTH - effectiveWidth) / 2;
    const rawLeft = cardRect.left + window.scrollX - 48 - offsetX;
    const left = Math.max(
      MODAL_PADDING,
      Math.min(vw - effectiveWidth - MODAL_PADDING, rawLeft)
    );
    const top = Math.max(
      MODAL_PADDING,
      Math.min(
        (typeof window !== "undefined" ? window.innerHeight : 900) - 220 - MODAL_PADDING,
        cardRect.top + window.scrollY - 50
      )
    );
    setModalPosition({ top, left });
  }, [open, cardRect]);

  useEffect(() => {
    if (!open || !cardRect) return;
    // Defer setState to avoid synchronous setState in effect (cascading renders)
    const rafId = requestAnimationFrame(() => updateModalPosition());
    window.addEventListener("resize", updateModalPosition);
    window.addEventListener("scroll", updateModalPosition, true);
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", updateModalPosition);
      window.removeEventListener("scroll", updateModalPosition, true);
    };
  }, [open, cardRect, updateModalPosition]);

  const handleOpen = () => {
    if (originalRef.current) {
      const rect = originalRef.current.getBoundingClientRect();
      setCardRect(rect);
      setOpen(true);
      // Set initial position immediately so first paint is correct
      const vw = window.innerWidth;
      const effectiveWidth = Math.min(MODAL_WIDTH, vw - MODAL_PADDING * 2);
      setModalWidth(effectiveWidth);
      const offsetX = (MODAL_WIDTH - effectiveWidth) / 2;
      const rawLeft = rect.left + window.scrollX - 48 - offsetX;
      const left = Math.max(
        MODAL_PADDING,
        Math.min(vw - effectiveWidth - MODAL_PADDING, rawLeft)
      );
      const top = Math.max(
        MODAL_PADDING,
        Math.min(window.innerHeight - 220 - MODAL_PADDING, rect.top + window.scrollY - 50)
      );
      setModalPosition({ top, left });
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
      {/* Original Card with subtle wavy motion - always visible for hover */}
      <motion.div
        ref={originalRef}
        onMouseEnter={handleCardMouseEnter}
        onMouseLeave={handleCardMouseLeave}
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

      {/* Expanded Card with Backdrop */}
      <AnimatePresence>
        {open && cardRect && (
          <>
            {/* Backdrop - click to close */}
            <motion.div
              className="fixed inset-0 z-40 !backdrop-blur-md !bg-black/30 !will-change-opacity cursor-pointer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={() => setOpen(false)}
              aria-hidden
            />


            {/* Expanded Card */}
            <motion.div
              ref={modalRef}
              onMouseEnter={handleModalMouseEnter}
              onMouseLeave={handleModalMouseLeave}
              className="fixed z-50 pointer-events-auto will-change-transform"
              style={{
                top: modalPosition.top,
                left: modalPosition.left,
                width: modalWidth,
              }}
              initial={{
                opacity: 0,
                scale: 0.92,
                y: 12,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.92,
                y: 12,
              }}
              transition={{
                duration: 0.35,
                ease: [0.25, 0.46, 0.45, 0.94],
                type: "tween",
              }}
            >
              <div className="relative rounded-md glass-card shadow-lg min-h-[180px] p-6  overflow-y-auto flex flex-col ">
                {/* Header */}
              
                  <h3 className="2xl:text-xl text-lg font-medium text-white">{title}</h3>
                

                {/* Description - wraps fully, no truncation */}
                <div className="mb-4 flex-1">
                  <p className="text-[#DFF2FE]/80 text-sm leading-relaxed break-words">
                    {description}
                  </p>
                </div>

                {/* View more - bottom center, glass-card */}
                <div className="bottom-4 left-0 right-0  flex ">
                  {href ? (
                    <Link
                      href={href}
                      className="glass-card inline-flex items-center justify-center rounded-md border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-[#C5E6FF] hover:bg-white/10 hover:scale-115 transition-colors"
                      onClick={() => setOpen(false)}
                    >
                      View more
                    </Link>
                  ) : (
                    <span className="glass-card inline-flex items-center justify-center rounded-md border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-[#C5E6FF] ">
                      View more
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
