import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { skillCategories } from '../data/skills'

export default function Skills() {
  const [activeCat, setActiveCat] = useState(skillCategories[0].id)
  const [hovered, setHovered] = useState(null)
  const category = skillCategories.find((c) => c.id === activeCat)

  return (
    <section id="skills" className="mx-auto max-w-[1400px] px-6 py-32 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="font-display text-clamp2 font-medium text-paper">What she works with</h2>
        <p className="mt-4 max-w-md font-body text-dim">
          Five areas, one workflow — from a design file to a deployed interface.
        </p>
      </motion.div>

      <div className="mt-14 flex flex-wrap gap-3">
        {skillCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCat(cat.id)}
            className={`rounded-full border px-5 py-2.5 font-body text-sm transition-colors duration-300 ${
              activeCat === cat.id
                ? 'border-cyan bg-cyan/10 text-paper'
                : 'border-white/10 text-dim hover:border-white/25 hover:text-paper'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeCat}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35 }}
          className="mt-10"
        >
          <p className="max-w-lg font-body text-sm text-dim">{category.blurb}</p>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
            {category.items.map((item) => {
              const Icon = item.icon
              const isHovered = hovered === item.name
              return (
                <div
                  key={item.name}
                  onMouseEnter={() => setHovered(item.name)}
                  onMouseLeave={() => setHovered(null)}
                  className="group relative flex aspect-square flex-col items-center justify-center gap-3 rounded-2xl border border-white/10 bg-raised/40 p-4 text-center transition-colors duration-300 hover:border-cyan/50"
                >
                  <Icon
                    className={`text-3xl transition-colors duration-300 ${
                      isHovered ? 'text-cyan' : 'text-paper/80'
                    }`}
                  />
                  <span className="font-body text-xs text-paper">{item.name}</span>

                  <AnimatePresence>
                    {isHovered && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2 }}
                        className="absolute -bottom-3 left-1/2 z-10 w-44 -translate-x-1/2 rounded-xl border border-white/10 bg-ink px-3 py-2.5 text-left shadow-xl"
                      >
                        <p className="font-body text-[11px] leading-snug text-dim">{item.note}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  )
}
