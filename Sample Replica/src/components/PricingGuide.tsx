import React from 'react'
import Button from './Button'
import RevealOnScroll from './RevealOnScroll'

export default function PricingGuide(): JSX.Element {
  const [hasSite, setHasSite] = React.useState<string>('')
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Hook up to your form handler or marketing platform as needed
    alert('Next step...')
  }

  return (
    <section className="relative isolate overflow-hidden py-16 md:py-24">
      {/* Section relies on global gym-themed background */}

      <div className="mx-auto max-w-4xl px-4">
        <RevealOnScroll animation="up" delayMs={60}>
          <h2 className="text-center text-4xl font-extrabold tracking-tight text-white md:text-5xl drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]">
            Get Our Web Design Pricing Guide
          </h2>
          <p className="mt-3 text-center text-lg text-gray-200">
            Get instant access to our pricing guide for a custom fitness website.
          </p>
        </RevealOnScroll>

        <RevealOnScroll animation="up" delayMs={140}>
          <form onSubmit={handleSubmit} className="mx-auto mt-8 rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur supports-[backdrop-filter]:bg-white/10">
            <div className="text-sm font-medium text-gray-300">Step 1 of 2</div>
            <div className="relative mt-2 h-4 w-full overflow-hidden rounded-full bg-white/50 backdrop-blur">
              <div className="h-full w-1/2 rounded-full bg-orange-600" />
              <div className="pointer-events-none absolute inset-0 flex items-center">
                <span className="ml-[calc(50%-2rem)] text-xs font-bold text-white">50%</span>
              </div>
            </div>

            <div className="mt-6">
              <label htmlFor="email" className="mb-2 block text-xl font-bold text-white">
                Email <span className="text-orange-600">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-xl border border-white/30 bg-white/70 px-4 py-4 text-lg text-gray-900 shadow-sm placeholder:text-gray-500 backdrop-blur focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="you@example.com"
              />
            </div>

            <fieldset className="mt-8">
              <legend className="text-xl font-bold text-white">
                Do you have an existing website or facebook page? <span className="text-orange-600">*</span>
              </legend>

              <div className="mt-4 space-y-4">
                <label className="flex cursor-pointer items-center gap-3">
                  <input
                    type="radio"
                    name="hasSite"
                    value="yes"
                    checked={hasSite === 'yes'}
                    onChange={(e) => setHasSite(e.target.value)}
                    className="h-4 w-4 border-white/40 text-orange-600 focus:ring-orange-500"
                    required
                  />
                  <span className="text-lg text-gray-200">Yes</span>
                </label>
                <label className="flex cursor-pointer items-center gap-3">
                  <input
                    type="radio"
                    name="hasSite"
                    value="no"
                    checked={hasSite === 'no'}
                    onChange={(e) => setHasSite(e.target.value)}
                    className="h-4 w-4 border-white/40 text-orange-600 focus:ring-orange-500"
                    required
                  />
                  <span className="text-lg text-gray-200">No</span>
                </label>
              </div>
            </fieldset>

            <div className="mt-8">
              <Button type="submit" variant="glass" className="w-24 rounded-xl py-3 text-base font-semibold bg-opactiy-0">
                Next
              </Button>
            </div>
          </form>
        </RevealOnScroll>
      </div>
    </section>
  )
}