"use client";

import { motion } from "framer-motion";
import {
  FolderOpen,
  Search,
  Tag,
  Users,
  Lightbulb,
  Workflow,
} from "lucide-react";
import AnimateSection from "./AnimateSection";

const benefits = [
  {
    icon: FolderOpen,
    title: "Centralized document storage and sharing",
    description:
      "All documents are stored in a secure, unified repository. Users can upload, access, and share files with colleagues, partners, or external stakeholders. Role-based permissions control who can view or edit documents and what they can do with them.",
  },
  {
    icon: Search,
    title: "AI-powered search and retrieval",
    description:
      "Instead of simple keyword search, AI enables semantic search — meaning users can find documents based on intent or context, not just exact terms. This supports natural language queries (e.g. “Find the contract with expiry in June 2027”), making retrieval much faster and more intuitive.",
  },
  {
    icon: Tag,
    title: "Automatic classification & metadata tagging",
    description:
      "AI analyzes the content of documents (PDFs, Word files, images via OCR, etc.) and automatically categorizes them. Smart tagging improves organization and speeds up search.",
  },
  {
    icon: Users,
    title: "Collaboration tools",
    description:
      "Multiple users can collaborate on documents with version control, comments, and shared access links.",
  },
  {
    icon: Lightbulb,
    title: "Intelligent insights & summaries",
    description:
      "Many AI-DMS tools generate summaries, extract key data, or answer questions about documents without reading them line-by-line manually.",
  },
  {
    icon: Workflow,
    title: "Workflow automation",
    description:
      "The system can trigger actions like approval routing, notifications, or compliance checks based on document content and status.",
  },
];

export default function ThinkDocsKeyBenefits() {
  return (
    <div className="bg-[#07090E] py-28">
      <AnimateSection type="fadeUp">
        <section className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-24">
            <p className="text-xs font-semibold tracking-[0.22em] text-sky-300 uppercase mb-4">
              Core capabilities
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-5 leading-tight">
              How ThinkDocs works
            </h2>
            <p className="text-sm md:text-base text-white/70 leading-relaxed">
              One intelligent platform — store, search, classify, collaborate,
              and automate document workflows with AI.
            </p>
          </div>

          <div className="relative">
            <motion.div
              className="absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-sky-400/40 via-sky-400/10 to-transparent"
              animate={{ backgroundPositionY: ["0%", "100%"] }}
              transition={{
                duration: 3.2,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{ backgroundSize: "100% 200%" }}
            />

            <ul className="space-y-16">
              {benefits.map((item, i) => {
                const Icon = item.icon;
                const isLeft = i % 2 === 0;

                return (
                  <motion.li
                    key={item.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="relative flex items-start"
                  >
                    <div
                      className={`w-1/2 ${
                        isLeft ? "pr-8 text-right" : "opacity-0"
                      }`}
                    >
                      {isLeft && (
                        <>
                          <h3 className="text-base md:text-lg font-semibold text-white mb-2">
                            {item.title}
                          </h3>
                          <p className="text-sm md:text-base text-white/70 leading-relaxed max-w-md ml-auto">
                            {item.description}
                          </p>
                        </>
                      )}
                    </div>

                    <span className="relative z-10 mt-1 flex h-6 w-6 items-center justify-center rounded-full border border-sky-400/50 bg-[#07090E]">
                      <span className="h-2.5 w-2.5 rounded-full bg-sky-400" />
                    </span>

                    <div
                      className={`w-1/2 ${
                        !isLeft ? "pl-8 text-left" : "opacity-0"
                      }`}
                    >
                      {!isLeft && (
                        <>
                          <h3 className="text-base md:text-lg font-semibold text-white mb-2">
                            {item.title}
                          </h3>
                          <p className="text-sm md:text-base text-white/70 leading-relaxed max-w-md">
                            {item.description}
                          </p>
                        </>
                      )}
                    </div>
                  </motion.li>
                );
              })}
            </ul>
          </div>
        </section>
      </AnimateSection>
    </div>
  );
}
