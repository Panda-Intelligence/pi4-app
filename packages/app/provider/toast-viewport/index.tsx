import { ToastViewport as ToastViewportOg } from '@pi4/ui'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export const ToastViewport = (): React.ReactNode => {
  const { top, right, left } = useSafeAreaInsets()
  return <ToastViewportOg top={top + 5} left={left} right={right} />
}
