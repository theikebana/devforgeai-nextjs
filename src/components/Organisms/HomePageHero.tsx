"use client";

import { motion } from "framer-motion";
import { FileText, Layers, MessageCircle, Bot, Rocket, Search, ShieldCheck, Users, Zap } from "lucide-react";
import HeroCard from "@/components/molecule/HeroCard";
import Image from "next/image";
// import HeroStatSection from "./HeroStatSection";

export default function HomePageHero() {
    return (
        <section className="relative h-screen overflow-hidden rounded-b-4xl  bg-gradient-to-b from-[#020617] via-[#020617] to-[#030712] ">
            {/* Soft glow bottom accent */}
            {/* <div className="pointer-events-none absolute inset-x-0 bottom-[-40%] h-[60%] bg-[radial-gradient(circle_at_center,_#0EA5E9_0,_transparent_55%)] opacity-40 blur-3xl" /> */}

            {/* Floating product cards */}

            {/* Left Image */}
            <div className="absolute top-0 left-0 pointer-events-none ">
                <Image
                    src="/herodecorleft.png"
                    alt="Hero Background Left"
                    width={1000}
                    height={1000}
                />
            </div>

            {/* Right Image */}
            <div className="absolute top-0 right-0 pointer-events-none">
                <Image
                    src="/herodecorright.png"
                    alt="Hero Background Right"
                    width={1000}
                    height={1000}
                />
            </div>

            {/* <div className="absolute bottom-0 left-0 pointer-events-none bg-transparent">
  <Image
    src="/herobottom.png"
    alt="Hero Background Right"
    width={1000}
    height={1000}
  />
</div> */}

            <div className="absolute 
                top-1/2 
                left-1/2 
                -translate-x-1/2 
                -translate-y-1/2
                w-[637px] 
                h-[1159px] 
                bg-[#0360A7]/60 
                blur-[190px] 
                rounded-full
                bottom-96
                pointer-events-none">
            </div>



            <div className="relative z-1 flex h-full items-center justify-between container mx-auto">
                <div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6   w-fit">

                        {/* First Column */}
                        <div className="col-start-1">
                            <HeroCard
                                icon={Rocket}
                                title="REX"
                                description="Rex auto-reviews code, finds risks, and secures CI/CD before production."
                                className="relative"
                            />
                        </div>

                        {/* Second Column (Empty) */}
                        <div />

                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-0 gap-y-6  w-fit">
                        <div />
                        {/* First Column */}
                        <div className="col-start-2">
                            <HeroCard
                                icon={Zap}
                                title="IAN"
                                description="Cloud IAN automates Azure security with continuous monitoring and intelligent protection."
                                className="relative"
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-0 gap-y-6  w-auto hover:scale-105 transition-all duration-300">
                        <div />
                        {/* First Column */}
                        <div className="col-start-1">
                            <HeroCard
                                icon={ShieldCheck}
                                title="VIRA"
                                description="Cloud VIRA automates Azure security with continuous, enterprise-grade risk"
                                className="relative hover:scale-105 transition-all duration-300"
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-0 gap-y-6  w-fit">
                        <div />
                        {/* First Column */}
                        <div className="col-start-2">
                            <HeroCard
                                icon={Search}
                                title="MoogleMind"
                                description="An open‑source AI platform for unified enterprise search, custom agents, and secure self‑hosting."
                                className="relative"
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-0 gap-y-6  w-fit">
                        <div />
                        {/* First Column */}
                        <div className="col-start-1">
                            <HeroCard
                                icon={MessageCircle}
                                title="Review Attendant"
                                description="An AI platform that centralizes reviews and automates responses with sentiment analysis."
                                className="relative"
                            />
                        </div>
                    </div>


                </div>

                <div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6   w-fit">

                        {/* First Column */}
                        <div className="col-start-1">
                            <HeroCard
                                icon={Users}
                                title="AttendAI"
                                description="A smart face‑recognition attendance system with IP camera support and clear reporting."
                                className="relative"
                            />
                        </div>

                        {/* Second Column (Empty) */}
                        <div />

                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-0 gap-y-6  w-fit">
                        <div />
                        {/* First Column */}
                        <div className="col-start-2">
                            <HeroCard
                                icon={Layers}
                                title="Elvis"
                                description="Job leads management & analytics platform for sales teams."
                                className="relative"
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-0 gap-y-6  w-fit">
                        <div />
                        {/* First Column */}
                        <div className="col-start-1">
                            <HeroCard
                                icon={FileText}
                                title="ThinkDocs"
                                description="An AI-based Document Management System that goes beyond storing files — it uses artificial intelligence to understand, organize, search, and help manage content intelligently."
                                className="relative"
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-0 gap-y-6  w-fit">
                        <div />
                        {/* First Column */}
                        <div className="col-start-2">
                            <HeroCard
                                icon={Rocket}
                                title="Alluvium"
                                description="AI-enabled data extraction from invoices, contracts, and financial documents."
                                className="relative"
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-0 gap-y-6  w-fit">
                        <div />
                        {/* First Column */}
                        <div className="col-start-1">
                            <HeroCard
                                icon={Bot}
                                title="Demo Agent (STAGE)"
                                description="An automated Demo Agent that simulates real users to deliver consistent, hands-free product walkthroughs."
                                className="relative"
                            />
                        </div>
                    </div>


                </div>

            </div>



            {/* Center hero content */}
            <div className="absolute inset-0 z-10 flex h-full items-center justify-center">
                <div className="px-6 text-center md:px-0">
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-[#C5E6FF]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#38BDF8]" />
                        AI Enabled Suite
                    </div>

                    <motion.h1
                        className="text-center text-5xl md:text-[64px] font-medium leading-[70px] tracking-[-3.2px] text-center "
                    >
                        <span className="
          bg-gradient-to-r from-[#87CBFF] to-[#C5E6FF] 
          bg-clip-text text-transparent"
                            style={{ fontFamily: "Satoshi" }}

                        > AI Enabled </span>
                        <br /> <span className="text-white ">Property Tools</span>
                    </motion.h1>

                    <p className="text-white/65 text-lg max-w-md mx-auto leading-snug pt-4">
                        Purpose-built AI products that help businesses work
                        smarter, faster, and better.        </p>

                    {/* View All Button */}
                    <button className="mt-12 px-8 py-3 rounded-md bg-[#0078D4] text-white font-medium transition-all duration-300 cursor-pointer  hover:scale-105"
                        onClick={() => {
                            window.location.href = "/products";
                        }}
                    >
                        Explore Now
                    </button>
                </div>
            </div>

            {/* <div className="absolute inset-x-0 bottom-2 flex justify-center pointer-events-none">
  <HeroStatSection />
</div> */}

        </section>
    );
}
