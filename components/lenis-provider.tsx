"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";
import Lenis from "lenis";

// Create context for Lenis instance
const LenisContext = createContext<Lenis | null>(null);

// Hook to access Lenis instance
export function useLenis() {
  return useContext(LenisContext);
}

export function LenisProvider({ children }: { children: React.ReactNode }) {
  const [lenis, setLenis] = useState<Lenis | null>(null);
  const rafIdRef = useRef<number | null>(null);

  useEffect(() => {
    // Initialize Lenis with optimized settings
    const lenisInstance = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.8,
      touchMultiplier: 1.5,
      infinite: false,
      autoResize: true,
    });

    setLenis(lenisInstance);

    // Optimized RAF loop
    let lastTime = 0;
    function raf(time: number) {
      if (time - lastTime >= 16) {
        lenisInstance.raf(time);
        lastTime = time;
      }
      rafIdRef.current = requestAnimationFrame(raf);
    }

    rafIdRef.current = requestAnimationFrame(raf);
    document.documentElement.classList.add("lenis", "lenis-smooth");

    return () => {
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
      lenisInstance.destroy();
      document.documentElement.classList.remove("lenis", "lenis-smooth");
    };
  }, []);

  return (
    <LenisContext.Provider value={lenis}>
      {children}
    </LenisContext.Provider>
  );
}
