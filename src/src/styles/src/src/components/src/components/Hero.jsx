import React from 'react'
import { motion } from 'framer-motion'
import profile from '../assets/profile.jpg'

export default function Hero(){
  return (
    <section className="pt-10 pb-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        <div className="md:col-span-2">
          <motion.h1 initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{delay:0.1}} className="text-3xl md:text-4xl font-bold">Out of Darkness to Light</motion.h1>
          <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.3}} className="mt-3 text-gray-700">I build faith-driven digital solutions — developer, teacher, and visionary. I merge spiritual wisdom with tech to empower, teach and raise kingdom-purposed innovators.</motion.p>
          <div className="mt-5 flex gap-3">
            <a href="#projects" className="inline-block px-4 py-2 rounded-md bg-deepgreen text-white">View Projects</a>
            <a href="#contact" className="inline-block px-4 py-2 rounded-md border border-gray-200">Connect</a>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <img src={profile} alt="Solomough" className="w-40 h-40 rounded-full object-cover ring-4 ring-gold/40" />
        </div>
      </div>
    </section>
  )
}
