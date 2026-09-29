import { Reveal } from '../../components/common/Reveal'

const steps = [
  ['1', 'The hunt', 'A contractor calls before the machines arrive. We walk the building, argue over price, and take what is sound.'],
  ['2', 'The record', 'Who built it, who lived in it, what year. This is written down before a single beam is moved.'],
  ['3', 'The flaws', "Bolt holes, char, the split that can't be fixed. We show you these first, not last."],
  ['4', 'First pass', 'Ninety years of paint and dust come off under the plane. Nobody has seen this grain before.'],
  ['5', 'The piece', 'Cut, joined, oiled, numbered against its building, and delivered with its record.'],
] as const

export function Method() {
  return <section className="border-b border-[#3A342C] bg-[var(--color-bitumen)] text-[var(--color-chalk)]" id="method" aria-labelledby="method-title">
    <Reveal className="flex flex-wrap items-baseline gap-5 px-[var(--page-gutter)] pt-[clamp(40px,5vw,64px)] pb-[22px]">
      <h2 id="method-title" className="text-[length:var(--font-size-section)] leading-[.9] font-bold uppercase [font-family:var(--font-display)]">How a building<br />becomes a table</h2>
      <p className="max-w-[44ch] flex-1 basis-[300px] text-base font-light text-[#A2988A]">Five steps, in order, filmed as they happen. You can watch a piece being made before you decide to own it.</p>
    </Reveal>
    <div className="grid border-t border-[#3A342C] px-[var(--page-gutter)] pb-[clamp(44px,5vw,68px)] md:grid-cols-2 xl:grid-cols-5">
      {steps.map(([number, title, copy], index) => <Reveal key={number} delay={index * .06} className="border-b border-[#3A342C] py-6 pr-[22px] md:border-r md:even:border-r-0 xl:border-r xl:border-b-0 xl:last:border-r-0">
        <span className="mb-3.5 block text-[44px] leading-none font-bold text-[#4E463A] [font-family:var(--font-display)]">{number}</span>
        <h3 className="mb-2.5 text-[23px] leading-[.95] font-bold uppercase [font-family:var(--font-display)]">{title}</h3>
        <p className="text-[15px] leading-[1.55] font-light text-[#A2988A]">{copy}</p>
      </Reveal>)}
    </div>
  </section>
}
