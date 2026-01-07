import { SoinCard } from './Card'
import { SOIN_CARDS } from './constants'
import { ThreeDots } from './ThreeDots'

export const SoinCards = () => {
  return (
    <div>
      <div className="flex max-w-[min(100vw,1152px)] mx-auto gap-5 overflow-x-auto mt-8 pb-6 px-2">
        {SOIN_CARDS.map((card, index) => (
          <SoinCard key={index} {...card} index={index} />
        ))}
      </div>

      <ThreeDots />
    </div>
  )
}
