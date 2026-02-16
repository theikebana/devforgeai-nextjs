"use client";

import type { ProductId } from "@/config/products";
import RexHero from "@/components/RexHero";
import IanHero from "@/components/IanHero";
import ViraHero from "@/components/ViraHero";
import MoogleMindHero from "@/components/MoogleMindHero";
import ReviewAttendantHero from "@/components/ReviewAttendantHero";
import AttendAIHero from "@/components/AttendAIHero";
import ElvisHero from "@/components/ElvisHero";
import ThinkDocsHero from "@/components/ThinkDocsHero";
import AlluviumHero from "@/components/AlluviumHero";
import DemoAgentHero from "@/components/DemoAgentHero";

const heroMap: Record<ProductId, React.ComponentType> = {
  rex: RexHero,
  ian: IanHero,
  vira: ViraHero,
  mooglemind: MoogleMindHero,
  "review-attendant": ReviewAttendantHero,
  attendai: AttendAIHero,
  elvis: ElvisHero,
  thinkdocs: ThinkDocsHero,
  alluvium: AlluviumHero,
  "demo-agent": DemoAgentHero,
};

interface ProductHeroMapProps {
  productId: ProductId;
  className?: string;
}

export default function ProductHeroMap({ productId, className = "" }: ProductHeroMapProps) {
  const HeroComponent = heroMap[productId];
  if (!HeroComponent) return null;
  return (
    <div className={className}>
      <HeroComponent />
    </div>
  );
}
