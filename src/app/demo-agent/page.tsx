"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CallToAction from "@/components/CallToAction";
import TestimonialsInnerPages from "@/components/TestimonialsInnerPages";
import DemoAgentHero from "@/components/DemoAgentHero";

import ToolOverviewSection from "@/components/Organisms/ToolOverviewSection";
import { ToolOverviewSectionProps } from "@/components/Organisms/ToolOverviewSection";
import HowToolWorksSection, {
  HowToolWorksSectionProps,
} from "@/components/HowToolWorksSection";
import {
  FileText,
  MessageCircle,
  Mic,
  Play,
  RefreshCw,
  ShieldCheck,
  Video,
  Zap,
} from "lucide-react";
import PulseSection from "@/components/PulseSection";
import ShineCardsSection from "@/components/ShineCardsSection";

const demoAgentSteps: ToolOverviewSectionProps["steps"] = [
  {
    title: "Ingest & upload",
    description:
      "Users and systems upload documents via UI or API; ThinkDocs ingests them and prepares them for AI processing.",
    status: "active",
  },
  {
    title: "OCR & text extraction",
    description:
      "Python-based OCR pipelines convert scanned and native documents into machine-readable text at scale.",
    status: "idle",
  },
  {
    title: "AI classification & metadata",
    description:
      "ML models classify documents (Invoice, Contract, KYC, etc.) and extract key fields like names, dates, amounts, and IDs.",
    status: "idle",
  },
  {
    title: "Indexing & secure storage",
    description:
      "Metadata and content are indexed in Elasticsearch while encrypted files are stored in S3 with strict, role-based access control.",
    status: "idle",
  },
];

const demoAgentHowItWorksSteps: HowToolWorksSectionProps["steps"] = [
  {
    label: "01",
    title: "Upload & ingest",
    description:
      "Documents are uploaded through UI or API gateways and queued for background processing, ready for large-scale ingestion.",
    icon: FileText,
  },
  {
    label: "02",
    title: "OCR + NLP pipelines",
    description:
      "Distributed OCR and NLP services extract raw text, normalize formats, and prepare content for downstream AI models.",
    icon: Mic,
  },
  {
    label: "03",
    title: "AI classification & extraction",
    description:
      "AI models detect document type with 95%+ accuracy and auto-extract key fields needed for finance, legal, and KYC workflows.",
    icon: Zap,
  },
  {
    label: "04",
    title: "Semantic search & access",
    description:
      "Elasticsearch powers millisecond semantic search while secure APIs and RBAC ensure only the right teams can access each file.",
    icon: MessageCircle,
  },
];

const pulseCenterData = {
  center: {
    title: "ThinkDocs Engine",
    subtitle: "AI document processing core",
  },
  items: [
    { id: 1, icon: FileText, label: "AI ingestion" },
    { id: 2, icon: Video, label: "OCR pipelines" },
    { id: 3, icon: Mic, label: "NLP extraction" },
    { id: 4, icon: RefreshCw, label: "Elasticsearch indexing" },
    { id: 5, icon: MessageCircle, label: "Semantic search" },
    { id: 6, icon: Zap, label: "Scalable processing" },
  ],
};

const keyFeatures = [
  {
    icon: FileText,
    name: "Smart document storage",
    description:
      "Folderless, tag-based organization with auto-generated metadata and full version history so teams never lose track of a file.",
  },
  {
    icon: Zap,
    name: "AI classification",
    description:
      "ML models detect document types such as invoices, contracts, and KYC records with 95%+ accuracy, removing manual tagging.",
  },
  {
    icon: FileText,
    name: "Semantic search",
    description:
      "Full-text and contextual search over content and metadata with filters for dates, types, owners, and tags—results in milliseconds.",
  },
  {
    icon: Mic,
    name: "OCR & data extraction",
    description:
      "Robust OCR for scanned documents plus NLP to extract names, dates, invoice numbers, amounts, IDs, and other key fields automatically.",
  },
  {
    icon: ShieldCheck,
    name: "Security & compliance",
    description:
      "Role-based access control, encryption in transit and at rest, detailed audit logs, and GDPR-aligned data handling for regulated teams.",
  },
  {
    icon: Play,
    name: "Performance & scalability",
    description:
      "Async job queues, horizontal scaling, and containerized services that reliably handle millions of documents in production.",
  },
];

export default function DemoAgentPage() {
  return (
    <div className="min-h-screen bg-[#07090E] text-white overflow-hidden">
      <Navbar />
      <main>
        <DemoAgentHero />
        <ToolOverviewSection
          badge="AI Document Management — ThinkDocs"
          accent="emerald"
          title={
            <>
              ThinkDocs — AI-Driven Document Management System{" "}
              <br />
              <span className="text-emerald-400">
                Intelligent storage, search, and processing at scale
              </span>
            </>
          }
          description="ThinkDocs is an AI-powered DMS that ingests documents from every source, runs OCR and NLP pipelines to extract key data, classifies each file automatically, and indexes everything in Elasticsearch and PostgreSQL. It replaces manual tagging and slow, scattered storage with semantic search, secure access control, and automation that cuts document handling time by more than 70%."
          steps={demoAgentSteps}
          footerStatus="Running in production · 1M+ documents managed"
        />

        <div className="max-w-7xl mx-auto rounded-4xl border-2 my-12 overflow-hidden border-gray-900 shadow-xl shadow-gray-900/50">
          <HowToolWorksSection
            eyebrow="How it works"
            accent="emerald"
            heading={
              <>
                From raw uploads to AI-structured, searchable documents.
              </>
            }
            description="Documents are uploaded, processed through OCR and NLP services, classified by AI, and then indexed into Elasticsearch with rich metadata. Under the hood, queues, workers, and containerized services on AWS handle scale and resilience so teams always get fast, reliable search and retrieval."
            steps={demoAgentHowItWorksSteps}
          />
        </div>

        <PulseSection
          center={pulseCenterData.center}
          items={pulseCenterData.items}
          sectionTitle="How ThinkDocs Works"
          sectionDescription="ThinkDocs sits between your sources of documents and your teams, acting as an AI engine for ingestion, OCR, NLP, classification, indexing, and secure delivery. The result is a single, compliant system of record where millions of documents become searchable, actionable, and ready for downstream workflows instead of stuck in folders and email threads."
        />

        <ShineCardsSection
          eyebrow="Key capabilities"
          title="AI-first document management, end to end"
          subtitle="From ingestion and OCR to AI classification, semantic search, and secure access control, ThinkDocs turns manual document operations into an automated, intelligent system that scales with your business."
          items={keyFeatures}
          columns={3}
          backgroundClass="bg-[#07090E]"
        />

        <TestimonialsInnerPages />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
