import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_METADATA_NAME,
  description: process.env.NEXT_PUBLIC_METADATA_DESCRIPTION,
  viewport: 'width=device-width,initial-scale=1',
  themeColor: '#FFFFFF',
  icons: {
    icon: '/pwa/icons/favicon.ico',
    shortcut: '/pwa/icons/favicon.ico',
    apple: [
      { url: '/pwa/icons/touch-icon-iphone.png' },
      { url: '/pwa/icons/touch-icon-ipad.png', sizes: '152x152' },
      { url: '/pwa/icons/touch-icon-iphone-retina.png', sizes: '180x180' },
      { url: '/pwa/icons/touch-icon-ipad-retina.png', sizes: '167x167' },
    ],
  },
  appleWebApp: {
    startupImage: [
      // ... 保持原有的所有 apple-touch-startup-image 配置
    ],
  },
}
