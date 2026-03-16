import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service - Viruzverse',
  description: 'Terms of service and legal agreements',
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="pt-32 pb-24 px-4 sm:px-8 lg:px-10 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Terms of Service
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto leading-relaxed">
            Legal agreements governing our services and your usage rights.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 px-4 sm:px-8 lg:px-10">
        <div className="max-w-4xl mx-auto prose prose-lg max-w-none">
          <div className="bg-white rounded-3xl shadow-xl border border-gray-200 p-12 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 border-b border-gray-200 pb-6">
              Service Agreement
            </h2>
            <div className="space-y-8 text-gray-700 leading-relaxed">
              <p>
                <strong>Effective Date:</strong> March 15, 2026
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-4">1. Services Provided</h3>
              <p>
                Viruzverse provides AI-powered automation, CRM/ERP systems, custom SaaS platforms, 
                and EdTech solutions. All services are delivered as described in our service pages.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-4">2. Payment Terms</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Projects billed 50% upfront, 50% on delivery</li>
                <li>SaaS subscriptions monthly/annual</li>
                <li>All payments via secure payment gateways</li>
                <li>30-day payment terms for enterprise clients</li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-4">3. Intellectual Property</h3>
              <p>
                Client owns final deliverables. Viruzverse retains rights to reusable frameworks 
                and retains portfolio rights for case studies (with approval).
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-4">4. Confidentiality</h3>
              <p>
                All client data protected under strict NDA. We never share or sell your information.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-4">5. Support & Warranty</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>90-day bug fix warranty on custom projects</li>
                <li>24/7 priority support for SaaS customers</li>
                <li>99.9% uptime SLA for production systems</li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-4">6. Termination</h3>
              <p>
                Either party may terminate with 30 days written notice. SaaS subscriptions 
                require 60 days notice. Outstanding payments remain due.
              </p>

              <div className="border-t border-gray-200 pt-8 mt-12">
                <p className="text-sm text-gray-500 mb-4">
                  Last Updated: March 15, 2026
                </p>
                <p className="text-gray-700">
                  Questions? <a href="/contact" className="text-blue-600 hover:underline font-semibold">Contact Legal</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 sm:px-8 lg:px-10 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Work Together?</h2>
          <p className="text-xl mb-8 opacity-90">Let's discuss your project requirements.</p>
          <a href="/contact" className="inline-flex items-center gap-3 px-8 py-4 bg-white text-gray-900 text-lg font-bold rounded-2xl hover:bg-gray-100 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 shadow-2xl">
            Start Project <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
        </div>
      </section>
    </main>
  );
}
