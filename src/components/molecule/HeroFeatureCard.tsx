"use client";

import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import type { ProductId } from "@/config/products";
import AnimatedBorder from "./AnimatedBorder";
import ProductAnimationLayer from "./ProductAnimationLayer";

interface HeroFeatureCardProps {
  icon: LucideIcon;
  name: string;
  description: string;
  productId: ProductId;
}

export default function HeroFeatureCard({
  icon: Icon,
  name,
  productId,
}: HeroFeatureCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="w-[300px]"
    >
      <AnimatedBorder>
        <div className="flex flex-col h-full">

          {/* ===== Top Content ===== */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <div className="text-purple-400 mb-4">
                <Icon size={28} />
              </div>

              <h3 className="text-white text-lg font-medium mb-2">
                {name}
              </h3>
            </div>
          </div>

          {/* ===== Animation Box ===== */}
          <div className="relative h-24 w-full rounded-xl bg-white/2 overflow-hidden transition-all duration-500">
            <ProductAnimationLayer productId={productId} />
          </div>

        </div>
      </AnimatedBorder>
    </motion.div>
  );
}