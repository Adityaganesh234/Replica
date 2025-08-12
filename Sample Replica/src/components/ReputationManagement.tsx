import React from 'react'
import RevealOnScroll from './RevealOnScroll'

export default function ReputationManagement(): JSX.Element {
  return (
    <section className="relative isolate overflow-hidden py-16 md:py-24">
      {/* Section relies on global gym-themed background */}

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 md:grid-cols-2 md:gap-12">
        {/* Left: Image */}
        <RevealOnScroll animation="up" className="mx-auto w-full max-w-xl order-1 md:order-none" delayMs={60}>
          <div className="overflow-hidden rounded-2xl">
            <img
              src="https://bravegymmarketing.com/wp-content/uploads/2023/10/Screenshot-2023-10-25-at-8.58.37-PM-1200x754.jpg"
              alt="Reputation management dashboard screenshot"
              className="block h-auto w-full object-cover"
              loading="lazy"
            />
          </div>
        </RevealOnScroll>

        {/* Right: Copy */}
        <RevealOnScroll animation="up" delayMs={120}>
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight text-white md:text-3xl drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]">Reputation Management</h2>
            <p className="mt-3 max-w-prose text-gray-200">
              We help review and optimize your online profile with a focus on crushing it with your Google Business
              listing so you can bring in more organic traffic (people who are already searching for martial arts
              schools like yours).
            </p>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}