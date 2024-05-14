import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import '@fontsource-variable/inter'
import { EllipsisVertical, Pen, Trash2 } from 'lucide-react'
import { Button } from '../ui/button'

export const ActionsPopover = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <Button variant="ghost" size="icon">
          <EllipsisVertical size="20" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[70px] flex flex-col gap-2">
        <Button size="icon" variant="secondary">
          <Pen size="18" />
        </Button>
        <Button size="icon" variant="destructive">
          <Trash2 size="18" />
        </Button>
      </PopoverContent>
    </Popover>
  )
}
