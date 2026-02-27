"use client";

import FeatureCardMolecule from "@/components/molecule/prodcuts-cards-animation/MainHeroAnimationCard";
import { NotificationList } from "@/components/molecule/prodcuts-cards-animation/notification-list";
import { RadialNav } from "@/components/molecule/prodcuts-cards-animation/radial-nav";
import { CardDemo } from "@/components/molecule/prodcuts-cards-animation/code-card";
import { Compare } from "@/components/molecule/prodcuts-cards-animation/compare";
import ReflectiveCard from "@/components/molecule/prodcuts-cards-animation/ReflectiveCard";
import { PinList, PinListItem } from "@/components/molecule/prodcuts-cards-animation/pin-list";
import ThinkDocsMiniAnimationCard from "../molecule/prodcuts-cards-animation/ThinkDocsMiniAnimationCard";
import AlluviumMiniAnimation from "../molecule/prodcuts-cards-animation/AlluviumMiniAnimation";
import ElvisMiniAnimation from "../molecule/prodcuts-cards-animation/ElvisMiniAnimation";

// icons
import { BarChart3, Bot, Cloud, MessageSquareText, Send, ShieldCheck, Smile } from "lucide-react";

const ITEMS: PinListItem[] = [
  { id: 1, name: "Review Hub", info: "All platforms · Centralized dashboard", icon: MessageSquareText, pinned: true },
  { id: 2, name: "AI Responder", info: "Auto-replies · Smart suggestions", icon: Bot, pinned: true },
  { id: 3, name: "Sentiment Engine", info: "Emotion detection · Real-time scoring", icon: Smile, pinned: false },
  { id: 4, name: "Insight Board", info: "Trends & analytics · Performance tracking", icon: BarChart3, pinned: false },
  { id: 5, name: "Smart Reply", info: "One-click publish · Multi-channel", icon: Send, pinned: false },
];

interface ProductsShowcaseProps {
  reverse?: boolean; // <-- new prop to scroll bottom-to-top
}

export default function ProductsShowcase({ reverse = false }: ProductsShowcaseProps) {
  const cards = (
    <>
      <FeatureCardMolecule title="Autonomo AI" description="A secure, self-hosted AI platform for enterprise search, intelligent agents, and unified knowledge access." content={<NotificationList />} />
      <FeatureCardMolecule title="VIRA" description="Cloud VIRA automates Azure security with continuous, enterprise-grade risk scanning." content={<CardDemo />} />
      <FeatureCardMolecule
        title="REX"
        description="Rex auto-reviews code, finds risks, and secures CI/CD before production."
        content={
          <Compare
            firstImage="/images/products/rex.jpg"
            secondImage="/images/products/vira.jpg"
            firstImageClassName="object-cover"
            secondImageClassname="object-cover"
            className="h-[200px] w-[200px]"
            slideMode="hover"
          />
        }
      />
      <FeatureCardMolecule
        title="IAN"
        description="Manage all Azure services from one dashboard with real-time insights."
        content={
          <RadialNav
            items={[
              { id: 1, icon: Cloud, label: "AZURE", angle: 0 },
              { id: 2, icon: BarChart3, label: "INSIGHTS", angle: 120 },
              { id: 3, icon: ShieldCheck, label: "SECURITY", angle: 240 },
            ]}
            size={140}
          />
        }
      />
      <FeatureCardMolecule title="Attend AI" description="Automate attendance with AI-powered face recognition and get real-time, audit-ready reports." content={<ReflectiveCard overlayColor="rgba(0,0,0,0.2)" blurStrength={12} metalness={1} roughness={0.75} displacementStrength={20} noiseScale={1} specularConstant={5} grayscale={0.15} color="#ffffff" />} />
      <FeatureCardMolecule title="Review Attendant" description="An AI platform that centralizes reviews and automates responses with sentiment analysis." content={<PinList items={ITEMS} />} />
      <FeatureCardMolecule title="ThinkDocs" description="AI-powered document search and analysis for contracts, policies, and more." content={<ThinkDocsMiniAnimationCard />} />
      <FeatureCardMolecule title="Alluvium" description="AI-powered data extraction and analysis for invoices, contracts, and more." content={<AlluviumMiniAnimation />} />
      <FeatureCardMolecule title="Elvis" description="Job leads management & analytics platform for sales teams." content={<ElvisMiniAnimation />} />
    </>
  );

  return (
    <section className="w-full  bg-black/4 backdrop-blur-4xl py-20 overflow-hidden z-100">
      <div className=" max-w-sm overflow-hidden 2xl:max-w-md mx-auto">
        {/* VIEWPORT */}
        <div className="relative h-full overflow-hidden">
          {/* GRADIENT FADE TOP */}
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent z-10 pointer-events-none" />
          {/* GRADIENT FADE BOTTOM */}
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" />

          {/* SCROLLING CONTAINER */}
          <div className={`flex flex-col gap-8 animate-vertical-scroll ${reverse ? "animate-reverse" : ""}`}>
            {cards}
            {cards} {/* duplicate for infinite effect */}
          </div>
        </div>
      </div>

      {/* Custom Animation */}
      <style jsx>{`
        @keyframes vertical-scroll {
          0% { transform: translateY(0%); }
          100% { transform: translateY(-50%); }
        }

        .animate-vertical-scroll {
          animation: vertical-scroll 85s linear infinite;
        }

        .animate-vertical-scroll:hover {
          animation-play-state: paused;
        }

        /* Reverse scroll */
        @keyframes vertical-scroll-reverse {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0%); }
        }

        .animate-reverse {
          animation-name: vertical-scroll-reverse !important;
        }
      `}</style>
    </section>
  );
}