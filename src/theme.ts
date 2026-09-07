import type { CSSProperties } from 'react'

export const theme = {
  colors: { ink: '#161513', paper: '#e7d9bd', cream: '#f0e9dd', muted: '#cfbfa6', ochre: '#af9877', line: '#3c372f', blue: '#427b97', rust: '#b13a1d' },
  fonts: { display: "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif", mono: "'Courier New', Courier, monospace", serif: "Georgia, 'Times New Roman', serif" },
} as const

export const themeCssVariables = {
  '--color-ink': theme.colors.ink, '--color-paper': theme.colors.paper, '--color-cream': theme.colors.cream, '--color-muted': theme.colors.muted, '--color-ochre': theme.colors.ochre, '--color-line': theme.colors.line, '--color-blue': theme.colors.blue, '--color-rust': theme.colors.rust,
  '--font-display': theme.fonts.display, '--font-mono': theme.fonts.mono, '--font-serif': theme.fonts.serif,
} as CSSProperties
