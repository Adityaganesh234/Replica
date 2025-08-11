import React from 'react'

type NavLinksProps = {
  orientation?: 'horizontal' | 'vertical'
  className?: string
}

const links = [
  { href: '#home', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

export default function NavLinks({ orientation = 'horizontal', className }: NavLinksProps): JSX.Element {
  const isHorizontal = orientation === 'horizontal'
  return (
    <ul
      className={[
        isHorizontal ? 'flex items-center gap-6' : 'flex flex-col items-center gap-4',
        'text-sm font-medium text-gray-700',
        className ?? '',
      ].join(' ')}
    >
      {links.map((link) => (
        <li key={link.href}>
          <a
            href={link.href}
            className="transition-colors hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 rounded"
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  )
}