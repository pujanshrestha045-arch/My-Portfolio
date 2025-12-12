import React from 'react'
import { useState } from 'react'
import '../css/Header.css'

function Header() {
    const [isOpen, setIsOpen] = useState(false)

    const scrollToSection = (id) => {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }
        setIsOpen(false);
    }



    return (
        <>
            <nav className='sticky top-0 z-50'>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="text-2xl font-bold">Portfolio</div>
                        {/* Desktop Navigaton */}
                        <div className="hidden md:flex gap-8">
                            <button className='cursor-pointer' onClick={() => scrollToSection("about")}>About</button>
                            <button className='cursor-pointer' onClick={() => scrollToSection("skills")}>Skills</button>
                            <button className='cursor-pointer' onClick={() => scrollToSection("projects")}>Projects</button>
                            <button className='cursor-pointer' onClick={() => scrollToSection("contact")}>Contact</button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                            <i className="bi bi-list text-xl"></i>
                        </button>                        
                    </div>

                    {/* Mobile Navigation */}
                        {isOpen && (
                            <div className="md:hidden absolute top-16 pb-4 space-y-2">
                                <button className=' w-full text-left px-4 py-2' onClick={() => scrollToSection("about")}>About</button>
                                <button className=' w-full text-left px-4 py-2' onClick={() => scrollToSection("skills")}>Skills</button>
                                <button className=' w-full text-left px-4 py-2' onClick={() => scrollToSection("projects")}>Projects</button>
                                <button className=' w-full text-left px-4 py-2' onClick={() => scrollToSection("contact")}>Contact</button>
                            </div>
                        )}
                </div>
            </nav>
        </>
    )
}

export default Header
