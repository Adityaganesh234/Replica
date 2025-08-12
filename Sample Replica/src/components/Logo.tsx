import React from 'react'

export default function Logo(): JSX.Element {
  return (
    <a href="/" className="inline-flex items-center gap-2">
      <img
        src="https://bravegymmarketing.com/wp-content/uploads/2023/09/BRAVE-Logo-1.png"
        alt="BRAVE"
        className="h-11 w-23"
      />
      <span className="sr-only">Home</span>
    </a>
  )
}