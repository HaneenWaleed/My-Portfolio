import { useEffect, useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { experience } from '../data/experience'

export default function Experience() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.5'],
  })
  const height = useSpring(scrollYProgress, { stiffness: 90, damping: 24 })

  return (
    <section id="journey" className="mx-auto max-w-[1400px] px-6 py-32 md:px-12">
      <h2 className="font-display text-clamp2 font-medium text-paper">Journey so far</h2>
      <p className="mt-4 max-w-md font-body text-dim">Training, teaching, and internships — in that order.</p>

      <div ref={ref} className="relative mt-16 pl-8 md:pl-12">
        <div className="absolute left-0 top-0 h-full w-px bg-white/10 md:left-1" />
        <motion.div
          style={{ scaleY: height }}
          className="absolute left-0 top-0 h-full w-px origin-top bg-gradient-to-b from-cyan via-violet to-bloom md:left-1"
        />

        <ol className="flex flex-col gap-14">
          {experience.map((e) => (
            <motion.li
              key={e.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <span className="absolute -left-8 top-1.5 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-cyan md:-left-11" />
              <p className="font-body text-xs text-dim">{e.year}</p>
              <h3 className="mt-2 font-display text-2xl text-paper">{e.title}</h3>
              <p className="mt-1 font-body text-sm text-cyan">{e.org}</p>
              <p className="mt-3 max-w-xl font-body text-sm leading-relaxed text-dim">{e.description}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}
