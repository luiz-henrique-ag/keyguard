import { AppIcon } from '@renderer/components/layout/AppIcon'
import { ThemeToggle } from '@renderer/components/layout/ThemeToggle'
import { Card, CardContent, CardHeader, CardTitle } from '@renderer/components/ui/card'
import { ChangeEvent, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { User } from 'src/main/db/model/user'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'

export const Login = () => {
  const [user, setUser] = useState<User>()
  const [error, setError] = useState<string>()
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    user: '',
    password: ''
  })

  useEffect(() => {
    const { getUser } = window.api
    getUser()
      .then((user) => {
        if (user) {
          setUser(user)
        } else {
          setError('Houve um erro ao conectar com o banco de dados.')
        }
      })
      .catch((_) => setError('Houve um erro ao conectar com o banco de dados.'))
    setIsLoading(false)
  }, [])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleAuthenticate = () => {
    if (user?.user === formData.user && user?.password === formData.password) {
      navigate('/home')
    } else {
      setError('Usuário ou senha inválidos')
    }
  }

  if (isLoading)
    return (
      <div role="status" className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <svg
          aria-hidden="true"
          className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-black dark:fill-white"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <span className="sr-only">Loading...</span>
      </div>
    )

  return (
    <div className="container h-full flex flex-col justify-center items-center">
      <AppIcon width={200} height={200} />
      <Card>
        <CardHeader className="flex items-center">
          <CardTitle className="text-xl">KeyGuard</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4 items-stretch w-[350px]">
            <div>
              <label htmlFor="conta">Login</label>
              <Input id="conta" name="user" onChange={handleChange} value={formData.user} />
            </div>
            <div>
              <label htmlFor="senha">Senha</label>
              <Input
                id="senha"
                name="password"
                onChange={handleChange}
                value={formData.password}
                type="password"
                onKeyDown={(e) => {
                  if (e.key === 'enter') handleAuthenticate()
                }}
              />
            </div>
            <div className="flex justify-end">
              <Button className="w-[120px]" onClick={handleAuthenticate}>
                Entrar
              </Button>
            </div>
            {error && <div className="text-red-500 text-sm">{error}</div>}
          </div>
        </CardContent>
      </Card>
      <div className="fixed bottom-2 right-2">
        <ThemeToggle />
      </div>
    </div>
  )
}
