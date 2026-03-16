import ContactForm from '@/components/contact/ContactForm';

export const metadata = {
  title: 'Contact Us - Viruzverse',
  description: 'Get in touch with Viruzverse Solutions',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-24 px-4 sm:px-8 lg:px-10 bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-700 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        <div className="max-w-[1280px] mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-8 border border-white/30">
            <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
            </svg>
            <span className="text-lg font-semibold">Let's Build Something Great</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">Get In Touch</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto leading-relaxed">
            Let's discuss your AI project. Book a free consultation today.
          </p>
        </div>
      </section>

      {/* Main Section */}
      <section className="py-24 px-4 sm:px-8 lg:px-10 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-[1280px] mx-auto grid lg:grid-cols-2 gap-16 items-start">

          {/* Left — Contact Info */}
          <div className="space-y-6 lg:sticky lg:top-24">
            <div>
              <h2 className="text-4xl font-black text-gray-900 mb-3">Contact Details</h2>
              <p className="text-xl text-gray-600">We're always happy to hear from you.</p>
            </div>

            {/* Company Card */}
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl">
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-black text-gray-900">Viruzverse</h3>
                  <p className="text-gray-500 font-medium">Viruzverse Solutions Private Limited</p>
                </div>
              </div>
            </div>

            {/* Email */}
            <a href="mailto:contact@viruzverse.in" className="group flex items-center gap-5 bg-white rounded-3xl p-6 border border-gray-100 shadow-xl hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1 hover:border-blue-100 transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">Email Us</p>
                <p className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">contact@viruzverse.in</p>
              </div>
              <svg className="w-5 h-5 text-gray-400 ml-auto group-hover:text-blue-500 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>

            {/* Phone */}
            <a href="tel:+918300262005" className="group flex items-center gap-5 bg-white rounded-3xl p-6 border border-gray-100 shadow-xl hover:shadow-2xl hover:shadow-emerald-500/10 hover:-translate-y-1 hover:border-emerald-100 transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-r from-emerald-500 to-green-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">Call Us</p>
                <p className="text-lg font-bold text-gray-900 group-hover:text-emerald-600 transition-colors">+91 83002 62005</p>
              </div>
              <svg className="w-5 h-5 text-gray-400 ml-auto group-hover:text-emerald-500 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>

            {/* Address */}
            <div className="flex items-start gap-5 bg-white rounded-3xl p-6 border border-gray-100 shadow-xl">
              <div className="w-14 h-14 bg-gradient-to-r from-gray-600 to-gray-700 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">Visit Us</p>
                <p className="text-lg font-bold text-gray-900">Coimbatore, Tamil Nadu</p>
                <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                  1274, Mettupalayam Rd,<br />
                  Saibaba Colony,<br />
                  Coimbatore — 641038
                </p>
              </div>
            </div>
          </div>

          {/* Right — Form (Client Component) */}
          <ContactForm />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 px-4 sm:px-8 lg:px-10 bg-gradient-to-br from-purple-600 to-blue-700 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-6">Prefer a Quick Call?</h2>
          <p className="text-xl opacity-90 mb-10">Skip the form and call us directly.</p>
          <a href="tel:+918300262005" className="inline-flex items-center gap-3 bg-white text-purple-700 font-black text-xl px-10 py-5 rounded-2xl shadow-2xl hover:scale-[1.03] transition-all duration-300">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            +91 83002 62005
          </a>
        </div>
      </section>
    </main>
  );
}
