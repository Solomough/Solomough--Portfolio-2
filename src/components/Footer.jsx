import React, {useEffect, useState} from 'react'

// Set these to your values
const COUNTAPI_NAMESPACE = 'the-ark' // e.g. 'solomough-portfolio'
const COUNTAPI_KEY = 'counters ' // e.g. 'visits'

export default function Footer(){
  const [count, setCount] = useState(null)

  useEffect(()=>{
    // Increment and fetch visitor count from CountAPI
    async function fetchCount(){
      try{
        const res = await fetch(`https://api.countapi.xyz/hit/${COUNTAPI_NAMESPACE}/${COUNTAPI_KEY}`)
        const data = await res.json()
        if(data && data.value !== undefined) setCount(data.value)
      }catch(err){ console.log('CountAPI error', err) }
    }
    fetchCount()
  },[])

  return (
    <footer className="mt-12 border-t py-6 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="text-sm">© {new Date().getFullYear()} Solomough — Out of Darkness to Light</div>
        <div className="mt-3 md:mt-0 flex items-center gap-4 text-sm">
          <a href="mailto: zahemenmoughkaa@gmail.com">YOUR_EMAIL</a>
          <a href="YOUR_GITHUB" target="https://github.com/Solomough" rel="noreferrer">GitHub</a>
          <a href="YOUR_LINKEDIN" target="https://www.linkedin.com/in/solomon-moughkaa-zahemen-a5476a377?utm_source=share&utm_campaign=share_via&utm_content=profile&ut" rel="noreferrer">LinkedIn</a>
          <a href="YOUR_TWITTER/X" target="https://x.com/moughkaa46415?s=09" rel="noreferrer">Twitter/X</a>
          <a href="YOUR_INSTAGRAM" target="https://www.instagram.com/solomough3?igsh=cGJ1d3JtYzh5M3Ay" rel="noreferrer">Instagram </a>
          <a href="YOUR_WHATSAPP" target="https://wa.me/07076560169" rel="norferrer">Whatsapp</a>
          <div className="px-2 py-1 bg-white border rounded">Visitors: {count === null ? '...' : count}</div>
        </div>
      </div>
    </footer>
  )
  }
