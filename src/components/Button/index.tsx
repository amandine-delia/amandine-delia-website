import { Button as AriakitButton, ButtonProps as AriakitButtonProps } from '@ariakit/react'

type Variant = 'rose' | 'blue' | 'fullRose' | 'fullBlack'
type ButtonProps = AriakitButtonProps & {
  variant?: Variant
}

const DEFAULT_BUTTON_CLASSES =
  'text-lg border rounded-full capitalize px-[16px] py-[4px] font-medium focus:outline-none cursor-pointer transition duration-(--duration-medium)'
const BLUE_BUTTON_CLASSES = 'border-ds-blue-500 text-ds-blue-500 hover:bg-ds-blue-100'
const ROSE_BUTTON_CLASSES = 'border-ds-rose-900 text-ds-rose-900 hover:bg-ds-rose-100'
const FULL_ROSE_BUTTON_CLASSES = 'bg-ds-rose-700 text-white hover:bg-ds-rose-500'
const FULL_BLACK_BUTTON_CLASSES = 'bg-black text-white hover:bg-gray-800'

const VARIANT_CLASSES: Record<Variant, string> = {
  rose: ROSE_BUTTON_CLASSES,
  blue: BLUE_BUTTON_CLASSES,
  fullRose: FULL_ROSE_BUTTON_CLASSES,
  fullBlack: FULL_BLACK_BUTTON_CLASSES,
}

export const Button = ({ children, variant = 'rose', className = '', ...props }: ButtonProps) => {
  const variantClasses = VARIANT_CLASSES[variant] || BLUE_BUTTON_CLASSES

  return (
    <AriakitButton
      className={`${DEFAULT_BUTTON_CLASSES} ${variantClasses} ${className}`}
      {...props}
    >
      {children}
    </AriakitButton>
  )
}
