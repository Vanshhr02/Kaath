import { motion, useReducedMotion } from 'motion/react'
import { Reveal } from '../../components/common/Reveal'

const pieces = [
  { mark: '06 / 14', name: 'Truss bench', meta: '1520 × 380 × 450 mm · one of one', price: '₹22,000' },
  { mark: '06 / 09', name: 'Bay side table', meta: '460 × 460 × 520 mm · one of one', price: '₹18,000' },
  { mark: '06 / 21', name: 'Offcut board', meta: '420 × 260 × 32 mm · six remaining', price: '₹1,500' },
] as const

export function Available() {
  const reduceMotion = useReducedMotion()
  return <section className="border-b border-[var(--color-kraft-3)] bg-[var(--color-kraft)] text-[var(--color-ink)]" id="available" aria-labelledby="available-title">
    <Reveal className="flex flex-wrap items-baseline gap-5 px-[var(--page-gutter)] pt-[clamp(40px,5vw,64px)] pb-[22px]">
      <h2 id="available-title" className="text-[length:var(--font-size-section)] leading-[.9] font-bold uppercase [font-family:var(--font-display)]">Available now</h2>
      <p className="max-w-[44ch] flex-1 basis-[300px] text-base font-light text-[var(--color-ink-soft)]">From Record 06. Eight pieces remain of twenty-two. When they&apos;re gone, this record closes.</p>
    </Reveal>
    <div className="grid gap-px border-t border-[var(--color-kraft-3)] bg-[var(--color-kraft-3)] lg:grid-cols-3">
      {pieces.map((piece,index) => <Reveal key={piece.mark} delay={index * .07} className="flex flex-col gap-3.5 bg-[var(--color-kraft)] px-[var(--page-gutter)] py-[clamp(24px,3vw,36px)] pb-[30px] lg:px-[clamp(24px,3vw,36px)]">
        <motion.div whileHover={reduceMotion ? undefined : { scale: 1.015 }} className="relative h-[170px] overflow-hidden border border-[var(--color-kraft-3)] bg-[var(--color-kraft-2)] before:absolute before:inset-0 before:bg-[repeating-linear-gradient(88deg,rgba(44,38,30,.055)_0_2px,transparent_2px_7px),repeating-linear-gradient(91deg,rgba(44,38,30,.04)_0_1px,transparent_1px_13px)]">
          <span className="absolute right-3 bottom-2.5 text-[10px] tracking-[.14em] text-[var(--color-indigo)] [font-family:var(--font-mono)]">{piece.mark}</span>
        </motion.div>
        <h3 className="text-[26px] leading-[.94] font-bold uppercase [font-family:var(--font-display)]">{piece.name}</h3>
        <p className="text-[10.5px] tracking-[.1em] uppercase text-[var(--color-ink-soft)] [font-family:var(--font-mono)]">{piece.meta}</p>
        <div className="mt-auto flex items-center justify-between border-t border-[var(--color-kraft-3)] pt-3"><span className="text-sm font-medium [font-family:var(--font-mono)]">{piece.price}</span><span className="border-[1.5px] border-current px-[9px] py-1 text-[10px] tracking-[.16em] uppercase text-[var(--color-indigo)] [font-family:var(--font-mono)] [transform:rotate(-1.5deg)]">Available</span></div>
      </Reveal>)}
    </div>
  </section>
}
