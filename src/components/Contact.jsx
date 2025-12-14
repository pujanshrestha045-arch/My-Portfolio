import React from 'react'
import { useState } from 'react'
import { Mail, Linkedin, Github } from 'lucide-react'

function Contact() {

    const [formData, setFormData] = useState({
      name: "",
      email: "",
      message: "",
    })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setFormData({ name: "", email: "", message: "" })
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <>
      <section id='contact' className='py-20 px-4 bg-(--muted)/10'>
        <div className="container mx-auto">
          <h2 className='text-2xl md:text-4xl font-bold text-(--foreground) mb-12 text-balance'>Let's Connect</h2>
          <p className='text-lg text-(--muted-foreground) mb-12'>I'm always interested in discussing new projects and opportunities. Feel free to reach out!</p>

          {/* Contact Form */}
          <form className="bg-(--card) rounded-lg p-8 mb-12 border border-(--border)" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="name" className='block text-(--foreground) font-semibold mb-2'>Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                required
                onChange={handleChange}
                className='w-full rounded-lg px-4 py-3 bg-(--background) border border-(--border) placeholder-(--muted-foreground)'
                placeholder='Your Name'
              />
            </div>

            <div className="mb-6">
              <label htmlFor="email" className='block text-(--foreground) font-semibold mb-2'>Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                required
                onChange={handleChange}
                className='w-full rounded-lg px-4 py-3 bg-(--background) border border-(--border) placeholder-(--muted-foreground)'
                placeholder='your.email@example.com'
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className='block text-(--foreground) font-semibold mb-2'>Message</label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                required
                rows={5}
                onChange={handleChange}
                className='w-full rounded-lg px-4 py-3 bg-(--background) border border-(--border) placeholder-(--muted-foreground)'
                placeholder='Your message...'>
              </textarea>
            </div>

            <button type='submit'
            className='w-full p-3 rounded-lg font-semibold'>
              Send Message
            </button>

            {submitted && (
              <div className="mt-4 p-4 bg-green-50 dark:bg-green-950 border dark:border rounded-lg text-green-700 dark:text-green-200">
                Thank you for the message! I'll get back to you soon.
              </div>
            )}

          </form>

          {/* Social Links */}

          <div className="text-center">
            <p className='font-semibold mb-4 text-(--foreground)'>Or Find me on</p>
            <div className="flex flex-col items-center md:flex-row justify-center gap-6">
              <a 
                href="#"
                className='inline-flex items-center gap-2'
                aria-label='Email'
              >
                <Mail size={24} />
                <span>Email</span>
              </a>
              <a 
                href="#"
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center gap-2'
                aria-label='LinkedIn'
              >
                <Linkedin size={24} />
                <span>LinkedIn</span>
              </a>
              <a 
                href="#"
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center gap-2'
                aria-label='Github'
              >
                <Github size={24} />
                <span>Github</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
