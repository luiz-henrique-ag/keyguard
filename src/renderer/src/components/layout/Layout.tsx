import '@/assets/logo.jpeg'
import React from 'react'
import { NewAccount } from '../account/NewAccount'
import { Input } from '../ui/input'
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
        <ThemeToggle />
      </div>
      <div className="flex justify-end mb-5 gap-2">
        <Input placeholder="Pesquisar..." />
        <NewAccount />
      </div>
      <div>{children}</div>
    </div>
  )
}
