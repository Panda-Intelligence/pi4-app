import type { Car } from '@pi4/api/src/db/schema'
import { formatNumber, formatPrice } from '@pi4/ui/src/libs/number'
import { SolitoImage } from 'solito/image'
import { Paragraph, YStack } from 'tamagui'

export const CarListItem = (item: Car): React.ReactElement => {
  return (
    <YStack flexDirection='row' paddingLeft='$2'>
      <SolitoImage
        src='/pi4-logo.png'
        width={56}
        height={56}
        alt='π₄ Logo'
        style={{
          marginTop: 8,
        }}
      />
      <YStack>
        <Paragraph paddingTop='$2' paddingLeft='$3' paddingBottom='$1' fontSize={16}>
          {`${item.make} ${item.model}`}
        </Paragraph>
        <Paragraph paddingLeft='$3' fontSize={16} opacity={0.6}>
          {item.color} - {item.year} - {formatNumber(item.mileage)} miles -{' '}
          {formatPrice(item.price)}
        </Paragraph>
      </YStack>
    </YStack>
  )
}
