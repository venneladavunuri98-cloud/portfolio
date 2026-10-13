"use client";

import React, { useCallback, useEffect, useState, memo } from "react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";

export const FlipWords = memo(function FlipWords({
  words,
  duration = 3000,
  className,
}: {
  words: string[];
  duration?: number;
  className?: string;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isAnimating) return;
    
    const timer = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
      setIsAnimating(true);
    }, duration);

    return () => clearTimeout(timer);
  }, [isAnimating, duration, words.length]);

  return (
    <AnimatePresence mode="wait" onExitComplete={() => setIsAnimating(false)}>
      <motion.span
        key={currentIndex}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{
          duration: 0.3,
          ease: "easeOut",
        }}
        className={cn(
          "inline-block px-2",
          "bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent",
          className
        )}
      >
        {words[currentIndex]}
      </motion.span>
    </AnimatePresence>
  );
});
