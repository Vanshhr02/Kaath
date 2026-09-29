import { motion, useReducedMotion } from 'motion/react'
import { Reveal } from '../../components/common/Reveal'

const details = [['Locality','Naroda, Ahmedabad'],['Built','1948'],['Taken down','November 2025'],['Was','Roof truss, north bay'],['Species','Teak, unidentified mill stock'],['Finish','Hardwax oil, no stain']] as const

export function RecordCard() {
  const reduceMotion = useReducedMotion()
  return (
    <section className="border-b border-[var(--color-kraft-3)] bg-[var(--color-kraft-2)] text-[var(--color-ink)]" aria-labelledby="record-card-title">
      <div className="grid items-center gap-[clamp(32px,5vw,72px)] px-[var(--page-gutter)] py-[clamp(44px,5.5vw,72px)] lg:grid-cols-[1.05fr_.95fr]">
        <Reveal>
          <p className="mb-4 text-[11px] font-medium tracking-[.18em] uppercase text-[var(--color-indigo)] [font-family:var(--font-mono)]">What ships with every piece</p>
          <h2 id="record-card-title" className="mb-5 text-[clamp(30px,4vw,50px)] leading-[.9] font-bold uppercase [font-family:var(--font-display)]">The record card</h2>
          <p className="mb-4 max-w-[46ch] font-light text-[var(--color-ink-soft)]">A coaster set and a dining table leave with the same card. It names the building, the locality, the year it went up and the year it came down, and what the wood was doing before it was furniture — a roof joist, a door frame, a pillar.</p>
          <p className="mb-4 max-w-[46ch] font-light text-[var(--color-ink-soft)]">Each card is numbered against the building and signed. If we can&apos;t prove where a board came from, we say so on the card rather than guess.</p>
          <a className="inline-block bg-[var(--color-indigo)] px-[26px] py-[15px] text-[11px] tracking-[.16em] uppercase text-[var(--color-chalk)] transition-colors hover:bg-[var(--color-bitumen)] [font-family:var(--font-mono)]" href="#register">See what&apos;s on record</a>
        </Reveal>
        <Reveal>
          <motion.article whileHover={reduceMotion ? undefined : { rotate: 0, y: -4 }} transition={{ duration: .25 }} className="mx-auto max-w-[400px] border border-[var(--color-kraft-3)] bg-[var(--color-chalk)] p-[30px] pb-6 shadow-[14px_14px_0_rgba(26,23,20,.07)] [transform:rotate(-1.1deg)] max-md:[transform:none]" aria-label="Sample Sarabhai Mill Shed record card">
            <header className="mb-5 flex items-start justify-between gap-4"><div><p className="text-[11px] tracking-[.14em] uppercase text-[var(--color-indigo)] [font-family:var(--font-mono)]">Record 06 / Piece 14 of 22</p><h3 className="mt-3.5 text-[31px] leading-[.9] font-bold uppercase [font-family:var(--font-display)]">Sarabhai<br />Mill Shed</h3></div><svg width="34" height="34" viewBox="0 0 26 26" aria-hidden="true"><rect width="26" height="26" fill="#234A5E"/><rect y="11.6" width="26" height="2.8" fill="#F4EEE2"/><circle cx="20" cy="5.6" r="2.1" fill="#F4EEE2"/></svg></header>
            <dl>{details.map(([label,value]) => <div className="flex justify-between gap-4 border-t border-[var(--color-kraft-3)] py-1.5 text-[10.5px] tracking-[.08em] uppercase [font-family:var(--font-mono)]" key={label}><dt className="text-[var(--color-ink-soft)]">{label}</dt><dd className="m-0 text-right">{value}</dd></div>)}</dl>
            <footer className="mt-5 flex items-end justify-between gap-4"><div className="flex-1 border-b border-[var(--color-kraft-3)] pb-1 text-[11px] tracking-[.18em] uppercase text-[var(--color-ink-soft)] [font-family:var(--font-mono)]">Cut and signed by</div><span className="border-[1.5px] border-current px-[9px] py-1 text-[10px] tracking-[.16em] uppercase text-[var(--color-indigo)] [font-family:var(--font-mono)] [transform:rotate(-1.5deg)]">Kaath</span></footer>
          </motion.article>
        </Reveal>
      </div>
    </section>
  )
}
