interface TextProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode
  color?: keyof typeof COLORS
  customColor?: string
}

const COLORS = {
  rose: 'text-ds-rose-900',
  lightRose: 'text-ds-rose-700',
  blue: 'text-ds-blue-900',
  lightBlue: 'text-ds-blue-500',
  black: 'text-black',
}

export const H1 = ({
  children,
  className = '',
  color = 'rose',
  customColor,
  ...props
}: TextProps) => {
  const textColor = customColor ? customColor : COLORS[color]

  return (
    <h1 className={`text-4xl font-bold inline-block w-fit ${textColor} ${className}`} {...props}>
      {children}
    </h1>
  )
}

export const H2 = ({
  children,
  className = '',
  color = 'rose',
  customColor,
  ...props
}: TextProps) => {
  const textColor = customColor ? customColor : COLORS[color]

  return (
    <h2 className={`text-2xl font-bold inline-block w-fit ${textColor} ${className}`} {...props}>
      {children}
    </h2>
  )
}

export const H3 = ({
  children,
  className = '',
  color = 'rose',
  customColor,
  ...props
}: TextProps) => {
  const textColor = customColor ? customColor : COLORS[color]

  return (
    <h3 className={`text-xl font-bold inline-block w-fit ${textColor} ${className}`} {...props}>
      {children}
    </h3>
  )
}

export const P = ({ children, className = '', customColor = 'black', ...props }: TextProps) => {
  const textColor = customColor

  return (
    <p className={`text-lg inline-block w-fit ${textColor} ${className}`} {...props}>
      {children}
    </p>
  )
}
