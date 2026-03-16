import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "404 — Page Not Found" };

export default function NotFound() {
  return (
    <main className="min-h-[70vh] flex items-center justify-center relative overflow-hidden px-6">
      <div className="absolute inset-0 pointer-events-none bg-mesh-hero opacity-60" />
      <div className="relative z-10 text-center max-w-md">
        <p className="text-8xl font-black text-brand-violet/20 font-mono mb-2">404</p>
        <h1 className="text-3xl lg:text-5xl font-extrabold text-text-primary mb-4">Page not found.</h1>
        <p className="text-text-secondary mb-8 leading-relaxed">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="btn-primary">Go home</Link>
          <Link href="/contact" className="btn-secondary">Contact us</Link>
        </div>
      </div>
    </main>
  );
}
