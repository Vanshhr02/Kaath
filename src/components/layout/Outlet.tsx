import type { PropsWithChildren } from 'react'
import { themeCssVariables } from '../../theme'
import { Footer } from './Footer'
import { Header } from './Header'
import { RegisterSidebar } from './RegisterSidebar'

export function Outlet({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen bg-[var(--color-ink)] text-[var(--color-cream)]" style={themeCssVariables}>
      <RegisterSidebar />
      <div className="min-h-screen ml-[60px] md:ml-[94px]">
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  )
}
