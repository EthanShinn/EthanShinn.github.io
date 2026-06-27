import { motion } from 'framer-motion'
import { Download, Mail, MapPin } from 'lucide-react'
import { profile } from '../data/content'
import LinkedinIcon from './icons/LinkedinIcon'

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-slate-950 py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -bottom-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-teal-500/15 blur-3xl" />
      </div>

      <div className="section-container relative z-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm font-semibold uppercase tracking-[0.25em] text-teal-400"
        >
          Let's Build Together
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="mx-auto mt-4 max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl"
        >
          Open to Solution Architect & AI Enablement roles
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mx-auto mt-4 max-w-xl text-slate-300"
        >
          Whether it's architecting a new Power Platform solution or scoping how AI fits into your
          existing systems, I'd like to hear about it.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-full bg-teal-500 px-6 py-3 text-sm font-semibold text-slate-950 transition-transform hover:-translate-y-0.5 hover:bg-teal-400"
          >
            <Mail size={16} />
            {profile.email}
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-teal-400 hover:text-teal-300"
          >
            <LinkedinIcon size={16} />
            LinkedIn
          </a>
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-teal-400 hover:text-teal-300"
          >
            <Download size={16} />
            Resume
          </a>
        </motion.div>

        <div className="mt-8 flex items-center justify-center gap-2 text-sm text-slate-500">
          <MapPin size={14} />
          {profile.location}
        </div>
      </div>
    </section>
  )
}
