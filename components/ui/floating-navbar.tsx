"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { cn } from "@/lib/utils";
import { useLenis } from "@/components/lenis-provider";
import { MagneticButton } from "@/components/ui/magnetic-button";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const lastScrollY = useRef(0);
  const navRef = useRef<HTMLElement>(null);
  const lenis = useLenis();

  // Smooth scroll to section using Lenis
  const scrollToSection = useCallback((e: React.MouseEvent, href: string) => {
    e.preventDefault();
    
    if (href === "#") {
      // Scroll to top
      lenis?.scrollTo(0, { duration: 1.2 });
      return;
    }
    
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);
    
    if (targetElement && lenis) {
      lenis.scrollTo(targetElement, {
        offset: -100, // Offset for fixed navbar
        duration: 1.2,
      });
    }
  }, [lenis]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Check if at top
      if (currentScrollY < 50) {
        setVisible(true);
        setScrolled(false);
        lastScrollY.current = currentScrollY;
        return;
      }

      setScrolled(true);
      
      // Show/hide based on scroll direction
      if (currentScrollY < lastScrollY.current) {
        setVisible(true); // Scrolling up
      } else {
        setVisible(false); // Scrolling down
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      ref={navRef}
      className={cn(
        "fixed top-6 inset-x-0 mx-auto z-[5000] w-fit",
        "transition-all duration-300 ease-out",
        visible ? "translate-y-0 opacity-100" : "-translate-y-24 opacity-0",
        className
      )}
    >
      <div
        className={cn(
          "flex items-center justify-center gap-1 px-2 py-2 rounded-full",
          "border border-white/10",
          "transition-all duration-300",
          scrolled
            ? "bg-black/60 backdrop-blur-xl shadow-lg shadow-black/20"
            : "bg-transparent"
        )}
      >
        {/* Logo with magnetic effect */}
        <MagneticButton
          as="a"
          href="#"
          onClick={(e) => scrollToSection(e, "#")}
          strength={0.3}
        >
          <span className="px-4 py-2 font-harmond text-lg font-bold tracking-tight text-white">
            V.
          </span>
        </MagneticButton>

        {/* Nav items with magnetic effect */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((navItem, idx) => (
            <MagneticButton
              key={`link-${idx}`}
              as="a"
              href={navItem.link}
              onClick={(e) => scrollToSection(e, navItem.link)}
              strength={0.25}
            >
              <span className={cn(
                "relative px-4 py-2 text-sm font-nohemi font-medium uppercase tracking-widest",
                "text-white/60 hover:text-white transition-colors duration-200",
                "hover:bg-white/5 rounded-full block"
              )}>
                {navItem.name}
              </span>
            </MagneticButton>
          ))}
        </div>

        {/* CTA Button with magnetic effect */}
        <MagneticButton
          as="a"
          href="#contact"
          onClick={(e) => scrollToSection(e, "#contact")}
          strength={0.35}
        >
          <span className={cn(
            "ml-2 px-5 py-2 rounded-full block",
            "bg-white text-black font-nohemi text-sm font-semibold uppercase tracking-wide",
            "hover:bg-white/90 transition-colors duration-200"
          )}>
            Let&apos;s Talk
          </span>
        </MagneticButton>
      </div>
    </nav>
  );
};
