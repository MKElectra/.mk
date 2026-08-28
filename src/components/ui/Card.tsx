import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: "default" | "blueprint" | "glass" | "bordered" | "interactive";
  hoverEffect?: boolean;
  cornerCrosshairs?: boolean;
}

export function Card({
  children,
  className,
  variant = "default",
  hoverEffect = false,
  cornerCrosshairs = false,
  ...props
}: CardProps) {
  const variantStyles = {
    default: "bg-navy-850 border border-steel-800/80 shadow-xl",
    blueprint: "bg-navy-900/90 border border-brand-500/20 bg-tech-grid backdrop-blur-sm",
    glass: "bg-navy-900/60 backdrop-blur-md border border-steel-700/40 shadow-2xl",
    bordered: "bg-navy-900 border-2 border-steel-800",
    interactive:
      "bg-navy-850/80 border border-steel-800 hover:border-brand-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-brand-500/10",
  };

  return (
    <div
      className={cn(
        "rounded-xl p-6 relative overflow-hidden transition-all duration-200",
        variantStyles[variant],
        hoverEffect && "hover:-translate-y-1 hover:border-brand-400/60",
        cornerCrosshairs && "corner-crosshairs",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
