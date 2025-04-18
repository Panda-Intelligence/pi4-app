import { SignUpScreen } from 'app/features/sign-up/screen'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sign Up',
}

export default function Page() {
  return <SignUpScreen />
}
