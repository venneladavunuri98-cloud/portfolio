"use client";

import React, { useId, useEffect, useState, memo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Container } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { cn } from "@/lib/utils";

type SparklesProps = {
  id?: string;
  className?: string;
  background?: string;
  particleSize?: number;
  minSize?: number;
  maxSize?: number;
  speed?: number;
  particleColor?: string;
  particleDensity?: number;
};

// Memoized component to prevent unnecessary re-renders
export const SparklesCore = memo(function SparklesCore(props: SparklesProps) {
  const {
    id,
    className,
    background,
    minSize = 0.6,
    maxSize = 1.2,
    speed = 0.3, // Much slower for better performance
    particleColor = "#FFFFFF",
    particleDensity = 20, // Drastically reduced particle count
  } = props;
  
  const [init, setInit] = useState(false);
  const [opacity, setOpacity] = useState(0);
  const generatedId = useId();

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container) => {
    if (container) {
      // Simple opacity transition without Framer Motion
      setTimeout(() => setOpacity(1), 100);
    }
  };

  return (
    <div 
      className={cn("transition-opacity duration-1000", className)}
      style={{ opacity }}
    >
      {init && (
        <Particles
          id={id || generatedId}
          className={cn("h-full w-full")}
          particlesLoaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: background || "transparent",
              },
            },
            fullScreen: {
              enable: false,
              zIndex: 1,
            },
            fpsLimit: 30, // Reduced FPS limit for particles (they don't need 60)
            interactivity: {
              events: {
                onClick: { enable: false },
                onHover: { enable: false }, // Disabled hover interactions
                resize: true as any,
              },
            },
            particles: {
              color: {
                value: particleColor,
              },
              links: {
                enable: false,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "out",
                },
                random: false,
                speed: speed,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  width: 800,
                  height: 800,
                },
                value: particleDensity,
              },
              opacity: {
                value: {
                  min: 0.2,
                  max: 0.6,
                },
                animation: {
                  enable: false, // Disabled opacity animation
                },
              },
              shape: {
                type: "circle",
              },
              size: {
                value: {
                  min: minSize,
                  max: maxSize,
                },
              },
            },
            detectRetina: false, // Disable retina for better performance
          }}
        />
      )}
    </div>
  );
});
