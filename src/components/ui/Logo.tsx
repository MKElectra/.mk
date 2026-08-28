import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  showTagline?: boolean;
  useImage?: boolean;
  className?: string;
  linkHref?: string;
}

export function Logo({
  size = "md",
  showTagline = true,
  useImage = true,
  className,
  linkHref = "/",
}: LogoProps) {
  const sizeConfig = {
    sm: {
      imgWidth: 140,
      imgHeight: 38,
      textClass: "text-lg",
      taglineClass: "text-[9px]",
      iconSize: "w-7 h-7",
      barHeight: "h-[2px]",
    },
    md: {
      imgWidth: 180,
      imgHeight: 48,
      textClass: "text-xl sm:text-2xl",
      taglineClass: "text-[10px] sm:text-[11px]",
      iconSize: "w-9 h-9",
      barHeight: "h-[2.5px]",
    },
    lg: {
      imgWidth: 240,
      imgHeight: 64,
      textClass: "text-2xl sm:text-3xl",
      taglineClass: "text-xs sm:text-sm",
      iconSize: "w-12 h-12",
      barHeight: "h-[3px]",
    },
    xl: {
      imgWidth: 320,
      imgHeight: 86,
      textClass: "text-3xl sm:text-4xl lg:text-5xl",
      taglineClass: "text-sm sm:text-base",
      iconSize: "w-16 h-16",
      barHeight: "h-[4px]",
    },
  };

  const currentSize = sizeConfig[size];

  const content = (
    <div className={cn("inline-flex flex-col select-none group", className)}>
      {/* Top Logo Typography and Glyph */}
      <div className="flex items-center gap-2 sm:gap-2.5">
        {/* MK Lightning Monogram Icon */}
        <div className="relative flex items-center font-black tracking-tighter">
          {/* M - Solid Matte Charcoal/Black with Silver Stroke */}
          <span className="text-white text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tighter filter drop-shadow-md">
            M
          </span>
          {/* K - Intersecting with Lightning Bolt in Vivid Electric Orange */}
          <div className="relative -ml-1 flex items-center">
            <span className="text-brand-500 font-extrabold text-2xl sm:text-3xl lg:text-4xl tracking-tighter filter drop-shadow-[0_2px_8px_rgba(249,115,22,0.6)]">
              K
            </span>
            {/* Embedded Lightning Bolt Glow Effect */}
            <svg
              className="absolute -top-1 -right-2 w-3.5 h-3.5 text-brand-400 animate-pulse"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
          </div>
        </div>

        {/* ELECTRA Wordmark */}
        <span
          className={cn(
            "font-extrabold tracking-wider text-white uppercase transition-colors group-hover:text-steel-100",
            currentSize.textClass
          )}
        >
          ELECTRA
        </span>
      </div>

      {/* Horizontal Solid Brand Orange Bar */}
      <div
        className={cn(
          "w-full rounded-full bg-gradient-to-r from-brand-500 via-brand-400 to-brand-600 shadow-[0_0_10px_rgba(249,115,22,0.5)] my-1",
          currentSize.barHeight
        )}
      />

      {/* Official Tagline */}
      {showTagline && (
        <span
          className={cn(
            "font-medium tracking-tight text-steel-200 font-sans leading-none",
            currentSize.taglineClass
          )}
        >
          Built on Trust. Powered by Quality.
        </span>
      )}
    </div>
  );

  if (linkHref) {
    return (
      <Link href={linkHref} className="inline-block focus:outline-none">
        {content}
      </Link>
    );
  }

  return content;
}
