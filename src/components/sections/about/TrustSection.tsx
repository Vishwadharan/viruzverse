export default function TrustSection() {
  return (
    <section className="px-6 py-24 max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
      <div className="space-y-4 text-center md:text-left">
        <div className="text-5xl font-black text-emerald-600">10,000+</div>
        <h3 className="text-2xl font-bold text-slate-900">Daily Transactions</h3>
        <p className="text-slate-600 text-sm">Production systems</p>
      </div>
      <div className="space-y-4 text-center md:text-left">
        <div className="text-5xl font-black text-purple-600">99.98%</div>
        <h3 className="text-2xl font-bold text-slate-900">Uptime SLA</h3>
        <p className="text-slate-600 text-sm">Enterprise reliability</p>
      </div>
    </section>
  );
}
