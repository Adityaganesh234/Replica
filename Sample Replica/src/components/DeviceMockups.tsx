import React from 'react'

export default function DeviceMockups(): JSX.Element {
  return (
    <div className="mx-auto max-w-lg">
      {/* <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-md"> */}
      <div className="overflow-hidden"> 
        <img
          src="https://i0.wp.com/bravegymmarketing.com/wp-content/uploads/2023/08/mockup.png?resize=800%2C492&ssl=1"
          alt="Responsive website mockups on phone, tablet, and desktop"
          className="block h-82 w-90"
          loading="lazy"
        />
      </div>
    </div>
  )
}