import { motion } from 'framer-motion'

const fade = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
}

const meta = [
  { label: 'Based in', value: 'Menofia, Egypt' },
  { label: 'Focus', value: 'Full-stack development, UI/UX' },
  { label: 'Studying', value: 'Computer Science, Menofia University' },
  { label: 'GPA', value: '92.75% — Excellent' },
]

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-[1400px] px-6 py-32 md:px-12">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fade}
        className="grid grid-cols-1 gap-16 md:grid-cols-12"
      >
        <div className="md:col-span-7">
          <h2 className="font-display text-clamp2 font-medium leading-[1.05] text-balance text-paper">
            A student who builds real products, not class assignments.
          </h2>
          <p className="mt-8 max-w-xl font-body text-base leading-relaxed text-dim">
            Haneen is a Full-Stack Developer and Computer Science student at
            Menofia University who spends her training the way most people
            spend a hobby — shipping things. Homi, her full-stack graduation
            project from the Digital Egypt Pioneers Initiative, went from a
            React interface to a working Supabase backend. Her UI/UX training
            at NTI went the other direction, ending in a fully designed
            healthcare app built with a five-person team.
          </p>
          <p className="mt-5 max-w-xl font-body text-base leading-relaxed text-dim">
            She's also a Coding Instructor at iSchool, teaching programming
            fundamentals to students in the Digital Egypt Cubs and Marvels
            Initiatives — which tends to sharpen exactly the skill an
            interface needs most: explaining something complicated simply.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-x-8 gap-y-10 self-start md:col-span-5 md:pt-4">
          {meta.map((m) => (
            <div key={m.label}>
              <p className="font-body text-xs text-dim">{m.label}</p>
              <p className="mt-2 font-display text-lg text-paper">{m.value}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
