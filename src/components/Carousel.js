import React, { useEffect, useState } from 'react'
import { ChevronRight, ChevronLeft } from 'react-feather'

export default function Carousel({ children: slides, autoSlide = false, autoSlideinterval }) {
  const [curr, setCurr] = useState(0)

  const prev = () => setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1))

  const next = () => setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))

  useEffect(() => {
    if (!autoSlide) return
    const slideInterval = setInterval(next, autoSlideinterval)
    return () => clearInterval(slideInterval)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className='overflow-hidden relative'>
      <div className='flex transition-transform ease-out duration-500' style={{ transform: `translateX(-${curr * 100}%)` }}>
        {slides}
      </div>

      <div className='absolute inset-0 sm:flex items-center justify-between px-4 hidden'>
        <button onClick={prev} className='p-1 rounded-full shadow bg-white/60 text-gray-800 hover:bg-white'>
          <ChevronLeft size={40} />
        </button>
        <button onClick={next} className='p-1 rounded-full shadow bg-white/60 text-gray-800 hover:bg-white'>
          <ChevronRight size={40} />
        </button>
      </div>

      <div className='absolute top-5 right-0 left-0'>
        <div className='flex items-center justify-center gap-2'>
          {
            slides.map((_, i) => (
              <button
                key={i} className={`
        transition-all w-3 h-3 bg-white rounded-full ${curr === i ? 'p-3' : 'bg-opacity-50'}
        `}
                onClick={() => setCurr(i)}
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}
