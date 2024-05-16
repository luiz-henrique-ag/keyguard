import { Link } from 'react-router-dom'
import { AccountCard } from '../components/account/AccountCard'
import { Layout } from '../components/layout/Layout'

export const Home = () => {
  return (
    <Layout>
      <AccountCard />
      <Link to="/">login</Link>
    </Layout>
  )
}
