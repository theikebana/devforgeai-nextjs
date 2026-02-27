"use client";

import { ReactNode } from "react";

interface InfiniteFeatureCardProps {
  icon: ReactNode;
  name: string;
  description: string;
}

export default function InfiniteFeatureCard({
  icon,
  name,
  description,
}: InfiniteFeatureCardProps) {
  return (
    <div
      className="w-[260px] p-5 rounded-2xl 
                 bg-[#0E1117] 
                 border border-white/5
                 backdrop-blur-xl
                 shadow-lg
                 hover:scale-[1.03]
                 transition-all duration-300"
    >
      <div className="text-purple-400 mb-4 text-2xl">
        {icon}
      </div>

      <h3 className="text-white font-semibold text-lg mb-2">
        {name}
      </h3>

      <p className="text-gray-500 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}