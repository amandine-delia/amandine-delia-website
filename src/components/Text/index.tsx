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

export const H1 = ({ children, className = '', customColor = 'black', ...props }: TextProps) => {
  return (
    <h1
      className={`text-3xl lg:text-4xl font-bold inline-block w-fit ${customColor} ${className}`}
      {...props}
    >
      {children}
    </h1>
  )
}

export const PageTitle = ({ className, ...props }: TextProps) => (
  <H1 className={`mb-4 inline-block w-full md:text-center ${className}`} {...props} />
)

export const H2 = ({
  children,
  className = '',
  color = 'rose',
  customColor,
  ...props
}: TextProps) => {
  const textColor = customColor ? customColor : COLORS[color]

  return (
    <h2 className={`text-3xl font-bold inline-block w-fit ${textColor} ${className}`} {...props}>
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
    <h3 className={`text-3xl font-bold inline-block w-fit ${textColor} ${className}`} {...props}>
      {children}
    </h3>
  )
}

export const P = ({
  children,
  className = '',
  color = 'black',
  customColor,
  ...props
}: TextProps) => {
  const textColor = customColor ? customColor : COLORS[color]

  return (
    <p className={`text-lg inline-block w-fit ${textColor} ${className}`} {...props}>
      {children}
    </p>
  )
}

export const Strong = ({
  children,
  className = '',
  customColor = 'black',
  ...props
}: TextProps) => {
  return (
    <strong className={`font-bold ${customColor} ${className}`} {...props}>
      {children}
    </strong>
  )
}

export const Ul = ({
  children,
  className = '',
  ...props
}: React.HTMLAttributes<HTMLUListElement>) => {
  return (
    <ul className={`text-lg list-disc pl-6 space-y-1 mb-8 ${className}`} {...props}>
      {children}
    </ul>
  )
}

export const Ol = ({
  children,
  className = '',
  ...props
}: React.HTMLAttributes<HTMLOListElement>) => {
  return (
    <ol className={`text-lg list-decimal pl-6 space-y-1 mb-8 ${className}`} {...props}>
      {children}
    </ol>
  )
}

type AProps = TextProps & {
  hasUnderline?: boolean
}

export const A = ({
  children,
  className = '',
  color = 'rose',
  customColor,
  hasUnderline = true,
  ...props
}: AProps & React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const textColor = customColor ? customColor : COLORS[color]

  return (
    <a
      className={`${hasUnderline ? 'underline decoration-ds-rose-900' : ''} hover:opacity-80 transition-opacity font-semibold ${textColor} ${className}`}
      {...props}
    >
      {children}
    </a>
  )
}
