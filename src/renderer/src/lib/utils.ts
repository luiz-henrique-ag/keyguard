import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function generatePassword(): string {
  return 'Senha'
}

export async function hashPassword(password: string): Promise<string> {
  // const hashedPassword = await bcrypt.hash(password, 10)
  return password
}
