"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CallToAction from "@/components/CallToAction";
import TestimonialsInnerPages from "@/components/TestimonialsInnerPages";
import IanHero from "@/components/IanHero";

import ToolOverviewSection from "@/components/Organisms/ToolOverviewSection";
import { ToolOverviewSectionProps } from "@/components/Organisms/ToolOverviewSection";
import HowToolWorksSection, { HowToolWorksSectionProps } from "@/components/HowToolWorksSection";
import { Activity, BarChart3, Brain, Cloud, LayoutDashboard, Lightbulb, Lock, Radar, Scan, Shield, ShieldCheck } from "lucide-react";
import PulseSection from "@/components/PulseSection";
import ShineCardsSection from "@/components/ShineCardsSection";

const ianSteps: ToolOverviewSectionProps['steps'] = [

  {
    title: "Connect Azure",
    description: "Link your Azure subscription so IAN can discover VMs, App Services, Storage, and other resources in one place.",
    status: "active",
  },
  {
    title: "Real-time metrics",
    description: "Track CPU, memory, network, and disk usage across all resources with a single, unified dashboard.",
    status: "idle",
  },
  {
    title: "Smart recommendations",
    description: "Get proactive insights to optimize cost, performance, and security before issues impact your workloads.",
    status: "idle",
  },
  {
    title: "Act with confidence",
    description: "Manage all Azure resources from one command center with clear visibility and intelligent alerts.",
    status: "idle",
  },
];

const ianHowItWorksSteps: HowToolWorksSectionProps['steps'] = [

  {
    label: "01",
    title: "Connect Azure",
    description: "Link your Azure subscription so IAN can discover VMs, App Services, Storage, and other resources in one place.",
    icon: LayoutDashboard,
  },
  {
    label: "02",
    title: "Real-time metrics",
    description: "Track CPU, memory, network, and disk usage across all resources with a single, unified dashboard.",
    icon: BarChart3,
  },
  {
    label: "03",
    title: "Smart recommendations",
    description: "Get proactive insights to optimize cost, performance, and security before issues impact your workloads.",
    icon: Lightbulb,
  },
  {
    label: "04",
    title: "Act with confidence",
    description: "Manage all Azure resources from one command center with clear visibility and intelligent alerts.",
    icon: Shield,
  },
];

const pulseCenterData = {
  center: {
    title: "AI Core",
    subtitle: "Real-time intelligence engine",
  },
  items: [
    {
      id: 1,
      icon: Brain,
      label: "Decision Engine",
    },
    {
      id: 2,
      icon: Scan,
      label: "Live Monitoring",
    },
    {
      id: 3,
      icon: ShieldCheck,
      label: "Threat Protection",
    },
    {
      id: 4,
      icon: Lock,
      label: "Zero-Trust Access",
    },
    {
      id: 5,
      icon: Radar,
      label: "Anomaly Detection",
    },
    {
      id: 6,
      icon: Activity,
      label: "Behavior Analytics",
    },
  ],
};

const frameworks = [
  {
    icon: LayoutDashboard,
    name: "Centralized visibility",
    description: "One dashboard for VMs, App Services, Storage Accounts, databases, networking, and serverless. No more jumping between Azure portals.",
  },
  {
    icon: Cloud,
    name: "Real-time performance ",
    description: "Monitor CPU, memory, network, and disk usage across all resources. Spot anomalies and capacity issues before they impact users.",
  },
  {
    icon: Lightbulb,
    name: "Intelligent recommendations",
    description: "Get proactive insights to optimize cost, performance, and security before issues impact your workloads.",
  },
  {
    icon: Cloud,
    name: "Azure-native integration",
    description: "Seamlessly integrates with Azure services. Built for teams that run production workloads on Microsoft Cloud.",
  },
];

export default function IanPage() {
  return (
    <div className="min-h-screen bg-[#07090E] text-white overflow-hidden">
      <Navbar />
      <main>
        <IanHero />
        <ToolOverviewSection
          badge="Cloud Monitoring — Powered by IAN"
          accent="sky"
          title={
            <>
              IAN (Infrastructure Analysis Navigator) <br />
              <span className="text-emerald-400">Complete Cloud Visibility</span>
            </>
          }
          description="IAN is your centralized command center for Azure infrastructure monitoring, offering a unified dashboard across core Azure services."
          steps={ianSteps}
          footerStatus="Live telemetry active · Azure services connected"
        />

        <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto rounded-4xl border border-white/5 my-12 overflow-hidden shadow-[inset_0_-1px_2px_rgba(255,255,255,0.05),inset_0_1px_1px_rgba(255,255,255,0.20)]">
          <HowToolWorksSection
            eyebrow="How it works"
            accent="sky"
            heading={
              <>
                From scattered <br /> Azure portals to one intelligent dashboard.
              </>
            }
            description="IAN connects to your Azure environment, aggregates metrics and health signals, and surfaces recommendations so you can optimize cost, performance, and security in one place."
            steps={ianHowItWorksSteps}

          />
        </div>
        <PulseSection
          center={pulseCenterData.center}
          items={pulseCenterData.items}
          sectionTitle="How Our AI Works"
          sectionDescription="Our AI operates as a continuously evolving intelligence layer at the core of your system. It ingests real-time signals across users, devices, and applications, analyzes behavioral patterns, detects anomalies, and takes proactive action before risks escalate. With every interaction, the model learns, adapts, and strengthens decision accuracy — ensuring faster responses, reduced false positives, and resilient protection at scale."

        />

        <section className="max-w-7xl 2xl:max-w-[1440px] mx-auto rounded-4xl my-12 lg:my-16 xl:my-20 2xl:my-24 border-2 border-dashed border-white/5  bg-[#ffffff08] overflow-hidden shadow-[inset_0_-1px_2px_rgba(255,255,255,0.05),inset_0_1px_1px_rgba(255,255,255,0.20)]">  
        <ShineCardsSection
          eyebrow="Compliance frameworks"
          title="Stay audit-ready with automated compliance checks"
          subtitle="IAN continuously maps your Azure posture to industry frameworks, helping you identify gaps and maintain provable compliance."
          items={frameworks}
          columns={4}
          backgroundClass="bg-[#07090E]"
        />
        </section>
        <TestimonialsInnerPages />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
