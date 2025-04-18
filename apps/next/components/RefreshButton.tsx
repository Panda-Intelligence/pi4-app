'use client'
import { Button } from '@pi4/ui'
import { RotateCw } from '@tamagui/lucide-icons'
import { useRouter } from 'next/navigation'

export function RefreshButton() {
  const router = useRouter()
  return (
    <Button icon={<RotateCw />} onPress={() => router.refresh()}>
      Try Again
    </Button>
  )
}
