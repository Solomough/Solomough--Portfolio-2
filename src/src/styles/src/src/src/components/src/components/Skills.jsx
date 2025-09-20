import React from 'react'

const skills = [
  {name:'HTML'},
  {name:'CSS'},
  {name:'JavaScript'},
  {name:'React'},
  {name:'TailwindCSS'},
  {name:'Framer Motion'},
  {name:'Learning: AI, Full-Stack, Web3'}
]

export default function Skills(){
  return (
    <section className="py-8">
      <h3 className="text-xl font-semibold">Skills & Tools</h3>
      <div className="mt-4 flex flex-wrap gap-3">
        {skills.map(s=> (
          <span key={s.name} className="px-3 py-1 bg-gray-100 rounded-md text-sm">{s.name}</span>
        ))}
      </div>
    </section>
  )
}
