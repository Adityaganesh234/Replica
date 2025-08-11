import React from 'react'
import Logo from './Logo'
import Button from './Button'
import NavLinks from './NavLinks'

export default function Navbar(): JSX.Element {
  const [open, setOpen] = React.useState(false)

  return (
    <nav className="sticky top-0 z-20 w-full">
      {/* Liquid background blob */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-[-200px] z-0 flex justify-center">
        <div className="h-[260px] w-[600px] rounded-full bg-gradient-to-r from-orange-300/50 via-rose-300/40 to-indigo-300/40 blur-3xl animate-liquid" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4">
        <div className="mt-3 flex h-14 items-center justify-between rounded-xl border border-white/20 bg-white/40 px-3 shadow-md backdrop-blur supports-[backdrop-filter]:bg-white/35">
          <div className="flex items-center gap-3">
            <Logo />
          </div>

          <div className="hidden md:flex flex-1 items-center justify-center">
            <NavLinks />
          </div>

          <div className="hidden md:flex items-center gap-2">
            <Button as="a" href="#login">Login</Button>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <button
              aria-label="Toggle menu"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/30 bg-white/40 text-gray-700 backdrop-blur"
              onClick={() => setOpen((v) => !v)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                {open ? (
                  <path
                    fillRule="evenodd"
                    d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 11-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                    clipRule="evenodd"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    d="M3.75 5.25a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5H3.75zm0 6a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5H3.75zm0 6a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5H3.75z"
                    clipRule="evenodd"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {open && (
          <div className="relative z-10 md:hidden pb-4">
            <div className="mt-2 rounded-xl border border-white/20 bg-white/50 p-3 shadow-md backdrop-blur">
              <NavLinks orientation="vertical" />
              <div className="mt-4 flex justify-center">
                <Button as="a" href="#login" className="w-full max-w-xs">Login</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}