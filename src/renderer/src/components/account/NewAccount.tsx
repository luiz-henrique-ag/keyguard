import { DialogDescription } from '@radix-ui/react-dialog'
import { Button } from '../ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog'
import { Input } from '../ui/input'

export const NewAccount = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="lg">Novo</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Nova Conta</DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground">
            Cadastrar nova conta e senha.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4 items-stretch">
          <div>
            <label htmlFor="conta">Conta</label>
            <Input id="conta" />
          </div>
          <div>
            <label htmlFor="senha">Senha</label>
            <Input id="senha" />
          </div>
          <div className="flex justify-end">
            <Button className="w-[120px] bg-green-600 hover:bg-green-500">Salvar</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
