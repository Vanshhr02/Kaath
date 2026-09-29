import type { CSSProperties } from 'react'

export const theme = {
  colors: {
    kraft: '#E5D9C3',
    kraft2: '#DBCEB4',
    kraft3: '#C6B593',
    bitumen: '#1A1714',
    ink: '#2C261E',
    inkSoft: '#5C5245',
    indigo: '#234A5E',
    indigoLight: '#4C7A91',
    oxide: '#A03A18',
    chalk: '#F4EEE2',
  },
  fonts: {
    display: "'Big Shoulders Display', Haettenschweiler, 'Arial Narrow', sans-serif",
    body: "'Newsreader', 'Iowan Old Style', Georgia, serif",
    mono: "'IBM Plex Mono', 'SFMono-Regular', Menlo, monospace",
  },
  fontSize: {
    body: '17px',
    label: '11px',
    micro: '10px',
    hero: 'clamp(46px, 8.4vw, 116px)',
    section: 'clamp(30px, 4.4vw, 54px)',
  },
  layout: {
    rail: '64px',
    gutter: 'clamp(20px, 5vw, 72px)',
  },
} as const

export const themeCssVariables = {
  '--color-kraft': theme.colors.kraft,
  '--color-kraft-2': theme.colors.kraft2,
  '--color-kraft-3': theme.colors.kraft3,
  '--color-bitumen': theme.colors.bitumen,
  '--color-ink': theme.colors.ink,
  '--color-ink-soft': theme.colors.inkSoft,
  '--color-indigo': theme.colors.indigo,
  '--color-indigo-light': theme.colors.indigoLight,
  '--color-oxide': theme.colors.oxide,
  '--color-chalk': theme.colors.chalk,
  '--font-display': theme.fonts.display,
  '--font-body': theme.fonts.body,
  '--font-mono': theme.fonts.mono,
  '--font-size-body': theme.fontSize.body,
  '--font-size-label': theme.fontSize.label,
  '--font-size-micro': theme.fontSize.micro,
  '--font-size-hero': theme.fontSize.hero,
  '--font-size-section': theme.fontSize.section,
  '--rail-width': theme.layout.rail,
  '--page-gutter': theme.layout.gutter,
} as CSSProperties
