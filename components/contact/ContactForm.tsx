'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-3xl p-8 lg:p-12 border border-gray-100 shadow-2xl flex flex-col items-center justify-center min-h-[400px] text-center">
        <div className="w-24 h-24 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full flex items-center justify-center mb-8 shadow-2xl">
          <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-3xl font-black text-gray-900 mb-4">Message Sent!</h3>
        <p className="text-xl text-gray-600 mb-8">We'll get back to you within 24 hours.</p>
        <button
          onClick={() => setSubmitted(false)}
          className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-2xl hover:scale-[1.02] transition-all duration-300 shadow-xl"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl p-8 lg:p-12 border border-gray-100 shadow-2xl">
      <h2 className="text-3xl font-black text-gray-900 mb-2">Send a Message</h2>
      <p className="text-gray-500 text-lg mb-10">We'll get back to you within 24 hours.</p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Full Name *</label>
            <input
              type="text"
              required
              placeholder="Your full name"
              className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500 focus:bg-white transition-all duration-300"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Email *</label>
            <input
              type="email"
              required
              placeholder="your@email.com"
              className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all duration-300"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
          <input
            type="tel"
            placeholder="+91 00000 00000"
            className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 focus:bg-white transition-all duration-300"
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">Service Interested In</label>
          <select className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl text-gray-900 focus:outline-none focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500 focus:bg-white transition-all duration-300">
            <option value="">Select a service...</option>
            <option>AI Automation</option>
            <option>CRM & ERP Systems</option>
            <option>Custom Projects</option>
            <option>Custom SaaS</option>
            <option>EdTech Solutions</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">Your Message *</label>
          <textarea
            required
            rows={5}
            placeholder="Describe your project, timeline, and budget..."
            className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 focus:bg-white transition-all duration-300 resize-none"
          />
        </div>

        <button
          type="submit"
          className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:from-purple-700 hover:via-indigo-700 hover:to-blue-700 text-white py-5 rounded-2xl text-lg font-black shadow-2xl hover:shadow-purple-500/30 hover:scale-[1.02] transition-all duration-300"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
          Send Message
        </button>
      </form>
    </div>
  );
}
