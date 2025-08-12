import React from 'react'

function NavItem({ label, hasDropdown = false, href = '#' }: { label: string; hasDropdown?: boolean; href?: string }): JSX.Element {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-1.5 text-sm font-medium text-white hover:opacity-80"
    >
      <span>{label}</span>
      {hasDropdown && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-4 w-4"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
            clipRule="evenodd"
          />
        </svg>
      )}
    </a>
  )
}

export default function Footer(): JSX.Element {
  return (
    <footer className="relative isolate overflow-hidden bg-transparent text-white">

      <div className="mx-auto max-w-6xl px-4 py-12">
        {/* Top: tagline and nav on a subtle glass bar */}
        <div className="grid grid-cols-1 items-start gap-8 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur supports-[backdrop-filter]:bg-white/5 md:grid-cols-2">
          <p className="max-w-xl text-lg font-bold leading-snug md:text-xl">
            Attract More Students With Professional Quality Web Design & Digital Marketing.
          </p>

          <nav aria-label="Footer navigation" className="md:justify-self-end">
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-3">
              <li>
                <NavItem label="About Us" href="#about" />
              </li>
              <li>
                <NavItem label="Contact" href="#contact" />
              </li>
              <li>
                <NavItem label="Blog" hasDropdown href="#blog" />
              </li>
              <li>
                <NavItem label="Free Resources" hasDropdown href="#resources" />
              </li>
              <li>
                <NavItem label="Martial Arts Website Design" hasDropdown href="#martial-arts-web-design" />
              </li>
            </ul>
          </nav>
        </div>

        {/* Bottom: meta on a subtle glass bar */}
        <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur supports-[backdrop-filter]:bg-white/5">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <p className="text-sm">© 2025 • Made With Love, LLC</p>
            <a
              href="mailto:team@bravegymmarketing.com"
              className="text-sm font-medium hover:opacity-80"
            >
              team@bravegymmarketing.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}