import React, { ButtonHTMLAttributes, forwardRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "cyan" | "whatsapp" | "glow";
  size?: "sm" | "md" | "lg" | "xl";
  href?: string;
  external?: boolean;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      href,
      external,
      isLoading = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-navy-900 disabled:opacity-50 disabled:cursor-not-allowed select-none group";

    const variantStyles = {
      primary:
        "bg-brand-500 hover:bg-brand-600 text-white shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40 focus:ring-brand-500 active:translate-y-px",
      secondary:
        "bg-navy-800 hover:bg-navy-700 text-steel-100 border border-steel-700/60 hover:border-steel-600 focus:ring-steel-500 active:translate-y-px",
      outline:
        "bg-transparent hover:bg-brand-500/10 text-steel-200 hover:text-white border border-steel-700 hover:border-brand-400 focus:ring-brand-500",
      ghost:
        "bg-transparent hover:bg-white/5 text-steel-300 hover:text-white focus:ring-steel-500",
      cyan:
        "bg-cyan-500 hover:bg-cyan-400 text-navy-950 font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/40 focus:ring-cyan-400 active:translate-y-px",
      whatsapp:
        "bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-600/25 hover:shadow-emerald-500/40 focus:ring-emerald-500 font-medium active:translate-y-px",
      glow:
        "bg-gradient-to-r from-brand-500 to-cyan-500 hover:from-brand-600 hover:to-cyan-400 text-white shadow-lg shadow-brand-500/30 hover:shadow-cyan-500/50 focus:ring-brand-400 active:translate-y-px font-semibold",
    };

    const sizeStyles = {
      sm: "text-xs px-3 py-1.5 gap-1.5",
      md: "text-sm px-4 py-2.5 gap-2",
      lg: "text-base px-6 py-3.5 gap-2.5",
      xl: "text-lg px-8 py-4 gap-3",
    };

    const combinedClasses = cn(
      baseStyles,
      variantStyles[variant],
      sizeStyles[size],
      className
    );

    const content = (
      <>
        {isLoading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
        {!isLoading && leftIcon && <span className="shrink-0">{leftIcon}</span>}
        <span>{children}</span>
        {!isLoading && rightIcon && (
          <span className="shrink-0 transition-transform group-hover:translate-x-0.5">
            {rightIcon}
          </span>
        )}
      </>
    );

    if (href) {
      if (external) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={combinedClasses}
          >
            {content}
          </a>
        );
      }
      return (
        <Link href={href} className={combinedClasses}>
          {content}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={combinedClasses}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";
