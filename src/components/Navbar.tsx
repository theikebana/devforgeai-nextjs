"use client";

import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { products as productConfigs } from "@/config/products";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDesktopProductsOpen, setIsDesktopProductsOpen] = useState(false);

  const desktopProductsRef = useRef<HTMLDivElement | null>(null);

  const products = productConfigs.filter((p) => p.showInNavbar);

  /* Scroll detection */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Lock body scroll on mobile */
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

  /* Close desktop products dropdown on outside click */
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isDesktopProductsOpen &&
        desktopProductsRef.current &&
        !desktopProductsRef.current.contains(event.target as Node)
      ) {
        setIsDesktopProductsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDesktopProductsOpen]);

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center">
        {/* Top spacing when scrolled */}
        <div
          className={`w-full transition-all duration-500 ease-out ${scrolled ? "lg:pt-4" : ""
            }`}
        >
          {/* Width Shrink Wrapper */}
          <div
            className={`mx-auto transition-all duration-500 ease-out ${scrolled ? "lg:max-w-7xl border border-[#9C9D9F]/10 rounded-full" : "lg:max-w-full border border-[#9C9D9F]/10 rounded-none"
              }`}
          >
            {/* Glass Layer */}
            <div
              className={`backdrop-blur-xl  
              transition-all duration-500 ease-out
              ${scrolled
                  ? "lg:rounded-full "
                  : ""
                }`}
            >
              {/* CONTENT */}
              <div className="container mx-auto px-4 lg:px-6 py-2">
                <div className="flex items-center justify-between gap-4">
                  {/* Logo */}
                  <button
                    onClick={() => router.push("/")}
                    className="flex items-center hover:opacity-80 transition cursor-pointer"
                  >
                    <Image
                      src="/site-logo.svg"
                      alt="DevForge"
                      width={180}
                      height={48}
                      className="h-6 lg:h-10 w-auto"
                    />
                  </button>

                  {/* ================= DESKTOP NAV ================= */}
                  <div className="hidden lg:flex items-center gap-6">
                    {/* Products Dropdown */}
                    <div
                      ref={desktopProductsRef}
                      className="relative"
                      onMouseEnter={() => setIsDesktopProductsOpen(true)}
                      onMouseLeave={() => setIsDesktopProductsOpen(false)}
                    >
                      <button className="flex items-center gap-1 text-sm text-white/70 hover:text-white transition cursor-pointer pb-4 top-2
                       relative">
                        Products
                        <ChevronDown
                          size={14}
                          className={`transition-transform duration-300 ${isDesktopProductsOpen ? "rotate-180" : ""
                            }`}
                        />
                      </button>

                      {/* Glass card dropdown, centered under navbar */}
                      {/* Glass card dropdown */}
                      <div
                        className={`
    absolute right-0 top-full
    z-50
    rounded-xl
    border border-white/12
    bg-[#050816]/95
    backdrop-blur-[60px]
    backdrop-saturate-150
    shadow-2xl shadow-black/40
    transition-all duration-300
    ${isDesktopProductsOpen
                            ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
                            : "opacity-0 translate-y-2 scale-[0.98] pointer-events-none"
                          }
  `}
                      >

                        <div className="p-2">
                          <div className="flex items-center justify-center gap-2">
                            {products.map((item) => {
                              const Icon = item.icon;
                              return (
                                <button
                                  key={item.id}
                                  onClick={() => {
                                    router.push(item.path);
                                    setIsDesktopProductsOpen(false);
                                  }}
                                  className="
              flex flex-col items-center gap-1.5
              px-3 py-2 rounded-lg
              hover:bg-white/10
              transition-all duration-200 cursor-pointer
              glass-card
              hover:scale-110
              group 
            "
                                >
                                  <div className="h-9 w-9 flex items-center justify-center rounded-md bg-white/10 group-hover:text-[#0078D4] glass-card">
                                    <Icon size={16} />
                                  </div>
                                  <span className="text-[11px] font-medium text-white/80 text-center whitespace-nowrap">
                                    {item.title}
                                  </span>
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      </div>

                    </div>

                    {/* <button
                      onClick={() => router.push("/pricing")}
                      className="text-sm text-white/70 hover:text-white transition"
                    >
                      Pricing
                    </button> */}

                    <button
                      onClick={() => router.push("/book-demo")}
                      className="ml-4  bg-[#0078D4] text-white  transition-all duration-300 cursor-pointer  hover:scale-105 px-5 py-2 text-sm rounded-full"
                    >
                      Book a demo
                    </button>
                  </div>

                  {/* ================= MOBILE TOGGLE ================= */}
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="lg:hidden p-2 text-white/80 hover:text-white transition"
                  >
                    {isOpen ? <X size={20} /> : <Menu size={20} />}
                  </button>
                </div>
              </div>
              {/* END CONTENT */}
            </div>
          </div>
        </div>
      </nav>

      {/* ================= MOBILE MENU ================= */}
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
              className="mx-auto mt-20 w-[92%] max-w-md
                rounded-xl bg-[#07090E]
                border border-white/10
                p-4 space-y-4"
            >
              <button
                onClick={() => setIsProductsOpen(!isProductsOpen)}
                className="flex w-full items-center justify-between text-sm text-white"
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
