import { FaWhatsapp } from 'react-icons/fa'

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/201033367041"
      target="_blank"
      rel="noopener noreferrer"
      data-cursor="link"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-cyan text-2xl text-ink shadow-[0_8px_30px_rgba(255,79,160,0.45)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(255,79,160,0.6)] md:bottom-8 md:right-8"
    >
      <FaWhatsapp />
    </a>
  )
}
