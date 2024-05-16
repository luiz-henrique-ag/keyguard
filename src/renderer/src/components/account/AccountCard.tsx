import { Copy, Eye } from 'lucide-react'
import { Button } from '../ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { ActionsPopover } from './ActionsPopover'

export const AccountCard = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row justify-between items-center space-y-0">
        <CardTitle className="text-xl">Facebook</CardTitle>
        <ActionsPopover />
      </CardHeader>
      <CardContent className="grid grid-cols-5 text-sm">
        <div className="col-span-3">
          <p>Conta</p>
          <div className="flex items-center gap-2">
            <p className="text-muted-foreground">hiquedan@hotmail.com</p>
            <Button variant="ghost" size="icon">
              <Copy size="20" />
            </Button>
          </div>
        </div>
        <div className="col-span-2">
          <p>Senha</p>
          <div className="flex items-center gap-2">
            <p className="text-muted-foreground">**********************</p>
            <Button variant="ghost" size="icon">
              <Eye size="20" />
            </Button>
            <Button variant="ghost" size="icon">
              <Copy size="20" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
