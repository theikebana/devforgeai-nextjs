import { ShieldCheck, Bug, Clock3, Workflow, Layers } from "lucide-react";
import AnimateSection from "./AnimateSection";

const bulletIconClasses =
  "mt-0.5 h-3 w-3 rounded-full bg-gradient-to-tr from-amber-400 to-orange-300";

export default function RexOverview() {
  const businessChallenges = [
    "Long review cycles (24–48 hours waiting for human feedback)",
    "Inconsistent code quality and review standards",
    "Security vulnerabilities missed during manual reviews",
    "Limited visibility into individual developer code quality",
  ];

  const keyFeaturesLeft = [
    "Automated PR review in seconds",
    "10‑phase comprehensive security and quality review",
    "OWASP Top‑10 and CWE coverage",
    "Cross‑file and full‑branch analysis",
    "Architecture and design validation",
  ];

  const keyFeaturesRight = [
    "Actionable fix suggestions with code snippets",
    "Developer gamification using Rex Score",
    "Multi‑platform support (GitHub, GitLab, Bitbucket)",
    "Multi‑LLM provider support (no vendor lock‑in)",
  ];

  return (
    <div className="bg-[#07090E] pb-12 pt-4">
      {/* Business Challenges */}
      <AnimateSection type="fadeUp">
        <section className="max-w-7xl mx-auto px-6 lg:px-8 pt-6">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] items-start">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-amber-300 uppercase mb-3">
                Business Challenges
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-3">
                Remove the friction from every pull request.
              </h2>
              <p className="text-sm md:text-base text-white/65 max-w-xl">
                Rex acts as a tireless expert reviewer that never forgets the
                checklist. It spots regressions and high‑risk changes in real
                time, so your team can ship faster without sacrificing security
                or quality.
              </p>
            </div>

            <div className="rounded-2xl border border-white/8 bg-gradient-to-br from-slate-900/80 via-slate-950 to-black/95 p-5 lg:p-6 shadow-[0_0_40px_rgba(15,23,42,0.9)]">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-500/10 border border-amber-400/40">
                  <Clock3 className="h-4 w-4 text-amber-300" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">
                    Time & risk hotspots
                  </p>
                  <p className="text-[11px] text-white/60">
                    The realities of human‑only code review at scale.
                  </p>
                </div>
              </div>
              <ul className="space-y-2 text-xs text-white/75">
                {businessChallenges.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className={bulletIconClasses} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </AnimateSection>

      {/* Key Features */}
      <AnimateSection type="scaleUp" delay={0.05}>
        <section className="max-w-7xl mx-auto px-6 lg:px-8 mt-14">
          <div className="flex flex-col lg:flex-row lg:items-start gap-10">
          

            <div className="flex-1 grid gap-4 ">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md shadow-[0_0_40px_rgba(15,23,42,0.7)]">
                <p className="text-xs font-semibold tracking-[0.18em] text-white/60 uppercase mb-3">
                  Review engine
                </p>
                <ul className="space-y-2 text-xs text-white/80">
                  {keyFeaturesLeft.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className={bulletIconClasses} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-emerald-400/30 bg-gradient-to-b from-emerald-500/15 via-slate-900/95 to-slate-950 p-5 backdrop-blur-md ">
                <p className="text-xs font-semibold tracking-[0.18em] text-emerald-100 uppercase mb-3">
                  Developer experience
                </p>
                <ul className="space-y-2 text-xs text-emerald-50/90">
                  {keyFeaturesRight.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className={bulletIconClasses} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="max-w-md">
              <p className="text-xs font-semibold tracking-[0.2em] text-emerald-300 uppercase mb-3">
                Key Features
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-3">
                A multi‑LLM review engine built for real‑world teams.
              </h2>
              <p className="text-sm md:text-base text-white/65">
                Rex translates dense security and quality checks into clear,
                prioritized insights. No walls of generic AI output—just the
                specific fixes and confidence signals your reviewers need.
              </p>

              <div className="mt-6 grid gap-3 text-xs text-white/70">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-500/10 border border-emerald-400/40">
                    <ShieldCheck className="h-4 w-4 text-emerald-300" />
                  </div>
                  <div>
                    <p className="font-medium text-white">Deep security review</p>
                    <p className="text-white/65">
                      OWASP Top‑10, CWE, and secret detection baked into every
                      review.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-500/10 border border-emerald-400/40">
                    <Workflow className="h-4 w-4 text-emerald-300" />
                  </div>
                  <div>
                    <p className="font-medium text-white">Branch‑wide context</p>
                    <p className="text-white/65">
                      Understand how a change behaves across files and services,
                      not just in a single diff.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-lg bg-slate-500/10 border border-slate-400/40">
                    <Layers className="h-4 w-4 text-slate-200" />
                  </div>
                  <div>
                    <p className="font-medium text-white">Architecture‑aware</p>
                    <p className="text-white/65">
                      Rex flags design smells and anti‑patterns before they
                      become structural debt.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimateSection>

      {/* Tech stack */}
      <AnimateSection type="fadeUp" delay={0.05}>
        <section className="max-w-6xl mx-auto px-6 lg:px-8 mt-8">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 px-5 py-4 md:px-7 md:py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-3 text-sm text-white">
              <Bug className="h-4 w-4 text-amber-300" />
              <p className="font-medium">Tech Stack</p>
            </div>
            <div className="flex flex-wrap gap-4 text-xs md:text-sm text-white/70">
              <div className="flex items-center gap-2">
                <span className="text-white/50">Frontend</span>
                <span className="h-1 w-1 rounded-full bg-white/40" />
                <span className="font-medium text-white">React</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-white/50">Backend</span>
                <span className="h-1 w-1 rounded-full bg-white/40" />
                <span className="font-medium text-white">Python</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-white/50">Integrations</span>
                <span className="h-1 w-1 rounded-full bg-white/40" />
                <span className="font-medium text-white">
                  GitHub · GitLab · Bitbucket
                </span>
              </div>
            </div>
          </div>
        </section>
      </AnimateSection>
    </div>
  );
}

