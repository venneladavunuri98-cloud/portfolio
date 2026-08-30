"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface CaseStudyStep {
  step: string;
  title: string;
  description: string;
}

interface CaseStudy {
  tag: string;
  title: string;
  src: string;
  proofSrc?: string;
  overview: string;
  link: string;
  githubUrl?: string;
  demoVideo?: string;
  isScreenshot?: boolean;
  steps: CaseStudyStep[];
}

const caseStudies: CaseStudy[] = [
  {
    tag: "Agentic RAG",
    title: "Autonomous Knowledge Base Crawler",
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2340&auto=format&fit=crop",
    proofSrc: "/office-chatbot-workflow.png",
    overview:
      "An n8n-powered support agent with a nightly web crawler, cyrb53 content hashing, and a Supabase vector store — engineered to keep the AI grounded and hallucination-free.",
    link: "#",
    steps: [
      {
        step: "01",
        title: "Data Ingestion",
        description:
          "I build automated web scrapers and API listeners in n8n to continuously pull raw data from target websites, CRM systems, or platforms like Apollo.io.",
      },
      {
        step: "02",
        title: "Transformation & Hashing",
        description:
          "Raw data is useless. I sanitize HTML, chunk text blocks, and compute unique hashes to ensure the system only updates when content actually changes.",
      },
      {
        step: "03",
        title: "Vectorization (RAG)",
        description:
          "I convert text into mathematical embeddings, storing them securely in Supabase/PostgreSQL so the LLM can instantly retrieve exact context without hallucinating.",
      },
      {
        step: "04",
        title: "Structured Output",
        description:
          "The LLM analyzes the context and outputs strict, structured JSON data, which is then routed directly into your dashboards, spreadsheets, or outbound email sequences.",
      },
    ],
  },
  {
    tag: "Voice AI",
    title: "Zero-Conflict Scheduling Agent",
    src: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2340&auto=format&fit=crop",
    proofSrc: "/scheduling-multidoc-workflow.png",
    overview:
      "A live voice-calling agent with strict webhook routing between Vapi and Google Calendar, handling real-time rescheduling while masking API latency for a seamless caller experience.",
    link: "#",
    steps: [
      {
        step: "01",
        title: "Persona & Flow Design",
        description:
          'Mapping the conversation. I design natural dialogue trees and define exact function-calling triggers (like "checkAvailability") so the AI knows exactly when to act.',
      },
      {
        step: "02",
        title: "Knowledge Base Ingestion",
        description:
          "Feeding the AI context. I use LangChain and Supabase to vectorize your company's data, ensuring the agent speaks accurately about your specific pricing and services.",
      },
      {
        step: "03",
        title: "Latency Masking",
        description:
          'Killing the awkward pause. I engineer \'bridge phrases\' (e.g., "Let me pull that up for you...") to mask backend database queries during live voice calls.',
      },
      {
        step: "04",
        title: "Handoff Protocols",
        description:
          "Ensuring a perfect user experience. I build intelligent sentiment-analysis routing that seamlessly transfers frustrated users or high-ticket sales directly to human staff.",
      },
    ],
  },
  {
    tag: "Lead Generation",
    title: "LLM-Scored Outbound Engine",
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    proofSrc: "/leadgen-workflow.png",
    overview:
      "A multi-branch n8n workflow that scrapes Apollo.io for tech-stack fingerprints and uses an LLM to score each lead's 'AI Readiness' — powering precision-targeted outreach.",
    link: "#",
    steps: [
      {
        step: "01",
        title: "The Logic Blueprint",
        description:
          "We identify the exact tools your business uses. I map the data flow from Point A (e.g., a website form) to Point Z (e.g., a personalized LLM email draft).",
      },
      {
        step: "02",
        title: "Node-Based Construction",
        description:
          "Using n8n, I rapidly build the core logic, connecting APIs, configuring webhooks, and structuring the data payloads without reinventing the wheel.",
      },
      {
        step: "03",
        title: "LLM Injection",
        description:
          'I insert OpenAI or Claude into the workflow to handle the "messy" human data — scoring leads, categorizing intent, or extracting specific entities from unstructured text.',
      },
      {
        step: "04",
        title: "Live Iteration",
        description:
          "Because the infrastructure is built in a modern node-based environment, I can push updates, add new branches, and fix edge cases in real-time as your business scales.",
      },
    ],
  },
];

