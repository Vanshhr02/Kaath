const steps = [
  ['1', 'The hunt', 'A contractor calls before the machines arrive. We walk the building, argue over price, and take what is sound.'],
  ['2', 'The record', 'Who built it, who lived in it, what year. This is written down before a single beam is moved.'],
  ['3', 'The flaws', "Bolt holes, char, the split that can't be fixed. We show you these first, not last."],
  ['4', 'First pass', 'Ninety years of paint and dust come off under the plane. Nobody has seen this grain before.'],
  ['5', 'The piece', 'Cut, joined, oiled, numbered against its building, and delivered with its record.'],
] as const

export function Method() {
  return <section className="bg-[var(--color-ink)] text-[var(--color-cream)]" id="method" aria-labelledby="method-title">
    <div className="flex flex-col gap-7 border-b border-[var(--color-line)] px-6 py-16 sm:px-10 lg:flex-row lg:items-center lg:gap-14 lg:px-[5.3vw] lg:py-20">
      <h2 id="method-title" className="max-w-[400px] text-6xl leading-[.8] tracking-[-2px] uppercase [font-family:var(--font-display)] sm:text-7xl">How a building<br />becomes a table</h2>
      <p className="max-w-[550px] text-lg leading-9 text-[var(--color-ochre)] [font-family:var(--font-serif)]">Five steps, in order, filmed as they happen. You can watch a piece being made before you decide to own it.</p>
    </div>
    <ol className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5">
      {steps.map(([number, title, copy]) => <li key={number} className="min-h-[280px] border-b border-[var(--color-line)] px-6 py-8 sm:px-10 xl:border-r xl:border-b-0 xl:px-[5.3vw] xl:last:border-r-0">
        <p className="m-0 text-5xl leading-none text-[#514b40] [font-family:var(--font-display)]">{number}</p>
        <h3 className="mt-5 text-3xl leading-none uppercase [font-family:var(--font-display)]">{title}</h3>
        <p className="mt-3 text-lg leading-8 text-[var(--color-ochre)] [font-family:var(--font-serif)]">{copy}</p>
      </li>)}
    </ol>
  </section>
}
