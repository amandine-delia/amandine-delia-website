import { Button as AriakitButton, ButtonProps as AriakitButtonProps } from '@ariakit/react'

type ButtonProps = AriakitButtonProps & {
  variant?: 'rose' | 'blue'
}

const DEFAULT_BUTTON_CLASSES =
  'text-lg border rounded-full capitalize px-[16px] py-[4px] font-medium focus:outline-none cursor-pointer transition duration-(--duration-medium)'
const BLUE_BUTTON_CLASSES = 'border-ds-blue-500 text-ds-blue-500 hover:bg-ds-blue-100'
const ROSE_BUTTON_CLASSES = 'border-ds-rose-900 text-ds-rose-900 hover:bg-ds-rose-100'

export const Button = ({ children, variant = 'rose', className = '', ...props }: ButtonProps) => {
  const variantClasses = variant === 'rose' ? ROSE_BUTTON_CLASSES : BLUE_BUTTON_CLASSES

  return (
    <AriakitButton
      className={`${DEFAULT_BUTTON_CLASSES} ${variantClasses} ${className}`}
      {...props}
    >
      {children}
    </AriakitButton>
  )
}
