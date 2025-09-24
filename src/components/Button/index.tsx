import * as Ariakit from '@ariakit/react'

type ButtonProps = Ariakit.ButtonProps & {
  variant?: 'full' | 'outline'
}

const DEFAULT_BUTTON_CLASSES =
  'rounded-full uppercase px-6 py-2 font-medium focus:outline-none cursor-pointer border-2'

const FULL_BUTTON_CLASSES =
  'border-ds-blue-500 text-ds-blue-500 hover:bg-ds-blue-100 transition duration-(--duration-medium)'

const OUTLINE_BUTTON_CLASSES = ''

export const Button = ({ children, variant = 'full', ...props }: ButtonProps) => {
  const buttonClasses = variant === 'full' ? FULL_BUTTON_CLASSES : OUTLINE_BUTTON_CLASSES

  return (
    <Ariakit.Button className={`${buttonClasses} ${DEFAULT_BUTTON_CLASSES}`} {...props}>
      {children}
    </Ariakit.Button>
  )
}
