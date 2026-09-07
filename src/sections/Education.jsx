import { motion } from 'framer-motion'

const certifications = [
  'Frontend Development (React Track) — DEPI',
  'UI/UX Design — NTI',
  'Getting Started with Deep Learning — NVIDIA',
  'ICDL',
]

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-[1400px] px-6 pb-12 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7 }}
        className="flex flex-col justify-between gap-8 border-t border-white/10 py-14 md:flex-row md:items-end"
      >
        <div>
          <p className="font-body text-xs text-dim">Education</p>
          <h3 className="mt-3 font-display text-3xl text-paper md:text-4xl">Menofia University</h3>
          <p className="mt-2 font-body text-sm text-dim">
            Bachelor of Computers and Information, Computer Science — 2024–2028
          </p>
          <p className="mt-1 font-body text-sm text-dim">
            72 of 144 credit hours completed (4 semesters, 50% of the program)
          </p>
        </div>
        <div className="text-left md:text-right">
          <p className="font-display text-4xl text-cyan">92.75%</p>
          <p className="mt-1 font-body text-xs text-dim">Cumulative GPA — Excellent</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="flex flex-wrap gap-3 pb-14"
      >
        {certifications.map((c) => (
          <span key={c} className="rounded-full border border-white/10 px-4 py-2 font-body text-xs text-dim">
            {c}
          </span>
        ))}
      </motion.div>
    </section>
  )
}
