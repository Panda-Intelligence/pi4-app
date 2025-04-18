'use client'
import {
  Anchor,
  Button,
  H1,
  H3,
  Paragraph,
  ScrollView,
  Separator,
  Sheet,
  XStack,
  YStack,
  SizableText,
  useToastController,
} from '@pi4/ui'
import { ThemeToggle } from '@pi4/ui/src/ThemeToggle'
import { ChevronDown } from '@tamagui/lucide-icons'
import { useSupabase } from 'app/utils/supabase/hooks/useSupabase'
import { useUser } from 'app/utils/supabase/hooks/useUser'
import { trpc } from 'app/utils/trpc'
import type React from 'react'
import { useState } from 'react'
import { Linking } from 'react-native'
import { SolitoImage } from 'solito/image'
import { useLink } from 'solito/navigation'
import { useSheetOpen } from '../../atoms/sheet'

export function HomeScreen() {
  const utils = trpc.useContext()
  const supabase = useSupabase()
  const { user } = useUser()
  const toast = useToastController()

  const signInLink = useLink({
    href: '/sign-in',
  })

  const signUpLink = useLink({
    href: '/sign-up',
  })

  const dataFetchingLink = useLink({
    href: '/data-fetching',
  })

  const virtualizedListLink = useLink({
    href: '/virtualized-list',
  })

  const paramsLink = useLink({
    href: '/params/tim',
  })

  return (
    <ScrollView>
      <YStack flex={1} jc='center' ai='center' p='$4' space='$4'>
        <SolitoImage src='/pi4-logo.png' width={128} height={128} alt='π₄ Logo' />
        <H1 textAlign='center'>👋 Hello,
          <SizableText size='$10'>π₄</SizableText>
          App</H1>
        <Separator />
        <Paragraph textAlign='center' size={'$2'}>
          Unifying React Native + Web.
        </Paragraph>
        <Paragraph textAlign='center' size={'$2'}>
          The π₄ Stack is made by{' '}
          <Anchor href='https://x.com/isaac_liu28399' target='_blank'>
            Isaac Liu
          </Anchor>
          , give it a star{' '}
          <Anchor
            href='https://github.com/Panda-Intelligence/pi4-app'
            target='_blank'
            rel='noreferrer'
          >
            on Github.
          </Anchor>
        </Paragraph>
        <Paragraph textAlign='center' size={'$2'}>
          Tamagui is made by{' '}
          <Anchor href='https://twitter.com/natebirdman' target='_blank'>
            Nate Weinert
          </Anchor>
          , give it a star{' '}
          <Anchor href='https://github.com/tamagui/tamagui' target='_blank' rel='noreferrer'>
            on Github.
          </Anchor>
        </Paragraph>

        <XStack gap='$5'>
          <Button onPress={() => Linking.openURL('https://stack.pandacat.ai/')}>
            Learn More...
          </Button>
          <ThemeToggle />
        </XStack>

        <H3>🦮🐴 App Demos</H3>
        <YStack space='$2'>
          <Button {...virtualizedListLink} space='$2'>
            Virtualized List
          </Button>
          <Button {...dataFetchingLink} space='$2'>
            Fetching Data
          </Button>
          <Button {...paramsLink} space='$2'>
            Params
          </Button>
          <Button
            onPress={() => {
              toast.show('Hello world!', {
                message: 'Description here',
              })
            }}
          >
            Show Toast
          </Button>
          <SheetDemo />
        </YStack>
        {user ? (
          <Button
            onPress={async () => {
              supabase.auth.signOut()
              // Clear tanstack query cache of authenticated routes
              utils.auth.secretMessage.reset()
            }}
            space='$2'
          >
            Sign Out
          </Button>
        ) : (
          <XStack space='$2'>
            <Button {...signInLink} space='$2'>
              Sign In
            </Button>
            <Button {...signUpLink} space='$2'>
              Sign Up
            </Button>
          </XStack>
        )}
      </YStack>
    </ScrollView>
  )
}

const SheetDemo = (): React.ReactNode => {
  const [open, setOpen] = useSheetOpen()
  const [position, setPosition] = useState(0)

  return (
    <>
      <Button onPress={() => setOpen((x) => !x)} space='$2'>
        Bottom Sheet
      </Button>
      <Sheet
        modal
        open={open}
        onOpenChange={setOpen}
        snapPoints={[80]}
        position={position}
        onPositionChange={setPosition}
        dismissOnSnapToBottom
      >
        <Sheet.Overlay />
        <Sheet.Frame alignItems='center' justifyContent='center'>
          <Sheet.Handle />
          <Button
            size='$6'
            circular
            icon={ChevronDown}
            onPress={() => {
              setOpen(false)
            }}
          />
        </Sheet.Frame>
      </Sheet>
    </>
  )
}
