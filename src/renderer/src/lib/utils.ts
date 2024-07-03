import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function generateRandomPassword(): string {
  const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const numbers = '0123456789'
  const symbols = '!@#$%^&*()_+~`|}{[]:;?><,./-='

  // Garantir que pelo menos um caractere de cada conjunto seja incluído
  const passwordArray: string[] = [
    upperCaseLetters[Math.floor(Math.random() * upperCaseLetters.length)],
    lowerCaseLetters[Math.floor(Math.random() * lowerCaseLetters.length)],
    numbers[Math.floor(Math.random() * numbers.length)],
    symbols[Math.floor(Math.random() * symbols.length)]
  ]

  // Preencher o restante da senha com caracteres aleatórios
  const allCharacters = upperCaseLetters + lowerCaseLetters + numbers + symbols
  for (let i = 4; i < 25; i++) {
    const randomIndex = Math.floor(Math.random() * allCharacters.length)
    passwordArray.push(allCharacters[randomIndex])
  }

  // Embaralhar o array para que a senha não tenha um padrão previsível
  for (let i = passwordArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[passwordArray[i], passwordArray[j]] = [passwordArray[j], passwordArray[i]]
  }

  return passwordArray.join('')
}
