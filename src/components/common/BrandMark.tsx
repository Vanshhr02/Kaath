export function BrandMark({ muted = false }: { muted?: boolean }) {
  const text = muted ? '#8E8478' : '#F4EEE2'
  const rule = muted ? '#4C7A91' : '#4C7A91'

  return (
    <svg width="190" height="34" viewBox="0 0 190 34" role="img" aria-label="Kaath">
      <text x="0" y="27" fontFamily="Big Shoulders Display, Impact, Arial Narrow, sans-serif" fontSize="36" fontWeight="800" letterSpacing="1.5" fill={text}>KAATH</text>
      <rect x="0" y="14.7" width="190" height="3.2" fill="#1A1714" />
      <rect x="0" y="15.85" width="190" height="0.9" fill={rule} />
    </svg>
  )
}
