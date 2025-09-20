import React from 'react'

export default function About(){
  return (
    <section id="about" className="py-8">
      <h2 className="text-2xl font-semibold">About</h2>
      <p className="mt-3 text-gray-700">I'm Moughkaa Zahemen (Solomough). Called to a life of glory and influence, I use God's wisdom to create digital solutions that empower and teach. My mission: "Embracing divine purpose, I illuminate paths to success and spiritual growth."</p>
      <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
        <li className="p-2 bg-gray-50 rounded">Values: Consistency, Integrity, Steadfastness</li>
        <li className="p-2 bg-gray-50 rounded">Essence: Visionary, Influencer, Teacher</li>
        <li className="p-2 bg-gray-50 rounded">Slogan: Out of Darkness to Light</li>
        <li className="p-2 bg-gray-50 rounded">Scripture: Philippians 4:13</li>
      </ul>
    </section>
  )
}
