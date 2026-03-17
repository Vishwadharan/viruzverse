import Link from "next/link";

export default function AboutCTA() {
  return (
    <section className="px-6 py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-3xl mx-auto text-center bg-white/90 backdrop-blur-xl border border-slate-200/70 rounded-3xl p-12 shadow-2xl">
        <h2 className="text-3xl md:text-4xl font-black mb-6 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 bg-clip-text">
          Transform your business with SaaS
        </h2>
        <p className="text-lg text-slate-700 mb-10 font-medium">
          60% cost savings. Enterprise scale. Immediate ROI.
        </p>
        <Link 
          href="/contact"
          className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold text-base rounded-xl shadow-lg shadow-purple-500/40 hover:shadow-purple-500/60 hover:-translate-y-0.5 transition-all duration-300"
        >
          Build Your Platform →
        </Link>
      </div>
    </section>
  );
}
