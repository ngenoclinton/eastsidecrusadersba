"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300  ${
        isScrolled ? "bg-black/90 shadow-lg" : "bg-black/50 bgtransparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image src="/logo.jpg" alt="Eastside Crusaders Logo" width={50} height={50} className="h-10 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10 pr-8">
            <Link
              href="/"
              className="relative font-medium text-white tracking-wider px-2 py-1 transition-all duration-300 
                after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-green-500 
                after:transition-all after:duration-300 hover:text-green-400 hover:after:w-full"
            >
              ABOUT
            </Link>
            <Link
              href="/services"
              className="relative font-medium text-white tracking-wider px-2 py-1 transition-all duration-300 
                after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-green-500 
                after:transition-all after:duration-300 hover:text-green-400 hover:after:w-full"
            >
              SERVICES
            </Link>
            <Link
              href="/plans"
              className="relative font-medium text-white tracking-wider px-2 py-1 transition-all duration-300 
                after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-green-500 
                after:transition-all after:duration-300 hover:text-green-400 hover:after:w-full"
            >
              PLANS
            </Link>
            <Link
              href="/coaches"
              className="relative font-medium text-white tracking-wider px-2 py-1 transition-all duration-300 
                after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-green-500 
                after:transition-all after:duration-300 hover:text-green-400 hover:after:w-full"
            >
              COACHES
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-full transition-colors hover:bg-green-900/50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="text-white" /> : <Menu className="text-white" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-4 bg-black/95 rounded-lg border border-green-800 backdrop-blur-sm">
            <div className="flex flex-col space-y-4 px-4">
              <Link
                href="/"
                className="font-medium text-white py-2 px-3 rounded-md transition-all duration-300 hover:bg-green-900/50 hover:text-green-400 hover:pl-5"
                onClick={() => setIsMenuOpen(false)}
              >
                ABOUT
              </Link>
              <Link
                href="/services"
                className="font-medium text-white py-2 px-3 rounded-md transition-all duration-300 hover:bg-green-900/50 hover:text-green-400 hover:pl-5"
                onClick={() => setIsMenuOpen(false)}
              >
                SERVICES
              </Link>
              <Link
                href="/plans"
                className="font-medium text-white py-2 px-3 rounded-md transition-all duration-300 hover:bg-green-900/50 hover:text-green-400 hover:pl-5"
                onClick={() => setIsMenuOpen(false)}
              >
                PLANS
              </Link>
              <Link
                href="/coaches"
                className="font-medium text-white py-2 px-3 rounded-md transition-all duration-300 hover:bg-green-900/50 hover:text-green-400 hover:pl-5"
                onClick={() => setIsMenuOpen(false)}
              >
                COACHES
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Navbar
