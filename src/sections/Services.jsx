import { motion } from 'framer-motion'

const services = [
  'Fullstack development',
  'Responsive websites',
  'React applications',
  'UI/UX design',
  'Landing pages',
  'Interactive web experiences',
]

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-[1400px] px-6 py-24 md:px-12">
      <p className="font-body text-xs text-dim">What she can build</p>
      <ul className="mt-6 border-t border-white/10">
        {services.map((s, i) => (
          <motion.li
            key={s}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.5, delay: i * 0.04 }}
            className="group flex items-center justify-between border-b border-white/10 py-6 transition-colors hover:bg-raised/30"
          >
            <span className="font-display text-2xl text-paper transition-colors group-hover:text-cyan md:text-4xl">
              {s}
            </span>
            <span className="font-body text-sm text-dim opacity-0 transition-opacity group-hover:opacity-100">
              0{i + 1}
            </span>
          </motion.li>
        ))}
      </ul>
    </section>
  )
}
