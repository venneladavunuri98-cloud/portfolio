"use client";

import React, { useState, memo, useRef } from "react";
import { cn } from "@/lib/utils";
import { GlowingEffect } from "@/components/ui/glowing-effect";

// SVG filter for displacement effect
const DistortionFilter = memo(function DistortionFilter({ id }: { id: string }) {
  return (
    <svg className="absolute w-0 h-0" aria-hidden="true">
      <defs>
        <filter id={id}>
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.015"
            numOctaves="3"
            seed="1"
            result="noise"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale="20"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </defs>
    </svg>
  );
});

const Card = memo(function Card({
  card,
  index,
  hovered,
  setHovered,
}: {
  card: {
    title: string;
    src: string;
    category?: string;
    description?: string;
    link?: string;
  };
  index: number;
  hovered: number | null;
  setHovered: React.Dispatch<React.SetStateAction<number | null>>;
}) {
  const filterId = useRef(`card-distortion-${index}`);
  const isHovered = hovered === index;

  return (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "rounded-2xl relative overflow-hidden h-80 md:h-[480px] w-full",
        "bg-black-50 border border-white/5",
        "transition-all duration-300 ease-out",
        hovered !== null && hovered !== index && "blur-sm scale-[0.98] opacity-50"
      )}
      data-cursor-hover
    >
      {/* SVG Filter for distortion */}
      <DistortionFilter id={filterId.current} />
      
      {/* Glowing border gradient effect */}
      <GlowingEffect
        spread={40}
        glow={true}
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
        borderWidth={2}
      />

      {/* Image with distortion effect on hover */}
      <img
        src={card.src}
        alt={card.title}
        loading="lazy"
        className={cn(
          "object-cover absolute inset-0 w-full h-full",
          "transition-all duration-500 ease-out",
          isHovered && "scale-105"
        )}
        style={{
          filter: isHovered ? `url(#${filterId.current})` : "none",
          transition: "filter 0.2s ease-out, transform 0.5s ease-out",
        }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60" />

      {/* Content */}
      <div
        className={cn(
          "absolute inset-0 flex flex-col justify-end p-6 md:p-8 transition-all duration-300",
          hovered === index ? "opacity-100 translate-y-0" : "opacity-70 translate-y-2"
        )}
      >
        {/* Category */}
        {card.category && (
          <span className="text-xs font-nohemi font-medium uppercase tracking-widest text-white/60 mb-2">
            {card.category}
          </span>
        )}

        {/* Title */}
        <h3 className="text-2xl md:text-3xl font-harmond font-bold text-white mb-2">
          {card.title}
        </h3>

        {/* Description */}
        {card.description && (
          <p
            className={cn(
              "text-sm font-nohemi text-white/70 max-w-md transition-opacity duration-200",
              hovered === index ? "opacity-100" : "opacity-0"
            )}
          >
            {card.description}
          </p>
        )}

        {/* View project link */}
        {card.link && (
          <a
            href={card.link}
            className={cn(
              "mt-4 inline-flex items-center gap-2 text-sm font-nohemi font-medium text-white",
              "transition-all duration-200",
              hovered === index ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
            )}
          >
            View Project
            <svg
              className="w-4 h-4"
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
        )}
      </div>

      {/* Hover border */}
      <div
        className={cn(
          "absolute inset-0 rounded-2xl pointer-events-none",
          "border border-white/20 transition-opacity duration-200",
          hovered === index ? "opacity-100" : "opacity-0"
        )}
      />
    </div>
  );
});

type CardType = {
  title: string;
  src: string;
  category?: string;
  description?: string;
  link?: string;
};

export function FocusCards({ cards }: { cards: CardType[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}