function CaseStudyImage({ study }: { study: CaseStudy }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="relative h-72 md:h-96 perspective-1000 cursor-pointer"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped((f) => !f)}
      data-cursor-hover
    >
      <div
        className="relative w-full h-full preserve-3d transition-transform duration-700"
        style={{
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front - the polished image */}
        <div className="absolute inset-0 rounded-2xl overflow-hidden border border-white/10 backface-hidden">
          <img
            src={study.src}
            alt={study.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          {study.proofSrc && (
            <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-full bg-black/60 border border-white/20 font-nohemi text-[10px] uppercase tracking-widest text-white/70">
              Hover for proof ↻
            </div>
          )}
        </div>

        {/* Back - the real workflow screenshot */}
        {study.proofSrc && (
          <div
            className="absolute inset-0 rounded-2xl overflow-hidden border border-white/10 bg-[#0a0a0a] backface-hidden"
            style={{ transform: "rotateY(180deg)" }}
          >
            {/* Browser/editor chrome bar */}
            <div className="absolute top-0 left-0 right-0 h-9 bg-white/[0.04] border-b border-white/10 flex items-center gap-2 px-4 z-20">
              <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
            </div>
            <img
              src={study.proofSrc}
              alt={`${study.title} - real workflow`}
              className="w-full h-full object-cover pt-9"
            />
            <div className="absolute inset-0 bg-black/10 mix-blend-multiply pointer-events-none" />
          </div>
        )}
      </div>
    </div>
  );
}

function CaseStudyBlock({
  study,
  index,
}: {
  study: CaseStudy;
  index: number;
}) {
  const isReversed = index % 2 === 1;

  return (
    <div
      className={cn(
        "grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center",
        "py-16 md:py-24 border-b border-white/10 last:border-b-0"
      )}
    >
      {/* Image */}
      <div
        className={cn(
          "lg:col-span-6",
          isReversed ? "lg:order-2" : "lg:order-1"
        )}
      >
        <CaseStudyImage study={study} />
      </div>

      {/* Content */}
      <div
        className={cn(
          "lg:col-span-6",
          isReversed ? "lg:order-1" : "lg:order-2"
        )}
      >
        <span className="font-nohemi text-xs font-medium uppercase tracking-[0.3em] text-accent-blue block mb-4">
          {study.tag}
        </span>
        <h3 className="font-harmond text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
          {study.title}
        </h3>
        <p className="font-nohemi text-base md:text-lg text-white/60 leading-relaxed mb-8 max-w-xl">
          {study.overview}
        </p>

        {study.githubUrl && (
          <a
            href={study.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-hover
            className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-white/20 font-nohemi text-xs uppercase tracking-widest text-white/70 hover:border-accent-blue hover:text-accent-blue transition-colors"
          >
            View Code →
          </a>
        )}

        {/* 4-step build breakdown */}
        <div className="space-y-5">
          {study.steps.map((s) => (
            <div key={s.step} className="flex gap-4">
              <span className="font-harmond text-sm font-bold text-white/30 mt-0.5 shrink-0 w-6">
                {s.step}
              </span>
              <div>
                <h4 className="font-nohemi text-sm font-semibold text-white/80 uppercase tracking-wide mb-1">
                  {s.title}
                </h4>
                <p className="font-nohemi text-sm text-white/50 leading-relaxed">
                  {s.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function CaseStudySection() {
  return (
    <section
      id="work"
      className="relative w-full py-32 md:py-48 bg-black overflow-hidden"
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

      <div className="swiss-container relative z-10">
        {/* Section header */}
        <div className="mb-16 md:mb-8">
          <span className="font-nohemi text-xs font-medium uppercase tracking-[0.3em] text-white/40 block mb-4">
            Case Studies
          </span>
          <h2 className="font-harmond text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6">
            Selected Work
          </h2>
          <p className="font-nohemi text-lg text-white/50 max-w-xl">
            A closer look at how these automation systems and AI agents were
            actually built, step by step.
          </p>
        </div>

        {caseStudies.map((study, i) => (
          <CaseStudyBlock key={study.title} study={study} index={i} />
        ))}
      </div>
    </section>
  );
}