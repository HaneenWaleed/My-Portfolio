import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const roles = ['Full-Stack Developer', 'Coding Instructor', 'CS Student']

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.2 } },
}
const rise = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setRoleIndex((i) => (i + 1) % roles.length), 2200)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="top" className="relative flex min-h-screen flex-col justify-center overflow-hidden pt-28">
      {/* ambient field: soft moving color fields, not a literal grid */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-16 h-[28rem] w-[28rem] rounded-full bg-cyan/20 blur-[120px]" />
        <div className="absolute right-0 top-1/3 h-[22rem] w-[22rem] rounded-full bg-violet/25 blur-[130px]" />
        <div className="absolute bottom-0 left-1/3 h-[16rem] w-[16rem] rounded-full bg-bloom/15 blur-[110px]" />
      </div>

      <motion.div variants={container} initial="hidden" animate="show" className="relative z-10 mx-auto w-full max-w-[1400px] px-6 md:px-12">
        <div className="grid grid-cols-1 items-center gap-14 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-7">
            <motion.p variants={rise} className="font-body text-sm text-dim">
              Full-Stack Developer — based in Egypt
            </motion.p>

            <motion.h1 variants={rise} className="mt-6 font-display text-clamp1 font-medium leading-[0.98] text-balance text-cyan">
              Haneen Walid
            </motion.h1>

            <motion.p variants={rise} className="mt-6 max-w-lg font-display text-2xl font-medium leading-snug text-balance text-paper md:text-3xl">
              I turn ideas into experiences.
            </motion.p>

            <motion.div variants={rise} className="mt-8 flex h-10 items-center overflow-hidden font-body text-xl text-dim md:text-2xl">
              <span className="mr-3 text-paper">Currently working as a</span>
              <span key={roleIndex} className="relative inline-block animate-[fadeUp_0.5s_ease]">
                <RoleReveal text={roles[roleIndex]} />
              </span>
            </motion.div>

            <motion.p variants={rise} className="mt-8 max-w-xl font-body text-base leading-relaxed text-dim">
              A Full-Stack Developer and Computer &amp; Information Systems
              student who builds interfaces the way a designer would and ships
              them the way an engineer has to — in React, with real data and a
              backend behind them.
            </motion.p>

            <motion.div variants={rise} className="mt-12 flex flex-wrap items-center gap-5">
              <a
                href="#work"
                data-cursor="link"
                className="group inline-flex items-center gap-3 rounded-full bg-paper px-7 py-3.5 font-body text-sm font-semibold text-ink transition-transform duration-300 hover:-translate-y-0.5"
              >
                Explore My Work
              </a>
              <a
                href="#contact"
                data-cursor="link"
                className="link-underline font-body text-sm font-semibold text-paper"
              >
                Let's Connect
              </a>
            </motion.div>
          </div>

          <motion.div
            variants={rise}
            className="relative mx-auto w-full max-w-xs md:col-span-5 md:mx-0 md:ml-auto"
          >
            <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-cyan/25 via-violet/20 to-transparent blur-2xl" />
            <div className="overflow-hidden rounded-[1.75rem] border border-white/10">
              <img
                src="/images/haneen-photo.jpg"
                alt="Haneen Walid"
                className="aspect-[3/4] w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-dim md:flex"
      >
        <span className="font-body text-[11px]">Scroll</span>
        <span className="h-10 w-px bg-gradient-to-b from-dim to-transparent" />
      </motion.div>
    </section>
  )
}

function RoleReveal({ text }) {
  return (
    <span className="font-display italic text-cyan">
      {text}
    </span>
  )
}
