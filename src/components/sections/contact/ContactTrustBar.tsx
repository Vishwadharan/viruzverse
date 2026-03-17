"use client";
import { motion } from "framer-motion";

const ITEMS = [
  { emoji: "⚡", text: "24-hour response" },
  { emoji: "🤝", text: "NDA available" },
  { emoji: "💬", text: "No sales pitch" },
  { emoji: "🏢", text: "Direct founder contact" },
  { emoji: "🔒", text: "Your idea is safe with us" },
];

export default function ContactTrustBar() {
  return (
    <section className="py-10 border-t border-border relative overflow-hidden">
      <div className="max-w-site container-pad mx-auto">
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {ITEMS.map((item) => (
            <div key={item.text} className="flex items-center gap-2 text-sm text-text-secondary">
              <span>{item.emoji}</span>
              <span className="font-mono text-xs">{item.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
