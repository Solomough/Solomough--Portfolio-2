import React from 'react'
import { motion } from 'framer-motion'

export default function Header(){
  return (
    <header className="sticky top-0 z-40 bg-white/60 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto px-6 py-3 flex items-center justify-between">
        <a href="#" className="font-semibold text-lg text-deepgreen">Solomough</a>
        <nav className="hidden md:flex gap-6 items-center text-sm">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#books">Books</a>
          <a href="#contact" className="px-3 py-1 rounded-md border border-gray-200">Contact</a>
        </nav>
        <div className="md:hidden">{/* mobile menu placeholder */}
          <button aria-label="menu">☰</button>
        </div>
      </div>
    </header>
  )
}
