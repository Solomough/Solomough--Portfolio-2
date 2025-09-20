import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Books from './components/Books'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App(){
  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased">
      <Header />
      <main className="max-w-4xl mx-auto px-6 md:px-8">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Books />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
