import type { DialogOptions } from '@ariakit/react'
import { Dialog } from '@ariakit/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

export const MobileDrawer = ({
  children,
  store,
}: {
  children: React.ReactNode
  store: DialogOptions['store']
}) => {
  return (
    <Dialog
      backdrop={<div className="nav-backdrop" />}
      hideOnInteractOutside
      modal
      render={<div className="nav-drawer" />}
      store={store}
    >
      <div className="p-4 h-full">
        <div className="flex justify-end">
          <XMarkIcon className="size-6 text-gray-800 z-10" onClick={store?.hide} />
        </div>
        {children}
      </div>
    </Dialog>
  )
}
