import React from 'react'
import Button from './Button'

export default function LeadMagnet(): JSX.Element {
  return (
    <section className="relative isolate overflow-hidden py-16 md:py-24">
      {/* Liquid gradient blobs background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[-12%] top-[-20%] h-[340px] w-[520px] rounded-full bg-gradient-to-tr from-orange-300/50 via-rose-300/40 to-indigo-300/40 blur-3xl animate-liquid" />
        <div className="absolute right-[-10%] bottom-[-18%] h-[320px] w-[520px] rounded-full bg-gradient-to-tr from-cyan-300/40 via-emerald-300/40 to-indigo-300/40 blur-3xl animate-liquid" />
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 md:grid-cols-2 md:gap-12">
        {/* Left column: image with badge (no card styles) */}
        <div className="relative mx-auto w-full max-w-md">
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src="https://i0.wp.com/bravegymmarketing.com/wp-content/uploads/2023/10/student-bundle.webp?w=826&ssl=1"
              srcSet="https://i0.wp.com/bravegymmarketing.com/wp-content/uploads/2023/10/student-bundle.webp?resize=300%2C216&ssl=1 300w, https://i0.wp.com/bravegymmarketing.com/wp-content/uploads/2023/10/student-bundle.webp?resize=600%2C431&ssl=1 600w, https://i0.wp.com/bravegymmarketing.com/wp-content/uploads/2023/10/student-bundle.webp?resize=800%2C575&ssl=1 800w, https://i0.wp.com/bravegymmarketing.com/wp-content/uploads/2023/10/student-bundle.webp?w=826&ssl=1 826w"
              sizes="(min-width: 768px) 40vw, 90vw"
              alt="Printed and digital student resources including handbook, welcome guide, and a phone with QR code"
              className="block h-auto w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="absolute -right-4 -top-4 rounded-full bg-orange-600 px-4 py-3 text-sm font-semibold text-white shadow-lg md:-right-6 md:-top-6 md:text-base">
            4 resources
          </div>
        </div>

        {/* Right column: copy + form (no card styles) */}
        <div>
          <h3 className="text-xs font-bold tracking-widest text-orange-600">FREE DOWNLOAD</h3>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-gray-900 md:text-3xl">Student Resource Bundle</h2>
          <p className="mt-3 max-w-prose text-gray-800">
            Download this free student resource bundle to re-use for your own gym and ‘wow’ your students before and
            after their first class.
          </p>

          <form
            className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2"
            onSubmit={(e) => {
              e.preventDefault()
              alert('Submitted!')
            }}
          >
            <div className="sm:col-span-1">
              <label htmlFor="name" className="mb-1 block text-sm font-medium text-gray-800">
                Your Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Jane Doe"
                className="w-full rounded-lg border border-white/30 bg-white/70 px-3 py-2 text-gray-900 shadow-sm placeholder:text-gray-500 backdrop-blur focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div className="sm:col-span-1">
              <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-800">
                Your Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className="w-full rounded-lg border border-white/30 bg-white/70 px-3 py-2 text-gray-900 shadow-sm placeholder:text-gray-500 backdrop-blur focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div className="sm:col-span-2">
              <Button type="submit" className="w-full rounded-xl border border-white/30 bg-orange-600
               py-3 text-base text-white shadow-sm backdrop-blur transition-colors hover:bg-green-600 supports-[backdrop-filter]:bg-orange-600">
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}