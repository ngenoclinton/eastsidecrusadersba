"use client"

import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"


const Slider = ({ slides, heading, autoSlideInterval = 5000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }, [slides.length])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }, [slides.length])

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, autoSlideInterval)

    return () => clearInterval(interval)
  }, [nextSlide, autoSlideInterval])

  return (
    <div className="relative bg-gray-100 py-4 overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col items-center mb-6">
          <div className="flex justify-center mb-2">
            <div className="flex space-x-1">
              <span className="text-red-600 text-2xl">★</span>
              <span className="text-red-600 text-2xl">★</span>
              <span className="text-red-600 text-2xl">★</span>
            </div>
          </div>
          <h3 className="text-center text-sm font-bold tracking-wider text-gray-800 uppercase">{heading}</h3>
        </div>

        <div className="relative min-h-[280px]">
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-green-700 hover:bg-green-600 text-white rounded-full p-2 transition-all duration-200 -ml-4 md:ml-0"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="overflow-hidden">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`transition-all duration-500 ease-in-out text-center px-4 md:px-12 py-8 absolute w-full ${
                  currentSlide === index
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-full pointer-events-none"
                }`}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 tracking-tight">{slide.title}</h2>
                <p className="text-gray-700 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">{slide.content}</p>
              </div>
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-green-700 hover:bg-green-600 text-white rounded-full p-2 transition-all duration-200 -mr-4 md:mr-0"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="flex justify-center mt-4 space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentSlide === index ? "w-8 bg-green-600" : "w-2 bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Slider
