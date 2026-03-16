'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html>
      <body className="min-h-screen bg-gradient-to-br from-purple-50 via-rose-50 to-pink-50 flex items-center justify-center p-8">
        <div className="max-w-2xl w-full space-y-8">
          {/* Error Card */}
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 p-12 text-center">
            <div className="w-28 h-28 bg-gradient-to-r from-rose-400 via-pink-400 to-purple-500 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl">
              <svg className="w-14 h-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-gray-900 via-rose-900 to-purple-900 bg-clip-text text-transparent mb-4 tracking-tight">
              Oops!
            </h1>
            
            <p className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
              Something went wrong
            </p>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-2xl mx-auto">
              Don't worry, our team is already working on it. 
              Try refreshing or head back home.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
              <button
                onClick={() => reset()}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-5 px-8 rounded-2xl text-xl font-bold shadow-2xl hover:shadow-3xl hover:scale-[1.02] transition-all duration-300"
              >
                Try Again
              </button>
              
              <Link
                href="/"
                className="bg-white/90 backdrop-blur-sm hover:bg-white text-gray-900 py-5 px-8 rounded-2xl text-xl font-bold border-2 border-gray-200 hover:border-gray-300 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 flex items-center justify-center"
              >
                Go Home
              </Link>
            </div>
            
            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                Need help? <a href="/contact" className="text-purple-600 hover:underline font-semibold">Contact Support</a>
              </p>
              <p className="text-xs text-gray-400 mt-2">
                Error ID: <code className="bg-gray-100 px-3 py-1 rounded font-mono">{error.digest}</code>
              </p>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-purple-200/30 to-blue-200/30 rounded-full blur-3xl -z-10 animate-pulse" />
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-r from-rose-200/20 to-pink-200/20 rounded-full blur-3xl -z-10 animate-pulse delay-1000" />
        </div>
      </body>
    </html>
  );
}
