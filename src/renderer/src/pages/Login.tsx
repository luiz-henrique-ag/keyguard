import { AppIcon } from '@renderer/components/layout/AppIcon'
import { ThemeToggle } from '@renderer/components/layout/ThemeToggle'
import { Card, CardContent, CardHeader, CardTitle } from '@renderer/components/ui/card'
import { Link } from 'react-router-dom'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'

export const Login = () => {
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
              <Input id="conta" />
            </div>
            <div>
              <label htmlFor="senha">Senha</label>
              <Input id="senha" />
            </div>
            <div className="flex justify-end">
              <Link to="/home">
                <Button className="w-[120px]">Entrar</Button>
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
      <div className="fixed bottom-2 right-2">
        <ThemeToggle />
      </div>
    </div>
  )
}
