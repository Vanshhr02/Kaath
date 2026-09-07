import { registerTableConfig } from '../../config/register.config'
import { registerRecords } from './data/register.data'
import type { RegisterRecord } from './types'

function cellValue(record: RegisterRecord, key: (typeof registerTableConfig.columns)[number]['key']) {
  if (key === 'status') {
    const statusColor = record.status === 'in-salvage' ? 'text-[var(--color-rust)] [transform:rotate(-2deg)]' : record.status === 'open' ? 'text-[#255e79] [transform:rotate(-2deg)]' : 'text-[#877b68]'
    return <span className={`inline-block min-w-[66px] border border-current px-2 py-1.5 text-center text-[10px] tracking-[1.1px] ${statusColor}`}>{registerTableConfig.statusLabels[record.status]}</span>
  }
  return record[key]
}

export function Register() {
  return (
    <section className="min-h-screen bg-[var(--color-paper)] px-6 py-12 text-[#2b2119] sm:px-10 md:px-[clamp(32px,5.3vw,98px)] md:py-16" id="the-register" aria-labelledby="register-title">
      <div className="mb-6 block md:flex md:items-baseline md:gap-5">
        <h2 id="register-title" className="m-0 text-[42px] leading-[.9] tracking-[-1.5px] uppercase [font-family:var(--font-display)] md:text-[50px]">The Register</h2>
        <p className="mt-3 max-w-[425px] text-base leading-[1.55] text-[#7c6043] [font-family:var(--font-serif)] md:mt-0">Every building we have taken wood from, and what became of it. Open a record to see the pieces.</p>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-[720px] w-full border-collapse text-xs tracking-[.6px] uppercase [font-family:var(--font-mono)]">
          <thead>
            <tr>
              {registerTableConfig.columns.map((column) => <th className={`border-b border-[#756c5a] pb-3 text-left text-[10px] font-normal tracking-[1.4px] text-[#624e37] ${column.className ?? ''}`} key={column.key}>{column.label}</th>)}
            </tr>
          </thead>
          <tbody>
            {registerRecords.map((record) => (
              <tr key={record.number} className="cursor-pointer transition-colors duration-150 hover:bg-[#a68d641f]">
                {registerTableConfig.columns.map((column) => <td className={`h-[62px] border-b border-[#c9b993] whitespace-nowrap text-[#4f4030] ${column.key === 'number' ? 'w-[74px] text-[var(--color-blue)]' : ''} ${column.key === 'building' ? 'w-[38%] text-[26px] tracking-[-.6px] text-[#211912] [font-family:var(--font-display)]' : ''} ${column.key === 'status' ? 'w-[118px]' : ''}`} data-label={column.label} key={column.key}>{cellValue(record, column.key)}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4 max-w-[530px] text-sm leading-[1.65] text-[#7d6147] italic [font-family:var(--font-serif)]">Records close when the last board is cut. Closed records stay listed — the building is gone, but the account of it isn’t.</p>
    </section>
  )
}
