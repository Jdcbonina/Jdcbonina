'use client'

import React from 'react'
import LeftSide from './left-side'
import RightSide from './right-side'

const Content = () => {
  return (
    <section className="h-screen py-20 mx-auto w-full max-w-7xl px-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-12 h-full">
        {/* Left */}
        <div className="lg:sticky lg:top-20 lg:self-start h-fit md:mb-10 sm: mb-10">
          <LeftSide />
        </div>

        {/* Right */}
        <div className="col-span-2 h-full lg:overflow-y-auto">
         <RightSide />
        </div>
      </div>
    </section>
  )
}

export default Content
