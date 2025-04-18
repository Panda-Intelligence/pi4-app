'use client'
import type { AuthChangeEvent } from '@supabase/supabase-js'
import { useSupabase } from 'app/utils/supabase/hooks/useSupabase'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import { useRouter } from 'solito/navigation'

export const useAuthRedirect = () => {
  const supabase = useSupabase()
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const signOutListener = supabase.auth.onAuthStateChange(async (event: AuthChangeEvent) => {
      if (event === 'SIGNED_OUT') {
        if (pathname !== '/') {
          router.replace('/')
        }
      }
    })
    return () => {
      signOutListener.data.subscription.unsubscribe()
    }
  }, [supabase, router, pathname])
}
