'use client'
import { YStack, useToastController } from '@pi4/ui'
import { PasswordResetComponent } from '@pi4/ui/src/PasswordReset'
import { useSupabase } from 'app/utils/supabase/hooks/useSupabase'
import { useRouter } from 'solito/navigation'

export function UpdatePasswordScreen() {
  const { push } = useRouter()
  const toast = useToastController()
  const supabase = useSupabase()

  const handlePasswordUpdateWithPress = async (password) => {
    const { error } = await supabase.auth.updateUser({ password })
    if (error) {
      toast.show('Password change failed', {
        description: error.message,
      })
      console.log('Password change failed', error)
      return
    }
    push('/')
  }

  return (
    <YStack flex={1} justifyContent='center' alignItems='center' space>
      <PasswordResetComponent type='password' handleWithPress={handlePasswordUpdateWithPress} />
    </YStack>
  )
}
