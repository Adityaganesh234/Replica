import React from 'react'

type ButtonBaseProps = {
  children: React.ReactNode
  className?: string
}

type AnchorButtonProps = ButtonBaseProps & React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string
  as?: 'a'
}

type NativeButtonProps = ButtonBaseProps & React.ButtonHTMLAttributes<HTMLButtonElement> & {
  as?: 'button'
}

export type ButtonProps = AnchorButtonProps | NativeButtonProps

function baseClasses(additional?: string): string {
  const base = [
    'inline-flex items-center justify-center rounded-lg',
    'px-4 py-2 text-sm font-medium',
    'bg-orange-500 text-white hover:bg-orange-500',
    'focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2',
    'transition-colors',
  ].join(' ')
  return additional ? `${base} ${additional}` : base
}

export default function Button(props: ButtonProps): JSX.Element {
  if ('href' in props) {
    const { children, className, as: _as, ...rest } = props as AnchorButtonProps
    return (
      <a {...rest} className={baseClasses(className)}>
        {children}
      </a>
    )
  }

  const { children, className, as: _as, ...rest } = props as NativeButtonProps
  return (
    <button {...rest} className={baseClasses(className)}>
      {children}
    </button>
  )
}