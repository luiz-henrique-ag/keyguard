import { SettingsIcon } from 'lucide-react'
import { Button } from '../ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { SettingsModal } from './SettingsModal'

export const SettingsButton = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon">
          <SettingsIcon size="20" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-fit">
        <SettingsModal />
      </PopoverContent>
    </Popover>
  )
}
