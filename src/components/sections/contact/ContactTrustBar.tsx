"use client";

import { Zap, FileText, MessageSquare, UserCheck, ShieldCheck, type LucideIcon } from "lucide-react";

interface TrustItem {
  icon: LucideIcon;
  text: string;
}

const ITEMS: TrustItem[] = [
  { icon: Zap, text: "24-hour response" },
  { icon: FileText, text: "Mutual NDA ready" },
  { icon: MessageSquare, text: "Zero sales pitch" },
  { icon: UserCheck, text: "Direct engineer contact" },
  { icon: ShieldCheck, text: "100% IP Handover" },
];

export default function ContactTrustBar() {
  return (
    <section className="py-8 border-t border-white/10 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          {ITEMS.map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2 text-xs sm:text-sm text-slate-400 font-mono">
              <Icon size={14} className="text-violet-400 shrink-0" />
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
