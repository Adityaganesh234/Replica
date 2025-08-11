import React from 'react'
import Button from './Button'
import DeviceMockups from './DeviceMockups'
import Typewriter from './Typewriter'

type HeroProps = {
  businessType?: string
}

export default function Hero({ businessType = 'Yoga Studio' }: HeroProps): JSX.Element {
  return (
    <section id="home" className="relative isolate overflow-hidden">
      {/* Liquid gradient blobs background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[-10%] top-[-20%] h-[360px] w-[520px] rounded-full bg-gradient-to-tr from-orange-300/50 via-rose-300/40 to-indigo-300/40 blur-3xl animate-liquid" />
        <div className="absolute right-[-10%] top-[-10%] h-[300px] w-[480px] rounded-full bg-gradient-to-tr from-indigo-300/40 via-cyan-300/40 to-emerald-300/40 blur-3xl animate-liquid" />
        <div className="absolute bottom-[-20%] left-1/3 h-[320px] w-[520px] rounded-full bg-gradient-to-tr from-amber-300/40 via-pink-300/30 to-purple-300/40 blur-3xl animate-liquid" />
      </div>

      <div className="mx-auto max-w-6xl px-4 py-16 text-center md:py-24">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
          <span className="block">Websites That Help Grow Your</span>
          <Typewriter
            words={[
              'Yoga Studio',
              'Fitness Studio',
              'Martial Arts Academy',
            ]}
            className="block"
            highlightClassName="text-orange-600"
          />
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-base text-gray-700 md:text-lg">
          We help gyms and fitness studios get more leads and customers with website design & authentic,
          on-brand digital marketing.
        </p>
        <div className="mt-8 flex justify-center">
          <Button as="a" href="#consultation" className="bg-orange-600 hover:bg-orange-500">
            Get A Free Consultation →
          </Button>
        </div>

        <div className="mt-12 md:mt-16">
          <DeviceMockups />
        </div>
      </div>
    </section>
  )
}