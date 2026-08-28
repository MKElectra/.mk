import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "brand" | "cyan" | "steel" | "emerald" | "amber" | "outline";
  size?: "sm" | "md";
  className?: string;
}

export function Badge({
  children,
  variant = "brand",
  size = "md",
  className,
}: BadgeProps) {
  const variantStyles = {
    brand: "bg-brand-500/10 text-brand-300 border-brand-500/30",
    cyan: "bg-cyan-500/10 text-cyan-300 border-cyan-500/30",
    steel: "bg-steel-800 text-steel-300 border-steel-700",
    emerald: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    amber: "bg-amber-500/10 text-amber-400 border-amber-500/30",
    outline: "bg-transparent text-steel-300 border-steel-700",
  };

  const sizeStyles = {
    sm: "text-[11px] px-2 py-0.5 font-mono",
    md: "text-xs px-2.5 py-1 font-mono",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 font-medium rounded-md border tracking-wide select-none",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {children}
    </span>
  );
}
