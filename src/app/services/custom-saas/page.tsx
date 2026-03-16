import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Custom SaaS - Viruzverse',
  description: 'Scalable SaaS platforms powered by AI',
};

export default function CustomSaaSPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-24 px-4 sm:px-8 lg:px-10 bg-gradient-to-br from-orange-500 via-red-400 to-pink-500 text-white">
        <div className="max-w-[1280px] mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Custom SaaS
          </h1>
          <p className="text-2xl md:text-3xl opacity-90 max-w-3xl mx-auto leading-relaxed">
            Build scalable SaaS platforms with AI-powered features and global reach.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-4 sm:px-8 lg:px-10">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <div className="w-20 h-20 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Multi-Tenant</h3>
              <p className="text-gray-600">Serve unlimited customers securely.</p>
            </div>
            <div className="text-center p-8">
              <div className="w-20 h-20 bg-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Features</h3>
              <p className="text-gray-600">Intelligent capabilities built-in.</p>
            </div>
            <div className="text-center p-8">
              <div className="w-20 h-20 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Global Scale</h3>
              <p className="text-gray-600">Cloud-native & enterprise ready.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 sm:px-8 lg:px-10 bg-gradient-to-r from-orange-500 to-pink-500 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Launch Your SaaS</h2>
          <p className="text-xl mb-8 opacity-90">From MVP to enterprise platform.</p>
          <a href="/contact" className="inline-flex items-center gap-3 px-8 py-4 bg-white text-orange-600 text-lg font-bold rounded-2xl hover:bg-gray-50 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 shadow-2xl">
            Build SaaS <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
        </div>
      </section>
    </main>
  );
}
