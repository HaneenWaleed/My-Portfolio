import { motion } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'

const channels = [
  { label: 'Email', value: 'haneenwalid084@gmail.com', href: 'mailto:haneenwalid084@gmail.com' },
  { label: 'WhatsApp', value: '+20 103 336 7041', href: 'https://wa.me/201033367041', external: true },
  { label: 'LinkedIn', value: 'in/haneen-waleed-abedlwahed', href: 'https://linkedin.com/in/haneen-waleed-abedlwahed' },
  { label: 'GitHub', value: '@HaneenWaleed', href: 'https://github.com/HaneenWaleed' },
]

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[30rem] w-[40rem] -translate-x-1/2 rounded-full bg-violet/20 blur-[140px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-12"
      >
        <h2 className="max-w-3xl font-display text-clamp2 font-medium leading-[1.05] text-balance text-paper">
          Have an idea? Let's build something unforgettable.
        </h2>

        <a
          href="https://wa.me/201033367041"
          target="_blank"
          rel="noopener noreferrer"
          data-cursor="link"
          className="mt-12 inline-flex items-center gap-3 rounded-full bg-cyan px-8 py-4 font-body text-sm font-semibold text-ink transition-transform duration-300 hover:-translate-y-0.5"
        >
          Start a Conversation
          <FiArrowUpRight />
        </a>

        <div className="mt-20 grid grid-cols-1 gap-8 border-t border-white/10 pt-10 sm:grid-cols-2 md:grid-cols-4">
          {channels.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.external ? '_blank' : undefined}
              rel={c.external ? 'noopener noreferrer' : undefined}
              data-cursor="link"
              className="group block"
            >
              <p className="font-body text-xs text-dim">{c.label}</p>
              <p className="mt-2 flex items-center gap-2 font-body text-base text-paper">
                {c.value}
                <FiArrowUpRight className="opacity-0 transition-opacity group-hover:opacity-100" />
              </p>
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
