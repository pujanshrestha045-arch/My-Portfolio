import React from 'react'

function Hero() {

      const scrollToSection = (id) => {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }
        setIsOpen(false);
    }
    
  return (
    <>
      <section className='min-h-screen flex items-center justify-center px-4 bg-linear-to-b from-(--background) via-(--background) to-(--muted)/20'>
        <div className="text-center container mx-auto">
            <div className='inline-block mb-8'>
                <span className='font-semibold text-xl text-(--primary)'>From Structutal to Digital</span>
            </div>
            <h1 className='text-3xl md:text-5xl font-bold mb-6 text-balance text-(--foreground)'>Hello I'm <span className='text-(--primary)'>Pujan Shrestha</span></h1>
            <p className='text-lg md:text-2xl text-(--muted-foreground) text-balance mb-8'>Building responsive, user-centric web experiences with a unique perspective from structural engineering. Specializing in frontend development with HTML, CSS, JavaScript, and React.</p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4 ">
                <button className='cursor-pointer bg-(--primary) rounded-lg px-8 py-3 text-(--primary-foreground) font-semibold hover:bg-(--primary)/90' onClick={() => scrollToSection("projects")}>Explore My Work</button>
                <button className='cursor-pointer bg-(--primary) rounded-lg px-8 py-3 text-(--primary-foreground) font-semibold hover:bg-(--primary)/90' onClick={() => scrollToSection("contact")}>Get In Touch</button>
            </div>
        </div>
      </section>
    </>
  )
}

export default Hero
