"use client";

import React, { useEffect, useRef, useState, memo } from "react";
import { cn } from "@/lib/utils";

interface TimelineEntry {
  title: string;
  date?: string;
  content: React.ReactNode;
}

const TimelineItem = memo(function TimelineItem({ 
  item, 
  index 
}: { 
  item: TimelineEntry; 
  index: number;
}) {
  return (
    <div className="flex justify-start pt-20 md:pt-40 md:gap-10">
      {/* Timeline marker */}
      <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
        {/* Dot */}
        <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-black flex items-center justify-center border border-white/10">
          <div className="h-3 w-3 rounded-full bg-white/40" />
        </div>
        
        {/* Title */}
        <h3 className="hidden md:block text-xl md:pl-20 md:text-4xl font-harmond font-bold text-white/40">
          {item.title}
        </h3>
      </div>

      {/* Content */}
      <div className="relative pl-20 pr-4 md:pl-4 w-full">
        {/* Mobile title */}
        <h3 className="md:hidden block text-2xl mb-4 text-left font-harmond font-bold text-white/40">
          {item.title}
        </h3>
        
        {/* Date badge */}
        {item.date && (
          <span className="inline-block px-3 py-1 mb-4 text-xs font-nohemi font-medium uppercase tracking-widest text-white/60 border border-white/10 rounded-full">
            {item.date}
          </span>
        )}
        
        <div className="text-white/70">{item.content}</div>
      </div>
    </div>
  );
});

export const Timeline = memo(function Timeline({ data }: { data: TimelineEntry[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, []);

  // Simple scroll-based animation using IntersectionObserver
  useEffect(() => {
    if (!containerRef.current || !lineRef.current) return;

    const updateLineHeight = () => {
      if (!containerRef.current || !lineRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how much of the container is visible
      const visibleTop = Math.max(0, -rect.top + windowHeight * 0.3);
      const progress = Math.min(1, Math.max(0, visibleTop / rect.height));
      
      lineRef.current.style.height = `${progress * 100}%`;
      lineRef.current.style.opacity = progress > 0.05 ? '1' : '0';
    };

    window.addEventListener('scroll', updateLineHeight, { passive: true });
    updateLineHeight();

    return () => window.removeEventListener('scroll', updateLineHeight);
  }, [height]);

  return (
    <div className="w-full bg-black font-nohemi" ref={containerRef}>
      <div ref={ref} className="relative max-w-6xl mx-auto pb-20">
        {data.map((item, index) => (
          <TimelineItem key={index} item={item} index={index} />
        ))}
        
        {/* Static line background */}
        <div
          style={{ height: height + "px" }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-gradient-to-b from-transparent via-white/10 to-transparent"
        >
          {/* Animated fill line */}
          <div
            ref={lineRef}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-accent-blue via-white to-transparent from-[0%] via-[10%] rounded-full transition-all duration-100"
            style={{ height: '0%', opacity: 0 }}
          />
        </div>
      </div>
    </div>
  );
});
