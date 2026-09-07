import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FiArrowUpRight } from 'react-icons/fi'
import { projects } from '../data/projects'

gsap.registerPlugin(ScrollTrigger)

export default function Projects() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray('.project-panel')
      panels.forEach((panel) => {
        const visual = panel.querySelector('.project-visual')
        const meta = panel.querySelector('.project-meta')

        gsap.fromTo(
          visual,
          { scale: 1.08, opacity: 0.4 },
          {
            scale: 1,
            opacity: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: panel,
              start: 'top 85%',
              end: 'top 30%',
              scrub: 0.6,
            },
          }
        )
        gsap.fromTo(
          meta,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: panel,
              start: 'top 75%',
            },
          }
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="work" ref={sectionRef} className="mx-auto max-w-[1400px] px-6 py-32 md:px-12">
      <div className="mb-20">
        <h2 className="font-display text-clamp2 font-medium text-paper">Selected work</h2>
        <p className="mt-4 max-w-md font-body text-dim">
          Four projects, four different problems — a marketplace, a study
          tool, a storefront, and a healthcare app designed screen by screen.
        </p>
      </div>

      <div className="flex flex-col gap-32 md:gap-44">
        {projects.map((project) => (
          <article key={project.id} className="project-panel grid grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-6">
            <ProjectVisual project={project} />

            <div className={`project-meta md:col-span-5 ${project.index === '02' || project.index === '04' ? 'md:order-1' : ''}`}>
              <span className="font-body text-sm text-dim">{project.index} / {String(projects.length).padStart(2, '0')}</span>
              <h3 className="mt-4 font-display text-3xl text-paper md:text-4xl">{project.title}</h3>
              <p className="mt-2 font-body text-sm text-cyan">{project.category}</p>
              <p className="mt-5 font-body text-sm leading-relaxed text-dim">{project.description}</p>

              <ul className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <li key={t} className="rounded-full border border-white/10 px-3 py-1 font-body text-[11px] text-dim">
                    {t}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex items-center gap-6">
                {project.links.live && (
                  <a href={project.links.live} target="_blank" rel="noopener noreferrer" data-cursor="link" className="link-underline font-body text-sm font-semibold text-paper">
                    View Project
                  </a>
                )}
                {project.links.source && (
                  <a href={project.links.source} target="_blank" rel="noopener noreferrer" data-cursor="link" className="link-underline font-body text-sm text-dim">
                    View Source
                  </a>
                )}
                {project.links.behance && (
                  <a href={project.links.behance} target="_blank" rel="noopener noreferrer" data-cursor="link" className="link-underline font-body text-sm font-semibold text-paper">
                    View on Behance
                  </a>
                )}
                {!project.links.live && !project.links.source && !project.links.behance && (
                  <span className="font-body text-sm text-dim/60">Link coming soon</span>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

// Wraps the project visual: clicking opens the best available link (live
// demo, then source, then Behance) in a new tab, with a hover overlay hint.
function ProjectVisual({ project }) {
  const orderClass = project.index === '02' || project.index === '04' ? 'md:order-2' : ''

  const clickUrl = project.links.live || project.links.source || project.links.behance
  const overlayLabel = project.links.live
    ? 'View Live Demo'
    : project.links.source
    ? 'View Source'
    : project.links.behance
    ? 'View on Behance'
    : null

  const content = (
    <>
      <ProjectMedia project={project} />
      {clickUrl && (
        <div className="absolute inset-0 flex items-center justify-center bg-ink/60 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
          <span className="flex items-center gap-2 rounded-full bg-cyan px-6 py-3 font-body text-sm font-semibold text-ink">
            {overlayLabel}
            <FiArrowUpRight />
          </span>
        </div>
      )}
    </>
  )

  const className = `project-visual group relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 md:col-span-7 ${orderClass}`

  if (clickUrl) {
    return (
      <a href={clickUrl} target="_blank" rel="noopener noreferrer" data-cursor="view" className={className}>
        {content}
      </a>
    )
  }

  return (
    <div className={className} data-cursor="view">
      {content}
    </div>
  )
}

// Per-project visual: a real screenshot when we have one, styled to sit
// naturally in a dark UI, or a logo card when we only have a mark.
function ProjectMedia({ project }) {
  if (project.image) {
    return (
      <div className="h-full w-full bg-[#0E0E13]">
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
          className={`h-full w-full ${project.imageFit === 'contain' ? 'object-contain' : 'object-cover'}`}
        />
      </div>
    )
  }

  return <GamingArt />
}

// Custom illustration for the gaming e-commerce project — a controller,
// storefront cards, and a cart, in the site's brand palette.
function GamingArt() {
  return (
    <div className="h-full w-full bg-gradient-to-br from-[#241141] via-[#0E0E13] to-[#0E0E13]">
      <svg viewBox="0 0 400 300" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="gaming-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FF4FA0" />
            <stop offset="100%" stopColor="#6C4CE0" />
          </linearGradient>
        </defs>
        <circle cx="330" cy="70" r="60" fill="#FF4FA0" opacity="0.12" />
        <circle cx="60" cy="230" r="70" fill="#6C4CE0" opacity="0.14" />

        {/* product cards */}
        <rect x="40" y="180" width="90" height="70" rx="10" fill="none" stroke="url(#gaming-grad)" strokeWidth="1.5" opacity="0.7" />
        <rect x="55" y="192" width="60" height="34" rx="6" fill="#FF4FA0" opacity="0.35" />
        <rect x="55" y="232" width="40" height="8" rx="4" fill="#F7F5F8" opacity="0.35" />

        <rect x="150" y="160" width="90" height="90" rx="10" fill="none" stroke="url(#gaming-grad)" strokeWidth="1.5" opacity="0.85" />
        <rect x="165" y="172" width="60" height="48" rx="6" fill="#6C4CE0" opacity="0.4" />
        <rect x="165" y="228" width="44" height="8" rx="4" fill="#F7F5F8" opacity="0.4" />

        {/* game controller */}
        <g transform="translate(210,55)">
          <path
            d="M20 30c0-16 13-24 34-24h46c21 0 34 8 34 24 0 4 6 34-4 44-8 8-20-2-26-8-6-6-12-8-24-8s-18 2-24 8c-6 6-18 16-26 8-10-10-4-40-10-44z"
            fill="none"
            stroke="url(#gaming-grad)"
            strokeWidth="2"
          />
          <circle cx="35" cy="24" r="4.5" fill="#FF4FA0" opacity="0.8" />
          <circle cx="35" cy="40" r="4.5" fill="#FF4FA0" opacity="0.8" />
          <circle cx="27" cy="32" r="4.5" fill="#FF4FA0" opacity="0.8" />
          <circle cx="43" cy="32" r="4.5" fill="#FF4FA0" opacity="0.8" />
          <circle cx="98" cy="26" r="5" fill="#6C4CE0" opacity="0.85" />
          <circle cx="112" cy="34" r="5" fill="#6C4CE0" opacity="0.85" />
        </g>

        {/* cart */}
        <g transform="translate(280,190)" opacity="0.9">
          <path d="M0 0h10l8 42h48l8-30H22" fill="none" stroke="#F7F5F8" strokeWidth="2" opacity="0.5" />
          <circle cx="24" cy="52" r="5" fill="#F7F5F8" opacity="0.5" />
          <circle cx="58" cy="52" r="5" fill="#F7F5F8" opacity="0.5" />
        </g>
      </svg>
    </div>
  )
}
