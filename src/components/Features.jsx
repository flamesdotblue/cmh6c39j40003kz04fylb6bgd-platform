import React from 'react';
import { motion } from 'framer-motion';
import { Book, ShieldCheck, BarChart3, Zap } from 'lucide-react';

const features = [
  {
    icon: Book,
    title: 'Fast trade capture',
    desc: 'Log entries and exits in seconds with pair, session, risk, and screenshots. Never miss a detail again.',
  },
  {
    icon: BarChart3,
    title: 'Deep performance analytics',
    desc: 'Break down win rate, R-multiples, and expectancy by pair, session, setup, and more with clean visuals.',
  },
  {
    icon: ShieldCheck,
    title: 'Risk-first journaling',
    desc: 'Position sizing helpers and RR tracking keep your focus on process and protection, not just outcomes.',
  },
  {
    icon: Zap,
    title: 'Automation friendly',
    desc: 'Import from MetaTrader, cTrader, or CSV. Auto-tag rules reduce manual work and errors.',
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: 0.08 * i, duration: 0.4 } }),
};

const Features = () => {
  return (
    <section id="features" className="max-w-7xl mx-auto mt-20 sm:mt-28">
      <div className="text-center">
        <h2 className="text-2xl sm:text-3xl font-bold">Built for disciplined forex traders</h2>
        <p className="mt-3 text-slate-300 max-w-2xl mx-auto">
          Journal with speed, analyze with confidence, and iterate on your edge. Everything you need, nothing you don’t.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            custom={i}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="rounded-2xl border border-slate-800/80 bg-slate-900/60 p-5 hover:border-slate-700 transition"
          >
            <div className="h-10 w-10 rounded-xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center">
              <f.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-semibold text-lg">{f.title}</h3>
            <p className="mt-2 text-sm text-slate-300">{f.desc}</p>
          </motion.div>
        ))}
      </div>

      <div id="how" className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {["Log","Tag","Review"].map((step, i) => (
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05 * i }}
            className="rounded-2xl border border-slate-800/80 bg-gradient-to-br from-slate-900 to-slate-950 p-6"
          >
            <div className="text-xs font-semibold text-emerald-400/90">Step {i + 1}</div>
            <div className="mt-1 text-xl font-bold">{step} your trades</div>
            <p className="mt-2 text-slate-300 text-sm">
              {i === 0 && 'Capture entry, stop, target, and setup in seconds. Attach screenshots and notes.'}
              {i === 1 && 'Tag by pair, session, strategy, and market condition to spot patterns faster.'}
              {i === 2 && 'Track KPIs like expectancy, MAE/MFE, and RR to refine your edge week over week.'}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;
