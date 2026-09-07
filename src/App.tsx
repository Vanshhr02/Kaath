import { Outlet } from './components/layout/Outlet'
import { HomePage } from './pages/HomePage'
import { Register } from './features/register/Register'
import { Method } from './features/method/Method'
import { RecordCard } from './features/record-card/RecordCard'
import { Commissions } from './features/commissions/Commissions'

function App() {
  return (
    <Outlet>
        <HomePage />
        <Register />
        <Method />
        <RecordCard />
        <Commissions />
    </Outlet>
  )
}

export default App
