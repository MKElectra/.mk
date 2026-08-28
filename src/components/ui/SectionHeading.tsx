import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  kicker?: string;
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
  dark?: boolean;
}

export function SectionHeading({
  kicker,
  badge,
  title,
  subtitle,
  align = "center",
  className,
  dark = true,
}: SectionHeadingProps) {
  const alignmentClasses = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  };

  return (
    <div
      className={cn(
        "flex flex-col max-w-3xl mb-12 sm:mb-16",
        alignmentClasses[align],
        className
      )}
    >
      {(kicker || badge) && (
        <div className="inline-flex items-center gap-2 mb-3">
          {badge && (
            <span className="px-2.5 py-1 text-xs font-mono font-medium rounded-full bg-brand-500/10 text-cyan-400 border border-cyan-500/30 tracking-wide uppercase">
              {badge}
            </span>
          )}
          {kicker && (
            <span className="text-xs font-mono uppercase tracking-widest text-steel-400 font-semibold">
              {kicker}
            </span>
          )}
        </div>
      )}

      <h2
        className={cn(
          "text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight",
          dark ? "text-white" : "text-navy-950"
        )}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={cn(
            "mt-4 text-base sm:text-lg leading-relaxed",
            dark ? "text-steel-300" : "text-steel-600"
          )}
        >
          {subtitle}
        </p>
      )}

      {/* Decorative Technical Line */}
      <div
        className={cn(
          "h-0.5 w-16 mt-6 rounded-full bg-gradient-to-r from-brand-500 to-cyan-400",
          align === "center" && "mx-auto",
          align === "right" && "ml-auto"
        )}
      />
    </div>
  );
}
