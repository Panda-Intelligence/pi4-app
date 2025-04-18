import { PasswordResetScreen } from 'app/features/password-reset/screen'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Password Reset',
}

export default function Page() {
  return <PasswordResetScreen />
}
