const recordRows = [
  ['Built', '1931'],
  ['Taken down', 'Mar 2026'],
  ['Species', 'Burma teak'],
  ['Recovered', '34 joists, 9 doors'],
  ['Pieces planned', '11'],
  ['List', '218 waiting'],
]

export function HomePage() {
  return (
    <main className="relative flex min-h-[calc(100svh-143px)] flex-col items-start justify-between gap-12 overflow-hidden px-6 py-10 sm:px-10 md:min-h-[calc(100svh-167px)] md:gap-20 md:px-[clamp(32px,5.3vw,98px)] md:py-[76px] lg:flex-row lg:items-center" id="available">
      <section className="relative z-1 max-w-[810px]" aria-labelledby="home-title">
        <p className="mb-6 text-[10px] leading-7 tracking-[2.2px] uppercase text-[var(--color-ochre)] [font-family:var(--font-mono)] md:text-[13px] md:leading-normal">Record no. 07 <i className="px-1 not-italic md:px-[13px]">·</i> Girgaon, Mumbai <i className="px-1 not-italic md:px-[13px]">·</i> 1931–2026 <i className="px-1 not-italic md:px-[13px]">·</i> Burma teak</p>
        <h1 id="home-title" className="m-0 text-[clamp(58px,16vw,88px)] leading-[.74] tracking-[-2px] uppercase [font-family:var(--font-display)] lg:text-[clamp(80px,7.25vw,132px)] lg:tracking-[-3px]">
          We don’t sell<br />
          furniture. We<br />
          sell the <em className="not-italic text-[var(--color-blue)]">building</em><br />
          it came from.
        </h1>
        <p className="mt-8 max-w-[680px] text-base leading-7 text-[#d7c3a2] [font-family:var(--font-serif)] md:text-lg md:leading-[1.7]">
          Every piece is cut from one named building, on a date we can tell you, and is numbered against it. When the wood from that building runs out,<br className="hidden md:block" /> the record closes. Nothing is reissued, and nothing is ever made twice.
        </p>
        <div className="mt-9 flex flex-wrap gap-3.5">
          <a className="inline-flex min-h-12 items-center justify-center border border-[var(--color-cream)] bg-[var(--color-cream)] px-6 text-xs tracking-[1.5px] uppercase text-[#29221c] [font-family:var(--font-mono)] hover:outline hover:outline-1 hover:outline-offset-3 hover:outline-[var(--color-blue)]" href="#the-register">Open the register</a>
          <a className="inline-flex min-h-12 items-center justify-center border border-[#63574a] px-6 text-xs tracking-[1.5px] uppercase text-[#e1c9a4] [font-family:var(--font-mono)] hover:outline hover:outline-1 hover:outline-offset-3 hover:outline-[var(--color-blue)]" href="#join-list">Join the list for Fanaswadi</a>
        </div>
      </section>

      <article className="w-full shrink-0 bg-[var(--color-paper)] px-6 pt-7 pb-[18px] text-[#2b2119] [font-family:var(--font-mono)] sm:w-[300px]" aria-label="Fanaswadi Chawl building record">
        <header className="flex items-start justify-between gap-3 pb-4">
          <div>
            <h2 className="m-0 text-3xl leading-[.82] tracking-[-1px] uppercase [font-family:var(--font-display)]">Fanaswadi<br />Chawl</h2>
            <p className="mt-2 mb-0 text-[11px] tracking-[1.6px] uppercase text-[#6c5740]">Girgaon, Mumbai</p>
          </div>
          <span className="mt-0.5 whitespace-nowrap border border-[var(--color-rust)] px-2.5 py-2 text-[11px] tracking-[1.5px] uppercase text-[var(--color-rust)] [transform:rotate(-2deg)]">In salvage</span>
        </header>
        <dl className="m-0">
          {recordRows.map(([label, value]) => (
            <div className="flex justify-between gap-4 border-t border-[#c9b891] py-2.5" key={label}>
              <dt className="text-[10px] tracking-[1.3px] uppercase text-[#6c5740]">{label}</dt>
              <dd className="m-0 text-right text-[11px] font-bold tracking-[.4px]">{value}</dd>
            </div>
          ))}
        </dl>
      </article>
    </main>
  )
}
