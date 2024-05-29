import { useAccountStore } from '@renderer/hooks/useAccountsStore'
import { LoaderCircle } from 'lucide-react'
import { useState } from 'react'
import { Account } from 'src/main/db/model/account'
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle
} from '../ui/alert-dialog'
import { Button } from '../ui/button'
import { toast } from '../ui/toast/use-toast'

interface ModalProps {
  open: boolean
  onOpenChange: React.Dispatch<React.SetStateAction<boolean>>
  accountToDelete: Account
}

export const DeleteModal = ({ open, onOpenChange, accountToDelete }: ModalProps) => {
  const remove = useAccountStore((state) => state.remove)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleDelete = () => {
    const { deleteAccount } = window.api
    setIsLoading(true)
    deleteAccount(accountToDelete).then((res) => {
      if (res) {
        remove(accountToDelete)
        onOpenChange(false)
        toast({
          variant: 'success',
          description: <p>Conta excluída com sucesso.</p>
        })
        return
      }
      toast({
        variant: 'destructive',
        description: <p>Algo deu errado. Tente novamente mais tarde.</p>
      })
      setIsLoading(false)
    })
  }
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Excluir Conta</AlertDialogTitle>
          <AlertDialogDescription>Tem certeza que deseja excluir?</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <Button variant="destructive" onClick={handleDelete} disabled={isLoading}>
            {isLoading && <LoaderCircle className="animate-spin mr-2" />}
            Excluir
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
