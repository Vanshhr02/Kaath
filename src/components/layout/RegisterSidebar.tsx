export function RegisterSidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 z-10 flex w-[60px] flex-col border-r border-[#716a5b] bg-[var(--color-paper)] md:w-[94px]" aria-label="The register">
      <a className="grid h-[106px] place-content-center gap-1.5 bg-[var(--color-ink)] md:h-[167px]" href="#the-register" aria-label="Open the register"><span className="relative block h-[15px] w-10 bg-[var(--color-blue)] after:absolute after:top-[5px] after:right-[7px] after:size-1.5 after:rounded-full after:bg-[var(--color-ink)] after:content-['']" /><span className="block h-[15px] w-10 bg-[var(--color-blue)]" /></a>
      <a className="flex flex-1 items-center justify-center text-[10px] tracking-[2px] uppercase text-[#49433a] [font-family:var(--font-mono)] [writing-mode:vertical-rl] [transform:rotate(180deg)] md:text-sm md:tracking-[4px]" href="#the-register">Kaath — The Register</a>
    </aside>
  )
}
