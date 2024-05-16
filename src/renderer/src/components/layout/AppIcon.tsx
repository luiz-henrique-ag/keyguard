import { useTheme } from '../providers/ThemeProvider'

export const AppIcon = ({ width, height }: { width: number; height: number }) => {
  const { theme } = useTheme()
  const imgSrc = '/src/assets/'.concat(theme == 'light' ? 'logo.png' : 'white-logo.png')
  return <img src={imgSrc} width={width} height={height} />
}
