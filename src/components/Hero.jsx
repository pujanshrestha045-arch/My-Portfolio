import React from 'react'

function Hero() {
  return (
    <>
      <section className='min-h-screen flex items-center justify-center px-4'>
        <div className="text-center max-w-3xl mx-auto">
            <div className='inline-block'>
                <span className='font-semibold'>Weclome to My Portfolio</span>
            </div>
            <h1>From Structutal to Digital</h1>
            <p>Building responsive, user-centric web experiences with a unique perspective from structural engineering. Specializing in frontend development with HTML, CSS, JavaScript, and React.</p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                <button className='cursor-pointer' onClick={() => scrollToSection("projects")}>Explore My Work</button>
                <button className='cursor-pointer' onClick={() => scrollToSection("contact")}>Get In Touch</button>
            </div>
        </div>
      </section>
    </>
  )
}

export default Hero
