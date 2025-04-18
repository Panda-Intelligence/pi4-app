'use client'
import { Anchor, H1, Paragraph, XStack, YStack } from '@pi4/ui'
import { RefreshButton } from 'components/RefreshButton'
import { SolitoImage } from 'solito/image'

const customerCareEmail = process.env.NEXT_PUBLIC_CUSTOMER_CARE_EMAIL

export default function Page() {
  return (
    <YStack flex={1} justifyContent='center' alignItems='center' padding='$4' space='$4'>
      <SolitoImage src='/pi4-logo.png' width={96} height={96} alt='π₄ Logo' />
      <H1>Unable to connect to server</H1>
      <Paragraph maxWidth={500}>
        Your changes were saved, but we could not connect to the server because you are offline.
        Please try connecting again. If the issue keeps happening,{' '}
        <Anchor href={`mailto:${customerCareEmail}`} target='_blank' rel='noreferrer'>
          contact Customer Care
        </Anchor>
        .
      </Paragraph>
      <XStack padding='$4'>
        <RefreshButton />
      </XStack>
    </YStack>
  )
}
