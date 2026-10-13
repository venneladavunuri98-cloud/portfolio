"use client";

import React, { useRef, useState, useCallback, memo } from "react";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
  as?: "button" | "a" | "div";
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLElement | Element>) => void;
}

export const MagneticButton = memo(function MagneticButton({
  children,
  className,
  strength = 0.3,
  as: Component = "button",
  href,
  onClick,
  ...props
}: MagneticButtonProps & React.HTMLAttributes<HTMLElement>) {
  const ref = useRef<HTMLElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      if (!ref.current) return;

      const { clientX, clientY } = e;
      const { left, top, width, height } = ref.current.getBoundingClientRect();

      const centerX = left + width / 2;
      const centerY = top + height / 2;

      const deltaX = (clientX - centerX) * strength;
      const deltaY = (clientY - centerY) * strength;

      setPosition({ x: deltaX, y: deltaY });
    },
    [strength]
  );

  const handleMouseLeave = useCallback(() => {
    setPosition({ x: 0, y: 0 });
  }, []);

  const style = {
    transform: `translate(${position.x}px, ${position.y}px)`,
    transition: position.x === 0 && position.y === 0 
      ? "transform 0.5s cubic-bezier(0.33, 1, 0.68, 1)" 
      : "transform 0.1s ease-out",
  };

  const componentProps = {
    ref: ref as React.RefObject<HTMLButtonElement & HTMLAnchorElement & HTMLDivElement>,
    className: cn("inline-block", className),
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    onClick,
    style,
    "data-cursor-hover": true,
    ...(Component === "a" && href ? { href } : {}),
    ...props,
  };

  return <Component {...componentProps}>{children}</Component>;
});
