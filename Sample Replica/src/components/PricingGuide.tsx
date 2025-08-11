import React from 'react'
import Button from './Button'

export default function PricingGuide(): JSX.Element {
  const [hasSite, setHasSite] = React.useState<string>('')
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Hook up to your form handler or marketing platform as needed
    alert('Next step...')
  }

  return (
    <section className="relative isolate overflow-hidden py-16 md:py-24">
      {/* Liquid gradient blobs background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[-12%] top-[-20%] h-[340px] w-[520px] rounded-full bg-gradient-to-tr from-orange-300/50 via-rose-300/40 to-indigo-300/40 blur-3xl animate-liquid" />
        <div className="absolute right-[-10%] bottom-[-18%] h-[320px] w-[520px] rounded-full bg-gradient-to-tr from-cyan-300/40 via-emerald-300/40 to-indigo-300/40 blur-3xl animate-liquid" />
      </div>

      <div className="mx-auto max-w-4xl px-4">
        <h2 className="text-center text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
          Get Our Web Design Pricing Guide
        </h2>
        <p className="mt-3 text-center text-lg text-gray-700">
          Get instant access to our pricing guide for a custom fitness website.
        </p>

        <form onSubmit={handleSubmit} className="mx-auto mt-8 rounded-2xl border border-white/30 bg-white/40 p-6 backdrop-blur supports-[backdrop-filter]:bg-white/35">
          <div className="text-sm font-medium text-gray-700">Step 1 of 2</div>
          <div className="relative mt-2 h-4 w-full overflow-hidden rounded-full bg-white/50 backdrop-blur">
            <div className="h-full w-1/2 rounded-full bg-orange-600" />
            <div className="pointer-events-none absolute inset-0 flex items-center">
              <span className="ml-[calc(50%-2rem)] text-xs font-bold text-white">50%</span>
            </div>
          </div>

          <div className="mt-6">
            <label htmlFor="email" className="mb-2 block text-xl font-bold text-gray-900">
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
            <legend className="text-xl font-bold text-gray-900">
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
                <span className="text-lg text-gray-900">Yes</span>
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
                <span className="text-lg text-gray-900">No</span>
              </label>
            </div>
          </fieldset>

          <div className="mt-8">
            <Button type="submit" className="rounded-2xl border border-white/30 bg-white/40 px-6 py-3 text-base text-gray-900 backdrop-blur hover:bg-white/50 supports-[backdrop-filter]:bg-white/35">
              Next
            </Button>
          </div>
        </form>
      </div>
    </section>
  )
}