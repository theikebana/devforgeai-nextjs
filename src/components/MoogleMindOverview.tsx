"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimateSection from "./AnimateSection";

const tabs = ["Overview", "Capabilities", "Problems", "Solutions"];

export default function MoogleMindOverview() {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <div className="bg-[#07090E] py-20">
      <AnimateSection type="fadeUp">
        <section className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-6">
          {/* Header */}
          <div className="mb-12">
            <p className="text-xs font-semibold tracking-[0.22em] text-emerald-300 uppercase mb-3">
              Platform Overview
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
              Enterprise search and AI agents, on your terms.
            </h2>
            <p className="text-sm md:text-base text-white/65 max-w-3xl leading-relaxed">
              MoogleMind is an open-source platform designed for unified search, custom AI
              agents, and secure self-hosting. We provide the infrastructure for 
              organizations that want to leverage cutting-edge LLMs while maintaining 
              absolute sovereignty over their data and internal intelligence.
            </p>
          </div>

          {/* Tabs */}
          <div className="mb-12 overflow-x-auto">
            <div className="inline-flex rounded-xl border border-white/10 bg-slate-950/80 p-1 min-w-max sm:min-w-0">
              {tabs.map((tab) => {
                const isActive = activeTab === tab;

                return (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className="relative px-4 py-2 text-sm font-medium min-w-[100px] md:min-w-[140px] text-center"
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activeTab"
                        className="absolute inset-0 rounded-lg bg-emerald-500/15"
                        transition={{ type: "spring", stiffness: 320, damping: 28 }}
                      />
                    )}
                    <span
                      className={`relative z-10 transition-colors ${
                        isActive
                          ? "text-emerald-300"
                          : "text-white/55 hover:text-white"
                      }`}
                    >
                      {tab}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Content */}
          <div className="relative min-h-[450px]">
            <AnimatePresence mode="wait">
              {/* OVERVIEW */}
              {activeTab === "Overview" && (
                <motion.div
                  key="overview"
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.35 }}
                  className="space-y-8 max-w-4xl"
                >
                  <p className="text-base md:text-lg text-white/80 leading-relaxed">
                    MoogleMind acts as the &quot;connective tissue&quot; for your company&apos;s
                    collective memory. By indexing disparate data sources and applying a
                    unified semantic layer, we allow team members to converse with their
                    own documentation, codebases, and project history.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      { 
                        title: "Centralized Semantic Layer", 
                        desc: "Standardize how AI interprets your internal data across Slack, Notion, GitHub, and local servers." 
                      },
                      { 
                        title: "Contextual Reasoning", 
                        desc: "Move beyond 'chatbots' to reasoning engines that understand project hierarchy and technical nuance." 
                      },
                      { 
                        title: "Security & Governance", 
                        desc: "Strict RBAC (Role-Based Access Control) ensures users only access information they are permitted to see." 
                      },
                      { 
                        title: "Infrastructure Neutral", 
                        desc: "Deploy on AWS, Azure, GCP, or on-premise hardware using Docker or Kubernetes clusters." 
                      },
                    ].map((item) => (
                      <div key={item.title} className="p-5 rounded-2xl border border-white/5 bg-white/[0.02]">
                        <h4 className="text-emerald-300 text-sm font-medium mb-2">{item.title}</h4>
                        <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* CAPABILITIES */}
              {activeTab === "Capabilities" && (
                <motion.div
                  key="capabilities"
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.35 }}
                  className="space-y-12 max-w-5xl"
                >
                  <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-6">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-lg bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                          <span className="text-emerald-400 text-xs">01</span>
                        </div>
                        <h3 className="text-white font-medium">Search & Deep Knowledge</h3>
                      </div>
                      <ul className="space-y-4">
                        {[
                          { t: "Unified Indexing", d: "Instantly search across PDFs, Markdown, SQL databases, and legacy CRMs." },
                          { t: "Vector Embeddings", d: "Transform raw data into high-dimensional vectors for lightning-fast semantic retrieval." },
                          { t: "Cross-Team Knowledge", d: "Break down silos by sharing a synchronized knowledge graph across departments." },
                        ].map((item) => (
                          <li key={item.t} className="group">
                            <p className="text-sm text-white group-hover:text-emerald-300 transition-colors mb-1">{item.t}</p>
                            <p className="text-xs text-white/50 leading-relaxed">{item.d}</p>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-6">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-lg bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                          <span className="text-blue-400 text-xs">02</span>
                        </div>
                        <h3 className="text-white font-medium">Autonomous AI Agents</h3>
                      </div>
                      <ul className="space-y-4">
                        {[
                          { t: "Domain Training", d: "Agents are grounded in your specific business rules and technical jargon." },
                          { t: "Actionable Workflows", d: "Enable agents to trigger API calls, generate PRs, or update project statuses." },
                          { t: "Human-in-the-loop", d: "Configurable approval gates for high-stakes AI-driven automations." },
                        ].map((item) => (
                          <li key={item.t} className="group">
                            <p className="text-sm text-white group-hover:text-blue-300 transition-colors mb-1">{item.t}</p>
                            <p className="text-xs text-white/50 leading-relaxed">{item.d}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* PROBLEMS */}
              {activeTab === "Problems" && (
                <motion.div
                  key="problems"
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.35 }}
                  className="max-w-4xl"
                >
                  <div className="mb-8">
                    <p className="text-white/80 mb-6">
                      Modern enterprises face &quot;Intelligence Drift,&quot; where
                      valuable knowledge is generated but never effectively
                      utilized because it is locked away.
                    </p>
                  </div>
                  <div className="grid gap-4">
                    {[
                      { q: "Fragmented Ecosystems", a: "Teams waste 20% of their time looking for information stored in the &apos;wrong&apos; tool." },
                      { q: "Hallucination Risks", a: "Generic LLMs often confidently provide incorrect information about specific internal policies." },
                      { q: "Privacy Leaks", a: "Uploading sensitive corporate intellectual property to 3rd-party SaaS AI models creates massive legal risk." },
                      { q: "Opaque Costs", a: "Per-seat pricing on commercial AI tools becomes unsustainable as you scale your infrastructure." },
                    ].map((item) => (
                      <div key={item.q} className="flex gap-4 p-4 rounded-xl border border-red-500/10 bg-red-500/[0.02]">
                        <span className="text-red-400 text-lg">✕</span>
                        <div>
                          <p className="text-sm font-medium text-white mb-1">{item.q}</p>
                          <p className="text-xs text-white/50">{item.a}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* SOLUTIONS */}
              {activeTab === "Solutions" && (
                <motion.div
                  key="solutions"
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.35 }}
                  className="max-w-4xl"
                >
                  <div className="mb-8">
                    <p className="text-white/80 mb-6">MoogleMind solves these challenges by providing a sovereign intelligence system that scales with your organizational complexity.</p>
                  </div>
                  <div className="grid gap-4">
                    {[
                      { q: "Single Source of Truth", a: "Every document and conversation becomes part of a searchable, shared organizational brain." },
                      { q: "Grounded RAG (Retrieval-Augmented Generation)", a: "AI responses are strictly limited to your verified internal data to prevent hallucinations." },
                      { q: "On-Premise Privacy", a: "Process everything behind your firewall. Your data never leaves your secure environment." },
                      { q: "Open Source Freedom", a: "No vendor lock-in. Scale your AI usage without worrying about increasing per-token or per-user costs." },
                    ].map((item) => (
                      <div key={item.q} className="flex gap-4 p-4 rounded-xl border border-emerald-500/10 bg-emerald-500/[0.02]">
                        <span className="text-emerald-400 text-lg">✓</span>
                        <div>
                          <p className="text-sm font-medium text-white mb-1">{item.q}</p>
                          <p className="text-xs text-white/50">{item.a}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>
      </AnimateSection>
    </div>
  );
}