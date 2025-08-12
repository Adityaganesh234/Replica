import React from 'react'

type Variant = 'solid' | 'glass'

type ButtonBaseProps = {
  children: React.ReactNode
  className?: string
  variant?: Variant
}

type AnchorButtonProps = ButtonBaseProps & React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string
  as?: 'a'
}

type NativeButtonProps = ButtonBaseProps & React.ButtonHTMLAttributes<HTMLButtonElement> & {
  as?: 'button'
}

export type ButtonProps = AnchorButtonProps | NativeButtonProps

function buildClassName(variant: Variant = 'solid', additional?: string): string {
  const base = [
    'inline-flex items-center justify-center rounded-lg',
    'px-4 py-2 text-sm font-medium',
    'transition-colors',
    'focus:outline-none focus:ring-2 focus:ring-orange-400/60',
  ].join(' ')

  const solid = [
    'bg-orange-600 text-white hover:bg-orange-500',
    'shadow-sm',
  ].join(' ')

  const glass = [
    'border border-white/30',
    'bg-white/30 bg-opacity-0 supports-[backdrop-filter]:bg-white/20',
    'backdrop-blur-md',
    'text-white',
    'shadow-lg shadow-black/5',
    'hover:bg-white/30 hover:border-white/40',
  ].join(' ')

  const variantClasses = variant === 'glass' ? glass : solid
  return additional ? `${base} ${variantClasses} ${additional}` : `${base} ${variantClasses}`
}

export default function Button(props: ButtonProps): JSX.Element {
  if ('href' in props) {
    const { children, className, variant, as: _as, ...rest } = props as AnchorButtonProps
    return (
      <a {...rest} className={buildClassName(variant, className)}>
        {children}
      </a>
    )
  }

  const { children, className, variant, as: _as, ...rest } = props as NativeButtonProps
  return (
    <button {...rest} className={buildClassName(variant, className)}>
      {children}
    </button>
  )
}