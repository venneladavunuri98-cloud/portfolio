"use client";

import React, { useRef, useEffect, useState, memo } from "react";
import { cn } from "@/lib/utils";

interface KineticMarqueeProps {
  text?: string;
  className?: string;
  baseVelocity?: number;
  skewFactor?: number;
}

export const KineticMarquee = memo(function KineticMarquee({
  text = "CREATIVE DEVELOPER — PARIS — BASED — DESIGN — ",
  className,
  baseVelocity = 0.5,
  skewFactor = 0.5,
}: KineticMarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [translateX, setTranslateX] = useState(0);
  const [skew, setSkew] = useState(0);
  const lastScrollY = useRef(0);
  const lastTime = useRef(0);
  const rafId = useRef<number>(0);

  useEffect(() => {
    let velocity = baseVelocity;
    let targetSkew = 0;
    let currentSkew = 0;

    const animate = (time: number) => {
      if (!innerRef.current) return;

      const deltaTime = time - lastTime.current;
      lastTime.current = time;

      // Calculate scroll velocity for skew effect
      const scrollY = window.scrollY;
      const scrollDelta = scrollY - lastScrollY.current;
      lastScrollY.current = scrollY;

      // Adjust velocity and skew based on scroll speed
      const scrollSpeed = Math.abs(scrollDelta);
      velocity = baseVelocity + scrollSpeed * 0.1;
      targetSkew = Math.max(-15, Math.min(15, scrollDelta * skewFactor));

      // Smooth skew interpolation
      currentSkew += (targetSkew - currentSkew) * 0.1;
      setSkew(currentSkew);

      // Update position
      setTranslateX((prev) => {
        const newX = prev - velocity;
        // Reset when one full text width has passed
        const textWidth = innerRef.current?.children[0]?.clientWidth || 1000;
        if (Math.abs(newX) >= textWidth) {
          return 0;
        }
        return newX;
      });

      rafId.current = requestAnimationFrame(animate);
    };

    rafId.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafId.current);
    };
  }, [baseVelocity, skewFactor]);

  // Repeat text enough times to fill screen
  const repeatedText = Array(6).fill(text).join("");

  return (
    <div
      ref={containerRef}
      className={cn(
        "w-full overflow-hidden pointer-events-none select-none",
        className
      )}
    >
      <div
        ref={innerRef}
        className="flex whitespace-nowrap"
        style={{
          transform: `translateX(${translateX}px) skewX(${skew}deg)`,
          willChange: "transform",
        }}
      >
        <span className="font-harmond text-[8vw] md:text-[6vw] lg:text-[5vw] font-bold tracking-tight text-transparent uppercase"
          style={{
            WebkitTextStroke: "1.5px rgba(255,255,255,0.35)",
          }}
        >
          {repeatedText}
        </span>
        <span className="font-harmond text-[8vw] md:text-[6vw] lg:text-[5vw] font-bold tracking-tight text-transparent uppercase"
          style={{
            WebkitTextStroke: "1.5px rgba(255,255,255,0.35)",
          }}
        >
          {repeatedText}
        </span>
      </div>
    </div>
  );
});
