import { Button } from '../ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog'
import { Input } from '../ui/input'

export const SettingsModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost">Alterar Dados</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Alterar Dados</DialogTitle>
        </DialogHeader>
        <form action="">
          <div className="flex flex-col gap-4 items-stretch w-full">
            <div>
              <label htmlFor="conta">Login</label>
              <Input id="conta" />
            </div>
            <div>
              <label htmlFor="senha">Senha</label>
              <Input id="senha" />
            </div>
            <div className="flex justify-end">
              <Button className="w-[120px]">Entrar</Button>
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
