"use client";

import React, { memo } from "react";
import { cn } from "@/lib/utils";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import {
  IconSitemap,
  IconPhoneCall,
  IconDatabase,
  IconBrain,
  IconSparkles,
  IconServer,
  IconTargetArrow,
  IconLink,
  IconApiApp,
  IconBrandMeta,
} from "@tabler/icons-react";

const tools = [
  { name: "n8n", icon: IconSitemap },
  { name: "Vapi", icon: IconPhoneCall },
  { name: "Supabase", icon: IconDatabase },
  { name: "OpenAI", icon: IconBrain },
  { name: "Claude", icon: IconSparkles },
  { name: "PostgreSQL", icon: IconServer },
  { name: "Apollo.io", icon: IconTargetArrow },
  { name: "LangChain", icon: IconLink },
  { name: "Webhooks / REST APIs", icon: IconApiApp },
  { name: "Meta (WhatsApp/Messenger API)", icon: IconBrandMeta },
];

const ToolBadge = memo(function ToolBadge({
  name,
  icon: Icon,
}: {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <li className="list-none">
      <div className="relative h-full rounded-2xl border border-white/10 p-2 bg-black-50">
        <GlowingEffect
          spread={30}
          glow={true}
          disabled={false}
          proximity={48}
          inactiveZone={0.01}
          borderWidth={2}
        />
        <div
          data-cursor-hover
          className={cn(
            "relative flex flex-col items-center justify-center gap-3 rounded-xl px-6 py-8",
            "bg-gradient-to-br from-white/[0.03] to-transparent"
          )}
        >
          <div className="rounded-xl border border-white/10 bg-white/5 p-3">
            <Icon className="h-6 w-6 text-accent-blue" />
          </div>
          <span className="font-nohemi text-sm md:text-base text-white/80 text-center">
            {name}
          </span>
        </div>
      </div>
    </li>
  );
});

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative w-full py-32 md:py-48 bg-black"
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
        <div className="mb-16 md:mb-24">
          <span className="font-nohemi text-xs font-medium uppercase tracking-[0.3em] text-white/40 block mb-4">
            Tech Stack
          </span>
          <h2 className="font-harmond text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6">
            The Stack
          </h2>
          <p className="font-nohemi text-lg text-white/50 max-w-xl">
            The exact tools and platforms powering every system I build.
          </p>
        </div>

        {/* Tool badge grid */}
        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {tools.map((tool) => (
            <ToolBadge key={tool.name} name={tool.name} icon={tool.icon} />
          ))}
        </ul>
      </div>
    </section>
  );
}