import React from 'react'
import Button from './Button'
import RevealOnScroll from './RevealOnScroll'

export default function Services(): JSX.Element {
  return (
    <section className="relative isolate overflow-hidden py-16 md:py-24">
      {/* Section relies on global gym-themed background */}

      <div className="mx-auto max-w-6xl px-4">
        <RevealOnScroll animation="up" delayMs={60}>
          <h2 className="text-center text-3xl font-extrabold tracking-tight text-white md:text-4xl drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]">
            Services We Offer
          </h2>
        </RevealOnScroll>

        <div className="mt-10 grid grid-cols-1 items-center gap-10 md:mt-12 md:grid-cols-2 md:gap-12">
          {/* Left column: copy */}
          <RevealOnScroll animation="up" delayMs={120}>
            <div>
              <h3 className="text-2xl font-extrabold tracking-tight text-white md:text-3xl drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]">Website Design</h3>
              <p className="mt-3 max-w-prose text-gray-200">
                We build lead generating websites that are guaranteed to rank well in Google, bring in new members,
                and authentically communicate your gym’s culture and values.
              </p>
              <div className="mt-6">
                <Button type="submit" variant="glass" className="w-full rounded-xl py-3 text-base font-semibold">
                  Learn More
                </Button>
              </div>
            </div>
          </RevealOnScroll>

          {/* Right column: mockup without card styles */}
          <RevealOnScroll animation="up" className="mx-auto w-full max-w-xl" delayMs={80}>
            <div className="overflow-hidden rounded-2xl">
              <img
                src="https://bravegymmarketing.com/wp-content/uploads/2023/10/homepage-1200x636.jpg"
                alt="Gym website mockup"
                className="block h-auto w-full object-cover grayscale"
                loading="lazy"
              />
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  )
}