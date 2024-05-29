import { DialogDescription } from '@radix-ui/react-dialog'
import { useAccountStore } from '@renderer/hooks/useAccountsStore'
import { CircleHelp, KeyRound, LoaderCircle } from 'lucide-react'
import { ChangeEvent, FormEvent, useState } from 'react'
import { Account } from 'src/main/db/model/account'
import { Button } from '../ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog'
import { Input } from '../ui/input'
import { toast } from '../ui/toast/use-toast'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip'

interface ModalProps {
  open: boolean
  onOpenChange: React.Dispatch<React.SetStateAction<boolean>>
}

export const NewAccountModal = ({ open, onOpenChange }: ModalProps) => {
  const [newAccount, setNewAccount] = useState<Account>({
    platform: '',
    account: '',
    password: '',
    link: ''
  } as Account)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const add = useAccountStore((state) => state.add)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    const { insertAccount } = window.api
    e.preventDefault()
    setIsLoading(true)
    const account = await insertAccount({
      platform: newAccount.platform,
      account: newAccount.account,
      password: newAccount.password,
      link: newAccount.link
    })
    if (account != undefined) {
      add(account)
      onOpenChange(false)
      toast({
        variant: 'success',
        description: <p>Conta criada com sucesso.</p>
      })
    } else {
      toast({
        variant: 'destructive',
        description: <p>Algo deu errado. Tente novamente mais tarde.</p>
      })
    }
    setIsLoading(false)
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setNewAccount({
      ...newAccount,
      [name]: value
    })
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Nova Conta</DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground">
            Cadastrar nova conta e senha.
          </DialogDescription>
        </DialogHeader>
        <form method="post" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4 items-stretch">
            <div>
              <label htmlFor="platform">Plataforma</label>
              <Input
                id="platform"
                value={newAccount.platform}
                onChange={handleChange}
                name="platform"
                required
              />
            </div>
            <div>
              <label htmlFor="account">Conta</label>
              <Input
                id="account"
                value={newAccount.account}
                onChange={handleChange}
                name="account"
                required
              />
            </div>
            <div>
              <label htmlFor="password">Senha</label>
              <div className="flex gap-1 items-center">
                <Input
                  id="password"
                  value={newAccount.password}
                  onChange={handleChange}
                  name="password"
                  required
                />
                <Button size="icon" type="button" className="w-10">
                  <KeyRound size={18} />
                </Button>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <label htmlFor="link">Link</label>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <CircleHelp size={18} className="cursor-pointer" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Link para direcionar para a página da plataforma. (Opcional)</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <div className="flex justify-between gap-2 items-center">
                <Input
                  id="link"
                  value={newAccount.link}
                  onChange={handleChange}
                  name="link"
                  type="url"
                />
              </div>
            </div>
            <div className="flex justify-end">
              <Button
                className="w-[120px] bg-green-600 hover:bg-green-500"
                type="submit"
                disabled={isLoading}
              >
                {isLoading && <LoaderCircle className="animate-spin mr-2" />}
                Salvar
              </Button>
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
