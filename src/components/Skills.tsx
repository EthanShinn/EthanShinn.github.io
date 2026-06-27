import { motion } from 'framer-motion'
import { BrainCircuit, Database, Layers, Plug, ShieldCheck, type LucideIcon } from 'lucide-react'
import { skills } from '../data/content'

const ICONS: Record<string, LucideIcon> = {
  'Power Platform Development': Layers,
  'AI & Solution Architecture': BrainCircuit,
  'Integration & Automation': Plug,
  'Data & Analytics': Database,
  'Governance & Delivery': ShieldCheck,
}

export default function Skills() {
  return (
    <section id="skills" className="bg-white py-24">
      <div className="section-container">
        <p className="eyebrow">Skills & Tools</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          A full-stack low-code toolkit, AI-ready
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, idx) => {
            const Icon = ICONS[group.category] ?? Layers
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: idx * 0.05 }}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6 transition-shadow hover:shadow-md"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-500/10 text-teal-600">
                  <Icon size={22} />
                </div>
                <h3 className="mt-4 text-base font-bold text-slate-900">{group.category}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-600 ring-1 ring-slate-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
