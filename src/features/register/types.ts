export type RegisterStatus = 'in-salvage' | 'open' | 'closed'

export interface RegisterRecord {
  number: string
  building: string
  locality: string
  builtToDown: string
  species: string
  status: RegisterStatus
  pieces: readonly (readonly [string, string])[]
  note: string
}

export interface RegisterColumn {
  key: 'number' | 'building' | 'locality' | 'builtToDown' | 'species' | 'status'
  label: string
  className?: string
}
