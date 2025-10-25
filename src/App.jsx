import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <Navbar />
      <main className="px-4 sm:px-6 lg:px-8">
        <Hero />
        <Features />
        <CTA />
      </main>
      <footer className="border-t border-slate-800/60 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-sm">
          <p>© {new Date().getFullYear()} PipPilot Journal. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#features" className="hover:text-slate-200 transition">Features</a>
            <a href="#pricing" className="hover:text-slate-200 transition">Pricing</a>
            <a href="#contact" className="hover:text-slate-200 transition">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
