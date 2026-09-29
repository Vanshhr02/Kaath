import { Outlet } from './components/layout/Outlet'
import { Available } from './features/available/Available'
import { Commissions } from './features/commissions/Commissions'
import { Method } from './features/method/Method'
import { RecordCard } from './features/record-card/RecordCard'
import { Register } from './features/register/Register'
import { HomePage } from './pages/HomePage'

function App() {
  return <Outlet><HomePage /><Register /><Method /><RecordCard /><Available /><Commissions /></Outlet>
}

export default App
