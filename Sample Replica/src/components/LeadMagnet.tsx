import React from 'react'
import Button from './Button'
import RevealOnScroll from './RevealOnScroll'

export default function LeadMagnet(): JSX.Element {
  return (
    <section className="relative isolate overflow-hidden py-16 md:py-24">
      {/* Section relies on global gym-themed background */}

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 md:grid-cols-2 md:gap-12">
        {/* Left column: image with badge (no card styles) */}
        <RevealOnScroll animation="up" className="relative mx-auto w-full max-w-md" delayMs={80}>
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

        </RevealOnScroll>

        {/* Right column: copy + form (no card styles) */}
        <RevealOnScroll animation="up" delayMs={140}>
          <div className='text-center'>
            <h3 className="text-3xl font-extrabold text-center tracking-widest text-gray-100">FREE DOWNLOAD</h3>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-white md:text-3xl drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]">Student Resource Bundle</h2>
            <p className="mt-3 max-w-prose text-gray-200">
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
                <label htmlFor="name" className="mb-1 block text-sm font-medium text-gray-300">
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Jane Doe"
                  className="w-full rounded-lg border-none ring-1 ring-white/30 bg-white/30 supports-[backdrop-filter]:bg-white/20 backdrop-blur-lg px-3 py-2 text-gray-200 shadow-lg shadow-black/5 placeholder:text-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400/60"
                />
              </div>

              <div className="sm:col-span-1">
                <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-300">
                  Your Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-lg border-none ring-1 ring-white/30 bg-white/30 supports-[backdrop-filter]:bg-white/20 backdrop-blur-lg px-3 py-2 text-gray-200 shadow-lg shadow-black/5 placeholder:text-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400/60"
                />
              </div>

              <div className="sm:col-span-2">
                <Button type="submit" variant="glass" className="w-full rounded-xl py-3 text-base font-semibold">
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}