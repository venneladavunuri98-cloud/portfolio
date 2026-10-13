"use client";

import { cn } from "@/lib/utils";
import React, { useState } from "react";

interface StatefulButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => Promise<void> | void;
}

export const StatefulButton = ({
  className,
  children,
  onClick,
  ...props
}: StatefulButtonProps) => {
  const [state, setState] = useState<"idle" | "loading" | "success">("idle");

  const handleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    if (state !== "idle") return;
    
    setState("loading");
    try {
      await onClick?.(event);
      setState("success");
      setTimeout(() => setState("idle"), 2000);
    } catch {
      setState("idle");
    }
  };

  return (
    <button
      className={cn(
        "flex min-w-[160px] cursor-pointer items-center justify-center gap-2",
        "rounded-full px-8 py-4 font-nohemi font-semibold text-lg",
        "bg-white text-black",
        "transition-all duration-200",
        "hover:bg-white/90 hover:shadow-lg hover:shadow-white/10",
        "active:scale-95",
        state === "loading" && "opacity-80",
        className
      )}
      onClick={handleClick}
      disabled={state !== "idle"}
      data-cursor-hover
      {...props}
    >
      {state === "loading" && (
        <svg
          className="animate-spin w-5 h-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      {state === "success" && (
        <svg
          className="w-5 h-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
          <path d="M9 12l2 2l4 -4" />
        </svg>
      )}
      <span>{state === "success" ? "Success!" : children}</span>
    </button>
  );
};
