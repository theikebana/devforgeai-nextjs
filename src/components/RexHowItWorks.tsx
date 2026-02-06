import { motion } from "framer-motion";
import { GitBranchPlus, ShieldCheck, Rocket, Workflow } from "lucide-react";
import AnimateSection from "./AnimateSection";

const steps = [
  {
    id: "01",
    title: "Rex hooks into your PRs",
    description:
      "Connect GitHub, GitLab, or Bitbucket and Rex starts listening to every new pull request instantly.",
    icon: GitBranchPlus,
  },
  {
    id: "02",
    title: "Multi‑LLM, 10‑phase review",
    description:
      "Security, quality, architecture, and performance checks run in parallel using a multi‑provider LLM mesh.",
    icon: ShieldCheck,
  },
  {
    id: "03",
    title: "Actionable fixes & Rex Score",
    description:
      "Engineers get prioritized findings, code suggestions, and a Rex Score that gamifies good engineering habits.",
    icon: Rocket,
  },
];

export default function RexHowItWorks() {
  return (
    <div className="bg-[#07090E] py-12">
      <AnimateSection type="fadeUp">
        <section
          id="how-rex-works"
          className="max-w-7xl mx-auto px-6 lg:px-8 pb-4"
        >
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start">
            <div className="max-w-md">
              <p className="text-xs font-semibold tracking-[0.2em] text-emerald-300 uppercase mb-3">
                How Rex works
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-3">
                A cinematic review pipeline for every PR.
              </h2>
              <p className="text-sm md:text-base text-white/65">
                Rex wraps your existing workflow with an intelligent review
                layer. No new tools. No new rituals. Just smarter reviews that
                arrive before a human even opens the diff.
              </p>

              <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-white/70 backdrop-blur-md">
                <Workflow className="h-3.5 w-3.5 text-emerald-300" />
                <span>Drop‑in for your current CI pipeline</span>
              </div>
            </div>

            <div className="flex-1 relative">
              <div className="pointer-events-none absolute -inset-10 rounded-[32px]opacity-20" />
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="relative grid gap-4 md:grid-cols-3 rounded-[28px] border border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-black/95 p-4 md:p-5 backdrop-blur-xl shadow-[0_0_10px_rgba(15,23,42,0.9)]"
              >
                {steps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <motion.div
                      key={step.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false, margin: "-80px" }}
                      transition={{ duration: 0.45, delay: index * 0.08 }}
                      className="group relative flex flex-col justify-between rounded-2xl border border-white/5 bg-white/5 px-4 py-4 md:px-4 md:py-5 overflow-hidden"
                    >
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-emerald-500/15 via-emerald-400/10 to-emerald-300/20" />
                      <div className="relative z-10 space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-semibold tracking-[0.18em] uppercase text-white/50">
                            Step {step.id}
                          </span>
                          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-slate-900 border border-white/15">
                            <Icon className="h-4 w-4 text-emerald-200" />
                          </div>
                        </div>
                        <h3 className="text-sm font-semibold text-white">
                          {step.title}
                        </h3>
                        <p className="text-[11px] text-white/70">
                          {step.description}
                        </p>
                      </div>
                      <div className="relative mt-4 h-1 w-full rounded-full bg-white/5 overflow-hidden">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-emerald-400 via-emerald-300 to-emerald-200"
                          animate={{ width: ["0%", "100%"] }}
                          transition={{
                            duration: 3,
                            delay: index * 0.2,
                            repeat: Infinity,
                            repeatType: "mirror",
                            ease: "easeInOut",
                          }}
                        />
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </section>
      </AnimateSection>
    </div>
  );
}

