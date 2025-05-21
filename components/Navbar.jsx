"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/90 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image src="/logo.jpg" alt="Eastside Crusaders Logo" width={64} height={64} className="h-14 w-auto rounded-4xl" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10 pr-8">
            <Link
              href="/"
              className={`relative font-medium tracking-wider px-2 py-1 transition-all duration-300 
      after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-green-500 
      after:transition-all after:duration-300 hover:text-green-400 hover:after:w-full
      ${pathname === "/" ? "text-green-400 after:w-full" : "text-white after:w-0"}`}
            >
              ABOUT
            </Link>
            <Link
              href="/services"
              className={`relative font-medium tracking-wider px-2 py-1 transition-all duration-300 
      after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-green-500 
      after:transition-all after:duration-300 hover:text-green-400 hover:after:w-full
      ${pathname === "/services" ? "text-green-400 after:w-full" : "text-white after:w-0"}`}
            >
              SERVICES
            </Link>
            <Link
              href="/plans"
              className={`relative font-medium tracking-wider px-2 py-1 transition-all duration-300 
      after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-green-500 
      after:transition-all after:duration-300 hover:text-green-400 hover:after:w-full
      ${pathname === "/plans" ? "text-green-400 after:w-full" : "text-white after:w-0"}`}
            >
              PLANS
            </Link>
            <Link
              href="/coaches"
              className={`relative font-medium tracking-wider px-2 py-1 transition-all duration-300 
      after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-green-500 
      after:transition-all after:duration-300 hover:text-green-400 hover:after:w-full
      ${pathname === "/coaches" ? "text-green-400 after:w-full" : "text-white after:w-0"}`}
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
                className={`font-medium py-2 px-3 rounded-md transition-all duration-300 hover:bg-green-900/50 hover:pl-5
          ${pathname === "/" ? "bg-green-900/50 text-green-400 pl-5" : "text-white"}`}
                onClick={() => setIsMenuOpen(false)}
              >
                ABOUT
              </Link>
              <Link
                href="/services"
                className={`font-medium py-2 px-3 rounded-md transition-all duration-300 hover:bg-green-900/50 hover:pl-5
          ${pathname === "/services" ? "bg-green-900/50 text-green-400 pl-5" : "text-white"}`}
                onClick={() => setIsMenuOpen(false)}
              >
                SERVICES
              </Link>
              <Link
                href="/plans"
                className={`font-medium py-2 px-3 rounded-md transition-all duration-300 hover:bg-green-900/50 hover:pl-5
          ${pathname === "/plans" ? "bg-green-900/50 text-green-400 pl-5" : "text-white"}`}
                onClick={() => setIsMenuOpen(false)}
              >
                PLANS
              </Link>
              <Link
                href="/coaches"
                className={`font-medium py-2 px-3 rounded-md transition-all duration-300 hover:bg-green-900/50 hover:pl-5
          ${pathname === "/coaches" ? "bg-green-900/50 text-green-400 pl-5" : "text-white"}`}
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
