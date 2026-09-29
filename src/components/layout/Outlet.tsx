import type { PropsWithChildren } from 'react'
import { themeCssVariables } from '../../theme'
import { Footer } from './Footer'
import { Header } from './Header'
import { RegisterSidebar } from './RegisterSidebar'

export function Outlet({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen bg-[var(--color-kraft)] text-[var(--color-ink)] [font-family:var(--font-body)] text-[length:var(--font-size-body)] leading-[1.6] antialiased" style={themeCssVariables}>
      <RegisterSidebar />
      <div className="min-h-screen md:pl-[var(--rail-width)]">
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  )
}
