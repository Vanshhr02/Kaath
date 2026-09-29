import { BrandMark } from '../common/BrandMark'

const navigation = [
  ['The register', '#register'],
  ['Method', '#method'],
  ['Available', '#available'],
  ['Commissions', '#commission'],
] as const

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[var(--color-bitumen)] text-[var(--color-chalk)]">
      <div className="flex h-[88px] items-center gap-4 px-[var(--page-gutter)] md:h-[112px] md:gap-7">
        <a className="block shrink-0 leading-none" href="#top" aria-label="Kaath — home"><BrandMark /></a>
        <nav className="ml-auto hidden items-center gap-[26px] md:flex" aria-label="Primary">
          {navigation.map(([label, href]) => (
            <a className="group relative py-1.5 text-[11px] tracking-[.16em] uppercase text-[#B9AE9C] [font-family:var(--font-mono)]" href={href} key={href}>
              {label}
              <span className="absolute right-full bottom-0 left-0 h-px bg-[var(--color-chalk)] transition-[right] duration-300 ease-out group-hover:right-0 group-focus-visible:right-0" />
            </a>
          ))}
        </nav>
        <p className="ml-auto flex items-center gap-2 text-[10.5px] tracking-[.14em] uppercase text-[#93887A] [font-family:var(--font-mono)] md:ml-0">
          <span className="size-1.5 shrink-0 rounded-full bg-[var(--color-oxide)] motion-safe:animate-pulse" aria-hidden="true" />
          <span className="hidden sm:inline">Now dismantling — Fanaswadi, Girgaon</span>
          <span className="sm:hidden">Fanaswadi</span>
        </p>
      </div>
    </header>
  )
}
