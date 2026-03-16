'use client';
import { motion } from "framer-motion";

export default function ValuesSection() {
  return (
    <section className="px-6 py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-20 bg-gradient-to-r from-slate-900 via-emerald-900/60 to-slate-900 bg-clip-text">
          What Drives Us
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            "Innovation First", 
            "Performance Obsessed",
            "Client Success"
          ].map((value, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group p-8 bg-white/90 backdrop-blur-xl border border-slate-200/70 rounded-3xl shadow-xl hover:shadow-slate-400/50 transition-all duration-500 text-center"
            >
              <p className="text-2xl font-bold text-slate-900 group-hover:text-purple-700 transition-colors mb-4">
                {value}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
