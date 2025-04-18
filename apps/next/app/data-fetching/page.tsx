import { DataFetchingScreen } from 'app/features/data-fetching/screen'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Data Fetching',
}
export default function Page() {
  return <DataFetchingScreen />
}
