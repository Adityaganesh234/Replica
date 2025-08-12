import React from 'react'

export default function Background(): JSX.Element {
  return (
    <div aria-hidden className="fixed inset-0 -z-10 overflow-hidden bg-black">
      {/* Base image (place gym-1 in /public/assets) */}
      <div
        className="absolute inset-0 will-change-transform animate-kenburns"
        style={{
          backgroundImage:
            "url('/assets/gym-1.avif'), url('/assets/gym-1.webp'), url('/assets/gym-1.jpg'), url('/assets/gym-1.jpeg'), url('/assets/gym-1.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'saturate(1.05) contrast(1.05) brightness(0.9)',
        }}
      />

      {/* Dark/red overlay for legibility and brand tone */}
      <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(0,0,0,0.75)_0%,rgba(185,28,28,0.25)_40%,rgba(0,0,0,0.7)_85%)]" />

      {/* Subtle texture (micro-dots) */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.10]"
        style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.06) 1px, rgba(0,0,0,0) 1px)', backgroundSize: '3px 3px' }}
      />

      {/* Central glow for focus/readability */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_300px_at_50%_30%,rgba(255,255,255,0.14),transparent_70%)] animate-glow-pulse" />

      {/* Top red beam and bottom depth shadow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[40vh] mix-blend-screen opacity-70 bg-[radial-gradient(1200px_200px_at_50%_-10%,rgba(239,68,68,0.3),transparent_70%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[40vh] opacity-70 bg-[radial-gradient(1200px_200px_at_50%_110%,rgba(0,0,0,0.95),transparent_70%)]" />

      {/* Moving light sweep */}
      <div className="pointer-events-none absolute inset-y-0 left-[-20%] w-[40%] opacity-[0.08] bg-gradient-to-r from-transparent via-white/40 to-transparent blur-2xl animate-sweep-light" />
    </div>
  )
}

