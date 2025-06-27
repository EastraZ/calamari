"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-slate-900/90 backdrop-blur-md border-b border-cyan-500/30" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bwfooter-KTdG54jxHF96VUc7Bs40vJqsgJc8mh.png"
              alt="BlueWing Logo"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <span className="text-xl font-bold text-white">
              Blue<span className="text-cyan-400">Wing</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-300 hover:text-white transition-colors duration-200">
              Home
            </Link>
            <Link href="/our-product" className="text-gray-300 hover:text-white transition-colors duration-200">
              Products
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-white transition-colors duration-200">
              About
            </Link>
            <Link href="/support" className="text-gray-300 hover:text-white transition-colors duration-200">
              Support
            </Link>
            <Link href="/status" className="text-gray-300 hover:text-white transition-colors duration-200">
              Status
            </Link>
            <Link href="/faq" className="text-gray-300 hover:text-white transition-colors duration-200">
              FAQ
            </Link>
            <Link
              href="/purchase"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 px-6 py-2 rounded-lg text-white font-semibold transition-all duration-200 shadow-lg hover:shadow-cyan-500/25"
            >
              Purchase Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2 hover:bg-slate-800 rounded-lg transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-md border-t border-cyan-500/30">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/"
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/our-product"
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Products
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="/support"
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Support
              </Link>
              <Link
                href="/status"
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Status
              </Link>
              <Link
                href="/faq"
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                FAQ
              </Link>
              <Link
                href="/purchase"
                className="block mx-3 my-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 rounded-lg text-white font-semibold text-center transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                Purchase Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
