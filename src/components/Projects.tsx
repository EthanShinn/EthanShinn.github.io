import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { profile, projects } from '../data/content'

export default function Projects() {
  const [openIdx, setOpenIdx] = useState<number | null>(null)

  return (
    <section id="projects" className="bg-slate-50 py-24">
      <div className="section-container">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Selected Work</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Projects & Solutions
            </h2>
          </div>
          <a
            href={profile.portfolioUrl}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-semibold text-teal-600 hover:text-teal-700"
          >
            Download full portfolio (PDF) →
          </a>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {projects.map((project, idx) => {
            const isOpen = openIdx === idx
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: (idx % 4) * 0.05 }}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <h3 className="text-lg font-bold text-slate-900">{project.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{project.description}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full bg-teal-500/10 px-3 py-1 text-xs font-medium text-teal-700"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="mt-5 flex items-center gap-1.5 text-sm font-semibold text-slate-700 hover:text-teal-600"
                  aria-expanded={isOpen}
                >
                  {isOpen ? 'Hide outcomes' : 'View outcomes'}
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                {isOpen && (
                  <motion.ul
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="mt-4 space-y-2 overflow-hidden border-t border-slate-100 pt-4"
                  >
                    {project.highlights.map((point) => (
                      <li key={point} className="flex gap-2 text-sm leading-relaxed text-slate-600">
                        <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal-400" />
                        {point}
                      </li>
                    ))}
                  </motion.ul>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
