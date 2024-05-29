import { Copy, CopyCheck, EllipsisVertical, Eye, EyeOff, Link, Pen, Trash2 } from 'lucide-react'
import { useState } from 'react'
import type { Account } from 'src/main/db/model/account'
import { Button } from '../ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { DeleteModal } from './DeleteModal'
import { EditAccountModal } from './EditAccountModal'

interface AccountProps {
  account: Account
}

export const AccountCard = ({ account }: AccountProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [passwordCopied, setPasswordCopied] = useState<boolean>(false)
  const [accountCopied, setAccountCopied] = useState<boolean>(false)
  const [showDeleteDialog, setShowDeleteDialog] = useState<boolean>(false)
  const [showEditAccountDialog, setShowEditAccountDialog] = useState<boolean>(false)

  const hidePassword = () => {
    let hidden: string = ''
    for (let index = 0; index < account.password.length; index++) {
      hidden += '*'
    }
    return hidden
  }

  const handleCopy = async (field: 'account' | 'password') => {
    switch (field) {
      case 'account':
        await navigator.clipboard.writeText(account.account)
        setAccountCopied(true)
        setTimeout(() => {
          setAccountCopied(false)
        }, 1500)
        break

      case 'password':
        await navigator.clipboard.writeText(account.password)
        setPasswordCopied(true)
        setTimeout(() => {
          setPasswordCopied(false)
        }, 1500)
        break
    }
  }

  const handleOpenLink = () => {
    window.open(account.link, '_blank')
  }

  return (
    <Card>
      <CardHeader className="flex flex-row justify-between items-center space-y-0">
        <div className="flex gap-2 items-center">
          <CardTitle className="text-xl">{account.platform}</CardTitle>
          {account.link && (
            <Button size="icon" variant="ghost" onClick={handleOpenLink}>
              <Link size="18" />
            </Button>
          )}
        </div>
        <Popover>
          <PopoverTrigger>
            <EllipsisVertical size="20" />
          </PopoverTrigger>
          <PopoverContent className="w-[70px] flex flex-col gap-2">
            <Button size="icon" variant="secondary" onClick={() => setShowEditAccountDialog(true)}>
              <Pen size="18" />
            </Button>
            <Button size="icon" variant="destructive" onClick={() => setShowDeleteDialog(true)}>
              <Trash2 size="18" />
            </Button>
          </PopoverContent>
        </Popover>
      </CardHeader>
      <CardContent className="grid grid-cols-5 text-sm">
        <div className="col-span-3">
          <p>Conta</p>
          <div className="flex items-center gap-2">
            <p className="text-muted-foreground">{account.account}</p>
            <Button variant="ghost" size="icon" onClick={() => handleCopy('account')}>
              {accountCopied ? (
                <CopyCheck size="20" className="stroke-green-500" />
              ) : (
                <Copy size="20" />
              )}
            </Button>
          </div>
        </div>
        <div className="col-span-2">
          <p>Senha</p>
          <div className="flex items-center gap-2">
            <p className="text-muted-foreground">
              {showPassword ? account.password : hidePassword()}
            </p>
            <Button variant="ghost" size="icon" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <EyeOff size="20" /> : <Eye size="20" />}
            </Button>
            <Button variant="ghost" size="icon" onClick={() => handleCopy('password')}>
              {passwordCopied ? (
                <CopyCheck size="20" className="stroke-green-500" />
              ) : (
                <Copy size="20" />
              )}
            </Button>
          </div>
        </div>
        {showDeleteDialog && (
          <DeleteModal
            open={showDeleteDialog}
            onOpenChange={setShowDeleteDialog}
            accountToDelete={account}
          />
        )}
        {showEditAccountDialog && (
          <EditAccountModal
            open={showEditAccountDialog}
            onOpenChange={setShowEditAccountDialog}
            accountToEdit={account}
          />
        )}
      </CardContent>
    </Card>
  )
}
