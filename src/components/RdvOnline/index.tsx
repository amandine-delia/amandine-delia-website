'use client'
import { Dialog, useDialogStore } from '@ariakit/react'
import { Button } from '../Button'
import { Close } from '../Icons'
import { SimplyBookingWidget } from './SimplyBookingWidget'

export const RdvOnline = () => {
  const dialog = useDialogStore()

  return (
    <>
      <Button variant="fullRose" className="w-fit" onClick={dialog.show}>
        Prendre rdv en ligne
      </Button>

      <Dialog
        backdrop={
          <div className="fixed inset-0 z-[999] bg-black/50 opacity-0 transition-opacity duration-(--duration-medium) data-[enter]:opacity-100" />
        }
        className="fixed inset-0 z-[999] flex h-full w-full flex-col overflow-hidden bg-white opacity-0 shadow-xl outline-none transition-opacity duration-(--duration-medium) data-[enter]:opacity-100 sm:inset-auto sm:top-1/2 sm:left-1/2 sm:h-[80vh] sm:w-[90vw] sm:max-w-3xl sm:-translate-x-1/2 sm:-translate-y-1/2 sm:rounded-2xl"
        modal
        store={dialog}
      >
        <button
          aria-label="Fermer"
          className="absolute top-4 right-4 z-10 cursor-pointer rounded-full p-2 hover:bg-gray-100"
          onClick={dialog.hide}
        >
          <Close className="text-gray-800" />
        </button>

        <div className="min-h-0 flex-1 overflow-y-auto">
          <SimplyBookingWidget />
        </div>
      </Dialog>
    </>
  )
}
