import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'
import { experience } from '../data/content'

export default function Experience() {
  return (
    <section id="experience" className="bg-slate-50 py-24">
      <div className="section-container">
        <p className="eyebrow">Experience</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          7+ years delivering production Power Platform solutions
        </h2>

        <div className="mt-14 space-y-10 border-l-2 border-slate-200 pl-8 sm:pl-10">
          {experience.map((job, idx) => (
            <motion.div
              key={`${job.company}-${job.role}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: Math.min(idx, 4) * 0.05 }}
              className="relative"
            >
              <span className="absolute -left-[2.55rem] top-1 flex h-7 w-7 items-center justify-center rounded-full bg-teal-500 text-white shadow-md sm:-left-[3.05rem]">
                <Briefcase size={14} />
              </span>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-bold text-slate-900">{job.role}</h3>
                  <span className="text-sm font-medium text-teal-600">{job.period}</span>
                </div>
                <p className="mt-1 text-sm font-medium text-slate-500">
                  {job.company} · {job.location}
                </p>
                <ul className="mt-4 space-y-2">
                  {job.points.map((point) => (
                    <li key={point} className="flex gap-2 text-sm leading-relaxed text-slate-600">
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal-400" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
