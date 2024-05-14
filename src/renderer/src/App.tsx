import '@/assets/index.css'
import { Layout } from '@/components/layout/Layout'
import { AccountCard } from './components/account/AccountCard'
import { ThemeProvider } from './components/providers/ThemeProvider'

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Layout>
        <AccountCard />
      </Layout>
    </ThemeProvider>
  )
}

export default App
