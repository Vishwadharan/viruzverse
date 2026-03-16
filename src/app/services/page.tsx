import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Services - Viruzverse',
  description: 'AI Automation, CRM-ERP, Custom SaaS, EdTech & more',
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-24 px-4 sm:px-8 lg:px-10 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
        <div className="max-w-[1280px] mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 via-purple-900 to-blue-900 bg-clip-text text-transparent mb-6">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Cutting-edge AI solutions across automation, enterprise systems, 
            custom SaaS, and EdTech innovation.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-4 sm:px-8 lg:px-10">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* AI Automation */}
            <Link href="/services/ai-automation" className="group">
              <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 border border-white/50 hover:border-purple-200/50 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 hover:-translate-y-2 h-full">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                  AI Automation
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Intelligent process automation that works 24/7.
                </p>
              </div>
            </Link>

            {/* CRM-ERP */}
            <Link href="/services/crm-erp" className="group">
              <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 border border-white/50 hover:border-purple-200/50 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 hover:-translate-y-2 h-full">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  CRM & ERP
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Next-gen enterprise systems with AI insights.
                </p>
              </div>
            </Link>

            {/* Custom Projects */}
            <Link href="/services/custom-projects" className="group">
              <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 border border-white/50 hover:border-purple-200/50 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 hover:-translate-y-2 h-full">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors">
                  Custom Projects
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Bespoke AI solutions for unique challenges.
                </p>
              </div>
            </Link>

            {/* Custom SaaS */}
            <Link href="/services/custom-saas" className="group">
              <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 border border-white/50 hover:border-purple-200/50 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 hover:-translate-y-2 h-full">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">
                  Custom SaaS
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Scalable SaaS platforms powered by AI.
                </p>
              </div>
            </Link>

            {/* EdTech Solutions */}
            <Link href="/services/edtech-solutions" className="group">
              <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 border border-white/50 hover:border-purple-200/50 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 hover:-translate-y-2 h-full">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
                  EdTech Solutions
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  AI-powered learning & education platforms.
                </p>
              </div>
            </Link>

            {/* Terms of Service */}
            <Link href="/services/terms-of-service" className="group">
              <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 border border-white/50 hover:border-purple-200/50 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 hover:-translate-y-2 h-full">
                <div className="w-16 h-16 bg-gradient-to-r from-gray-500 to-gray-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-600 transition-colors">
                  Terms of Service
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Service agreements & legal documentation.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 sm:px-8 lg:px-10 bg-gradient-to-br from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Explore our services or book a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="/contact" className="px-8 py-4 bg-white text-purple-600 text-lg font-bold rounded-2xl hover:bg-gray-50 hover:shadow-2xl hover:scale-105 transition-all duration-300 shadow-xl">
              Book Consultation
            </a>
            <a href="/services/ai-automation" className="px-8 py-4 border-2 border-white/30 text-white text-lg font-bold rounded-2xl hover:bg-white/10 hover:scale-105 transition-all duration-300">
              View All Services
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
