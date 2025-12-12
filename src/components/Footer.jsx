import React from 'react'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <>
      <section id='section' className='py-12 px-4'>
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className='font-semibold mb-4'>Navigation</h4>
              <ul className='space-y-2 text-sm'>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#skills">Skills</a>
                </li>
                <li>
                  <a href="#projects">Projects</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#">GitHub</a>
                </li>
                <li>
                  <a href="#">LinkedIn</a>
                </li>
                <li>
                  <a href="#">Email</a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#skills">Frontend Development</a>
                </li>
                <li>
                  <a href="#skills">Responsive Design</a>
                </li>
                <li>
                  <a href="#skills">Web Standards</a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Learning</h4>
              <ul className="space-y-2 text-sm">
                <li>Broadway Infosys Courses</li>
                <li>Self Directed Learning</li>
              </ul>
            </div>
          </div>

          <div className="border-t pt-8">
            <p className='text-center text-sm'>
            {currentYear} My Portfolio. Looking forward to contributing to innovative web projects and building
            amazing digital experiences.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Footer
