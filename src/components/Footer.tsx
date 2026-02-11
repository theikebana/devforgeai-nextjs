"use client";
import Image from "next/image";
import { Github, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    { icon: Github, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Linkedin, href: "#" },
  ];

  const navigationLinks = [
    { label: "Features", id: "products" },
    { label: "Services", id: "services" },

    { label: "Pricing", id: "pricing" },
  ];

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
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

  const importantLinks = [
    { label: "VIRA (Virtual Infra Risk Advisor)", tabId: "vira" },
    { label: "IAN (Infrastructure Analysis Navigator)", tabId: "ian" },
  ];
  const legalLinks = [
    "Privacy Policy",
    "Terms of Service",
    "Cookie Policy",
    "Data Processing",
  ];

  return (
    <footer className="bg-[#02040a] border-t border-white/5 pt-8 sm:pt-12 pb-7">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:custom-container">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="flex flex-col justify-between gap-6">
            <div>
              <span className="flex items-center mb-4">
                <Image
                  src="/site-logo.svg"
                  alt="DevForge Logo"
                  width={120}
                  height={32}
                  className="h-7 sm:h-8 w-auto object-contain"
                />
              </span>

              <p className="text-[#FFFFFF99] font-light text-sm sm:text-base">
                Your trusted partner in cloud visibility and security.
              </p>
            </div>

            <div className="flex gap-1">
              {socialLinks.map(({ icon: Icon, href }, idx) => (
                <a
                  key={idx}
                  href={href}
                  className="
                  group
                  inline-flex items-center justify-center
                  w-9 h-9 sm:w-10 sm:h-10
                  rounded-md
                  bg-white/0 hover:bg-white/5
                  text-white
                  transition-colors duration-200 ease-out
                "
                >
                  <Icon
                    className="
                    w-4 h-4 sm:w-5 sm:h-5
                    transition-colors duration-200 ease-out
                    group-hover:text-blue-500
                  "
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation / Important / Legal (Right aligned block) */}
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 lg:gap-16 xl:gap-20 lg:justify-end">
            {/* Navigation */}
            <div className="min-w-0">
              <h4 className="text-white font-medium mb-4 text-sm sm:text-base">Navigation</h4>
              <ul className="space-y-3 sm:space-y-4 text-sm text-[#FFFFFF99]">
                {navigationLinks.map((link, idx) => (
                  <li key={idx}>
                    <button
                      onClick={() => handleScroll(link.id)}
                      className="hover:text-white transition-colors cursor-pointer text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Important Links */}
            <div className="min-w-0">
              <h4 className="text-white font-medium mb-4 text-sm sm:text-base">Important Links</h4>
              <ul className="space-y-3 sm:space-y-4 text-sm text-[#FFFFFF99]">
                {importantLinks.map((link, idx) => (
                  <li key={idx}>
                    <button
                      onClick={() => handleTabNavigation(link.tabId)}
                      className="hover:text-white transition-colors cursor-pointer text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div className="min-w-0">
              <h4 className="text-white font-medium mb-4 text-sm sm:text-base">Legal</h4>
              <ul className="space-y-3 sm:space-y-4 text-sm text-[#FFFFFF99]">
                {legalLinks.map((link, idx) => (
                  <li key={idx}>
                    <a href="#" className="hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-[#FFFFFF14] h-[1px] my-6 sm:my-8" />
        {/* Footer Bottom */}
        <div className="flex justify-center">
          <p className="text-[#FFFFFF99] text-center text-xs sm:text-sm">
            © 2026 DevForge.ai. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
