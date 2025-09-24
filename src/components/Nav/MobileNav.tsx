'use client'
import { Dialog, DialogOptions, useDialogStore } from '@ariakit/react'
import { Bars2Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import './nav.css'

export const MobileNav = () => {
  //   const [isOpen, setIsOpen] = useState(false)
  const dialog = useDialogStore()

  const handleToggle = () => {
    console.log('-------------------------------------')
    console.log('dialog', dialog)
    console.log('-------------------------------------')

    dialog.toggle()
  }

  return (
    <div className="lg:hidden">
      <Header handleToggle={handleToggle} />

      <Drawer store={dialog}>
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </Drawer>
    </div>
  )
}

const Drawer = ({
  children,
  store,
}: {
  children: React.ReactNode
  store: DialogOptions['store']
}) => {
  return (
    <Dialog
      //   backdrop={withBackdrop ? <S.Backdrop hideOnInteractOutside={hideOnInteractOutside} /> : false}
      //   hideOnInteractOutside={hideOnInteractOutside}
      //   modal={withBackdrop}
      //   ref={ref}
      render={<div className="nav-drawer" />}
      store={store}
      //   {...(rest as DialogProps<'div'>)}
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

const Header = ({ handleToggle }: { handleToggle: VoidFunction }) => {
  return (
    <div className="p-2 grid grid-cols-[auto_1fr] items-center">
      <Bars2Icon className="size-6 text-gray-800 z-10" role="button" onClick={handleToggle} />

      <Link href="/" className="no-underline relative left-[-24px]">
        <h1 className="text-2xl font-bold text-center">Amandine D&apos;Elia</h1>
      </Link>
    </div>
  )
}
