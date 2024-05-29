import '@/assets/logo.jpeg'
import { SettingsButton } from '@/components/settings/SettingsButton'
import React from 'react'
import { Toaster } from '../ui/toast/toaster'
import { AppIcon } from './AppIcon'
import { ThemeToggle } from './ThemeToggle'

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 my-5 items-center">
          <AppIcon width={80} height={80} />
          <p className="scroll-m-20 text-2xl font-semibold tracking-tight">KeyGuard</p>
        </div>
        <div className="flex gap-2 items-center">
          <ThemeToggle />
          <SettingsButton />
        </div>
      </div>
      <div>{children}</div>
      <Toaster />
    </div>
  )
}
