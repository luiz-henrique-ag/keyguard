import { SettingsIcon } from 'lucide-react'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { SettingsModal } from './SettingsModal'

export const SettingsButton = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <SettingsIcon size="20" />
      </PopoverTrigger>
      <PopoverContent className="w-fit">
        <SettingsModal />
      </PopoverContent>
    </Popover>
  )
}
