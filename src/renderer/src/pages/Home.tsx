import { NewAccountModal } from '@renderer/components/account/NewAccountModal'
import { Button } from '@renderer/components/ui/button'
import { useAccountStore } from '@renderer/hooks/useAccountsStore'
import { Plus } from 'lucide-react'
import { useState } from 'react'
import { AccountCard } from '../components/account/AccountCard'
import { Layout } from '../components/layout/Layout'

export const Home = () => {
  const [showFormDialog, setShowFormDialog] = useState<boolean>(false)
  const accounts = useAccountStore((state) => state.accounts)
  return (
    <Layout>
      <Button
        size="icon"
        onClick={() => setShowFormDialog(!showFormDialog)}
        className="fixed bottom-5 right-5 w-14 h-14 rounded-2xl"
      >
        <Plus size="38" />
      </Button>
      {showFormDialog && <NewAccountModal open={showFormDialog} onOpenChange={setShowFormDialog} />}
      <div className="flex justify-stretch items-stretch gap-2 flex-col overflow-auto py-3">
        {accounts.length === 0 ? (
          <p className="text-muted-foreground text-sm text-center">Nenhuma conta cadastrada.</p>
        ) : (
          accounts.map((account) => <AccountCard key={account.id} account={account} />)
        )}
      </div>
    </Layout>
  )
}
