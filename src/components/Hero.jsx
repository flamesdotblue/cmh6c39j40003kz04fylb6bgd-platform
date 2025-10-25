import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, BarChart3 } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative isolate max-w-7xl mx-auto pt-16 sm:pt-24 lg:pt-32">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-teal-400/10 blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-emerald-300 text-xs font-medium">
          <TrendingUp className="h-4 w-4" />
          Journal smarter. Trade better.
        </div>
        <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
          Your edge in the forex market starts with a better journal
        </h1>
        <p className="mt-5 max-w-2xl mx-auto text-slate-300 text-lg">
          PipPilot Journal helps you capture trades in seconds, analyze performance with clarity, and build repeatable strategies.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a href="#cta" className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold px-6 py-3 transition shadow-lg shadow-emerald-600/30">
            Start free
          </a>
          <a href="#features" className="inline-flex items-center gap-2 rounded-xl border border-slate-700 hover:border-slate-600 px-6 py-3 text-slate-200 transition">
            <BarChart3 className="h-5 w-5" />
            See features
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mt-14 sm:mt-16 lg:mt-20"
      >
        <div className="relative mx-auto max-w-6xl rounded-2xl border border-slate-800/80 bg-gradient-to-br from-slate-900 to-slate-950 p-3 shadow-2xl">
          <div className="rounded-xl bg-slate-950/60 p-4 sm:p-6 lg:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-slate-400">Win rate</div>
                  <div className="text-emerald-400 text-xs">Last 30 days</div>
                </div>
                <div className="mt-2 text-3xl font-bold">58.4%</div>
                <div className="mt-3 h-24 w-full rounded-lg bg-gradient-to-r from-emerald-500/20 to-teal-400/20 flex items-end">
                  <div className="w-1/6 h-[35%] bg-emerald-500/60" />
                  <div className="w-1/6 h-[55%] bg-emerald-500/60" />
                  <div className="w-1/6 h-[45%] bg-emerald-500/60" />
                  <div className="w-1/6 h-[70%] bg-emerald-500/60" />
                  <div className="w-1/6 h-[40%] bg-emerald-500/60" />
                  <div className="w-1/6 h-[75%] bg-emerald-500/60" />
                </div>
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-slate-400">Risk/Reward</div>
                  <div className="text-emerald-400 text-xs">Average</div>
                </div>
                <div className="mt-2 text-3xl font-bold">1 : 2.1</div>
                <div className="mt-3 h-24 w-full rounded-lg bg-slate-950/60 flex items-center justify-center">
                  <div className="h-1.5 w-4/5 bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full w-1/3 bg-rose-500/70" />
                  </div>
                </div>
              </div>
              <div className="lg:col-span-2 rounded-xl border border-slate-800 bg-slate-900/60 p-4">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-slate-400">Recent trades</div>
                  <div className="text-emerald-400 text-xs">Sample data</div>
                </div>
                <div className="mt-3 grid grid-cols-2 md:grid-cols-4 gap-3">
                  {['EURUSD','GBPUSD','XAUUSD','USDJPY'].map((pair, i) => (
                    <div key={pair} className="rounded-lg border border-slate-800 bg-slate-950/60 p-3">
                      <div className="text-xs text-slate-400">{pair}</div>
                      <div className={`mt-1 text-lg font-semibold ${i % 2 === 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                        {i % 2 === 0 ? '+42 pips' : '-18 pips'}
                      </div>
                      <div className="mt-2 h-1 w-full bg-slate-800 rounded">
                        <div className={`h-1 rounded ${i % 2 === 0 ? 'bg-emerald-500 w-2/3' : 'bg-rose-500 w-1/4'}`} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
