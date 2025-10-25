import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const CTA = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;
    setSubmitted(true);
  };

  return (
    <section id="cta" className="max-w-3xl mx-auto mt-20 sm:mt-28 text-center">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="rounded-3xl border border-slate-800 bg-gradient-to-br from-emerald-600/10 via-slate-900 to-slate-950 p-8 sm:p-10"
      >
        <h3 className="text-2xl sm:text-3xl font-bold">Get early access</h3>
        <p className="mt-3 text-slate-300">
          Be the first to try PipPilot Journal. We’ll notify you when invites open and share setup guides.
        </p>

        {!submitted ? (
          <form onSubmit={onSubmit} className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full sm:w-80 rounded-xl bg-slate-950/70 border border-slate-800 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-slate-700"
              required
            />
            <button
              type="submit"
              className="rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold px-6 py-3 transition shadow-lg shadow-emerald-600/30"
            >
              Join the waitlist
            </button>
          </form>
        ) : (
          <div className="mt-6 inline-flex items-center gap-2 text-emerald-400 font-medium">
            <CheckCircle className="h-5 w-5" />
            You’re on the list! We’ll be in touch soon.
          </div>
        )}

        <div className="mt-5 text-xs text-slate-400">
          We respect your time and privacy. No spam.
        </div>
      </motion.div>
    </section>
  );
};

export default CTA;
