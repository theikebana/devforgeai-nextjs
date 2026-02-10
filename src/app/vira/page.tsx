"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CallToAction from "@/components/CallToAction";
import TestimonialsInnerPages from "@/components/TestimonialsInnerPages";
import ViraHero from "@/components/ViraHero";
import ViraKeyBenefits from "@/components/ViraKeyBenefits";
import ViraComplianceSection from "@/components/ShineCardsSection";
import ToolOverviewSection, {
  type ToolOverviewSectionProps,
} from "@/components/Organisms/ToolOverviewSection";
import HowToolWorksSection, {
  type HowToolWorksSectionProps,
} from "@/components/HowToolWorksSection";
import { AlertTriangle, FileCheck, Globe, Lock, Scan, Shield, ShieldCheck } from "lucide-react";
import ShineCardsSection from "@/components/ShineCardsSection";

const viraSteps: ToolOverviewSectionProps["steps"] = [
  {
    title: "Scan Cloud Configuration",
    description:
      "Continuously analyze Azure resources to uncover insecure configurations.",
    status: "idle",
  },
  {
    title: "Detect Excess Permissions",
    description:
      "Identify over-privileged identities and enforce least-privilege access.",
  },
  {
    title: "Validate Compliance",
    description:
      "Check alignment with HIPAA, PCI DSS, GDPR, and security benchmarks.",
  },
];

const viraHowItWorksSteps: HowToolWorksSectionProps['steps'] = [
  {
    label: "01",
    title: "Continuous scanning",
    description:
      "VIRA continuously scans your Azure environment for misconfigurations, exposed resources, and drift from security baselines.",
    icon: Scan,
  },
  {
    label: "02",
    title: "Detect risks",
    description:
      "Identify over-privileged accounts, excessive permissions, and configuration issues before they become incidents.",
    icon: AlertTriangle,
  },
  {
    label: "03",
    title: "Compliance checks",
    description:
      "Automated checks aligned to HIPAA, PCI DSS, GDPR, and other frameworks. Stay audit-ready with clear evidence and remediation steps.",
    icon: FileCheck,
  },
  {
    label: "04",
    title: "Remediate & harden",
    description:
      "Get actionable fix guidance and enforce least-privilege access. Track remediation and improve your security posture over time.",
    icon: ShieldCheck,
  },
];

const frameworks = [
  {
    icon: FileCheck,
    name: "HIPAA",
    description: "Healthcare data protection and administrative safeguards",
  },
  {
    icon: Shield,
    name: "PCI DSS",
    description: "Payment card industry data security standards",
  },
  {
    icon: Lock,
    name: "GDPR",
    description: "Data protection and privacy for EU and global compliance",
  },
  {
    icon: Globe,
    name: "SOC 2 & more",
    description: "Security, availability, and confidentiality controls",
  },
];

export default function ViraPage() {
  return (
    <div className="min-h-screen bg-[#07090E] text-white overflow-hidden">
      <Navbar />
      <main>
        <ViraHero />
        <ToolOverviewSection
          badge="Security & Compliance — Powered by VIRA"
          accent="emerald"
          title={
            <>
              Cloud Security <br />
              <span className="text-emerald-400">
                Auditing & Vulnerability Assessment
              </span>
            </>
          }
          description="VIRA (Virtual Infra Risk Advisor) continuously evaluates your Azure infrastructure, identifying risks early and maintaining compliance."
          steps={viraSteps}
          footerStatus="Live audit running · Continuous monitoring enabled"
        />
        <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto  rounded-3xl 2xl:rounded-4xl  border border-white/5 my-12 lg:my-16 xl:my-20 2xl:my-24 overflow-hidden                    shadow-[inset_0_-1px_2px_rgba(255,255,255,0.05),inset_0_1px_1px_rgba(255,255,255,0.20)]
 ">
          <HowToolWorksSection
            eyebrow="How it works"
            accent="emerald"
            heading={
              <>
                From reactive firefighting <br />
                to proactive security
              </>
            }
            description="VIRA connects to your Azure subscription, runs continuous scans, and surfaces risks and compliance gaps with clear remediation guidance."
            steps={viraHowItWorksSteps}
          />
        </div>

        <ViraKeyBenefits />

      <section className="max-w-7xl 2xl:max-w-[1440px] mx-auto rounded-4xl my-12 lg:my-16 xl:my-20 2xl:my-24 border-2 border-dashed border-white/5  bg-[#ffffff08] overflow-hidden shadow-[inset_0_-1px_2px_rgba(255,255,255,0.05),inset_0_1px_1px_rgba(255,255,255,0.20)]">
      <ShineCardsSection
          eyebrow="Compliance frameworks"
          title="Stay audit-ready with automated compliance checks"
          subtitle="VIRA continuously maps your Azure posture to industry frameworks, helping you identify gaps and maintain provable compliance."
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