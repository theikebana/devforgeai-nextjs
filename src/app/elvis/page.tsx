"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CallToAction from "@/components/CallToAction";
import TestimonialsInnerPages from "@/components/TestimonialsInnerPages";
import ElvisHero from "@/components/ElvisHero";

import ToolOverviewSection from "@/components/Organisms/ToolOverviewSection";
import { ToolOverviewSectionProps } from "@/components/Organisms/ToolOverviewSection";
import HowToolWorksSection, {
  HowToolWorksSectionProps,
} from "@/components/HowToolWorksSection";
import {
  BarChart3,
  Search,
  UserPlus,
  Workflow,
  Brain,
  FileCheck,
  AlertTriangle,
  ShieldCheck,
  Scan,
} from "lucide-react";

import VerticalTimeline from "@/components/VerticalTimeline";

const elvisSteps: ToolOverviewSectionProps["steps"] = [
  {
    title: "Discover & ingest job leads",
    description:
      "ELVIS aggregates job leads from your configured sources and filters them by keywords so reps only see opportunities that match their focus.",
    status: "active",
  },
  {
    title: "Assign, track & collaborate",
    description:
      "Managers assign leads to reps; status updates are aggregated per lead so multiple reps can work the same opportunity without conflicts.",
    status: "idle",
  },
  {
    title: "AI insights & automation",
    description:
      "AI enriches job descriptions, tracks technology trends and keyword performance, and sends automated notifications and weekly reports.",
    status: "idle",
  },
  {
    title: "Act with full visibility",
    description:
      "One platform for discovery, assignment, and insights—role-based access keeps everyone focused while managers get real-time visibility.",
    status: "idle",
  },
];

const elvisHowItWorksSteps: HowToolWorksSectionProps["steps"] = [
  {
    label: "01",
    title: "Discover & ingest leads",
    description:
      "ELVIS aggregates job leads from your configured sources and filters them by keywords so reps only see opportunities that match their focus.",
    icon: Search,
  },
  {
    label: "02",
    title: "Assign, track & collaborate",
    description:
      "Managers assign leads to reps; status updates are aggregated per lead so multiple reps can work the same opportunity without conflicts.",
    icon: UserPlus,
  },
  {
    label: "03",
    title: "AI insights & automation",
    description:
      "AI enriches job descriptions, tracks technology trends and keyword performance, and sends automated notifications and weekly reports.",
    icon: BarChart3,
  },
  {
    label: "04",
    title: "Full visibility & control",
    description:
      "Role-based access for admins, managers, and sales reps. Real-time visibility into team activity, lead progress, and performance metrics.",
    icon: Workflow,
  },
];

const benefits = [
  {
    icon: Scan,
    title: "Keyword-driven automation",
    description:
      "Leads are filtered by assigned keywords so reps only see opportunities that match their focus—no more noise.",
  },
  {
    icon: AlertTriangle,
    title: "Role-based workflows",
    description:
      "Admins, managers, and sales reps each get the right view and actions. Assign, reassign, and track with full history.",
  },
  {
    icon: ShieldCheck,
    title: "AI-powered analytics",
    description:
      "Job description enrichment, technology trends, and keyword performance over time—all in one place.",
  },
  {
    icon: FileCheck,
    title: "Automated notifications",
    description:
      "New lead alerts and weekly performance reports keep the team responsive without manual follow-ups.",
  },
  {
    icon: Brain,
    title: "Full visibility & control",
    description:
      "One platform for discovery, assignment, and insights—role-based access keeps everyone focused while managers get real-time visibility.",
  }
];




export default function ElvisPage() {
  return (
    <div className="min-h-screen bg-[#07090E] text-white overflow-hidden">
      <Navbar />
      <main>
        <ElvisHero />
        <ToolOverviewSection
          badge="Job Leads & Analytics — Powered by ELVIS"
          accent="sky"
          title={
            <>
              ELVIS (Enhanced Lead Virtual Intelligent System) <br />
              <span className="text-sky-400">
                Job Leads Management & Analytics
              </span>
            </>
          }
          description="ELVIS centralizes job lead discovery, assignment, tracking, and analytics for sales teams by combining keyword-driven automation, role-based workflows, and AI-powered insights into a single platform."
          steps={elvisSteps}
          footerStatus="Leads ingested · Role-based workflows active"
        />

        <div className="max-w-7xl mx-auto rounded-4xl border-2 my-12 overflow-hidden border-gray-900 shadow-xl shadow-gray-900/50">
          <HowToolWorksSection
            eyebrow="How it works"
            accent="sky"
            heading={
              <>
                From scattered leads to one command center.
              </>
            }
            description="ELVIS connects discovery, assignment, and analytics in one workflow. Role-based access keeps everyone focused on their pipeline while managers get real-time visibility and AI-driven insights."
            steps={elvisHowItWorksSteps}
          />
        </div>




        <div className="max-w-7xl mx-auto py-12 lg:py-16">
          <VerticalTimeline
            badge="Key benefits"
            heading="Everything your sales team needs in one platform."
            subheading="ELVIS unifies discovery, assignment, tracking, and insights so you can close more deals with less manual work. Keyword-driven automation, role-based workflows, and AI-powered analytics all in one place."
            items={benefits}
            accentColorClass="emerald"
          />
        </div>
        <TestimonialsInnerPages />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
