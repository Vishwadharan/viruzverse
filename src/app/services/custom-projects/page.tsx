import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Custom Projects - Viruzverse',
  description: 'Bespoke AI solutions tailored for your business',
};

export default function CustomProjectsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-24 px-4 sm:px-8 lg:px-10 bg-gradient-to-br from-emerald-600 via-green-500 to-teal-600 text-white">
        <div className="max-w-[1280px] mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Custom Projects
          </h1>
          <p className="text-2xl md:text-3xl opacity-90 max-w-3xl mx-auto leading-relaxed">
            Bespoke AI solutions designed specifically for your unique business challenges.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-4 sm:px-8 lg:px-10">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <div className="w-20 h-20 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Tailor-Made</h3>
              <p className="text-gray-600">Built exactly for your requirements.</p>
            </div>
            <div className="text-center p-8">
              <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">End-to-End</h3>
              <p className="text-gray-600">From concept to production & support.</p>
            </div>
            <div className="text-center p-8">
              <div className="w-20 h-20 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364a4.5 4.5 0 006.364 0" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Future-Proof</h3>
              <p className="text-gray-600">Scalable architecture for growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 sm:px-8 lg:px-10 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Your Vision, Our Expertise</h2>
          <p className="text-xl mb-8 opacity-90">Let's build something extraordinary together.</p>
          <a href="/contact" className="inline-flex items-center gap-3 px-8 py-4 bg-white text-emerald-600 text-lg font-bold rounded-2xl hover:bg-gray-50 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 shadow-2xl">
            Start Custom Project <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
        </div>
      </section>
    </main>
  );
}
