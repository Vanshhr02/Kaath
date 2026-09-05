import type { RegisterColumn, RegisterStatus } from '../features/register/types'

export const registerTableConfig: { columns: RegisterColumn[]; statusLabels: Record<RegisterStatus, string> } = {
  columns: [
    { key: 'number', label: 'No.', className: 'register-number' },
    { key: 'building', label: 'Building', className: 'register-building' },
    { key: 'locality', label: 'Locality' },
    { key: 'builtToDown', label: 'Built — Down' },
    { key: 'species', label: 'Species' },
    { key: 'status', label: 'Status', className: 'register-status-cell' },
  ],
  statusLabels: {
    'in-salvage': 'In salvage',
    open: 'Open',
    closed: 'Closed',
  },
}
