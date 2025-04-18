if (typeof requestAnimationFrame === 'undefined') {
  if (typeof setImmediate !== 'undefined') {
    globalThis.requestAnimationFrame = setImmediate
  } else {
    globalThis.requestAnimationFrame = (callback) => {
      const now = Date.now()
      callback(now)
      return now
    }
  }
}
import '@tamagui/core/reset.css'
import '@tamagui/font-inter/css/400.css'
import '@tamagui/font-inter/css/700.css'

import { Providers } from './providers'

if (process.env.NODE_ENV === 'production') {
  require('../public/tamagui.css')
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
