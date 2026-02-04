import Link from 'next/link'
import { Button } from './Button'
import { P, Strong } from './Text'

type ConsultationCardProps = {
  title: string
  description: string
  link: string
}

export const ConsultationCard = ({ title, description, link }: ConsultationCardProps) => {
  return (
    <div className="py-6 px-3 rounded-lg border border-ds-blue-200 flex-1 flex flex-col max-w-[350px] min-w-[250px]">
      <Strong color="lightBlue" className="text-lg mb-3 block">
        {title}
      </Strong>
      <P className="flex-1">{description}</P>

      <Link href={link}>
        <Button variant="blue" className="mt-6">
          En savoir plus
        </Button>
      </Link>
    </div>
  )
}
