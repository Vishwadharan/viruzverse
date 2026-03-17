'use client';
import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutHero() {
  return (
    <section className="relative h-[80vh] flex flex-col justify-center items-center overflow-hidden px-4 pt-16 pb-8 bg-gradient-to-br from-slate-50/90 via-white to-blue-50 gap-4">
      
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(148,163,184,.15)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,.15)_1px,transparent_1px)] [background-size:100px_100px]" />
        <div className="absolute top-16 right-16 w-48 h-48 rounded-full blur-xl opacity-15 bg-gradient-to-br from-purple-500/25 to-transparent" />
        <div className="absolute bottom-16 left-16 w-40 h-40 rounded-full blur-xl opacity-10 bg-gradient-to-tr from-cyan-500/20 to-transparent" />
      </div>

      <div className="relative z-20 w-full max-w-3xl text-center space-y-3 px-2">
        
        <motion.div 
          initial={{ opacity: 0, y: 8 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/95 border border-slate-200/80 shadow-sm text-slate-700 font-bold text-xs mx-auto"
        >
          <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full shadow-sm animate-pulse" />
          About Viruzverse
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 12 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 leading-tight tracking-tight mx-auto"
        >
          We're a small team that
          <span className="block bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent font-black">
            builds big things.
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 8 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-sm md:text-base text-slate-600 font-medium max-w-lg mx-auto leading-tight px-1"
        >
          Viruzverse crafts custom B2B software from Tamil Nadu. 
          Real results — no agency overhead.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-2 mb-4"
        >
          {[
            { label: "Tamil Nadu", color: "from-blue-500/80 to-blue-600/80" },
            { label: "Pvt Ltd", color: "from-slate-400/80 to-slate-500/80" },
            { label: "2022", color: "from-emerald-500/80 to-emerald-600/80" },
            { label: "B2B", color: "from-purple-500/80 to-purple-600/80" },
          ].map((fact, i) => (
            <div
              key={fact.label}
              className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-white/95 backdrop-blur border border-slate-200/80 shadow-sm text-xs font-semibold text-slate-800 hover:shadow-purple-200/50 ${fact.color}`}
            >
              <div className={`w-1.5 h-1.5 ${fact.color} rounded-full shadow-sm`} />
              <span>{fact.label}</span>
            </div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 8 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-2.5 justify-center"
        >
          <Link 
            href="/contact"
            className="px-6 py-2.5 bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600 text-white font-bold text-xs rounded-lg shadow-md shadow-purple-500/40 hover:shadow-purple-500/70 hover:-translate-y-px transition-all duration-300 uppercase tracking-wider"
          >
            Start Building
          </Link>
          <Link 
            href="/products"
            className="px-6 py-2.5 border-2 border-slate-200/70 text-slate-800 font-bold text-xs rounded-lg backdrop-blur hover:bg-white/60 hover:border-purple-300/60 hover:shadow-md transition-all duration-300 hover:-translate-y-px"
          >
            View Products
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
