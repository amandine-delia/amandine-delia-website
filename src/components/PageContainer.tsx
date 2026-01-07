interface PageContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
}

export const PageContainer = ({ children, className }: PageContainerProps) => {
  return <div className={`max-w-[700px] mx-auto px-4 pt-8 pb-24 ${className}`}>{children}</div>
}
