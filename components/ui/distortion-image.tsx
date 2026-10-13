"use client";

import React, { useState, useRef, useEffect, memo } from "react";
import { cn } from "@/lib/utils";

interface DistortionImageProps {
  src: string;
  alt: string;
  className?: string;
  distortionIntensity?: number;
}

// SVG filter for displacement/ripple effect
const DistortionFilter = memo(function DistortionFilter({ 
  id, 
  intensity 
}: { 
  id: string; 
  intensity: number;
}) {
  return (
    <svg className="absolute w-0 h-0" aria-hidden="true">
      <defs>
        <filter id={id}>
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.01 0.01"
            numOctaves="3"
            seed="1"
            result="noise"
          >
            <animate
              attributeName="baseFrequency"
              dur="2s"
              values="0.01 0.01;0.02 0.015;0.01 0.01"
              repeatCount="indefinite"
            />
          </feTurbulence>
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale={intensity}
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
        <filter id={`${id}-glitch`}>
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.15"
            numOctaves="2"
            result="noise"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale={intensity * 0.5}
            xChannelSelector="R"
            yChannelSelector="B"
          />
          <feColorMatrix
            type="matrix"
            values="1 0 0 0 0
                    0 1 0 0 0
                    0 0 1 0 0
                    0 0 0 1 0"
          />
        </filter>
      </defs>
    </svg>
  );
});

export const DistortionImage = memo(function DistortionImage({
  src,
  alt,
  className,
  distortionIntensity = 30,
}: DistortionImageProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const filterId = useRef(`distortion-${Math.random().toString(36).substr(2, 9)}`);

  return (
    <div
      className={cn("relative overflow-hidden", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <DistortionFilter id={filterId.current} intensity={distortionIntensity} />
      
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        className={cn(
          "w-full h-full object-cover transition-all duration-500",
          isHovered && "scale-105",
          !isLoaded && "opacity-0"
        )}
        style={{
          filter: isHovered ? `url(#${filterId.current})` : "none",
          transition: "filter 0.3s ease-out, transform 0.5s ease-out",
        }}
      />
      
      {/* Glitch overlay on hover */}
      {isHovered && (
        <div 
          className="absolute inset-0 pointer-events-none mix-blend-screen opacity-30"
          style={{
            backgroundImage: `url(${src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: `url(#${filterId.current}-glitch)`,
            animation: "glitch 0.3s ease-out",
          }}
        />
      )}
    </div>
  );
});
