"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import SectionHeader from "./SectionHeader";
import { getPublicAssetUrl } from "@/lib/utlis";

export default function TestimonialsInnerPages() {
  const AUTO_SCROLL_INTERVAL = 5000; // 5 seconds
  const DRAG_THRESHOLD = 50; // Minimum pixels to drag before changing page

  const [currentPage, setCurrentPage] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(2);
  const splashGradients = [
    "from-green-400 to-emerald-500",
    "from-purple-500 to-fuchsia-500",
    "from-orange-400 to-amber-500",
  ];

  const testimonials = [
    {
      quote:
        "VIRA has completely transformed how we handle deployments. What used to take days now happens in minutes with zero errors.",
      author: "James Sullivan",
      role: "CTO at TechCorp",
      avatar: "/client-pics/client (1).png",
    },
    {
      quote:
        "Enterprise-grade security scanning at startup prices? DevForge is the real deal. We sleep better knowing our infra is secure.",
      author: "Michael Chen",
      role: "CEO at InnovateCo",
      avatar: "/client-pics/client (2).png",
    },
    {
      quote:
        "The IAN dashboard is the single pane of glass we've been dreaming about for years. No more jumping between five different Azure portals.",
      author: "Sarah Johnson",
      role: "DevOps Lead at BuildFast",
      avatar: "/client-pics/client (3).png",
    },
    {
      quote:
        "We cut our monthly Azure bill by 32% in the first 30 days just by following DevForge's intelligent optimization suggestions.",
      author: "Alex Patel",
      role: "Co-founder at CloudScale",
      avatar: "/client-pics/client (4).png",
    },
    {
      quote:
        "The automation recipes in VIRA are ridiculously powerful. We went from 40+ manual steps to fully automated pipelines in under a week.",
      author: "Emma Rodriguez",
      role: "Head of Platform Engineering at ScaleUp",
      avatar: "/client-pics/client (2).png",
    },
    {
      quote:
        "Finally, someone made cloud cost management feel simple and even a little fun. The visualizations in DevForge are next level.",
      author: "David Kim",
      role: "Finance & Cloud Lead at NextGen Labs",
      avatar: "/client-pics/client (1).png",
    },
    {
      quote:
        "We used to dread security reviews. Now we run continuous compliance scans with DevForge and actually stay ahead of auditors.",
      author: "Priya Sharma",
      role: "Security Architect at SecurePeak",
      avatar: "/client-pics/client (2).png",
    },
    {
      quote:
        "The time we've saved across the entire engineering organization is insane. VIRA + DevForge is the productivity multiplier we didn't know we needed.",
      author: "Marcus Williams",
      role: "VP Engineering at Velocity Systems",
      avatar: "/client-pics/client (1).png",
    },
    {
      quote:
        "We used to dread security reviews. Now we run continuous compliance scans with DevForge and actually stay ahead of auditors.",
      author: "Priya Sharma",
      role: "Security Architect at SecurePeak",
      avatar: "/client-pics/client (2).png",
    },
    {
      quote:
        "The time we've saved across the entire engineering organization is insane. VIRA + DevForge is the productivity multiplier we didn't know we needed.",
      author: "Marcus Williams",
      role: "VP Engineering at Velocity Systems",
      avatar: "/client-pics/client (2).png",
    },
    {
      quote:
        "Finally, someone made cloud cost management feel simple and even a little fun. The visualizations in DevForge are next level.",
      author: "David Kim",
      role: "Finance & Cloud Lead at NextGen Labs",
      avatar: "/client-pics/client (2).png",
    },
    {
      quote:
        "We used to dread security reviews. Now we run continuous compliance scans with DevForge and actually stay ahead of auditors.",
      author: "Priya Sharma",
      role: "Security Architect at SecurePeak",
      avatar: "/client-pics/client (1).png",
    },
    {
      quote:
        "The time we've saved across the entire engineering organization is insane. VIRA + DevForge is the productivity multiplier we didn't know we needed.",
      author: "Marcus Williams",
      role: "VP Engineering at Velocity Systems",
      avatar: "/client-pics/client (2).png",
    },
    {
      quote:
        "We used to dread security reviews. Now we run continuous compliance scans with DevForge and actually stay ahead of auditors.",
      author: "Priya Sharma",
      role: "Security Architect at SecurePeak",
      avatar: "/client-pics/client (3).png",
    },
    {
      quote:
        "The time we've saved across the entire engineering organization is insane. VIRA + DevForge is the productivity multiplier we didn't know we needed.",
      author: "Marcus Williams",
      role: "VP Engineering at Velocity Systems",
      avatar: "/client-pics/client (1).png",
    },
  ];

  const totalPages = Math.ceil(testimonials.length / cardsPerPage);
  const safeCurrentPage =
    totalPages > 0 ? Math.min(currentPage, totalPages - 1) : 0;
  const startIndex = safeCurrentPage * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const displayedTestimonials = testimonials.slice(startIndex, endIndex);

  // Responsive cards-per-page: 2 on mobile, 2 below xl, 8 on xl and above
  useEffect(() => {
    if (typeof window === "undefined") return;

    const updateCardsPerPage = () => {
      const width = window.innerWidth;

      if (width < 768) {
        // below md
        setCardsPerPage(2);
      } else if (width < 1280) {
        // md to below xl
        setCardsPerPage(2);
      } else {
        // xl and above
        setCardsPerPage(8);
      }
    };

    updateCardsPerPage();
    window.addEventListener("resize", updateCardsPerPage);

    return () => {
      window.removeEventListener("resize", updateCardsPerPage);
    };
  }, []);

  // Auto-scroll functionality (pauses while dragging)
  useEffect(() => {
    if (isDragging) return;

    const interval = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, AUTO_SCROLL_INTERVAL);

    return () => clearInterval(interval);
  }, [totalPages, isDragging]);

  // Drag handlers
  const handleDragStart = (clientX: number) => {
    setIsDragging(true);
    setDragStart(clientX);
    setDragOffset(0);
  };

  const handleDragMove = (clientX: number) => {
    if (!isDragging) return;
    const offset = clientX - dragStart;
    setDragOffset(offset);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;

    if (Math.abs(dragOffset) > DRAG_THRESHOLD) {
      if (dragOffset > 0 && currentPage > 0) {
        // Dragged right - go to previous page
        setCurrentPage((prev) => prev - 1);
      } else if (dragOffset < 0 && currentPage < totalPages - 1) {
        // Dragged left - go to next page
        setCurrentPage((prev) => prev + 1);
      }
    }

    setIsDragging(false);
    setDragOffset(0);
  };

  // Mouse events
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    handleDragStart(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    handleDragMove(e.clientX);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    handleDragEnd();
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      handleDragEnd();
    }
  };

  // Touch events
  const handleTouchStart = (e: React.TouchEvent) => {
    handleDragStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleDragMove(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    handleDragEnd();
  };

  const getSplashGradient = (index: number) =>
    splashGradients[index % splashGradients.length];

  return (
    <section className="relative py-8  md:py-12 lg:py-16 lg:py-20  overflow-hidden">
      {/* Top Background Image – Top Half Only */}


      {/* Content */}
      <div className="relative custom-container mx-auto px-4 sm:px-0">
        <SectionHeader
          badge="Testimonials"
          title="What Our Customers Say"
          description="Trusted by IT professionals and security teams at companies of all sizes."
        />

        <div
          className="relative select-none"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchMove={(e) => {
            if (isDragging) {
              e.preventDefault();
            }
            handleTouchMove(e);
          }}
          onTouchEnd={handleTouchEnd}
          style={{
            cursor: isDragging ? "grabbing" : "grab",
            transform: `translateX(${dragOffset}px)`,
            transition: isDragging ? "none" : "transform 0.3s ease-out",
            userSelect: "none",
            WebkitUserSelect: "none",
          }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-4  ">
            {displayedTestimonials.map((t, i) => {
              const globalIndex = startIndex + i;
              return (
                <div
                  key={globalIndex}
                  className="
                  relative
                  p-5 sm:p-6 lg:p-8
                  rounded-2xl
                  bg-[#FFFFFF08]
                  border border-white/5
                  flex flex-col
                  overflow-hidden
                  shadow-[inset_0_-1px_2px_rgba(255,255,255,0.05),inset_0_1px_1px_rgba(255,255,255,0.20)]
                "
                >
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <Image
                      src={getPublicAssetUrl("/card-overlay2.png")}
                      alt="Testimonial background"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/10" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 flex flex-col gap-4 h-full">
                    {/* Quote */}
                    <p
                      className="
                    text-white
                    text-sm sm:text-base
                    leading-relaxed sm:leading-snug
                    font-light
                    flex-grow
                  "
                    >
                      “{t.quote}”
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-3 flex-wrap">
                      <div
                        className="
                      w-9 h-9 sm:w-10 sm:h-10
                      rounded-full
                      overflow-hidden
                      bg-gradient-to-br from-blue-500 to-purple-500
                      flex items-center justify-center
                      shrink-0
                    "
                      >
                        <Image
                          src={getPublicAssetUrl(t.avatar)}
                          alt={t.author}
                          width={40}
                          height={40}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="w-px h-8 bg-[#FFFFFF33] hidden sm:block" />

                      <div>
                        <h4 className="text-sm font-medium text-[#FFFFFFCC]">
                          {t.author}
                        </h4>
                        <p className="text-xs text-[#FFFFFF66]">{t.role}</p>
                      </div>
                    </div>
                  </div>

                  {/* Glow */}
                  <span
                    className={`
                    absolute
                    -bottom-24 -left-24
                    sm:-bottom-20 sm:-left-20
                    w-[90px] h-[90px]
                    sm:w-[125px] sm:h-[125px]
                    rounded-full
                    opacity-60
                    mix-blend-screen
                    blur-[24px]
                    bg-gradient-to-r
                    ${getSplashGradient(globalIndex)}
                  `}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Pagination Dots */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 2xl:mt-16 mt-8">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={`testimonial-page-${index}`}
                onClick={() => setCurrentPage(index)}
                className={`transition-all duration-300 rounded-full ${
                  safeCurrentPage === index
                    ? "w-8 h-2 bg-white"
                    : "w-2 h-2 bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
