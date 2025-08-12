import React from 'react'
import RevealOnScroll from './RevealOnScroll'

export default function LeadGeneration(): JSX.Element {
  return (
    <section className="relative isolate overflow-hidden py-16 md:py-24">
      {/* Section relies on global gym-themed background */}

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 md:grid-cols-2 md:gap-12">
        {/* Left: Image */}
        <RevealOnScroll animation="up" className="mx-auto w-full max-w-xl" delayMs={80}>
          <div className="overflow-hidden rounded-2xl">
            <img
              src="https://bravegymmarketing.com/wp-content/uploads/2023/10/facebook-ads-1200x708.jpg"
              alt="Sample Facebook ads preview"
              className="block h-auto w-full object-cover"
              loading="lazy"
            />
          </div>
        </RevealOnScroll>

        {/* Right: Description */}
        <RevealOnScroll animation="up" delayMs={140}>
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight text-white md:text-3xl drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]">Lead Generation</h2>
            <p className="mt-3 max-w-prose text-gray-200">
              Let us help you set up and manage Instagram and Facebook ads or Google ads that consistently bring in new
              leads.
            </p>
            <p className="mt-4 max-w-prose text-gray-200">
              We’ll create on-brand creative, configure conversion tracking, and continuously optimize campaigns so you
              can focus on delivering great classes while the pipeline fills up.
            </p>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}