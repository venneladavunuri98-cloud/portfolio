"use client";

import React, { useRef, useEffect, useState } from "react";

interface CurtainRevealLayoutProps {
  children: React.ReactNode;
  footer: React.ReactNode;
}

export function CurtainRevealLayout({ children, footer }: CurtainRevealLayoutProps) {
  const mainRef = useRef<HTMLDivElement>(null);
  const [footerHeight, setFooterHeight] = useState(0);
  const footerWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateFooterHeight = () => {
      if (footerWrapperRef.current) {
        const contentHeight = footerWrapperRef.current.offsetHeight;
        setFooterHeight(contentHeight);
      }
    };

    updateFooterHeight();
    window.addEventListener("resize", updateFooterHeight);
    
    // Also update after fonts load as they can affect height
    if (document.fonts) {
      document.fonts.ready.then(updateFooterHeight);
    }

    // Delays for proper measurement after render
    const timeout = setTimeout(updateFooterHeight, 100);
    const timeout2 = setTimeout(updateFooterHeight, 500);
    
    return () => {
      window.removeEventListener("resize", updateFooterHeight);
      clearTimeout(timeout);
      clearTimeout(timeout2);
    };
  }, []);

  return (
    <div className="relative">
      {/* Main content that scrolls over the footer */}
      <div
        ref={mainRef}
        className="relative z-10 bg-black"
      >
        {children}
      </div>

      {/* Footer - simply placed after main content, no curtain effect */}
      <div ref={footerWrapperRef}>
        {footer}
      </div>
    </div>
  );
}
