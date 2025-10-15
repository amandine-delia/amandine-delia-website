import MarkdownPrimitive, { MarkdownToJSX } from 'markdown-to-jsx'
import { HTMLAttributes } from 'react'
import { H2, H3, Ol, P, Strong, Ul } from '../Text'

// declaration copied from "markdown-to-jsx" lib itself
type MarkdownProps = Omit<HTMLAttributes<Element>, 'children'> & {
  children: string
  options?: MarkdownToJSX.Options
}

const defaultOptions: MarkdownToJSX.Options = {
  forceWrapper: true,
  wrapper: 'div',
}

const MARKDOWN_SECURITY_OVERRIDES = {
  embed: () => null, // Prevent embed injection
  iframe: () => null, // Prevent iframe injection
  object: () => null, // Prevent object injection
  script: () => null, // Prevent script injection
  style: () => null, // Prevent style injection
}

const STYLE_OVERRIDE: MarkdownToJSX.Options['overrides'] = {
  p: props => <P {...props} />,
  h1: ({ className = '', ...props }) => (
    <H2 customColor="text-black" className={`${className} mb-3 text-lg`} {...props} />
  ),
  h2: ({ className = '', ...props }) => (
    <H2 customColor="text-black" className={`${className} mb-3 text-lg`} {...props} />
  ),
  h3: ({ className = '', ...props }) => (
    <H3 customColor="text-black" className={`${className} mb-3 text-lg`} {...props} />
  ),
  ul: ({ className = '', ...props }) => <Ul className={`${className} mb-3`} {...props} />,
  ol: ({ className = '', ...props }) => <Ol className={`${className} mb-3`} {...props} />,
  strong: props => <Strong {...props} />,
  b: props => <Strong {...props} />,
}

const DEFAULT_OVERRIDES = {
  ...MARKDOWN_SECURITY_OVERRIDES,
  ...STYLE_OVERRIDE,
}

export const Markdown = ({ children, options, ...props }: MarkdownProps) => {
  return (
    <MarkdownPrimitive
      {...props}
      options={{ ...defaultOptions, overrides: { ...DEFAULT_OVERRIDES, ...options?.overrides } }}
    >
      {children}
    </MarkdownPrimitive>
  )
}
