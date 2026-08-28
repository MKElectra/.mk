"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AccordionItemProps {
  id: string;
  title: string;
  category?: string;
  content: string | React.ReactNode;
  defaultOpen?: boolean;
}

export function Accordion({
  items,
  allowMultiple = false,
  className,
}: {
  items: AccordionItemProps[];
  allowMultiple?: boolean;
  className?: string;
}) {
  const [openIds, setOpenIds] = useState<string[]>(() => {
    return items.filter((item) => item.defaultOpen).map((item) => item.id);
  });

  const toggleItem = (id: string) => {
    if (allowMultiple) {
      setOpenIds((prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
      );
    } else {
      setOpenIds((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div className={cn("space-y-3", className)}>
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);
        return (
          <div
            key={item.id}
            className={cn(
              "rounded-xl border transition-all duration-200 overflow-hidden",
              isOpen
                ? "bg-navy-850 border-brand-500/40 shadow-lg shadow-brand-500/5"
                : "bg-navy-900/80 border-steel-800/80 hover:border-steel-700"
            )}
          >
            <button
              type="button"
              onClick={() => toggleItem(item.id)}
              aria-expanded={isOpen}
              className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3">
                {item.category && (
                  <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 font-semibold shrink-0">
                    [{item.category}]
                  </span>
                )}
                <span className="text-base font-semibold text-steel-100 group-hover:text-white">
                  {item.title}
                </span>
              </div>
              <div
                className={cn(
                  "w-7 h-7 rounded-lg bg-navy-800 border border-steel-700 flex items-center justify-center shrink-0 transition-transform duration-200 text-steel-300",
                  isOpen && "transform rotate-180 bg-brand-500/20 text-cyan-400 border-cyan-500/40"
                )}
              >
                <ChevronDown className="w-4 h-4" />
              </div>
            </button>

            {isOpen && (
              <div className="px-5 pb-5 pt-1 text-sm sm:text-base text-steel-300 leading-relaxed border-t border-steel-800/50 mt-1">
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
