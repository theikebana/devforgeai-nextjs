"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CallToAction from "@/components/CallToAction";
import TestimonialsInnerPages from "@/components/TestimonialsInnerPages";
import ThinkDocsHero from "@/components/ThinkDocsHero";
import ToolOverviewSection, {
  type ToolOverviewSectionProps,
} from "@/components/Organisms/ToolOverviewSection";
import HowToolWorksSection, {
  type HowToolWorksSectionProps,
} from "@/components/HowToolWorksSection";
import {
  FolderOpen,
  Lightbulb,
  Search,
  Tag,
  Users,
  Workflow,
} from "lucide-react";
import ShineCardsSection from "@/components/ShineCardsSection";
import VerticalTimeline from "@/components/VerticalTimeline";

const thinkDocsSteps: ToolOverviewSectionProps["steps"] = [
  {
    title: "Centralized storage & sharing",
    description:
      "All documents in a secure, unified repository with role-based permissions for view, edit, and sharing with colleagues or external stakeholders.",
    status: "active",
  },
  {
    title: "AI-powered search & retrieval",
    description:
      "Semantic search finds documents by intent or context. Natural language queries like “Find the contract with expiry in June 2027” make retrieval fast and intuitive.",
    status: "idle",
  },
  {
    title: "Auto classification & tagging",
    description:
      "AI analyzes content (PDFs, Word, images via OCR) and automatically categorizes and tags documents to improve organization and search.",
    status: "idle",
  },
  {
    title: "Collaboration & workflow",
    description:
      "Version control, comments, shared links, plus approval routing, notifications, and compliance checks triggered by document content and status.",
    status: "idle",
  },
];

const thinkDocsHowItWorksSteps: HowToolWorksSectionProps["steps"] = [
  {
    label: "01",
    title: "Store & share",
    description:
      "Upload and store all documents in a secure, unified repository. Control access with role-based permissions and share with colleagues or external stakeholders.",
    icon: FolderOpen,
  },
  {
    label: "02",
    title: "AI search",
    description:
      "Use semantic search and natural language to find documents by intent or context—e.g. “Find the contract with expiry in June 2027”—for faster, more intuitive retrieval.",
    icon: Search,
  },
  {
    label: "03",
    title: "Auto classification",
    description:
      "AI analyzes document content and automatically categorizes and tags files. Smart metadata improves organization and speeds up search.",
    icon: Tag,
  },
  {
    label: "04",
    title: "Collaborate & automate",
    description:
      "Collaborate with version control and comments, get AI-generated summaries and insights, and run workflows like approval routing and compliance checks.",
    icon: Workflow,
  },
];

const coreCapabilities = [
  {
    icon: FolderOpen,
    description:
      "Secure, unified repository with upload, access, and sharing. Role-based permissions control who can view or edit documents.",
    title: "Centralized storage and sharing",
  },
  {
    icon: Search,
    description:
      "Semantic search by intent or context. Natural language queries make retrieval faster and more intuitive.",
    title: "AI-powered search and retrieval",
  },
  {
    icon: Tag,
    description:
      "AI analyzes content and automatically categorizes and tags documents to improve organization and search.",
    title: "Automatic classification & tagging",
  },
  {
    icon: Users,
    description:
      "Version control, comments, and shared access links for multiple users working on documents.",
    title: "Collaboration tools",
  },
  {
    icon: Lightbulb,
    description:
      "Generate summaries, extract key data, or answer questions about documents without reading them line-by-line.",
    title: "Intelligent insights & summaries",
  },
  {
    icon: Workflow,
    description:
      "Trigger approval routing, notifications, or compliance checks based on document content and status.",
    title: "Workflow automation",
  },
];

export default function ThinkDocsPage() {
  return (
    <div className="min-h-screen bg-[#07090E] text-white overflow-hidden">
      <Navbar />
      <main>
        <ThinkDocsHero />
        <ToolOverviewSection
          badge="Document Management — Powered by ThinkDocs"
          accent="sky"
          title={
            <>
              ThinkDocs — AI-based <br />
              <span className="text-sky-400">
                Document Management System
              </span>
            </>
          }
          description="An AI-based Document Management System that goes beyond storing files — it uses artificial intelligence to understand, organize, search, and help manage content intelligently."
          steps={thinkDocsSteps}
          footerStatus="Unified repository · Semantic search · Role-based access"
        />

        <div className="max-w-7xl mx-auto rounded-4xl border-2 mt-12 overflow-hidden border-gray-900 shadow-xl shadow-gray-900/50">
          <HowToolWorksSection
            eyebrow="How it works"
            accent="sky"
            heading={
              <>
                From scattered files to{" "}
                <br />
                intelligent document management
              </>
            }
            description="ThinkDocs provides a secure repository, AI-powered semantic search, automatic classification and tagging, collaboration tools, intelligent insights, and workflow automation—all in one platform."
            steps={thinkDocsHowItWorksSteps}
          />
        </div>

      
        <VerticalTimeline
          badge="All in one platform"
          heading="Everything you need to manage documents intelligently"
          subheading="ThinkDocs combines centralized storage, AI search, auto-tagging, collaboration, insights, and workflow automation so your content is organized, findable, and actionable."
          items={coreCapabilities}
          accentColorClass="sky"
        />

        <ShineCardsSection
          eyebrow="Core capabilities"
          title="Everything you need to manage documents intelligently"
          subtitle="ThinkDocs combines centralized storage, AI search, auto-tagging, collaboration, insights, and workflow automation so your content is organized, findable, and actionable."
          items={coreCapabilities.map((item) => ({
            icon: item.icon,
            name: item.title,
            description: item.description,
          }))}
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
