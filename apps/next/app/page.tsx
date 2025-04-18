import { HomeScreen } from 'app/features/home/screen'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home',
}
export default function Page() {
  return <HomeScreen />
}
