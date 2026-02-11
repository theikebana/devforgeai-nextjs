"use client";

import { motion } from "framer-motion";
import {
  Cloud,
  Network,
  Zap,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { useEffect, useState } from "react";

/* ----------------------------------------
    Motion presets
---------------------------------------- */
/* ----------------------------------------
    Feature strip
---------------------------------------- */
const FEATURES = [
  { label: "Real-time metrics", icon: Network },
  { label: "Smart insights", icon: Zap },
  { label: "Unified visibility", icon: Cloud },
];

export default function IanHero() {
  const random = (min: number, max: number) =>
    Math.round(min + Math.random() * (max - min));

  const randomFloat = (min: number, max: number, d = 1) =>
    +(min + Math.random() * (max - min)).toFixed(d);

  const [metrics, setMetrics] = useState({
    idleVMs: 12,
    savings: 18.4,
    cpu: 42,
    memory: 68,
    requests: 9.2,
    errors: 0.3,
    activeVMs: 128,
    latency: 23,
    bars: {
      scaling: 80,
      traffic: 62,
      storage: 47,
    },
  });

  useEffect(() => {
    const metricTimer = setInterval(() => {
      setMetrics({
        idleVMs: random(8, 14),
        savings: randomFloat(16, 22),
        cpu: random(35, 55),
        memory: random(60, 75),
        requests: randomFloat(8.6, 10.4),
        errors: randomFloat(0.2, 0.6, 2),
        activeVMs: random(120, 138),
        latency: random(18, 30),
        bars: {
          scaling: random(72, 88),
          traffic: random(55, 70),
          storage: random(40, 55),
        },
      });
    }, 2200);

    return () => {
      clearInterval(metricTimer);
    };
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#07090E] py-12 lg:py-16 xl:py-20 2xl:py-24">
      {/* Ambient glow */}
      <motion.div
        className="pointer-events-none absolute -top-1/2 -right-1/4 h-[120%] w-[80%] rounded-full bg-sky-500/20 blur-[140px]"
        animate={{ opacity: [0.25, 0.5, 0.25] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-7xl 2xl:max-w-[1440px] 2xl:rounded-4xl rounded-3xl rounded-b-full sm:rounded-b-3xl pb-12  lg:pb-auto border border-white/5 bg-[#020617] p-6 sm:p-8  lg:p-10 xl:p-12">
        <motion.div
          initial="hidden"
          animate="visible"

          className="grid items-center gap-8 xl:gap-12 sm:grid-cols-4"
        >
          {/* LEFT COLUMN */}
          <div className="order-2 lg:order-none col-span-2 space-y-5 max-w-xl text-center sm:text-left">
            <motion.div

              className="hidden lg:inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] text-sky-100/80 backdrop-blur"
            >
              <Zap className="h-3.5 w-3.5 text-sky-300" />
              <span className="text-[10px] uppercase tracking-[0.18em]">IAN Technology</span>
            </motion.div>

            <motion.h1

              className="font-semibold tracking-tight text-white text-[26px] leading-[1.1] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px]"
            >
              Unified <br />
              <span className="text-[#00d492]">Cloud Intelligence</span> with IAN
            </motion.h1>



            <motion.p

              className="mx-auto sm:mx-0 max-w-[32ch] sm:max-w-md text-[14px] sm:text-sm md:text-base leading-relaxed text-white/65"
            >
              Monitor and manage your Azure services from a centralized dashboard
              with real-time insights and intelligent recommendations.
            </motion.p>

            <motion.div

              className="hidden lg:flex flex-wrap items-center gap-4 pt-2 justify-center sm:justify-start text-[13px] sm:text-sm text-white/70"
            >
              {FEATURES.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-center gap-4">
                    <span className="flex items-center gap-2 font-medium">
                      <Icon className="h-4 w-4 text-sky-400" />
                      {item.label}
                    </span>
                    {i !== FEATURES.length - 1 && (
                      <span className="hidden sm:block h-4 w-px bg-white/15" />
                    )}
                  </div>
                );
              })}
            </motion.div>

            <motion.div

              className="flex flex-col sm:flex-row flex-wrap items-center gap-4 pt-4 justify-center sm:justify-start"
            >
              <button className="group inline-flex items-center gap-2 rounded-xl bg-sky-500 px-5 py-3 text-sm font-medium text-black shadow-[0_0_30px_rgba(56,189,248,0.35)] transition hover:bg-sky-400">
                View live dashboard
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </button>

              <span className="flex items-center gap-2 justify-center sm:justify-start text-[10px] sm:text-xs text-white/55">
                <ShieldCheck className="h-4 w-4 text-sky-400" />
                Always-on Azure monitoring
              </span>
            </motion.div>
          </div>

          {/* MOBILE DASHBOARD VISUAL */}
          <motion.div

            className="order-1 block sm:hidden lg:order-none col-span-2 w-full mx-auto justify-center flex flex-col gap-2"
          >
            <motion.div
              className="inline-flex items-center w-fit gap-2 mx-auto sm:mx-0 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] text-sky-100/80 backdrop-blur"
            >
              <Zap className="h-3.5 w-3.5 text-sky-300" />
              <span className="text-[10px] uppercase tracking-[0.18em]">IAN Technology</span>
            </motion.div>

            <motion.div
              className="relative z-10 rounded-2xl border border-white/10 bg-[#020617]/80 p-6 backdrop-blur"
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="mb-5 flex justify-between">
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/50">IAN • Live System Overview</p>
                  <p className="text-sm text-white">Azure Environment Health</p>
                </div>
                <span className="flex items-center gap-1 text-xs text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Healthy
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {[
                  ["CPU Load", `${metrics.cpu}%`, "text-sky-400"],
                  ["Memory Usage", `${metrics.memory}%`, "text-indigo-400"],
                  ["Active VMs", metrics.activeVMs, "text-emerald-400"],
                  ["Latency", `${metrics.latency}ms`, "text-amber-400"],
                ].map(([label, value, color]) => (
                  <motion.div
                    key={label as string}
                    className="rounded-xl border border-white/8 bg-white/5 py-2 px-3"
                    animate={{ opacity: [0.9, 1, 0.9] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    <p className="text-xs text-white/55">{label}</p>
                    <p className={`mt-1 text-md font-semibold ${color}`}>{value}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* DESKTOP DASHBOARD VISUAL */}
          <motion.div

            className="relative hidden sm:block order-1 lg:order-none col-span-2 justify-self-end w-full max-w-[260px] sm:max-w-[300px] md:max-w-[340px] xl:max-w-md 2xl:max-w-lg self-end"
          >
            {/* STACKED MINI DASHBOARDS */}
            <div className="absolute bottom-0 left-0 z-20 flex flex-col items-center gap-3 -translate-x-[85%] hidden lg:flex">
              {/* Cost */}
              <motion.div
                className="w-48 rounded-2xl -rotate-8 border border-white/10 bg-[#020617]/90 p-4 backdrop-blur text-center"
                animate={{ x: [-10, -18, -10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <p className="mb-3 text-xs text-white/70">Cost Efficiency</p>
                <div className="flex gap-3">
                  <div className="flex-1">
                    <p className="text-[11px] text-white/50">Idle VMs</p>
                    <p className="text-lg font-semibold text-amber-400">{metrics.idleVMs}</p>
                  </div>
                  <div className="w-px bg-white/10" />
                  <div className="flex-1">
                    <p className="text-[11px] text-white/50">Savings</p>
                    <p className="text-lg font-semibold text-emerald-400">₹{metrics.savings}k</p>
                  </div>
                </div>
              </motion.div>

              {/* Health */}
              <motion.div
                className="w-48 rotate-8 rounded-2xl border border-white/10 bg-[#020617]/90 p-4 backdrop-blur text-center"
                animate={{ x: [-6, -12, -6] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <p className="mb-3 text-xs text-white/70">System Health</p>
                <div className="flex gap-3">
                  <div className="flex-1">
                    <p className="text-[11px] text-white/50">CPU</p>
                    <p className="text-lg font-semibold text-sky-400">{metrics.cpu}%</p>
                  </div>
                  <div className="w-px bg-white/10" />
                  <div className="flex-1">
                    <p className="text-[11px] text-white/50">Memory</p>
                    <p className="text-lg font-semibold text-indigo-400">{metrics.memory}%</p>
                  </div>
                </div>
              </motion.div>

              {/* Traffic */}
              <motion.div
                className="w-48 -rotate-8 rounded-2xl border border-white/10 bg-[#020617]/90 p-4 backdrop-blur text-center"
                animate={{ x: [-4, -8, -4] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              >
                <p className="mb-3 text-xs text-white/70">Traffic & Load</p>
                <div className="flex gap-3">
                  <div className="flex-1">
                    <p className="text-[11px] text-white/50">Requests</p>
                    <p className="text-lg font-semibold text-sky-400">{metrics.requests}k</p>
                  </div>
                  <div className="w-px bg-white/10" />
                  <div className="flex-1">
                    <p className="text-[11px] text-white/50">Errors</p>
                    <p className="text-lg font-semibold text-emerald-400">{metrics.errors}%</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* MAIN DASHBOARD */}
            <motion.div
              className="relative z-10 rounded-2xl border border-white/10 bg-[#020617]/80 p-6 backdrop-blur"
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="mb-5 flex justify-between">
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/50">IAN • Live System Overview</p>
                  <p className="text-sm text-white">Azure Environment Health</p>
                </div>
                <span className="flex items-center gap-1 text-xs text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Healthy
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  ["CPU Load", `${metrics.cpu}%`, "text-sky-400"],
                  ["Memory Usage", `${metrics.memory}%`, "text-indigo-400"],
                  ["Active VMs", metrics.activeVMs, "text-emerald-400"],
                  ["Latency", `${metrics.latency}ms`, "text-amber-400"],
                ].map(([label, value, color]) => (
                  <motion.div
                    key={label as string}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4"
                    animate={{ opacity: [0.9, 1, 0.9] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    <p className="text-xs text-white/55">{label}</p>
                    <p className={`mt-1 text-xl font-semibold ${color}`}>{value}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-5 space-y-2">
                {[
                  ["VM scaling", metrics.bars.scaling],
                  ["Traffic load", metrics.bars.traffic],
                  ["Storage I/O", metrics.bars.storage],
                ].map(([label, value], i) => (
                  <div key={label as string}>
                    <div className="mb-1 flex justify-between text-[11px] text-white/55">
                      <span>{label}</span>
                      <span>{value}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                      <motion.div
                        className="h-full rounded-full bg-sky-400"
                        animate={{
                          width: [
                            `${(Number(value) - 5).toFixed(1)}%`,
                            `${Number(value).toFixed(1)}%`,
                            `${(Number(value) - 5).toFixed(1)}%`,
                          ],
                        }}
                        transition={{
                          duration: 3,
                          delay: i * 0.2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}