"use client";

import React from "react";
import { FocusCards } from "@/components/ui/focus-cards";

export function WorksSection() {
  const projects = [
    {
      title: "E-Commerce Platform",
      src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=70&w=1080&auto=format&fit=crop",
      category: "Web Development",
      description:
        "A high-performance e-commerce solution with real-time inventory and 3D product visualization.",
      link: "#",
    },
    {
      title: "Interactive Dashboard",
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=70&w=1080&auto=format&fit=crop",
      category: "UI/UX Design",
      description:
        "Data visualization dashboard with smooth animations and intuitive user experience.",
      link: "#",
    },
    {
      title: "Brand Identity System",
      src: "https://images.unsplash.com/photo-1634942537034-2531766767d1?q=70&w=1080&auto=format&fit=crop",
      category: "Branding",
      description:
        "Complete brand identity system including logo, typography, and digital guidelines.",
      link: "#",
    },
    {
      title: "WebGL Experience",
      src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=70&w=1080&auto=format&fit=crop",
      category: "3D / WebGL",
      description:
        "Immersive 3D experience built with Three.js featuring interactive storytelling.",
      link: "#",
    },
    {
      title: "Mobile Application",
      src: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=70&w=1080&auto=format&fit=crop",
      category: "Mobile",
      description:
        "Cross-platform mobile app with seamless animations and offline-first architecture.",
      link: "#",
    },
    {
      title: "SaaS Platform",
      src: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=70&w=1080&auto=format&fit=crop",
      category: "Full Stack",
      description:
        "Enterprise SaaS platform with real-time collaboration and AI-powered features.",
      link: "#",
    },
  ];

  return (
    <section
      id="work"
      className="relative min-h-screen w-full py-32 md:py-48 bg-black"
    >
      {/* Subtle gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-white/[0.02] via-transparent to-transparent" />

      <div className="swiss-container relative z-10">
        {/* Section header */}
        <div className="mb-16 md:mb-24">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <span className="font-nohemi text-xs font-medium uppercase tracking-[0.3em] text-white/40 block mb-4">
                Selected Works
              </span>
              <h2 className="font-harmond text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white">
                Projects
              </h2>
            </div>

            <p className="font-nohemi text-base md:text-lg text-white/50 max-w-md">
              A curated selection of projects that showcase my expertise in
              creating exceptional digital experiences.
            </p>
          </div>

          {/* Divider */}
          <div className="mt-8 h-px bg-gradient-to-r from-white/20 via-white/5 to-transparent" />
        </div>

        {/* Projects grid */}
        <FocusCards cards={projects} />

        {/* View all link */}
        <div className="mt-16 flex justify-center">
          <a
            href="#"
            className="group inline-flex items-center gap-3 font-nohemi text-sm uppercase tracking-widest text-white/60 hover:text-white transition-colors duration-300"
            data-cursor-hover
          >
            <span>View All Projects</span>
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
