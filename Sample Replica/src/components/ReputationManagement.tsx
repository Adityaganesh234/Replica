import React from 'react'

export default function ReputationManagement(): JSX.Element {
  return (
    <section className="relative isolate overflow-hidden py-16 md:py-24">
      {/* Liquid gradient blobs background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[-12%] top-[-18%] h-[320px] w-[520px] rounded-full bg-gradient-to-tr from-orange-300/50 via-rose-300/40 to-indigo-300/40 blur-3xl animate-liquid" />
        <div className="absolute right-[-10%] bottom-[-16%] h-[300px] w-[500px] rounded-full bg-gradient-to-tr from-cyan-300/40 via-emerald-300/40 to-indigo-300/40 blur-3xl animate-liquid" />
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 md:grid-cols-2 md:gap-12">
        {/* Left: Image */}
        <div className="mx-auto w-full max-w-xl order-1 md:order-none">
          <div className="overflow-hidden rounded-2xl">
            <img
              src="https://bravegymmarketing.com/wp-content/uploads/2023/10/Screenshot-2023-10-25-at-8.58.37-PM-1200x754.jpg"
              alt="Reputation management dashboard screenshot"
              className="block h-auto w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* Right: Copy */}
        <div>
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 md:text-3xl">Reputation Management</h2>
          <p className="mt-3 max-w-prose text-gray-800">
            We help review and optimize your online profile with a focus on crushing it with your Google Business
            listing so you can bring in more organic traffic (people who are already searching for martial arts
            schools like yours).
          </p>
        </div>
      </div>
    </section>
  )
}