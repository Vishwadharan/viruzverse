import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CRM & ERP - Viruzverse',
  description: 'Next-generation CRM and ERP systems with AI insights',
};

export default function CRMERPPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-24 px-4 sm:px-8 lg:px-10 bg-gradient-to-br from-blue-600 via-indigo-500 to-purple-600 text-white">
        <div className="max-w-[1280px] mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            CRM & ERP
          </h1>
          <p className="text-2xl md:text-3xl opacity-90 max-w-3xl mx-auto leading-relaxed">
            Unified customer & enterprise platform powered by AI analytics.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-4 sm:px-8 lg:px-10">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Customer 360°</h3>
              <p className="text-gray-600">Complete customer view across all touchpoints.</p>
            </div>
            <div className="text-center p-8">
              <div className="w-20 h-20 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Predictions</h3>
              <p className="text-gray-600">Predict customer behavior & optimize operations.</p>
            </div>
            <div className="text-center p-8">
              <div className="w-20 h-20 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4S17.21 3 16 3 8 4.79 8 7m0-4v10" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Seamless Integration</h3>
              <p className="text-gray-600">Connects with all your existing systems.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 sm:px-8 lg:px-10 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Upgrade Your Systems</h2>
          <p className="text-xl mb-8 opacity-90">Transform your operations with intelligent CRM & ERP.</p>
          <a href="/contact" className="inline-flex items-center gap-3 px-8 py-4 bg-white text-blue-600 text-lg font-bold rounded-2xl hover:bg-gray-50 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 shadow-2xl">
            Get Demo <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
        </div>
      </section>
    </main>
  );
}
