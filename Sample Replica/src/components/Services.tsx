import React from 'react'
import Button from './Button'

export default function Services(): JSX.Element {
  return (
    <section className="relative isolate overflow-hidden py-16 md:py-24">
      {/* Liquid gradient blobs background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[-12%] top-[-18%] h-[320px] w-[520px] rounded-full bg-gradient-to-tr from-orange-300/50 via-rose-300/40 to-indigo-300/40 blur-3xl animate-liquid" />
        <div className="absolute right-[-10%] bottom-[-16%] h-[300px] w-[500px] rounded-full bg-gradient-to-tr from-cyan-300/40 via-emerald-300/40 to-indigo-300/40 blur-3xl animate-liquid" />
      </div>

      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-center text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
          Services We Offer
        </h2>

        <div className="mt-10 grid grid-cols-1 items-center gap-10 md:mt-12 md:grid-cols-2 md:gap-12">
          {/* Left column: copy */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 md:text-2xl">Website Design</h3>
            <p className="mt-3 max-w-prose text-gray-800">
              We build lead generating websites that are guaranteed to rank well in Google, bring in new members,
              and authentically communicate your gym’s culture and values.
            </p>
            <div className="mt-6">
              <Button as="a" href="#website-design" className="bg-orange-600 hover:bg-orange-500">
                Learn More
              </Button>
            </div>
          </div>

          {/* Right column: mockup without card styles */}
          <div className="mx-auto w-full max-w-xl">
            <div className="overflow-hidden rounded-2xl">
              <img
                src="https://bravegymmarketing.com/wp-content/uploads/2023/10/homepage-1200x636.jpg"
                alt="Gym website mockup"
                className="block h-auto w-full object-cover grayscale"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}