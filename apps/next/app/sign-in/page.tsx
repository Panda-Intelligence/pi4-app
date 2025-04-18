import { SignInScreen } from 'app/features/sign-in/screen'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sign Up',
}

export default function Page() {
  return <SignInScreen />
}
