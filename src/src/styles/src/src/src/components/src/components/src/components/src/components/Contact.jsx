import React, {useState} from 'react'

export default function Contact(){
  const [status, setStatus] = useState('')
  const handleSubmit = async (e) =>{
    e.preventDefault()
    setStatus('Sending...')
    const data = new FormData(e.target)
    try{
      const res = await fetch('https://formspree.io/f/xovngnol', { method:'POST', body: data })
      if(res.ok){ setStatus('Message sent — I will reply soon.'); e.target.reset() }
      else { setStatus('Failed to send. Check your Formspree endpoint.') }
    }catch(err){ setStatus('Error sending message.') }
  }

  return (
    <section id="contact" className="py-8">
      <h3 className="text-xl font-semibold">Contact</h3>
      <p className="mt-2 text-sm text-gray-600">Want to collaborate, partner, or learn together? Send a message.</p>
      <form onSubmit={handleSubmit} className="mt-4 grid gap-3 max-w-xl">
        <input required name="name" placeholder="Your name" className="px-3 py-2 border rounded" />
        <input required name="email" type="email" placeholder="Your email" className="px-3 py-2 border rounded" />
        <textarea required name="message" rows="4" placeholder="Message" className="px-3 py-2 border rounded" />
        <button type="submit" className="px-4 py-2 rounded bg-deepgreen text-white">Send Message</button>
        <div className="text-sm text-gray-600">{status}</div>
      </form>
    </section>
  )
}
