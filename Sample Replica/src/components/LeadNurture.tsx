import React from 'react'

export default function LeadNurture(): JSX.Element {
  return (
    <section className="relative isolate overflow-hidden py-16 md:py-24">
      {/* Liquid gradient blobs background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[-12%] top-[-20%] h-[340px] w-[520px] rounded-full bg-gradient-to-tr from-orange-300/50 via-rose-300/40 to-indigo-300/40 blur-3xl animate-liquid" />
        <div className="absolute right-[-10%] bottom-[-18%] h-[320px] w-[520px] rounded-full bg-gradient-to-tr from-cyan-300/40 via-emerald-300/40 to-indigo-300/40 blur-3xl animate-liquid" />
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 md:grid-cols-2 md:gap-12">
        {/* Left: Copy */}
        <div>
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 md:text-3xl">Lead Nurture</h2>
          <p className="mt-3 max-w-prose text-gray-800">
            We install automated lead nurture sequences that follow up with leads on auto pilot, answer their
            questions with conversational AI, and encourage them to come in to an appointment or their first
            martial arts classes.
          </p>
        </div>

        {/* Right: Image without card styles */}
        <div className="mx-auto w-full max-w-xl">
          <div className="overflow-hidden rounded-2xl">
            <img
              src="https://bravegymmarketing.com/wp-content/uploads/2023/10/lead-nurture-workflow-1200x657.jpg"
              alt="Lead nurture workflow"
              className="block h-auto w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}