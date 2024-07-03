import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { User } from 'src/main/db/model/user'
import { Button } from '../ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog'
import { Input } from '../ui/input'

export const SettingsModal = () => {
  const [user, setUser] = useState<User>({} as User)

  useEffect(() => {
    const { getUser } = window.api
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setUser({
      ...user,
      [name]: value
    })
  }
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    console.log(e)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost">Alterar Dados</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Alterar Dados</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4 items-stretch w-full">
            <div>
              <label htmlFor="user">Usuário</label>
              <Input id="user" value={user.user} onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="password">Senha</label>
              <Input id="password" value={user.password} onChange={handleChange} type="password" />
            </div>
            <div className="flex justify-end">
              <Button className="w-[120px]">Confimar</Button>
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
