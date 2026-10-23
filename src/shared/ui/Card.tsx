import type { ReactNode } from 'react'

type CardProps = {
  children: ReactNode;
  title?: string;
  className?: string;
  headerRight?: ReactNode;
}

function Card({ children, title, className = "", headerRight }: CardProps) {
  return (
    <div className={"overflow-hidden rounded-lg border border-neutral-200 bg-white " + className}>
      {title && (
        <div className="flex items-center justify-between border-b border-neutral-200 px-5 py-3.5">
          <h2>{title}</h2>
          {headerRight}
        </div>
      )}
      {children}
    </div>
  )
}

export default Card