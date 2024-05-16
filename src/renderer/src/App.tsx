import '@/assets/index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from './components/providers/ThemeProvider'
import { Home } from './pages/Home'
import { Login } from './pages/Login'

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
