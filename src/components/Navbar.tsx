"use client";

import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { products as productConfigs } from "@/config/products";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const products = productConfigs.filter((p) => p.showInNavbar);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Lock body scroll on mobile menu */
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 lg:top-4 left-0 right-0 z-50 flex justify-center pointer-events-none">
        <div
          className={`
            pointer-events-auto
            backdrop-blur-xl
            border border-white/10
            bg-black/12 backdrop-blur-sm sm:bg-[#07090E]/90
            transition-all duration-300 ease-out

            /* Mobile & Tablet */
            w-full
            rounded-none
            px-4 py-3

            /* Desktop */
            lg:rounded-full
            lg:px-6 lg:py-4
            ${scrolled
              ? "lg:w-[min(88vw,80rem)]"
              : "lg:w-[min(92vw,90rem)]"
            }
          `}
        >
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <button
              onClick={() => router.push("/")}
              className="flex items-center hover:opacity-80 transition"
              aria-label="Go to homepage"
            >
              <Image
                src="/site-logo.svg"
                alt="DevForge"
                width={120}
                height={28}
                className="h-6 lg:h-7 w-auto"
              />
            </button>

            {/* DESKTOP NAV */}
            <div className="hidden lg:flex items-center gap-6">
              {/* Products dropdown */}
              <div className="relative group">
                <button className="flex items-center gap-1 text-sm text-white/70 hover:text-white transition">
                  Products
                  <ChevronDown
                    size={14}
                    className="transition-transform duration-300 group-hover:rotate-180"
                  />
                </button>

                <div
                  className="
    absolute left-0 top-full pt-4 w-[420px]
    z-50
    rounded-xl border border-white/10
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
                          key={item.id}
                          onClick={() => router.push(item.path)}
                          className="flex gap-4 p-3 rounded-lg
                            text-left hover:bg-white/5 transition w-full"
                        >
                          <div className="h-10 w-12 flex items-center justify-center rounded-md bg-white/10">
                            <Icon size={18} />
                          </div>
                          <div>
                            <p className="text-sm text-white">{item.title}</p>
                            <p className="text-xs text-white/60">
                              {item.description}
                            </p>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              <button
                onClick={() => router.push("/pricing")}
                className="text-sm text-white/70 hover:text-white transition"
              >
                Pricing
              </button>

              <button
                onClick={() => router.push("/book-demo")}
                className="ml-4 inline-flex items-center rounded-full
                  bg-emerald-500 px-5 py-2 text-sm font-medium text-black
                  hover:bg-emerald-400 transition"
              >
                Book a demo
              </button>
            </div>

            {/* MOBILE TOGGLE */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-white/80 hover:text-white transition"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE / TABLET MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur lg:hidden"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ y: -24 }}
              animate={{ y: 0 }}
              exit={{ y: -24 }}
              onClick={(e) => e.stopPropagation()}
              className="mx-auto mt-16 w-[92%] max-w-md
                rounded-xl bg-[#07090E]
                border border-white/10
                p-4 space-y-4"
            >
              {/* Products accordion */}
              <button
                onClick={() => setIsProductsOpen(!isProductsOpen)}
                className="flex w-full items-center justify-between
                  text-sm text-white"
              >
                Products
                <ChevronDown
                  size={16}
                  className={`transition ${isProductsOpen ? "rotate-180" : ""
                    }`}
                />
              </button>

              {isProductsOpen && (
                <div className="space-y-2 pt-2">
                  {products.map((item) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={item.id}
                        onClick={() => {
                          router.push(item.path);
                          setIsOpen(false);
                        }}
                        className="flex gap-3 w-full rounded-lg
                          bg-white/5 p-3 text-left"
                      >
                        <Icon size={16} />
                        <span className="text-sm text-white">
                          {item.title}
                        </span>
                      </button>
                    );
                  })}
                </div>
              )}

              <button
                onClick={() => {
                  router.push("/pricing");
                  setIsOpen(false);
                }}
                className="w-full rounded-lg bg-white/5
                  p-3 text-sm text-white"
              >
                Pricing
              </button>

              <button
                onClick={() => {
                  router.push("/book-demo");
                  setIsOpen(false);
                }}
                className="w-full rounded-lg bg-emerald-500
                  p-3 text-sm font-medium text-black"
              >
                Book a demo
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
