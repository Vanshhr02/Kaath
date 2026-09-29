import { Reveal } from '../../components/common/Reveal'

const terms = [['Lead time','8–14 weeks'],['To begin','50% advance'],['Typical range','₹60,000 – ₹2,50,000'],['Filmed','Every session'],['Delivery','Mumbai & Pune, by us'],['Elsewhere','Quoted per piece']] as const

export function Commissions() {
  return <section className="bg-[var(--color-indigo)] text-[var(--color-chalk)]" id="commission" aria-labelledby="commissions-title">
    <div className="grid items-end gap-[clamp(32px,5vw,72px)] px-[var(--page-gutter)] py-[clamp(48px,6vw,88px)] lg:grid-cols-[1.15fr_.85fr]">
      <Reveal><p className="mb-4 text-[11px] tracking-[.18em] uppercase text-[#9FB6C1] [font-family:var(--font-mono)]">Commissions</p><h2 id="commissions-title" className="mb-5 text-[clamp(34px,5.6vw,74px)] leading-[.86] font-extrabold tracking-[-.01em] uppercase [font-family:var(--font-display)]">Tell us the room. We&apos;ll find the building.</h2><p className="mb-7 max-w-[48ch] font-light text-[#C6D6DE]">You brief the piece, we source against it, and you watch it get made — the hunt, the cut, the first pass. Most commissions take eight to fourteen weeks, because we wait for the right building rather than the nearest timber yard.</p><a className="inline-block bg-[var(--color-chalk)] px-[26px] py-[15px] text-[11px] tracking-[.16em] uppercase text-[var(--color-indigo)] transition-colors hover:bg-[var(--color-bitumen)] hover:text-[var(--color-chalk)] [font-family:var(--font-mono)]" href="mailto:hello@kaath.in?subject=Commission">Start a commission</a></Reveal>
      <Reveal><dl>{terms.map(([label,value]) => <div className="flex justify-between gap-4 border-t border-[rgba(244,238,226,.22)] py-[11px] text-[11px] tracking-[.1em] uppercase [font-family:var(--font-mono)]" key={label}><dt className="text-[#9FB6C1]">{label}</dt><dd className="m-0 text-right">{value}</dd></div>)}</dl></Reveal>
    </div>
  </section>
}
