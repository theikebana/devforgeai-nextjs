"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect, useMemo, useRef, useState } from "react";
import { products as productConfigs } from "@/config/products";

type FormState = {
  name: string;
  email: string;
  mobile: string;
  company: string;
  services: string[];
  useCase: string;
  date: string;
  time: string;
  meetingLink: string;
};

const initialFormState: FormState = {
  name: "",
  email: "",
  mobile: "",
  company: "",
  services: [],
  useCase: "",
  date: "",
  time: "",
  meetingLink: "",
};

export default function BookDemoPage() {
  const [form, setForm] = useState<FormState>(initialFormState);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [servicesOpen, setServicesOpen] = useState(false);

  const servicesRef = useRef<HTMLDivElement | null>(null);

  const navbarProducts = useMemo(
    () => productConfigs.filter((p) => p.showInNavbar),
    []
  );

  // Close services dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        servicesOpen &&
        servicesRef.current &&
        !servicesRef.current.contains(event.target as Node)
      ) {
        setServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [servicesOpen]);




  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const toggleService = (id: string) => {
    setForm((prev) => {
      const exists = prev.services.includes(id);
      return {
        ...prev,
        services: exists
          ? prev.services.filter((s) => s !== id)
          : [...prev.services, id],
      };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (
      !form.name ||
      !form.email ||
      !form.mobile ||
      !form.company ||
      !form.date ||
      !form.time
    ) {
      setError(
        "Please fill in your name, work email, mobile number, company, and select a date and time for the demo."
      );
      return;
    }

    try {
      setSubmitting(true);

      const response = await fetch("/api/book-demo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Failed to submit");
      }

      setSubmitted(true);
      setForm(initialFormState);
    } catch (err) {
      console.error(err);
      setError("Something went wrong while scheduling your demo. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#020617] text-white flex flex-col">
      <Navbar />

      <main className="flex-1 pt-28 pb-20 px-4">
        <section className="max-w-4xl mx-auto rounded-3xl border border-white/10 bg-gradient-to-b from-slate-950 via-slate-950/95 to-slate-950/90 p-6 md:p-10 shadow-[0_0_80px_rgba(15,23,42,0.9)]">
          <form onSubmit={handleSubmit} className="space-y-7">
            {/* Hero / Intro */}
            <div className="space-y-3 text-center flex flex-col items-center">
              <p className="inline-flex items-center justify-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-emerald-100/80">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Live product walkthrough
              </p>

              <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
                Book a{" "}
                <span className="bg-gradient-to-r from-emerald-300 via-teal-300 to-sky-300 bg-clip-text text-transparent">
                  personalized DevForge.ai demo
                </span>
              </h1>

              <p className="text-sm md:text-base text-white/65 max-w-xl">
                See how our AI-powered suite can secure and optimize your Azure
                environment in real time. No hard sales pitch—just your use cases,
                answered.
              </p>
            </div>


            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />

            {/* Basic Information */}
            <div className="space-y-4">
              <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-white/60">
                Basic Information
              </p>
              <div className="grid gap-5 md:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-medium text-white/70">
                    Full name<span className="text-emerald-400">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-white/15 bg-slate-900/60 px-3 py-2.5 text-sm text-white placeholder:text-white/35 focus:outline-none focus:ring-2 focus:ring-emerald-400/70 focus:border-emerald-400/70"
                    placeholder="Alex Patel"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-medium text-white/70">
                    Work email<span className="text-emerald-400">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-white/15 bg-slate-900/60 px-3 py-2.5 text-sm text-white placeholder:text-white/35 focus:outline-none focus:ring-2 focus:ring-emerald-400/70 focus:border-emerald-400/70"
                    placeholder="you@company.com"
                  />
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div className="space-y-2">
                  <label
                    htmlFor="company"
                    className="text-xs font-medium text-white/70"
                  >
                    Company<span className="text-emerald-400">*</span>
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    required
                    value={form.company}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-white/15 bg-slate-900/60 px-3 py-2.5 text-sm text-white placeholder:text-white/35 focus:outline-none focus:ring-2 focus:ring-emerald-400/70 focus:border-emerald-400/70"
                    placeholder="Contoso Ltd."
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="mobile"
                    className="text-xs font-medium text-white/70"
                  >
                    Mobile number<span className="text-emerald-400">*</span>
                  </label>
                  <input
                    id="mobile"
                    name="mobile"
                    type="tel"
                    autoComplete="tel"
                    required
                    value={form.mobile}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-white/15 bg-slate-900/60 px-3 py-2.5 text-sm text-white placeholder:text-white/35 focus:outline-none focus:ring-2 focus:ring-emerald-400/70 focus:border-emerald-400/70"
                    placeholder="+1 555 012 3456"
                  />
                </div>
              </div>
            </div>

            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />

            {/* Services dropdown */}
            <div className="space-y-4" ref={servicesRef}>
              <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-white/60">
                Services
              </p>
              <p className="text-xs text-white/60">
                Select one or more DevForge.ai products you&apos;d like to see in the
                demo.
              </p>

              <button
                type="button"
                onClick={() => setServicesOpen((open) => !open)}
                className="flex w-full items-center justify-between rounded-xl border border-white/15 bg-slate-900/60 px-3 py-2.5 text-xs text-white/80 hover:border-emerald-300/70 hover:text-white transition"
              >
                <span className="truncate">
                  {form.services.length === 0 &&
                    "Choose services (optional, multi-select)"}
                  {form.services.length === 1 &&
                    navbarProducts.find((p) => p.id === form.services[0])?.title}
                  {form.services.length > 1 &&
                    `${form.services.length} services selected`}
                </span>
                <span className="ml-3 text-[10px] uppercase tracking-[0.16em] text-white/50">
                  {servicesOpen ? "Close" : "Open"}
                </span>
              </button>

              {servicesOpen && (
                <div className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950/95 backdrop-blur-2xl shadow-[0_18px_60px_rgba(15,23,42,0.9)]">
                  <div className="max-h-56 overflow-y-auto p-2">
                    {navbarProducts.map((product) => {
                      const selected = form.services.includes(product.id);
                      return (
                        <button
                          key={product.id}
                          type="button"
                          onClick={() => toggleService(product.id)}
                          className={`flex w-full items-center justify-between rounded-xl px-3 py-2 text-xs text-left transition ${
                            selected
                              ? "bg-emerald-500/15 border border-emerald-400/60 text-emerald-100"
                              : "border border-transparent text-white/70 hover:border-emerald-300/60 hover:bg-slate-900/70"
                          }`}
                        >
                          <span className="flex items-center gap-2">
                            <span className="inline-flex h-7 w-7 items-center justify-center rounded-xl bg-white/10 text-[11px]">
                              {product.title[0]}
                            </span>
                            <span>{product.title}</span>
                          </span>
                          <span
                            className={`h-4 w-4 rounded border flex items-center justify-center text-[9px] ${
                              selected
                                ? "border-emerald-400 bg-emerald-500/30"
                                : "border-white/30 bg-transparent"
                            }`}
                          >
                            {selected ? "✓" : ""}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Other Details */}
            <div className="space-y-4">
              <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-white/60">
                Other Details
              </p>
              <div className="space-y-2">
                <label
                  htmlFor="useCase"
                  className="text-xs font-medium text-white/70"
                >
                  What would you like to explore?
                </label>
                <textarea
                  id="useCase"
                  name="useCase"
                  rows={4}
                  value={form.useCase}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-white/15 bg-slate-900/60 px-3 py-2.5 text-sm text-white placeholder:text-white/35 focus:outline-none focus:ring-2 focus:ring-emerald-400/70 focus:border-emerald-400/70 resize-none"
                  placeholder="Share your current Azure setup, security or observability challenges, and what success looks like for you."
                />
              </div>
            </div>

            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />

            {/* Date & Time */}
            <div className="space-y-4">
              <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-white/60">
                Schedule your demo
              </p>
              <p className="text-xs text-white/60">
                Choose a date and time that works for you.
              </p>
              <div className="grid gap-5 md:grid-cols-2">
                <div className="space-y-2">
                  <label
                    htmlFor="date"
                    className="text-xs font-medium text-white/70"
                  >
                    Date<span className="text-emerald-400">*</span>
                  </label>
                  <input
                    id="date"
                    name="date"
                    type="date"
                    required
                    value={form.date}
                    onChange={handleChange}
                    min={new Date().toISOString().split("T")[0]}
                    className="w-full rounded-xl border border-white/15 bg-slate-900/60 px-3 py-2.5 text-sm text-white placeholder:text-white/35 focus:outline-none focus:ring-2 focus:ring-emerald-400/70 focus:border-emerald-400/70 [color-scheme:dark]"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="time"
                    className="text-xs font-medium text-white/70"
                  >
                    Time<span className="text-emerald-400">*</span>
                  </label>
                  <input
                    id="time"
                    name="time"
                    type="time"
                    required
                    value={form.time}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-white/15 bg-slate-900/60 px-3 py-2.5 text-sm text-white placeholder:text-white/35 focus:outline-none focus:ring-2 focus:ring-emerald-400/70 focus:border-emerald-400/70 [color-scheme:dark]"
                  />
                </div>
              </div>
            </div>

            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />

            {/* Submit */}
            <div className="space-y-4">
              <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-white/60">
                Submit
              </p>

              {error && (
                <p className="text-xs text-rose-400 bg-rose-950/60 border border-rose-500/30 rounded-lg px-3 py-2">
                  {error}
                </p>
              )}

              {submitted && !error && (
                <p className="text-xs text-emerald-300 bg-emerald-950/60 border border-emerald-500/30 rounded-lg px-3 py-2">
                  Thanks for your interest! We&apos;ll reach out shortly to confirm
                  your selected slot and send a calendar invite.
                </p>
              )}

              <div className="flex flex-wrap items-center gap-4 pt-1">
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 py-3 text-sm font-medium text-black shadow-[0_0_30px_rgba(16,185,129,0.45)] transition hover:bg-emerald-400 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {submitting ? "Booking your demo..." : "Request live demo"}
                </button>
              </div>
            </div>
          </form>
        </section>
      </main>

      <Footer />
    </div>
  );
}

