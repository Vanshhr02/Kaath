const links = [
  ['The Register', '#the-register'],
  ['Method', '#method'],
  ['Available', '#available'],
  ['Commissions', '#commissions'],
  ['Where we look', '#where-we-look'],
  ['Care & repair', '#care-repair'],
] as const

export function Footer() {
  return (
    <footer className="bg-[var(--color-ink)] text-[var(--color-cream)] [font-family:var(--font-mono)]">
      <div className="grid gap-8 px-6 py-10 sm:px-10 lg:grid-cols-[220px_1fr_auto] lg:items-start lg:gap-[clamp(32px,5vw,98px)] lg:px-[5.3vw] lg:py-18">
        <div>
          <a className="relative inline-block text-3xl leading-[.75] tracking-[-1.5px] uppercase [font-family:var(--font-display)]" href="/" aria-label="Kaath home">Kaath<span className="absolute right-0 -bottom-1 left-0 h-px bg-[var(--color-blue)]" /></a>
          <p className="mt-7 mb-0 text-xs tracking-[2px] uppercase text-[var(--color-ochre)]">Salvaged timber · Mumbai</p>
        </div>
        <nav className="flex flex-wrap gap-x-7 gap-y-4 pt-1.5 text-xs tracking-[1.5px] uppercase text-[var(--color-ochre)] lg:gap-x-[clamp(22px,3vw,50px)]" aria-label="Footer navigation">
          {links.map(([label, href]) => <a className="hover:text-[var(--color-cream)]" href={href} key={label}>{label}</a>)}
        </nav>
        <a className="inline-flex min-h-15 items-center justify-center border border-[var(--color-line)] px-8 text-xs tracking-[1.7px] uppercase hover:border-[var(--color-cream)]" href="mailto:hello@kaath.in?subject=Join%20the%20list">Join the list</a>
      </div>
      <div className="grid gap-4 border-t border-[var(--color-line)] px-6 py-6 text-[10px] tracking-[1.5px] uppercase text-[var(--color-ochre)] sm:px-10 md:grid-cols-3 md:items-center md:px-[5.3vw]">
        <p className="m-0">© 2026 Kaath</p>
        <p className="m-0 text-left md:text-center">Records shown are placeholders for design</p>
        <p className="m-0 text-left md:text-right">Nothing here is reissued</p>
      </div>
    </footer>
  )
}
