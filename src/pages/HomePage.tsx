import { motion, useReducedMotion } from 'motion/react'

const recordRows = [
  ['Built', '1931'], ['Taken down', 'Mar 2026'], ['Species', 'Burma teak'], ['Recovered', '34 joists, 9 doors'], ['Pieces planned', '11'], ['List', '218 waiting'],
] as const

export function HomePage() {
  const reduceMotion = useReducedMotion()
  const reveal = (delay: number) => reduceMotion ? {} : { initial: { opacity: 0, y: 18 }, animate: { opacity: 1, y: 0 }, transition: { duration: .65, delay, ease: [0.2, 0.8, 0.2, 1] as const } }

  return (
    <main id="top">
      <section className="relative overflow-hidden bg-[var(--color-bitumen)] text-[var(--color-chalk)]">
        <div className="grid items-end gap-10 px-[var(--page-gutter)] pt-[clamp(48px,7vw,86px)] pb-[clamp(52px,7vw,78px)] lg:grid-cols-[1fr_300px] lg:gap-14">
          <div>
            <motion.p {...reveal(.05)} className="mb-[26px] text-[11px] tracking-[.18em] uppercase text-[#93887A] [font-family:var(--font-mono)]">Record No. 07 · Girgaon, Mumbai · 1931–2026 · Burma teak</motion.p>
            <motion.h1 {...reveal(.12)} className="mb-[30px] max-w-[14ch] text-[length:var(--font-size-hero)] leading-[.84] font-extrabold tracking-[-.012em] uppercase text-[var(--color-chalk)] [font-family:var(--font-display)]">
              We don&apos;t sell furniture. We sell the <span className="text-[var(--color-indigo-light)]">building</span> it came from.
            </motion.h1>
            <motion.p {...reveal(.2)} className="mb-[34px] max-w-[52ch] text-[clamp(16px,1.5vw,19px)] leading-[1.62] font-light text-[#C3B8A8]">Every piece is cut from one named building, on a date we can tell you, and is numbered against it. When the wood from that building runs out, the record closes. Nothing is reissued, and nothing is ever made twice.</motion.p>
            <motion.div {...reveal(.28)} className="flex flex-wrap gap-3.5">
              <a className="inline-block border border-transparent bg-[var(--color-chalk)] px-[26px] py-[15px] text-[11px] tracking-[.16em] uppercase text-[var(--color-bitumen)] transition-colors hover:bg-[var(--color-indigo-light)] hover:text-[var(--color-chalk)] [font-family:var(--font-mono)]" href="#register">Open the register</a>
              <a className="inline-block border border-[#5A5145] px-[26px] py-[15px] text-[11px] tracking-[.16em] uppercase text-[#C3B8A8] transition-colors hover:border-[var(--color-chalk)] hover:text-[var(--color-chalk)] [font-family:var(--font-mono)]" href="#commission">Join the list for Fanaswadi</a>
            </motion.div>
          </div>

          <motion.aside {...reveal(.2)} className="relative max-w-[360px] border border-[var(--color-kraft-3)] bg-[var(--color-kraft)] p-[22px] pb-[18px] text-[var(--color-ink)] lg:max-w-none" aria-label="Current building record">
            <div className="mb-4 flex items-start justify-between">
              <div><h2 className="mb-1 text-[27px] leading-[.92] font-bold uppercase [font-family:var(--font-display)]">Fanaswadi<br />Chawl</h2><p className="text-[10.5px] tracking-[.1em] uppercase text-[var(--color-ink-soft)] [font-family:var(--font-mono)]">Girgaon, Mumbai</p></div>
              <span className="inline-block border-[1.5px] border-current px-[9px] py-1 text-[10px] tracking-[.16em] uppercase text-[var(--color-oxide)] [font-family:var(--font-mono)] [transform:rotate(-1.5deg)]">In salvage</span>
            </div>
            <dl>
              {recordRows.map(([label, value]) => <div className="flex justify-between gap-3 border-t border-[var(--color-kraft-3)] py-[7px] text-[11px] tracking-[.05em] [font-family:var(--font-mono)]" key={label}><dt className="text-[10px] tracking-[.12em] uppercase text-[var(--color-ink-soft)]">{label}</dt><dd className="m-0 font-medium">{value}</dd></div>)}
            </dl>
          </motion.aside>
        </div>
      </section>
    </main>
  )
}
