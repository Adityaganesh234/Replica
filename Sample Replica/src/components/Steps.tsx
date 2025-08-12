import React from 'react'
import RevealOnScroll from './RevealOnScroll'

type Step = {
  title: string
  description: string
  Icon: () => JSX.Element
}

function CircleIcon({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <div className="flex h-6 w-10 items-center justify-center rounded-2xl bg-orange-200 text-white">
      {children}
    </div>
  )
}

function MonitorIcon(): JSX.Element {
  return (
    <CircleIcon>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4"
      >
        <rect x="3" y="4" width="18" height="12" rx="2" ry="2" />
        <path d="M8 20h8M12 16v4" />
      </svg>
    </CircleIcon>
  )
}

function GlobeIcon(): JSX.Element {
  return (
    <CircleIcon>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18" />
        <path d="M12 3c3 3 3 15 0 18" />
        <path d="M12 3c-3 3-3 15 0 18" />
      </svg>
    </CircleIcon>
  )
}

function MegaphoneIcon(): JSX.Element {
  return (
    <CircleIcon>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4"
      >
        <path d="M3 11l11-5v12L3 13v-2z" />
        <path d="M19 7c.8.4 1.5.9 2 1.5M19 17c.8-.4 1.5-.9 2-1.5" />
        <path d="M6 14l1.5 4.5" />
      </svg>
    </CircleIcon>
  )
}

function ArrowReturnIcon(): JSX.Element {
  return (
    <CircleIcon>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4"
      >
        <path d="M7 7l-4 4 4 4" />
        <path d="M3 11h10a5 5 0 010 10h-3" />
      </svg>
    </CircleIcon>
  )
}

function CreditCardIcon(): JSX.Element {
  return (
    <CircleIcon>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4"
      >
        <rect x="3" y="5" width="18" height="14" rx="2" ry="2" />
        <path d="M3 9h18" />
        <path d="M7 15h4" />
      </svg>
    </CircleIcon>
  )
}

const steps: Step[] = [
  {
    title: 'Step 1: Build Your Website',
    description:
      'Our website templates help you stand out from the competition, communicate your brand and values, and incentive your website visitors to take action.',
    Icon: MonitorIcon,
  },
  {
    title: 'Step 2: Craft Your Digital Footprint',
    description:
      'We help you establish credibility and attract the right type of students by building a consistent brand across all your business listings and social media.',
    Icon: GlobeIcon,
  },
  {
    title: 'Step 3: Advertise',
    description:
      'Getting ads working profitably and consistently is not easy. We save you time, money, and headaches with done-for-you Facebook ad setup and campaign management.',
    Icon: MegaphoneIcon,
  },
  {
    title: 'Step 4: Lead Follow Up',
    description:
      'Our lead follow up and nurture process is our secret sauce that gets leads to actually show up at your martial arts gym. We can handle it for you or teach you to do it yourself.',
    Icon: ArrowReturnIcon,
  },
  {
    title: 'Step 5: Make the Sale',
    description:
      'Pitching a no-brainer offer in a timely manner is the key to getting visitors to become members. We make this happen on autopilot without any sleazy, high-pressure sales tactic.',
    Icon: CreditCardIcon,
  },
]

export default function Steps(): JSX.Element {
  return (
    <section className="relative isolate overflow-hidden py-16 md:py-24">
      {/* Section relies on global gym-themed background */}

      <div className="mx-auto max-w-2xl px-4">
        <RevealOnScroll animation="up" delayMs={60}>
          <h2 className="mb-8 text-center text-2xl font-extrabold leading-tight text-white md:mb-10 md:text-3xl drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]">
            <span className="block">How we help you get more members</span>
            <span className="block">for your Fitness Business:</span>
          </h2>
        </RevealOnScroll>
        <ul className="space-y-10">
          {steps.map(({ title, description, Icon }, index) => (
            <RevealOnScroll key={title} animation="up" delayMs={80 + index * 80}>
              <li className="mx-auto">
                <div className="flex items-start gap-3">
                  <Icon />
                  <div className="text-left">
                    <h3 className="text-[17px] font-extrabold text-orange-200 leading-6">{title}</h3>
                    <p className="mt-2 text-sm text-gray-100">
                      {description}
                    </p>
                  </div>
                </div>
              </li>
            </RevealOnScroll>
          ))}
        </ul>
      </div>
    </section>
  )
}