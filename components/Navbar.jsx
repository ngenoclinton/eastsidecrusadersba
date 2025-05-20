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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "nav-scrolled" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Eastside Crusaders Logo"
              width={50}
              height={50}
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            <Link href="/" className="nav-link-enhanced">
              ABOUT
            </Link>
            <Link href="/services" className="nav-link-enhanced">
              SERVICES
            </Link>
            <Link href="/plans" className="nav-link-enhanced">
              PLANS
            </Link>
            <Link href="/coaches" className="nav-link-enhanced">
              COACHES
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X className="text-white" /> : <Menu className="text-white" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-4 bg-black rounded-lg border border-green-800">
            <div className="flex flex-col space-y-4 px-4">
              <Link
                href="/"
                className="font-medium text-white hover:text-green-500"
                onClick={() => setIsMenuOpen(false)}
              >
                ABOUT
              </Link>
              <Link
                href="/services"
                className="font-medium text-white hover:text-green-500"
                onClick={() => setIsMenuOpen(false)}
              >
                SERVICES
              </Link>
              <Link
                href="/plans"
                className="font-medium text-white hover:text-green-500"
                onClick={() => setIsMenuOpen(false)}
              >
                PLANS
              </Link>
              <Link
                href="/coaches"
                className="font-medium text-white hover:text-green-500"
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
