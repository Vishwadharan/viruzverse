import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Automation - Viruzverse',
  description: 'Intelligent process automation solutions',
};

export default function AIAutomationPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-24 px-4 sm:px-8 lg:px-10 bg-gradient-to-br from-purple-600 via-purple-500 to-indigo-600 text-white">
        <div className="max-w-[1280px] mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            AI Automation
          </h1>
          <p className="text-2xl md:text-3xl opacity-90 max-w-3xl mx-auto leading-relaxed">
            Automate repetitive tasks with intelligent AI agents that work 24/7.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-4 sm:px-8 lg:px-10">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <div className="w-20 h-20 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">80% Faster</h3>
              <p className="text-gray-600">Reduce processing time dramatically.</p>
            </div>
            <div className="text-center p-8">
              <div className="w-20 h-20 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">99.9% Uptime</h3>
              <p className="text-gray-600">Enterprise-grade reliability guaranteed.</p>
            </div>
            <div className="text-center p-8">
              <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364a4.5 4.5 0 006.364 0" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Scalable</h3>
              <p className="text-gray-600">Grows with your business needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 sm:px-8 lg:px-10 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Automate?</h2>
          <p className="text-xl mb-8 opacity-90">Get a free automation audit.</p>
          <a href="/contact" className="inline-flex items-center gap-3 px-8 py-4 bg-white text-purple-600 text-lg font-bold rounded-2xl hover:bg-gray-50 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 shadow-2xl">
            Start Automation <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
        </div>
      </section>
    </main>
  );
}
