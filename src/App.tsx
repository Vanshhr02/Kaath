import { Header } from './components/layout/Header'
import { RegisterSidebar } from './components/layout/RegisterSidebar'
import { HomePage } from './pages/HomePage'
import { Register } from './features/register/Register'
import './App.css'

function App() {
  return (
    <div className="site-shell">
      <RegisterSidebar />
      <div className="site-content">
        <Header />
        <HomePage />
        <Register />
      </div>
    </div>
  )
}

export default App
