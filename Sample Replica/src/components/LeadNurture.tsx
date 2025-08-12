import React from 'react'
import RevealOnScroll from './RevealOnScroll'

export default function LeadNurture(): JSX.Element {
  return (
    <section className="relative isolate overflow-hidden py-16 md:py-24">
      {/* Section relies on global gym-themed background */}

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 md:grid-cols-2 md:gap-12">
        {/* Left: Copy */}
        <RevealOnScroll animation="up" delayMs={120}>
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight text-white md:text-3xl drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]">Lead Nurture</h2>
            <p className="mt-3 max-w-prose text-gray-200">
              We install automated lead nurture sequences that follow up with leads on auto pilot, answer their
              questions with conversational AI, and encourage them to come in to an appointment or their first
              martial arts classes.
            </p>
          </div>
        </RevealOnScroll>

        {/* Right: Image without card styles */}
        <RevealOnScroll animation="up" className="mx-auto w-full max-w-xl" delayMs={60}>
          <div className="overflow-hidden rounded-2xl">
            <img
              src="https://bravegymmarketing.com/wp-content/uploads/2023/10/lead-nurture-workflow-1200x657.jpg"
              alt="Lead nurture workflow"
              className="block h-auto w-full object-cover"
              loading="lazy"
            />
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}