export default function MissionVision() {
  return (
    <section className="px-6 py-32 max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-100/80 to-teal-100/80 rounded-2xl text-emerald-700 border border-emerald-200/60 backdrop-blur-sm font-bold text-sm w-fit">
            Our Mission
          </div>
          <h2 className="text-4xl md:text-5xl font-black leading-tight">
            Enterprise transformation through intelligent software
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
            From Tamil Nadu, we engineer SaaS platforms that automate operations, 
            predict outcomes with 85% accuracy, and scale 10x without infrastructure costs.
          </p>
          <div className="grid grid-cols-2 gap-8 pt-8 border-t border-slate-200/60">
            <div className="space-y-3 text-center md:text-left">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center shadow-lg mx-auto md:mx-0">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h4 className="font-bold text-lg text-slate-900">Full-Stack</h4>
              <p className="text-slate-600 text-sm">End-to-end delivery</p>
            </div>
            <div className="space-y-3 text-center md:text-left">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg mx-auto md:mx-0">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h4 className="font-bold text-lg text-slate-900">Results</h4>
              <p className="text-slate-600 text-sm">ROI guaranteed</p>
            </div>
          </div>
        </div>
        <div className="bg-white/80 border border-slate-200/70 backdrop-blur-xl rounded-3xl p-12 shadow-2xl">
          <h3 className="text-3xl font-black mb-6 text-slate-900 text-center">Tamil Nadu, India</h3>
          <p className="text-center text-slate-600 text-lg font-medium">contact@viruzverse.in</p>
        </div>
      </div>
    </section>
  );
}
