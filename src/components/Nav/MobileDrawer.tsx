import type { DialogOptions } from '@ariakit/react'
import { Dialog } from '@ariakit/react'
import { Close } from '../Icons'

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
          <div className="p-2 cursor-pointer rounded-full bg-gray-100">
            <Close className="text-gray-800 z-10" onClick={store?.hide} />
          </div>
        </div>
        {children}
      </div>
    </Dialog>
  )
}
