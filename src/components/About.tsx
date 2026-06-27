import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import { aboutSummary, education, profile, stats } from '../data/content'

export default function About() {
  const initials = profile.name
    .split(' ')
    .map((p) => p[0])
    .slice(0, 2)
    .join('')

  return (
    <section id="about" className="bg-white py-24">
      <div className="section-container">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="eyebrow"
        >
          About
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
        >
          Bridging low-code automation with applied AI
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="flex h-40 w-40 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-900 to-teal-600 text-4xl font-bold text-white shadow-lg">
              {initials}
            </div>

            <div className="mt-8 flex items-center gap-3 text-slate-700">
              <GraduationCap size={22} className="text-teal-600" />
              <div>
                <p className="font-semibold">{education.degree}</p>
                <p className="text-sm text-slate-500">
                  {education.school} · {education.honors}
                </p>
              </div>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-extrabold text-slate-900">{stat.value}</p>
                  <p className="mt-1 text-xs leading-snug text-slate-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-5 text-lg leading-relaxed text-slate-600 lg:col-span-2"
          >
            {aboutSummary.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
