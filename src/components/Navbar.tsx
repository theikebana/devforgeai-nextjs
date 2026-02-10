"use client";

import {
  Menu,
  X,
  ShieldCheck,
  ChevronDown,
  Rocket,
  Zap,
  Search,
  MessageCircle,
  Users,
  Layers,
  FileText,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const products = [
    {
      title: "REX",
      description:
        "Rex auto-reviews code, finds risks, and secures CI/CD before production.",
      icon: Rocket,
      href: "rex",
    },
    {
      title: "VIRA",
      description:
        "Cloud VIRA automates Azure security with continuous, enterprise-grade risk scanning.",
      icon: ShieldCheck,
      href: "vira",
    },
    {
      title: "IAN",
      description:
        "Manage all Azure services from one dashboard with real-time insights.",
      icon: Zap,
      href: "ian",
    },
    {
      title: "MoogleMind",
      description:
        "Unified enterprise search, custom agents, and secure self-hosting.",
      icon: Search,
      href: "mooglemind",
    },
    {
      title: "Review Attendant",
      description:
        "Centralizes reviews and automates responses with sentiment analysis.",
      icon: MessageCircle,
      href: "review-attendant",
    },
    {
      title: "AttendAI",
      description:
        "Smart face-recognition attendance with IP camera support and reporting.",
      icon: Users,
      href: "attendai",
    },
    {
      title: "Elvis",
      description:
        "Job leads management & analytics platform for sales teams.",
      icon: Layers,
      href: "elvis",
    },
    {
      title: "Alluvium",
      description:
        "AI-enabled data extraction from invoices, contracts, and digital documents.",
      icon: FileText,
      href: "alluvium",
    },
    {
      title: "ThinkDocs",
      description:
        "AI-based document management with semantic search and auto-tagging.",
      icon: FileText,
      href: "think-docs",
    },
    {
      title: "Demo Agent (STAGE)",
      description:
        "Scripted demo automation that turns portals into narrated product tours.",
      icon: Layers,
      href: "demo-agent",
    },
  ];

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsOpen(false);
    setIsProductsOpen(false);
  };

  const handleTabNavigation = (tabId: string) => {
    handleScroll("products");
    setTimeout(() => {
      globalThis.dispatchEvent(
        new CustomEvent("changeProductTab", { detail: { tabId } })
      );
    }, 400);
  };

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 flex justify-center pointer-events-none">
      {/* Pill Navbar */}
      <div
        className={`
          pointer-events-auto
          backdrop-blur-xl
          border border-[#9C9D9F1A]
          shadow-lg
          rounded-full
          bg-[#07090E]/80
          transition-[width,padding,background-color] duration-300 ease-out
          ${
            scrolled
              ? "w-[min(80vw,80rem)] px-5 py-4 bg-[#07090E]/90"
              : "w-[min(90vw,90rem)] px-6 py-4 bg-[#07090E]/70"
          }
        `}
      >
        <div className="flex items-center justify-between gap-6">
          {/* Logo */}
          <button
  onClick={() => router.push("/")}
  className="flex items-center hover:opacity-80 transition"
  aria-label="Go to homepage"
>
  <img
    src="/site-logo.svg"
    alt="DevForge"
    className="h-7 w-auto"
  />
</button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {/* Products Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-sm text-[#9C9D9F] hover:text-white">
                Products
                <ChevronDown
                  size={14}
                  className="transition-transform duration-300 group-hover:rotate-180"
                />
              </button>

              {/* hover bridge */}
              <span className="absolute top-full left-0 h-4 w-full" />

              <div
                className="
                  absolute left-0 top-full mt-4 w-[420px]
                  rounded-xl border border-[#9C9D9F1A]
                  bg-[#0B0F1A] shadow-xl
                  opacity-0 translate-y-2 scale-[0.98]
                  pointer-events-none
                  transition-all duration-300
                  group-hover:opacity-100
                  group-hover:translate-y-0
                  group-hover:scale-100
                  group-hover:pointer-events-auto
                "
              >
                <div className="p-2 space-y-2">
                  {products.map((item) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={item.href}
                        onClick={() => {
                          setIsProductsOpen(false);
                          setIsOpen(false);
                          router.push(`/${item.href}`);
                        }}
                        className="flex gap-4 p-3 rounded-lg text-left hover:bg-white/5 transition w-full cursor-pointer"
                      >
                        <div className="h-10 w-12 flex items-center justify-center rounded-md bg-white/10 border border-white/20">
                          <Icon size={18} />
                        </div>
                        <div>
                          <p className="text-sm text-white">{item.title}</p>
                          <p className="text-xs text-[#9C9D9F]">
                            {item.description}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Center links */}
            <button
              onClick={() => router.push("/pricing")}
              className="text-sm text-[#9C9D9F] hover:text-white transition"
            >
              Pricing
            </button>

            <div className="flex-1" />

            {/* Book a demo pill */}
            <button
              onClick={() => router.push("/book-demo")}
              className="inline-flex items-center rounded-full bg-emerald-500 px-5 py-2 text-sm font-medium text-black shadow-[0_0_24px_rgba(16,185,129,0.45)] hover:bg-emerald-400 transition"
            >
              Book a demo
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-[#9C9D9F] hover:text-white transition"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
    </nav>
  );
}
