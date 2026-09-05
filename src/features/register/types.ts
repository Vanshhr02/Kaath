export type RegisterStatus = 'in-salvage' | 'open' | 'closed'

export interface RegisterRecord {
  number: string
  building: string
  locality: string
  builtToDown: string
  species: string
  status: RegisterStatus
}

export interface RegisterColumn {
  key: keyof Pick<RegisterRecord, 'number' | 'building' | 'locality' | 'builtToDown' | 'species'> | 'status'
  label: string
  className?: string
}
