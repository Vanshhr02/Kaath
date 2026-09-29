export function RegisterSidebar() {
  return (
    <aside className="pointer-events-none fixed inset-y-0 left-0 z-[60] hidden w-[var(--rail-width)] items-center justify-center border-r border-[var(--color-kraft-3)] md:flex" aria-hidden="true">
      <div className="absolute top-0 left-0 flex h-[112px] w-full items-center justify-center bg-[var(--color-bitumen)]">
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
          <rect width="26" height="26" fill="#4C7A91" />
          <rect y="11.6" width="26" height="2.8" fill="#1A1714" />
          <circle cx="20" cy="5.6" r="2.1" fill="#1A1714" />
        </svg>
      </div>
      <span className="whitespace-nowrap text-[10px] tracking-[.3em] uppercase text-[var(--color-ink-soft)] [font-family:var(--font-mono)] [writing-mode:vertical-rl] [transform:rotate(180deg)]">Kaath — record of buildings</span>
    </aside>
  )
}
