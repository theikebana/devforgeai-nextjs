"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FeatureSplitSection from "./FeatureSplitSection";
import SectionHeader from "./SectionHeader";
import { Star, User, Zap } from "lucide-react";

export default function ProductSection() {
  const [activeTab, setActiveTab] = useState<"rex" | "vira" | "ian">("ian");

  useEffect(() => {
    const handleTabChange = (event: CustomEvent<{ tabId: string }>) => {
      const { tabId } = event.detail;
      if (tabId === "rex" || tabId === "vira" || tabId === "ian") {
        setActiveTab(tabId);
      }
    };

    globalThis.addEventListener("changeProductTab", handleTabChange as EventListener);

    return () => {
      globalThis.removeEventListener(
        "changeProductTab",
        handleTabChange as EventListener
      );
    };
  }, []);

  // Animation variants
  const tabVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <section id="products" className="py-8  md:py-12 lg:py-16 lg:py-20 overflow-hidden">
      <div className="custom-container mx-auto px-4 sm:px-0">
        <SectionHeader
          badge="Product Features"
          title="Our Products"
          description="Explore the powerful capabilities of Devforge. From intelligent monitoring to community engagement, we have the tools you need."
          descriptionVariant="secondary"
        />

        {/* Tabs */}
        {/* Tabs */}
        <div className="flex justify-center lg:mb-16 mb-8">
          <div className="relative flex items-center w-full border-b border-white/10">
            {[
              {
                id: "rex",
                label: "REX",
                icon: Star,
              },
              {
                id: "vira",
                label: " VIRA",
                icon: User,
              },
              {
                id: "ian",
                label: "IAN",
                icon: Zap,
              },
            ].map((tab) => {
              const isActive = activeTab === tab.id;
              const Icon = tab.icon;

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as "rex" | "vira" | "ian")}
                  className={`relative flex items-center justify-center gap-2 px-0 lg:px-5 py-3 w-full
            text-sm  font-medium cursor-pointer
            transition-colors duration-200
            ${isActive
                      ? "text-[#0078D4]"
                      : "text-[#FFFFFF99] hover:text-white hover:bg-white/5"
                    }
          `}
                >
                  <Icon className="w-4 h-4 lg:w-5 lg:h-5 text-current md:block hidden" />
                  <span>{tab.label}</span>

                  {/* Animated underline */}
                  {isActive && (
                    <motion.div
                      layoutId="activeTabUnderline"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-blue-500"
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 35,
                      }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Animated Cards */}
        <AnimatePresence mode="wait">
          {activeTab === "ian" && (
            <motion.div
              key="ian"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={tabVariants}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <FeatureSplitSection
                badge="IAN Technology"
                title="Unified Cloud Intelligence with IAN"
                description="Monitor and manage your Azure services—Virtual Machines, App Services, Storage Accounts, and more—from a centralized dashboard with real-time insights and intelligent recommendations."
                features={[
                  {
                    title: "Track real-time performance metrics",
                    description:
                      "Monitor CPU, memory, network, and disk usage across all your resources.",
                  },
                  {
                    title: "Intelligent recommendations",
                    description:
                      "Get proactive insights to optimize cost, performance, and security.",
                  },
                  {
                    title: "Centralized cloud visibility",
                    description:
                      "Manage all Azure resources from a single, unified dashboard.",
                  },
                ]}
                ctaText="Explore IAN"
                ctaUrl="https://infralens.devforge.ai/"
                imageSrc="/cards-images/ian-card-image.png"
              />
            </motion.div>
          )}

          {activeTab === "vira" && (
            <motion.div
              key="vira"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={tabVariants}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <FeatureSplitSection
                badge="Secure with VIRA"
                title="Advanced Security with VIRA"
                description="Proactively identify vulnerabilities and secure your infrastructure with intelligent automation."
                features={[
                  {
                    title: "Continuous security scanning",
                    description:
                      "Detect threats and vulnerabilities in real time across your cloud.",
                  },
                  {
                    title: "Automated compliance checks",
                    description:
                      "Ensure your infrastructure meets security and compliance standards.",
                  },
                  {
                    title: "Threat intelligence insights",
                    description:
                      "Get actionable intelligence to prevent security breaches.",
                  },
                ]}
                ctaText="Explore VIRA"
                ctaUrl="https://vira.devforge.ai/"
                imageSrc="/cards-images/ian-card-image.png"
              />
            </motion.div>
          )}

          {activeTab === "rex" && (
            <motion.div
              key="rex"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={tabVariants}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <FeatureSplitSection
                badge="REX"
                title="Resource Optimization with REX"
                description="Optimize cost, performance, and resource utilization with AI-driven insights."
                features={[
                  {
                    title: "Cost optimization insights",
                    description:
                      "Identify unused or underutilized resources instantly.",
                  },
                  {
                    title: "Smart resource allocation",
                    description:
                      "Allocate resources efficiently based on usage patterns.",
                  },
                  {
                    title: "Performance forecasting",
                    description:
                      "Predict future needs and scale confidently.",
                  },
                ]}
                ctaText="Explore REX"
                  ctaUrl="https://rex.devforge.ai/"
                imageSrc="/cards-images/ian-card-image.png"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
