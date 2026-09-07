const navigation = ['The Register', 'Method', 'Available', 'Commissions']

export function Header() {
  return (
    <header className="flex min-h-[106px] flex-wrap items-center gap-6 px-6 py-6 sm:px-10 md:h-[167px] md:min-h-0 md:flex-nowrap md:gap-[clamp(30px,7vw,128px)] md:px-[clamp(32px,6.2vw,98px)]">
      <a className="relative w-full text-[32px] leading-[.82] tracking-[-2px] uppercase [font-family:var(--font-display)] md:w-[285px] md:text-[38px]" href="/" aria-label="Kaath home">
        <span>Kaath</span>
        <i className="absolute right-0 -bottom-[7px] left-0 h-0.5 bg-[var(--color-blue)]" aria-hidden="true" />
      </a>
      <nav className="flex w-full items-center gap-[18px] overflow-x-auto whitespace-nowrap [font-family:var(--font-mono)] md:w-auto md:gap-[clamp(22px,3vw,50px)]" aria-label="Primary navigation">
        {navigation.map((item) => (
          <a className="text-xs tracking-[1px] uppercase text-[var(--color-muted)] hover:text-[var(--color-cream)] focus-visible:text-[var(--color-cream)] md:text-base md:tracking-[2px]" href={`#${item.toLowerCase().replaceAll(' ', '-')}`} key={item}>{item}</a>
        ))}
      </nav>
      <p className="ml-auto hidden whitespace-nowrap text-sm tracking-[1.5px] uppercase text-[var(--color-ochre)] [font-family:var(--font-mono)] xl:block"><span className="mr-2.5 inline-block size-2 rounded-full bg-[var(--color-rust)]" aria-hidden="true" /> Now dismantling — Fanaswadi, Girgaon</p>
    </header>
  )
}
