import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { useState } from 'react'
import { Reveal } from '../../components/common/Reveal'
import { registerRecords } from './data/register.data'
import type { RegisterRecord } from './types'

function Status({ record }: { record: RegisterRecord }) {
  const tone = record.status === 'in-salvage' ? 'text-[var(--color-oxide)]' : record.status === 'open' ? 'text-[var(--color-indigo)]' : 'text-[var(--color-ink-soft)] opacity-75'
  const label = record.status === 'in-salvage' ? 'In salvage' : record.status === 'open' ? 'Open' : 'Closed'
  return <span className={`inline-block border-[1.5px] border-current px-[9px] py-1 text-[10px] tracking-[.16em] uppercase [font-family:var(--font-mono)] [transform:rotate(-1.5deg)] ${tone}`}>{label}</span>
}

export function Register() {
  const [openRecord, setOpenRecord] = useState<string | null>(null)
  const reduceMotion = useReducedMotion()

  return (
    <section className="border-b border-[var(--color-kraft-3)] bg-[var(--color-kraft)] text-[var(--color-ink)]" id="register" aria-labelledby="register-title">
      <Reveal className="flex flex-wrap items-baseline gap-5 px-[var(--page-gutter)] pt-[clamp(40px,5vw,64px)] pb-[22px]">
        <h2 id="register-title" className="text-[length:var(--font-size-section)] leading-[.9] font-bold tracking-[-.01em] uppercase [font-family:var(--font-display)]">The register</h2>
        <p className="max-w-[44ch] flex-1 basis-[300px] text-base font-light text-[var(--color-ink-soft)]">Every building we have taken wood from, and what became of it. Open a record to see the pieces.</p>
      </Reveal>

      <div className="px-[var(--page-gutter)] pb-[clamp(44px,5vw,64px)]">
        <div className="hidden grid-cols-[58px_minmax(0,2.1fr)_minmax(0,1.4fr)_110px_minmax(0,1fr)_118px] gap-4 border-b-[1.5px] border-[var(--color-ink)] pb-2.5 text-[10px] tracking-[.16em] uppercase text-[var(--color-ink-soft)] [font-family:var(--font-mono)] md:grid">
          <span>No.</span><span>Building</span><span>Locality</span><span>Built — down</span><span>Species</span><span>Status</span>
        </div>
        {registerRecords.map((record, index) => {
          const isOpen = openRecord === record.number
          return <div key={record.number}>
            <motion.button
              type="button"
              aria-expanded={isOpen}
              aria-controls={`record-${record.number}`}
              onClick={() => setOpenRecord(isOpen ? null : record.number)}
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: .4 }}
              transition={{ duration: .45, delay: Math.min(index, 4) * .05 }}
              className={`grid w-full grid-cols-[52px_1fr] gap-x-3.5 gap-y-1.5 border-b border-[var(--color-kraft-3)] bg-transparent py-[17px] text-left transition-[background,padding] hover:bg-[var(--color-kraft-2)] focus-visible:outline-2 focus-visible:outline-[var(--color-indigo)] md:grid-cols-[58px_minmax(0,2.1fr)_minmax(0,1.4fr)_110px_minmax(0,1fr)_118px] md:gap-4 ${isOpen ? 'bg-[var(--color-kraft-2)] md:pl-2.5' : 'md:hover:pl-2.5'}`}
            >
              <span className="text-xs font-medium text-[var(--color-indigo)] [font-family:var(--font-mono)]">{record.number}</span>
              <span className="text-[25px] leading-[.95] font-semibold uppercase [font-family:var(--font-display)]">{record.building}</span>
              <span className="col-start-2 text-[11px] tracking-[.08em] uppercase text-[var(--color-ink-soft)] [font-family:var(--font-mono)] md:col-auto">{record.locality}</span>
              <span className="col-start-2 text-[11px] tracking-[.08em] uppercase text-[var(--color-ink-soft)] [font-family:var(--font-mono)] md:col-auto">{record.builtToDown}</span>
              <span className="col-start-2 text-[11px] tracking-[.08em] uppercase text-[var(--color-ink-soft)] [font-family:var(--font-mono)] md:col-auto">{record.species}</span>
              <span className="col-start-2 mt-1 md:col-auto md:mt-0"><Status record={record} /></span>
            </motion.button>
            <AnimatePresence initial={false}>
              {isOpen && <motion.div id={`record-${record.number}`} initial={reduceMotion ? false : { height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={reduceMotion ? undefined : { height: 0, opacity: 0 }} transition={{ duration: .3, ease: [0.2, 0.8, 0.2, 1] }} className="overflow-hidden bg-[var(--color-kraft-2)]">
                <div className="border-b border-[var(--color-kraft-3)] py-5 pl-[52px] md:pb-[26px] md:pl-[74px]">
                  <h3 className="mb-3 text-[10px] font-medium tracking-[.18em] uppercase text-[var(--color-ink-soft)] [font-family:var(--font-mono)]">Pieces from this building</h3>
                  <ul className="flex list-none flex-wrap gap-x-[34px] gap-y-2.5 p-0 text-xs tracking-[.05em] [font-family:var(--font-mono)]">{record.pieces.map(([piece, status]) => <li key={piece}>{piece} <span className="text-[var(--color-ink-soft)]">— {status}</span></li>)}</ul>
                  <p className="mt-4 max-w-[60ch] text-[15px] font-light italic text-[var(--color-ink-soft)]">{record.note}</p>
                </div>
              </motion.div>}
            </AnimatePresence>
          </div>
        })}
        <p className="mt-4 max-w-[60ch] text-[15px] font-light italic text-[var(--color-ink-soft)]">Records close when the last board is cut. Closed records stay listed — the building is gone, but the account of it isn&apos;t.</p>
      </div>
    </section>
  )
}
