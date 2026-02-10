"use client";

import { motion } from "framer-motion";
import {
  Scan,
  ShieldCheck,
  FileCheck,
  Brain,
  AlertTriangle,
  Lock,
} from "lucide-react";
import AnimateSection from "./AnimateSection";

const benefits = [
  {
    icon: Scan,
    title: "Continuous security scanning",
    description:
      "Always-on monitoring across your entire Azure environment to detect vulnerabilities, risky configurations, and exposure in real time.",
  },
  {
    icon: AlertTriangle,
    title: "Misconfiguration detection",
    description:
      "Automatically identify insecure defaults, exposed services, open ports, and configuration drift across subscriptions.",
  },
  {
    icon: ShieldCheck,
    title: "Least privilege enforcement",
    description:
      "Detect over-privileged users, roles, and service identities and reduce your attack surface.",
  },
  {
    icon: FileCheck,
    title: "Automated compliance checks",
    description:
      "Continuously assess your infrastructure against HIPAA, PCI DSS, GDPR, and more.",
  },
  {
    icon: Brain,
    title: "Threat intelligence insights",
    description:
      "Risk-based prioritization so teams fix what matters most — not endless alerts.",
  },
  {
    icon: Lock,
    title: "Audit-ready reporting",
    description:
      "Generate executive-ready reports and stay audit-ready without manual effort.",
  },
];

export default function ViraLineBenefits() {
  return (
    <div className="bg-[#07090E]">
      <AnimateSection type="fadeUp">
        <section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 flex flex-col gap-12 sm:gap-16">

          {/* HEADER */}
          <div className="max-w-3xl mx-auto text-center ">
            <p className="text-[11px] font-semibold tracking-[0.22em] text-emerald-300 uppercase mb-3">
              All in one platform
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-4">
              Continuous Azure security & compliance
            </h2>
            <p className="text-sm sm:text-base text-white/70">
              One continuous workflow — detect, evaluate, comply, and harden
              your cloud posture with automated intelligence.
            </p>
          </div>

          {/* TIMELINE */}
          <div className="relative">

            {/* LINE */}
            <motion.div
              className="
                absolute top-0 h-full w-px
                left-3
                sm:left-1/2
                bg-gradient-to-b from-emerald-400/40 via-emerald-400/10 to-transparent
              "
              animate={{ backgroundPositionY: ["0%", "100%"] }}
              transition={{
                duration: 3.2,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{ backgroundSize: "100% 200%" }}
            />

            <ul className="space-y-10 sm:space-y-14">
              {benefits.map((item, i) => {
                const Icon = item.icon;
                const isLeft = i % 2 === 0;

                return (
                  <motion.li
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45 }}
                    className="relative flex"
                  >
                    {/* LEFT CONTENT (sm+) */}
                    <div
                      className={`hidden sm:block w-1/2 ${
                        isLeft ? "pr-8 text-right" : "opacity-0"
                      }`}
                    >
                      {isLeft && (
                        <>
                          <h3 className="text-base md:text-lg font-semibold text-white mb-2">
                            {item.title}
                          </h3>
                          <p className="text-sm md:text-base text-white/70 max-w-md ml-auto">
                            {item.description}
                          </p>
                        </>
                      )}
                    </div>

                    {/* DOT */}
                    <span className="
                      relative z-10 mt-1
                      flex h-5 w-5 items-center justify-center
                      rounded-full border border-emerald-400/50
                      bg-[#07090E]
                      ml-2 sm:ml-0
                    ">
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                    </span>

                    {/* RIGHT CONTENT (mobile + sm+) */}
                    <div
                      className={`
                        pl-6
                        sm:w-1/2 sm:pl-8
                        ${isLeft ? "sm:opacity-0" : ""}
                      `}
                    >
                      {/* MOBILE TITLE */}
                      <div className="flex items-start gap-3 mb-2 sm:hidden">
                        <Icon className="h-4 w-4 text-emerald-300 mt-1" />
                        <h3 className=" font-semibold text-white">
                          {item.title}
                        </h3>
                      </div>

                      {/* DESKTOP RIGHT TITLE */}
                      {!isLeft && (
                        <h3 className="hidden sm:block text-base md:text-lg font-semibold text-white mb-2">
                          {item.title}
                        </h3>
                      )}

                      <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                        {item.description}
                      </p>
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
