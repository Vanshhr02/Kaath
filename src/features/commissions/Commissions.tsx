const terms = [
  ['Lead time', '8–14 weeks'],
  ['To begin', '50% advance'],
  ['Typical range', '₹60,000 – ₹2,50,000'],
  ['Filmed', 'Every session'],
  ['Delivery', 'Mumbai & Pune, by us'],
  ['Elsewhere', 'Quoted per piece'],
] as const

export function Commissions() {
  return (
    <section className="bg-[var(--color-blue)] px-6 py-16 text-[var(--color-cream)] sm:px-10 sm:py-20 lg:px-[5.3vw] lg:py-28" id="commissions" aria-labelledby="commissions-title">
      <div className="grid max-w-[1420px] gap-14 lg:grid-cols-[minmax(0,700px)_minmax(420px,1fr)] lg:items-center lg:justify-between lg:gap-[clamp(72px,12vw,220px)]">
        <div>
          <p className="m-0 text-xs tracking-[2.5px] uppercase text-[var(--color-paper)] [font-family:var(--font-mono)]">Commissions</p>
          <h2 id="commissions-title" className="mt-8 max-w-[800px] text-[clamp(56px,8vw,102px)] leading-[.76] tracking-[-2px] uppercase [font-family:var(--font-display)]">Tell us the room. We’ll<br className="hidden lg:block" /> find the building.</h2>
          <p className="mt-6 max-w-[600px] text-lg leading-8 text-[var(--color-paper)] [font-family:var(--font-serif)]">You brief the piece, we source against it, and you watch it get made — the hunt, the cut, the first pass. Most commissions take eight to fourteen weeks, because we wait for the right building rather than the nearest timber yard.</p>
          <a className="mt-8 inline-flex min-h-14 items-center bg-[var(--color-cream)] px-8 text-xs tracking-[1.7px] uppercase text-[var(--color-ink)] [font-family:var(--font-mono)] hover:outline hover:outline-1 hover:outline-offset-3 hover:outline-[var(--color-cream)]" href="mailto:hello@kaath.in?subject=Commission">Start a commission</a>
        </div>

        <dl className="m-0 border-t border-[color-mix(in_srgb,var(--color-paper)_35%,transparent)] [font-family:var(--font-mono)]">
          {terms.map(([label, value]) => (
            <div className="flex flex-col gap-1 border-b border-[color-mix(in_srgb,var(--color-paper)_35%,transparent)] py-3 text-xs tracking-[1.2px] uppercase sm:flex-row sm:items-center sm:justify-between sm:gap-6" key={label}>
              <dt className="text-[var(--color-paper)]">{label}</dt>
              <dd className="m-0 text-right text-[var(--color-cream)]">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
