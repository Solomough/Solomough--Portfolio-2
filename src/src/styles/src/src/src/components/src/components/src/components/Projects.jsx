import React from 'react'

const projects = [
  {title:'The Ark Academy', desc:'School management system for The Ark Academy. Student data, staff dashboard, performance tracking.' , tags:['Full-Stack','Tailwind']},
  {title:'The Ark - Christ Riches in Glory', desc:'Discipleship & accountability platform for ministry growth and tracking.' , tags:['Database','Community']},
  {title:'SEEPAF', desc:'Web3 donations & partnership app for empowerment and aid forum.' , tags:['Web3','Donations']},
]

export default function Projects(){
  return (
    <section id="projects" className="py-8">
      <h3 className="text-xl font-semibold">Selected Projects</h3>
      <div className="mt-4 grid gap-4">
        {projects.map(p=> (
          <article key={p.title} className="p-4 border rounded-md bg-white shadow-sm">
            <h4 className="font-semibold">{p.title}</h4>
            <p className="mt-2 text-sm text-gray-600">{p.desc}</p>
            <div className="mt-3 flex gap-2">
              {p.tags.map(t=> <span key={t} className="text-xs px-2 py-1 bg-gray-50 rounded">{t}</span>)}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
