import { useEffect, useRef, useState } from 'react'

// A lightweight custom cursor: a small dot that leads, and a ring that trails
// with easing. Elements can opt in to states via data-cursor="view" | "link".
export default function Cursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const [variant, setVariant] = useState('default')
  const [isTouch, setIsTouch] = useState(false)

  useEffect(() => {
    const touch = window.matchMedia('(pointer: coarse)').matches
    setIsTouch(touch)
    if (touch) return

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    const ring = { x: pos.x, y: pos.y }
    let raf

    const onMove = (e) => {
      pos.x = e.clientX
      pos.y = e.clientY
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${pos.x}px, ${pos.y}px) translate(-50%, -50%)`
      }
      const target = e.target.closest?.('[data-cursor]')
      setVariant(target ? target.getAttribute('data-cursor') : 'default')
    }

    const tick = () => {
      ring.x += (pos.x - ring.x) * 0.18
      ring.y += (pos.y - ring.y) * 0.18
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.x}px, ${ring.y}px) translate(-50%, -50%)`
      }
      raf = requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', onMove)
    raf = requestAnimationFrame(tick)
    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  if (isTouch) return null

  const ringStyle =
    variant === 'view'
      ? { width: 84, height: 84, background: 'rgba(255,79,160,0.9)', border: 'none' }
      : variant === 'link'
      ? { width: 56, height: 56, borderColor: '#F2437A', background: 'rgba(242,67,122,0.08)' }
      : {}

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" style={ringStyle} aria-hidden="true">
        {variant === 'view' && (
          <span className="flex h-full w-full items-center justify-center font-body text-[10px] font-bold tracking-wide text-ink">
            VIEW
          </span>
        )}
      </div>
    </>
  )
}
