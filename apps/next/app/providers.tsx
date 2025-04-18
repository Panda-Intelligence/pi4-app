'use client'

import { StylesProvider } from 'app/provider/style-provider'
import { Provider } from 'app/provider'
import { trpc } from 'app/utils/trpc/index.web'
import type { Session } from '@supabase/supabase-js'
import { useState } from 'react'

function RawProviders({
  children,
}: {
  children: React.ReactNode
}) {
  const [session] = useState<Session | null>(null)
  return (
    <StylesProvider>
      <Provider initialSession={session}>{children}</Provider>
    </StylesProvider>
  )
}

export const Providers = trpc.withTRPC(RawProviders)
