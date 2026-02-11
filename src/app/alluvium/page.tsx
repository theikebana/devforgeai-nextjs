 "use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CallToAction from "@/components/CallToAction";
import TestimonialsInnerPages from "@/components/TestimonialsInnerPages";
import AlluviumHero from "@/components/AlluviumHero";

import ToolOverviewSection, {
  ToolOverviewSectionProps,
} from "@/components/Organisms/ToolOverviewSection";
import HowToolWorksSection, {
  HowToolWorksSectionProps,
} from "@/components/HowToolWorksSection";
import PulseSection from "@/components/PulseSection";
import ShineCardsSection from "@/components/ShineCardsSection";
import {
  Activity,
  Brain,
  Database,
  FileCheck,
  FileText,
  Lock,
  Radar,
  Scan,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import VerticalTimeline, { type TimelineItem } from "@/components/VerticalTimeline";

const alluviumSteps: ToolOverviewSectionProps["steps"] = [
  {
    title: "Ingest digital documents",
    description:
      "Securely import invoices, contracts, and statements from existing DMS, email inboxes, or cloud storage.",
    status: "active",
  },
  {
    title: "Normalize & pre-process files",
    description:
      "Handle 20+ layouts and formats with automatic rotation, de-noising, OCR and layout detection.",
    status: "idle",
  },
  {
    title: "AI-driven field extraction",
    description:
      "Use trained models and domain templates to extract vendor, totals, dates, line items, and tax details.",
    status: "idle",
  },
  {
    title: "Validate & export structured data",
    description:
      "Route low-confidence fields for review and push clean data into ERP, accounting, or analytics systems.",
    status: "idle",
  },
];

const alluviumHowItWorksSteps: HowToolWorksSectionProps["steps"] = [
  {
    label: "01",
    title: "Document intake",
    description:
      "Alluvium connects to your document sources and continuously ingests invoices, contracts, and statements in their native formats.",
    icon: FileText,
  },
  {
    label: "02",
    title: "Structure & understand",
    description:
      "Our models detect layout, language, and visual cues, converting each file into a rich, machine-readable representation.",
    icon: Scan,
  },
  {
    label: "03",
    title: "Extract key fields",
    description:
      "Trained on a dataset of 11k+ invoices across 20+ formats, Alluvium reliably pulls out critical business fields and line items.",
    icon: Brain,
  },
  {
    label: "04",
    title: "Validate & deliver",
    description:
      "Confidence scores and review workflows keep humans in the loop before exporting clean, verified data into downstream systems.",
    icon: FileCheck,
  },
];

const pulseCenterData = {
  center: {
    title: "Alluvium Engine",
    subtitle: "Continuously learning document AI core",
  },
  items: [
    {
      id: 1,
      icon: Scan,
      label: "Layout Detection",
    },
    {
      id: 2,
      icon: Brain,
      label: "Field Extraction",
    },
    {
      id: 3,
      icon: Database,
      label: "Schema Mapping",
    },
    {
      id: 4,
      icon: Radar,
      label: "Anomaly Signals",
    },
    {
      id: 5,
      icon: Activity,
      label: "Feedback Loops",
    },
    {
      id: 6,
      icon: Lock,
      label: "Access Controls",
    },
  ],
};

const capabilities = [
  {
    icon: FileText,
    name: "Project Description",
    description:
      "Alluvium helps financial institutions extract structured insights from large volumes of digital documents—including invoices, contracts, and statements—by replacing manual, error-prone processes with AI-enabled automation.",
  },
  {
    icon: Database,
    name: "Model training & accuracy",
    description:
      "Trained on a dataset of 11k+ invoices spanning more than 20 formats, Alluvium consistently achieves around 76% accuracy on key fields out of the box, improving further with customer feedback.",
  },
  {
    icon: Workflow,
    name: "Enterprise implementations",
    description:
      "Deployed with organizations like Zanran for contextual data extraction, Bryckel AI for lease-management automation, and Schneider for processing high volumes of unstructured invoices.",
  },
  {
    icon: ShieldCheck,
    name: "Security & compliance",
    description:
      "Built with encryption, fine-grained access control, and compliance-ready practices designed for finance and enterprise environments.",
  },
];

const futureUpdates: TimelineItem[] = [
  {
    icon: FileCheck,
    title: "HIPAA",
    description:
      "Protect sensitive health and financial data with controls aligned to HIPAA administrative and technical safeguards.",
  },
  {
    icon: ShieldCheck,
    title: "PCI DSS",
    description:
      "Support for secure processing of payment-related documents and invoices in line with PCI DSS requirements.",
  },
  {
    icon: Lock,
    title: "GDPR",
    description:
      "Data handling practices and access controls that help teams stay compliant with GDPR and global privacy regulations.",
  },
  {
    icon: Activity,
    title: "SOC 2 & more",
    description:
      "Support for documenting security, availability, and confidentiality controls needed for SOC 2 and related frameworks.",
  },
];

export default function AlluviumPage() {
  return (
    <div className="min-h-screen bg-[#07090E] text-white overflow-hidden">
      <Navbar />
      <main>
        <AlluviumHero />
        <ToolOverviewSection
          badge="AI-Enabled Data Extraction — Alluvium"
          accent="emerald"
          title={
            <>
              Alluvium
              <br />
              <span className="text-emerald-400">
                Turning digital documents into reliable data
              </span>
            </>
          }
          description="Alluvium is an AI-powered extraction engine designed for financial institutions that need reliable, scalable data capture from invoices and other business documents."
          steps={alluviumSteps}
          footerStatus="11k+ invoices · 20+ formats · 76%+ accuracy on key fields"
        />

        <div className="max-w-7xl mx-auto rounded-4xl border-2 my-12 overflow-hidden border border-white/5 bg-[#020617]">
          <HowToolWorksSection
            eyebrow="How Alluvium works"
            accent="emerald"
            heading={<>From raw documents to finance-ready data.</>}
            description="Alluvium combines OCR, document understanding, and feedback-driven learning to continuously improve extraction quality while keeping humans in control of high-impact decisions."
            steps={alluviumHowItWorksSteps}
          />
        </div>

        <PulseSection
          center={pulseCenterData.center}
          items={pulseCenterData.items}
          sectionTitle="Inside the Alluvium engine"
          sectionDescription="At the core of Alluvium is a document intelligence layer that detects layout patterns, extracts key-value pairs, maps them to your schemas, and learns from every correction to improve over time."
        />

        <ShineCardsSection
          eyebrow="Case study overview"
          title="From project description to live enterprise deployments"
          subtitle="These are the core pillars of the Alluvium implementation—how the problem was defined, the models were trained, and how the solution is now used in production by enterprises."
          items={capabilities}
          columns={4}
          backgroundClass="bg-[#07090E]"
        />

       

        <div className="max-w-7xl mx-auto py-12 lg:py-16">
       
        <VerticalTimeline
          badge="Key benefits"
          heading="Stay audit-ready with automated compliance checks"
          subheading="Alluvium helps you keep document processing and extracted data aligned to industry security and privacy frameworks—simplifying audits and reducing compliance risk."
          items={futureUpdates}
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

