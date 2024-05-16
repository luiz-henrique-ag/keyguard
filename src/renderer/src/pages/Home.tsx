import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { AccountCard } from '../components/account/AccountCard'
import { Layout } from '../components/layout/Layout'

export const Home = () => {
  const handleClick = () => {
    const { getAllAccounts } = window.api
    getAllAccounts()
      .then((res) => console.log(res))
      .catch((erro) => console.log(erro))
  }

  return (
    <Layout>
      <Button onClick={handleClick}>Teste</Button>
      <AccountCard />
      <Link to="/">login</Link>
    </Layout>
  )
}
