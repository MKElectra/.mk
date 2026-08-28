"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface TabOption {
  id: string;
  label: string;
  count?: number;
  icon?: React.ReactNode;
}

interface TabsProps {
  tabs: TabOption[];
  activeTab: string;
  onChange: (tabId: string) => void;
  className?: string;
  variant?: "pill" | "line" | "boxed";
}

export function Tabs({
  tabs,
  activeTab,
  onChange,
  className,
  variant = "pill",
}: TabsProps) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-center gap-1.5 p-1.5 rounded-xl",
        variant === "pill" && "bg-navy-900 border border-steel-800",
        variant === "boxed" && "bg-navy-950 border border-steel-800/80 p-2",
        className
      )}
      role="tablist"
    >
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(tab.id)}
            className={cn(
              "flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500",
              isActive
                ? "bg-brand-500 text-white shadow-md shadow-brand-500/20 font-semibold"
                : "text-steel-400 hover:text-steel-200 hover:bg-navy-800"
            )}
          >
            {tab.icon && <span className="shrink-0">{tab.icon}</span>}
            <span>{tab.label}</span>
            {tab.count !== undefined && (
              <span
                className={cn(
                  "px-1.5 py-0.5 text-[10px] font-mono rounded-full",
                  isActive
                    ? "bg-white/20 text-white"
                    : "bg-steel-800 text-steel-400"
                )}
              >
                {tab.count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
