"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useMemo, useState } from "react";

type FormState = {
  name: string;
  email: string;
  company: string;
  teamSize: string;
  useCase: string;
  date: string;
  time: string;
  meetingLink: string;
};

const initialFormState: FormState = {
  name: "",
  email: "",
  company: "",
  teamSize: "",
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

  // Generate a few upcoming days + some time slots to pick from
  const upcomingDays = useMemo(() => {
    const today = new Date();
    return Array.from({ length: 5 }).map((_, index) => {
      const d = new Date(today);
      d.setDate(today.getDate() + index);
      const iso = d.toISOString().slice(0, 10);
      const label = d.toLocaleDateString(undefined, {
        weekday: "short",
        month: "short",
        day: "numeric",
      });
      return { iso, label };
    });
  }, []);

  const timeSlots = [
    "9:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "2:00 PM",
    "2:30 PM",
    "3:00 PM",
    "4:00 PM",
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!form.name || !form.email || !form.company || !form.date || !form.time) {
      setError(
        "Please fill in your name, work email, company, and select a date and time for the demo."
      );
      return;
    }

    try {
      setSubmitting(true);

      // In a real app this would POST to an API route or CRM webhook.
      // For now we simulate a short network request and show success.
      await new Promise((resolve) => setTimeout(resolve, 900));

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
                    htmlFor="teamSize"
                    className="text-xs font-medium text-white/70"
                  >
                    Team size
                  </label>
                  <select
                    id="teamSize"
                    name="teamSize"
                    value={form.teamSize}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-white/15 bg-slate-900/60 px-3 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-400/70 focus:border-emerald-400/70"
                  >
                    <option value="">Select</option>
                    <option value="1-10">1-10</option>
                    <option value="11-50">11-50</option>
                    <option value="51-200">51-200</option>
                    <option value="201-1000">201-1000</option>
                    <option value="1000+">1000+</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />

            {/* Date & Time */}
            <div className="space-y-4">
              <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-white/60">
                Date &amp; Time
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
                    value={form.date}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-white/15 bg-slate-900/60 px-3 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-400/70 focus:border-emerald-400/70"
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
                    value={form.time}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-white/15 bg-slate-900/60 px-3 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-400/70 focus:border-emerald-400/70"
                  />
                </div>
              </div>

              {/* Inline upcoming days & time slots */}
              <div className="grid gap-4 md:grid-cols-[1.1fr_1fr]">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-white/50 mb-2">
                    Upcoming days
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {upcomingDays.map((day) => (
                      <button
                        key={day.iso}
                        type="button"
                        onClick={() =>
                          setForm((prev) => ({
                            ...prev,
                            date: day.iso,
                          }))
                        }
                        className={`rounded-xl border px-3 py-2 text-left text-xs transition ${
                          form.date === day.iso
                            ? "border-emerald-400 bg-emerald-500/15 text-emerald-100 shadow-[0_0_18px_rgba(16,185,129,0.35)]"
                            : "border-white/10 bg-slate-950/60 text-white/75 hover:border-emerald-400/60 hover:bg-emerald-500/10"
                        }`}
                      >
                        {day.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-white/50 mb-2">
                    Time (your timezone)
                  </p>
                  <div className="grid grid-cols-2 gap-2 max-h-[180px] overflow-y-auto pr-1">
                    {timeSlots.map((slot) => (
                      <button
                        key={slot}
                        type="button"
                        onClick={() =>
                          setForm((prev) => ({
                            ...prev,
                            time: slot,
                          }))
                        }
                        className={`rounded-lg px-2.5 py-1.5 text-xs transition border ${
                          form.time === slot
                            ? "border-emerald-400 bg-emerald-500/20 text-emerald-50"
                            : "border-white/10 bg-slate-950/80 text-white/80 hover:border-emerald-400/60 hover:bg-emerald-500/10"
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <p className="mt-2 text-[11px] text-white/55">
                Once you submit the form, we&apos;ll email a calendar invitation to your
                work address with the confirmed slot and video meeting link.
              </p>
            </div>

            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />

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

