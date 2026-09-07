export default function Footer() {
  return (
    <footer className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-4 px-6 py-10 font-body text-xs text-dim md:flex-row md:px-12">
      <p>© {new Date().getFullYear()} Haneen Walid. Built with React &amp; a lot of coffee.</p>
      <a href="#top" className="link-underline text-paper">Back to top</a>
    </footer>
  )
}
