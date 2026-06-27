import { motion } from 'framer-motion'
import { Award } from 'lucide-react'
import { certifications } from '../data/content'

export default function Certifications() {
  return (
    <section id="certifications" className="bg-white py-24">
      <div className="section-container">
        <p className="eyebrow">Credentials</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Certifications
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: idx * 0.05 }}
              className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5 transition-shadow hover:shadow-md"
            >
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-teal-500/10 text-teal-600">
                <Award size={20} />
              </div>
              <div>
                <p className="font-semibold text-slate-900">{cert.name}</p>
                <p className="mt-1 text-sm text-slate-500">
                  {cert.issuer} · {cert.date}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
