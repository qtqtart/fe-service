import { ThemeModeContext } from '@app/providers/theme-provider'
import { useContext } from 'react'

export const useThemeMode = () => {
  const context = useContext(ThemeModeContext)

  if (!context) throw new Error('useThemeMode must be provided a ThemeModeContext')

  return context
}
