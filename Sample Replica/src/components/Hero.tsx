import React from 'react'
import Button from './Button'
import DeviceMockups from './DeviceMockups'
import Typewriter from './Typewriter'

type HeroProps = {
  businessType?: string
}

export default function Hero({ businessType = 'Yoga Studio' }: HeroProps): JSX.Element {
  return (
    <section id="home" className="relative isolate overflow-hidden scroll-mt-24 md:scroll-mt-28">
      {/* Background visuals are now handled globally by Background.tsx for consistency */}

      <div className="mx-auto max-w-6xl px-4 py-16 text-center md:py-24">
        <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]">
          <span className="block">Websites That Help Grow Your</span>
          <Typewriter
            words={[
              'Yoga Studio',
              'Fitness Studio',
              'Martial Arts Academy',
            ]}
            className="block"
            highlightClassName="text-orange-200"
          />
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-base text-gray-200 md:text-lg drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]">
          We help gyms and fitness studios get more leads and customers with website design & authentic,
          on-brand digital marketing.
        </p>
        <div className="mt-8 flex justify-center">
          {/* <Button as="a" href="#consultation" className="bg-orange-600 hover:bg-orange-500">
            Get A Free Consultation →
          </Button> */}
            <Button type="submit" variant="glass" className="w-autorounded-xl py-3 text-base font-semibold">
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