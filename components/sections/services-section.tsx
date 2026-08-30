"use client";

import React from "react";
import { cn } from "@/lib/utils";
import {
  IconPhoneCall,
  IconSitemap,
  IconBrain,
  IconRefresh,
  IconTargetArrow,
  IconBulb,
} from "@tabler/icons-react";

const services = [
  {
    title: "AI Voice & Sales Systems",
    description:
      "Natural-sounding voice agents that handle live calls, qualify leads, and close bookings autonomously.",
    icon: IconPhoneCall,
  },
  {
    title: "Workflow Automation",
    description:
      "Multi-branch n8n workflows that replace manual processes with reliable, self-running automation.",
    icon: IconSitemap,
  },
  {
    title: "Agentic RAG Systems",
    description:
      "Retrieval-augmented AI agents grounded in your real company data — engineered for zero hallucinations.",
    icon: IconBrain,
  },
  {
    title: "CRM / ERP Automation",
    description:
      "Seamless two-way sync between your CRM, ERP, and every other tool in your stack.",
    icon: IconRefresh,
  },
  {
    title: "Lead Generation Engines",
    description:
      "LLM-scored outbound pipelines that scrape, qualify, and prioritize leads at scale.",
    icon: IconTargetArrow,
  },
  {
    title: "AI Strategy & Consulting",
    description:
      "Mapping your operations to find exactly where automation delivers the highest ROI.",
    icon: IconBulb,
  },
];

export function ServicesSection() {
  return (
    <section
      id="services"
      className="relative min-h-screen w-full py-32 md:py-48 bg-black overflow-hidden"
    >
      {/* Circuit background image - faint atmosphere layer */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: 'url(/circuit-bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Grid background, consistent with other sections */}
      <div className="absolute inset-0 bg-grid-white opacity-[0.02]" />

      <div className="swiss-container relative z-10">
        {/* Section header */}
        <div className="mb-16 md:mb-24">
          <span className="font-nohemi text-xs font-medium uppercase tracking-[0.3em] text-white/40 block mb-4">
            Services
          </span>
          <h2 className="font-harmond text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6">
            What I Build
          </h2>
          <p className="font-nohemi text-lg text-white/50 max-w-xl">
            End-to-end automation systems, built and deployed for businesses
            ready to scale without scaling headcount.
          </p>
        </div>

        {/* Services grid with mouse-tracking spotlight glow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                data-cursor-hover
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  e.currentTarget.style.setProperty("--gx", `${x}px`);
                  e.currentTarget.style.setProperty("--gy", `${y}px`);
                }}
                className={cn(
                  "group relative rounded-2xl border border-white/10 bg-white/[0.02]",
                  "p-8 overflow-hidden transition-colors duration-300 hover:border-white/20"
                )}
              >
                {/* Mouse-tracking spotlight glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle 160px at var(--gx, 50%) var(--gy, 50%), rgba(59,130,246,0.15), transparent 80%)",
                  }}
                />

                {/* Top border highlight on hover */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-blue to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 flex flex-col items-start gap-6">
                  <div className="w-14 h-14 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center group-hover:border-accent-blue/40 transition-colors">
                    <Icon className="h-6 w-6 text-white/70 group-hover:text-accent-blue transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-harmond text-xl md:text-2xl font-bold text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="font-nohemi text-sm text-white/50 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}