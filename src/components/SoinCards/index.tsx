import { SoinCard } from './Card'
import { SOIN_CARDS } from './constants'

export const SoinCards = () => {
  return (
    <div className="flex max-w-[min(100vw,1152px)] mx-auto gap-5 overflow-x-auto mt-6 pb-6 px-2">
      {SOIN_CARDS.map((card, index) => (
        <SoinCard key={index} {...card} index={index} />
      ))}
    </div>
  )
}
