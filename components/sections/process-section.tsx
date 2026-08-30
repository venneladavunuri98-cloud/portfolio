"use client";

import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function ProcessSection() {
  const timelineData = [
    {
      title: "01",
      date: "Discovery & Strategy",
      content: (
        <div className="space-y-4">
          <h4 className="font-harmond text-2xl md:text-3xl font-bold text-white">
            Understanding Your Operations
          </h4>
          <p className="font-nohemi text-base text-white/60 max-w-lg">
            We start with a deep dive into your business operations. I map
            out your current workflows to identify exactly where AI can
            reduce costs or increase conversions.
          </p>
          <ul className="space-y-2 font-nohemi text-sm text-white/50">
            <li className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-accent-blue" />
              Workflow & Process Mapping
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-accent-blue" />
              Cost & Conversion Opportunity Analysis
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-accent-blue" />
              Automation Feasibility Scoping
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "02",
      date: "Custom Architecture",
      content: (
        <div className="space-y-4">
          <h4 className="font-harmond text-2xl md:text-3xl font-bold text-white">
            Designing the System
          </h4>
          <p className="font-nohemi text-base text-white/60 max-w-lg">
            I design a bespoke, scalable system architecture using n8n,
            Vapi, and LLMs, ensuring it integrates perfectly with your
            existing CRM and software stack.
          </p>
          <ul className="space-y-2 font-nohemi text-sm text-white/50">
            <li className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-accent-blue" />
              n8n, Vapi & LLM Architecture
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-accent-blue" />
              CRM & Stack Integration
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-accent-blue" />
              Scalable System Design
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "03",
      date: "Integration & Testing",
      content: (
        <div className="space-y-4">
          <h4 className="font-harmond text-2xl md:text-3xl font-bold text-white">
            Engineering & Stress-Testing
          </h4>
          <p className="font-nohemi text-base text-white/60 max-w-lg">
            I build the webhooks, configure the prompts, and aggressively
            stress-test the AI&apos;s logic to ensure zero errors, zero
            double-bookings, and perfect brand tone.
          </p>
          <ul className="space-y-2 font-nohemi text-sm text-white/50">
            <li className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-accent-blue" />
              Webhook & API Configuration
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-accent-blue" />
              Prompt Engineering
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-accent-blue" />
              Aggressive Edge-Case Testing
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "04",
      date: "Training & Handoff",
      content: (
        <div className="space-y-4">
          <h4 className="font-harmond text-2xl md:text-3xl font-bold text-white">
            Empowering Your Team
          </h4>
          <p className="font-nohemi text-base text-white/60 max-w-lg">
            I don&apos;t just hand over code. I provide full documentation,
            system walk-throughs, and ongoing support to ensure your team is
            fully empowered by their new AI infrastructure.
          </p>
          <ul className="space-y-2 font-nohemi text-sm text-white/50">
            <li className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-accent-blue" />
              Full Documentation
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-accent-blue" />
              System Walkthroughs
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-accent-blue" />
              Ongoing Support
            </li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <section
      id="process"
      className="relative min-h-screen w-full py-32 md:py-48 bg-black"
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

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-blue/[0.02] to-transparent" />

      <div className="swiss-container relative z-10">
        {/* Section header */}
        <div className="mb-16 md:mb-24 max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
          <div>
            <span className="font-nohemi text-xs font-medium uppercase tracking-[0.3em] text-white/40 block mb-4">
              How I Work
            </span>
            <h2 className="font-harmond text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6">
              Process
            </h2>
            <p className="font-nohemi text-lg text-white/50 max-w-xl">
              A proven methodology for turning manual bottlenecks into
              autonomous, production-grade systems.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <Timeline data={timelineData} />
      </div>
    </section>
  );
}