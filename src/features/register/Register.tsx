import { registerTableConfig } from '../../config/register.config'
import { registerRecords } from './data/register.data'
import type { RegisterRecord } from './types'

function cellValue(record: RegisterRecord, key: (typeof registerTableConfig.columns)[number]['key']) {
  if (key === 'status') {
    return <span className={`register-status status-${record.status}`}>{registerTableConfig.statusLabels[record.status]}</span>
  }
  return record[key]
}

export function Register() {
  return (
    <section className="register-section" id="the-register" aria-labelledby="register-title">
      <div className="register-heading">
        <h2 id="register-title">The Register</h2>
        <p>Every building we have taken wood from, and what became of it. Open a record to see the pieces.</p>
      </div>

      <div className="register-table-wrap">
        <table className="register-table">
          <thead>
            <tr>
              {registerTableConfig.columns.map((column) => <th className={column.className} key={column.key}>{column.label}</th>)}
            </tr>
          </thead>
          <tbody>
            {registerRecords.map((record) => (
              <tr key={record.number} className={`register-row status-${record.status}`}>
                {registerTableConfig.columns.map((column) => <td className={column.className} data-label={column.label} key={column.key}>{cellValue(record, column.key)}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="register-note">Records close when the last board is cut. Closed records stay listed — the building is gone, but the account of it isn’t.</p>
    </section>
  )
}
