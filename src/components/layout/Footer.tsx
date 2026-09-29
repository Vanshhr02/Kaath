import { BrandMark } from '../common/BrandMark'

const links = [
  ['The register', '#register'], ['Method', '#method'], ['Available', '#available'], ['Commissions', '#commission'], ['Where we look', '#top'], ['Care & repair', '#top'],
] as const

export function Footer() {
  return (
    <footer className="bg-[var(--color-bitumen)] text-[#8E8478]">
      <div className="grid gap-7 px-[var(--page-gutter)] py-[clamp(40px,5vw,64px)] lg:grid-cols-[auto_1fr_auto] lg:gap-10">
        <div>
          <a href="#top" aria-label="Kaath — home"><BrandMark muted /></a>
          <p className="mt-3.5 text-[11px] tracking-[.18em] uppercase text-[#6B6257] [font-family:var(--font-mono)]">Salvaged timber · Mumbai</p>
        </div>
        <nav className="flex flex-wrap gap-x-[30px] gap-y-3" aria-label="Footer navigation">
          {links.map(([label, href]) => <a className="text-[11px] tracking-[.14em] uppercase transition-colors hover:text-[var(--color-chalk)] [font-family:var(--font-mono)]" href={href} key={label}>{label}</a>)}
        </nav>
        <a className="inline-flex self-start border border-[#5A5145] px-[26px] py-[15px] text-[11px] tracking-[.16em] uppercase text-[#C3B8A8] transition-colors hover:border-[var(--color-chalk)] hover:text-[var(--color-chalk)] [font-family:var(--font-mono)]" href="mailto:hello@kaath.in?subject=Join%20the%20list">Join the list</a>
      </div>
      <div className="flex flex-wrap justify-between gap-5 border-t border-[#332D26] px-[var(--page-gutter)] pt-4 pb-[30px] text-[10px] tracking-[.12em] uppercase text-[#6B6257] [font-family:var(--font-mono)]">
        <span>© 2026 Kaath</span><span>Records shown are placeholders for design</span><span>Nothing here is reissued</span>
      </div>
    </footer>
  )
}
