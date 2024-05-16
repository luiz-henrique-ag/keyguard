import { useTheme } from '@/components/providers/ThemeProvider'
import { Button } from '@/components/ui/button'
import { Moon, Sun } from 'lucide-react'

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()
  return (
    <Button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      size="icon"
      variant="outline"
    >
      {theme === 'dark' ? <Moon size="18" /> : <Sun size="18" />}
    </Button>
  )
}
