import { Moon, Sun } from 'lucide-react'

import { useTheme } from '@/components/providers/ThemeProvider'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

export function ThemeToggle() {
  const { setTheme } = useTheme()
  const [isLight, setIsLight] = useState<boolean>(true)

  if (isLight) {
    setTheme('light')
  } else {
    setTheme('dark')
  }

  return (
    <Button onClick={() => setIsLight(!isLight)} size="icon" variant="outline">
      {isLight ? <Moon size="18" /> : <Sun size="18" />}
    </Button>
  )
}
