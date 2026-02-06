"use client";

import {
  Menu,
  X,
  ShieldCheck,
  ChevronDown,
  Rocket,
  Zap,
} from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

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
  ];

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false); // close mobile menu
      setIsProductsOpen(false); // close products submenu
    }
  };

  const handleTabNavigation = (tabId: string) => {
    // Scroll to products section first
    handleScroll("products");
    
    // Dispatch custom event to change tab
    setTimeout(() => {
      globalThis.dispatchEvent(
        new CustomEvent("changeProductTab", { detail: { tabId } })
      );
    }, 500); // Small delay to ensure scroll completes
  };

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-[#9C9D9F1A] backdrop-blur-xl bg-[#07090E]/80">
      <div className="mx-auto custom-container px-4 sm:px-6 lg:px-0">
        <div className="flex items-center justify-between py-4 sm:py-5">
          {/* Logo */}
          <button
            onClick={() => handleScroll("hero")}
            className="flex items-center justify-start cursor-pointer hover:opacity-80 transition-opacity"
            aria-label="Scroll to top"
          >
            <img
              src="/site-logo.svg"
              alt="DevForge Logo"
              className="w-auto h-6 sm:h-8 object-contain"
            />
          </button>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <button
              className="nav-link text-[#9C9D9F] text-sm hover:text-white cursor-pointer"
              onClick={() => handleScroll("products")}
            >
              Features
            </button>

            {/* Products Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-[#9C9D9F] cursor-pointer text-sm hover:text-white">
                Products
                <ChevronDown
                  size={16}
                  className="mt-[1px] transition-transform duration-300 ease-out group-hover:rotate-180"
                />
              </button>

              {/* hover bridge */}
              <span className="absolute top-full left-0 h-4 w-full" />

              <div
                className="
      absolute left-0 top-full mt-4 w-[380px] xl:w-[420px]
      rounded-xl border border-[#9C9D9F1A] bg-[#0B0F1A] shadow-xl
      opacity-0 translate-y-2 scale-[0.98]
      pointer-events-none
      transform-gpu
      transition-[opacity,transform] duration-300 ease-out
      group-hover:opacity-100
      group-hover:translate-y-0
      group-hover:scale-100
      group-hover:pointer-events-auto
    "
              >
                <div className="p-2 flex flex-col gap-2">
                  {products.map((item) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={item.href}
                        onClick={() => handleTabNavigation(item.href)}
                        className="group/item flex items-start gap-4 cursor-pointer rounded-lg p-2 text-left hover:bg-white/5 transition w-full"
                      >
                        <div className="flex h-10 w-12 items-center justify-center rounded-md bg-[#FFFFFF1A] border border-[#FFFFFF33] text-[#FFFFFFB2]">
                          <Icon
                            size={20}
                            className="
                  transform-gpu rotate-0
                  transition-transform duration-300 ease-out
                  group-hover/item:rotate-12
                  text-[#FFFFFFB2] group-hover/item:text-blue-500
                "
                          />
                        </div>

                        <div>
                          <p className="text-white text-sm">{item.title}</p>
                          <p className="text-sm text-[#9C9D9F]">
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
              className="nav-link text-[#9C9D9F] text-sm hover:text-white cursor-pointer"
              onClick={() => handleScroll("why")}
            >
              Why DevForge?
            </button>
            <button
              className="nav-link text-[#9C9D9F] text-sm hover:text-white cursor-pointer"
              onClick={() => handleScroll("services")}
            >
              Services
            </button>

            <button
              className="nav-link text-[#9C9D9F] text-sm hover:text-white cursor-pointer"
              onClick={() => handleScroll("pricing")}
            >
              Pricing
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-[#9C9D9F] hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-x-0 top-[73px] sm:top-[81px] bottom-0 bg-[#07090E]/95 backdrop-blur-xl border-t border-[#9C9D9F1A] transform transition-transform duration-300 ease-in-out z-40 h-[calc(100vh-73px)] sm:h-[calc(100vh-81px)] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-full px-4 bg-[#07090E] border border-[#9C9D9F1A] sm:px-6 py-6 space-y-2 overflow-y-auto">
          <button
            className="block w-full text-left px-4 py-4 rounded-lg text-[#9C9D9F] hover:text-white hover:bg-white/5 transition-colors text-sm font-medium"
            onClick={() => handleScroll("products")}
          >
            Features
          </button>

          {/* Products Dropdown in Mobile */}
          <div className="space-y-2">
            <button
              className="flex items-center justify-between w-full text-left px-4 py-4 rounded-lg text-[#9C9D9F] hover:text-white hover:bg-white/5 transition-colors text-sm font-medium"
              onClick={() => setIsProductsOpen(!isProductsOpen)}
            >
              <span>Products</span>
              <ChevronDown
                size={18}
                className={`transition-transform duration-300 ${
                  isProductsOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isProductsOpen && (
              <div className="pl-4 space-y-2 mt-2">
                {products.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.href}
                      onClick={() => handleTabNavigation(item.href)}
                      className="flex items-start gap-3 w-full text-left px-4 py-4 rounded-lg text-[#9C9D9F] hover:text-white hover:bg-white/5 transition-colors"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[#FFFFFF1A] border border-[#FFFFFF33] text-[#FFFFFFB2] flex-shrink-0">
                        <Icon size={18} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-white text-sm font-medium mb-1">
                          {item.title}
                        </p>
                        <p className="text-xs text-[#9C9D9F] leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          <button
            className="block w-full text-left px-4 py-4 rounded-lg text-[#9C9D9F] hover:text-white hover:bg-white/5 transition-colors text-sm font-medium"
            onClick={() => handleScroll("why")}
          >
            Why DevForge?
          </button>
          <button
            className="block w-full text-left px-4 py-4 rounded-lg text-[#9C9D9F] hover:text-white hover:bg-white/5 transition-colors text-sm font-medium"
            onClick={() => handleScroll("services")}
          >
            Services
          </button>
        
          <button
            className="block w-full text-left px-4 py-4 rounded-lg text-[#9C9D9F] hover:text-white hover:bg-white/5 transition-colors text-sm font-medium"
            onClick={() => handleScroll("pricing")}
          >
            Pricing
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 top-[73px] sm:top-[81px] bg-black/40 backdrop-blur-sm z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </nav>
  );
}
