const details = [
  ['Locality', 'Naroda, Ahmedabad'],
  ['Built', '1948'],
  ['Taken down', 'November 2025'],
  ['Was', 'Roof truss, north bay'],
  ['Species', 'Teak, unidentified mill stock'],
  ['Finish', 'Hardwax oil, no stain'],
] as const

export function RecordCard() {
  return (
    <section className="bg-[var(--color-paper)] px-6 py-16 text-[var(--color-ink)] sm:px-10 sm:py-20 lg:px-[5.3vw] lg:py-24" aria-labelledby="record-card-title">
      <div className="mx-auto grid max-w-[1420px] items-center gap-12 lg:grid-cols-[minmax(0,570px)_minmax(360px,1fr)] lg:justify-between lg:gap-[clamp(64px,12vw,220px)]">
        <div>
          <p className="m-0 text-xs tracking-[2.5px] uppercase [font-family:var(--font-mono)]">What ships with every piece</p>
          <h2 id="record-card-title" className="mt-5 text-[clamp(52px,7vw,72px)] leading-[.8] tracking-[-2px] uppercase [font-family:var(--font-display)]">The record card</h2>
          <p className="mt-6 max-w-[530px] text-lg leading-8 text-[var(--color-line)] [font-family:var(--font-serif)]">A coaster set and a dining table leave with the same card. It names the building, the locality, the year it went up and the year it came down, and what the wood was doing before it was furniture — a roof joist, a door frame, a pillar.</p>
          <p className="mt-5 max-w-[530px] text-lg leading-8 text-[var(--color-line)] [font-family:var(--font-serif)]">Each card is numbered against the building and signed. If we can’t prove where a board came from, we say so on the card rather than guess.</p>
          <a className="mt-6 inline-flex min-h-14 items-center bg-[var(--color-blue)] px-8 text-xs tracking-[1.7px] uppercase text-[var(--color-cream)] [font-family:var(--font-mono)] hover:outline hover:outline-1 hover:outline-offset-3 hover:outline-[var(--color-blue)]" href="#the-register">See what’s on record</a>
        </div>

        <article className="justify-self-center w-full max-w-[480px] bg-[var(--color-cream)] p-6 shadow-[16px_17px_0_var(--color-muted)] sm:p-10 [font-family:var(--font-mono)]" aria-label="Sample Sarabhai Mill Shed record card">
          <header className="flex items-start justify-between gap-5">
            <div>
              <p className="m-0 text-[11px] tracking-[2px] uppercase text-[var(--color-blue)]">Record 06 / Piece 14 of 22</p>
              <h3 className="mt-5 text-4xl leading-[.78] tracking-[-1px] uppercase [font-family:var(--font-display)]">Sarabhai<br />Mill Shed</h3>
            </div>
            <span className="mt-0.5 grid h-10 w-10 place-content-center bg-[var(--color-blue)] text-[var(--color-cream)]" aria-hidden="true">━</span>
          </header>
          <dl className="mt-6 m-0">
            {details.map(([label, value]) => (
              <div className="flex flex-col gap-1 border-t border-[var(--color-ochre)] py-2 text-[11px] tracking-[1px] uppercase sm:flex-row sm:items-center sm:justify-between sm:gap-5" key={label}>
                <dt>{label}</dt>
                <dd className="m-0 text-right">{value}</dd>
              </div>
            ))}
          </dl>
          <footer className="mt-8 flex items-end gap-5 text-xs tracking-[2px] uppercase">
            <span className="shrink-0">Cut and signed by</span>
            <span className="mb-1 h-px flex-1 bg-[var(--color-ochre)]" />
            <span className="border border-[var(--color-blue)] px-2 py-1 text-[11px] text-[var(--color-blue)] [transform:rotate(-3deg)]">Kaath</span>
          </footer>
        </article>
      </div>
    </section>
  )
}
