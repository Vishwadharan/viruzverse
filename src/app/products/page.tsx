// src/app/products/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import { Zap, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Products | Viruzverse",
  description:
    "Explore Viruzverse's innovative products built to power modern businesses — starting with CafeAura, our smart cafe management platform.",
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white">

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-20 px-4">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-600/10 rounded-full blur-3xl" />
        </div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            Our Products
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Built to{" "}
            <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent">
              Power Businesses
            </span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Viruzverse crafts intelligent software products that solve real-world challenges —
            designed with precision, engineered for scale.
          </p>
        </div>
      </section>

      {/* Product Card — CafeAura only */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <div className="group relative rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md overflow-hidden shadow-2xl shadow-purple-500/25 hover:border-purple-500/40 transition-all duration-500">
          
          {/* Top gradient bar */}
          <div className="h-1 w-full bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600" />

          <div className="p-8 md:p-12">
            {/* Badge + Status */}
            <div className="flex items-center gap-3 mb-5 flex-wrap">
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                SaaS Platform
              </span>
              <span className="flex items-center gap-1.5 text-xs text-gray-400">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Live
              </span>
            </div>

            {/* Name & Tagline */}
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              <span className="bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
                CafeAura
              </span>
            </h2>
            <p className="text-gray-300 font-medium mb-4">
              Smart Cafe Management, Reimagined
            </p>
            <p className="text-gray-400 leading-relaxed max-w-2xl mb-8">
              CafeAura is a next-generation SaaS platform designed for modern cafes and
              restaurants. Manage orders, inventory, staff, and analytics — all from one
              beautiful dashboard.
            </p>

            {/* Features */}
            <ul className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
              {[
                "POS & Order Management",
                "Real-time Inventory",
                "Staff Scheduling",
                "Revenue Analytics",
              ].map((f) => (
                <li
                  key={f}
                  className="flex items-center gap-2 text-sm text-gray-300 bg-white/5 border border-white/10 rounded-xl px-4 py-3"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <Link
              href="/products/cafeaura"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 text-white font-semibold text-sm hover:opacity-90 hover:gap-3 transition-all duration-300 shadow-lg"
            >
              Explore CafeAura
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Coming Soon Teaser */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <div className="rounded-3xl border border-dashed border-white/10 bg-white/[0.02] p-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-400 text-sm font-medium mb-4">
            <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
            More Coming Soon
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">
            More products are on the way
          </h3>
          <p className="text-gray-500 max-w-md mx-auto text-sm">
            We&apos;re actively building new tools and platforms. Stay tuned for
            upcoming launches from Viruzverse.
          </p>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="pb-28 px-4">
        <div className="max-w-3xl mx-auto text-center bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-12">
          <h2 className="text-3xl font-bold mb-4">
            Have a{" "}
            <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
              custom product
            </span>{" "}
            in mind?
          </h2>
          <p className="text-gray-400 mb-8">
            We build tailored SaaS products from scratch. Tell us your idea and
            we&apos;ll bring it to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold hover:opacity-90 transition-all duration-300 shadow-lg shadow-purple-500/25"
            >
              Start a Project <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/services/custom-saas"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-2xl bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 transition-all duration-300"
            >
              View Custom SaaS Services
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
