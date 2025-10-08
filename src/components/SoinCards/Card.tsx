import Image from 'next/image'
import Link from 'next/link'
import { H3 } from '../Text'
import { SoinCardProps } from './constants'

const MAX_DESCRIPTION_LENGTH = 60

export const SoinCard = ({
  title,
  image,
  description,
  path,
  index,
}: SoinCardProps & { index: number }) => {
  return (
    <Link href={path}>
      <div className="relative w-[275px] shrink-0 rounded-md border border-neutral-200 shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
        <div className="flex flex-col md:max-w-[440px] rounded-t-md overflow-hidden">
          <Image
            alt={title}
            // Importing an image will
            // automatically set the width and height
            src={image}
            sizes="100vw"
            // Make the image display full width
            // and preserve its aspect ratio
            style={{
              width: '100%',
              height: 'auto',
            }}
            priority={index < 3}
          />
        </div>
        <div className="p-2">
          <H3 className="text-xl">{title}</H3>
          <p className="inline-block w-fit mt-3">
            {description.length > MAX_DESCRIPTION_LENGTH
              ? description.slice(0, MAX_DESCRIPTION_LENGTH) + '...'
              : description}
          </p>
          <p className="mt-2 inline-block text-ds-text-rose-100 font-semibold">
            En savoir plus &rarr;
          </p>
        </div>
      </div>
    </Link>
  )
}
