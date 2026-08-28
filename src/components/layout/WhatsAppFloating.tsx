"use client";

import React, { useState } from "react";
import { MessageSquare, X, ChevronRight, Phone, Send } from "lucide-react";
import { COMPANY_INFO, WHATSAPP_TEMPLATES } from "@/data/company";
import { getWhatsAppLink } from "@/lib/utils";

export function WhatsAppFloating() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState<string>("general");
  const [customMsg, setCustomMsg] = useState("");

  const topics = [
    { id: "general", label: "General Engineering Project", msg: WHATSAPP_TEMPLATES.general },
    { id: "software", label: "Software & Web Development", msg: WHATSAPP_TEMPLATES.software },
    { id: "embedded", label: "Embedded & IoT System", msg: WHATSAPP_TEMPLATES.embedded },
    { id: "mechanical", label: "Mechanical & CAD Design", msg: WHATSAPP_TEMPLATES.mechanical },
    { id: "wholesale", label: "Wholesale / Bulk 3D Printing", msg: WHATSAPP_TEMPLATES.wholesale },
    { id: "retail", label: "Retail / Custom 3D Part", msg: WHATSAPP_TEMPLATES.retail },
    { id: "automation", label: "Industrial Automation", msg: WHATSAPP_TEMPLATES.automation },
  ];

  const handleSend = (phoneRaw: string) => {
    const defaultTopicMsg = topics.find((t) => t.id === selectedTopic)?.msg || WHATSAPP_TEMPLATES.general;
    const finalMsg = customMsg.trim() ? `${defaultTopicMsg} Note: ${customMsg}` : defaultTopicMsg;
    window.open(getWhatsAppLink(phoneRaw, finalMsg), "_blank");
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Popout Dialog */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 rounded-2xl bg-navy-900 border border-emerald-500/40 shadow-2xl overflow-hidden p-5 animate-in fade-in slide-in-from-bottom-4 duration-200">
          {/* Header */}
          <div className="flex items-center justify-between pb-3 border-b border-steel-800">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <MessageSquare className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">MK Electra Engineering Desk</h4>
                <span className="text-[10px] text-emerald-400 font-mono">Typically responds quickly</span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-md text-steel-400 hover:text-white hover:bg-navy-800"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="py-4 space-y-3">
            <div>
              <label className="text-[11px] font-mono uppercase text-steel-400 font-semibold block mb-1.5">
                Select Your Requirement:
              </label>
              <select
                value={selectedTopic}
                onChange={(e) => setSelectedTopic(e.target.value)}
                className="w-full text-xs bg-navy-950 border border-steel-700 rounded-lg p-2.5 text-steel-200 focus:outline-none focus:border-emerald-400"
              >
                {topics.map((t) => (
                  <option key={t.id} value={t.id}>
                    {t.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-[11px] font-mono uppercase text-steel-400 font-semibold block mb-1.5">
                Optional Project Notes:
              </label>
              <input
                type="text"
                value={customMsg}
                onChange={(e) => setCustomMsg(e.target.value)}
                placeholder="e.g. 50 pcs batch, urgent CAD design..."
                className="w-full text-xs bg-navy-950 border border-steel-700 rounded-lg p-2.5 text-steel-200 focus:outline-none focus:border-emerald-400 placeholder:text-steel-600"
              />
            </div>

            <div className="pt-2">
              <label className="text-[11px] font-mono uppercase text-steel-400 font-semibold block mb-2">
                Connect Directly With:
              </label>
              <div className="space-y-2">
                {COMPANY_INFO.phones.map((phone, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSend(phone.raw)}
                    className="w-full flex items-center justify-between p-2.5 rounded-xl bg-emerald-950/40 border border-emerald-500/40 hover:bg-emerald-900/50 hover:border-emerald-400 transition-all text-left group"
                  >
                    <div className="flex items-center gap-2.5">
                      <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                      <div>
                        <p className="text-xs font-mono font-bold text-white">
                          {phone.display}
                        </p>
                        <p className="text-[10px] text-steel-400">{phone.label}</p>
                      </div>
                    </div>
                    <Send className="w-3.5 h-3.5 text-emerald-400 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm shadow-xl shadow-emerald-600/30 hover:shadow-emerald-500/50 hover:scale-105 transition-all focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-navy-950 select-none group"
        aria-label="Contact MK Electra on WhatsApp"
      >
        <MessageSquare className="w-5 h-5 fill-current" />
        <span className="hidden sm:inline">WhatsApp Us</span>
      </button>
    </div>
  );
}
