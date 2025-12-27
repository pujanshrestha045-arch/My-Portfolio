import React from 'react'
import { useState } from 'react'


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
            <nav className='sticky top-0 z-50 bg-(--background) border-b border-(--border)'>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="text-2xl font-bold text-(--foreground)">Portfolio</div>
                        {/* Desktop Navigaton */}
                        <div className="hidden md:flex gap-8">
                            <button className='cursor-pointer text-(--foreground) hover:text-(--primary)' onClick={() => scrollToSection("about")}>About</button>
                            <button className='cursor-pointer text-(--foreground) hover:text-(--primary)' onClick={() => scrollToSection("skills")}>Skills</button>
                            <button className='cursor-pointer text-(--foreground) hover:text-(--primary)' onClick={() => scrollToSection("projects")}>Projects</button>
                            <button className='cursor-pointer text-(--foreground) hover:text-(--primary)' onClick={() => scrollToSection("contact")}>Contact</button>
                             
                        </div>

                        {/* Mobile Menu Button */}
                        <button className="md:hidden text-(--foreground)" onClick={() => setIsOpen(!isOpen)}>
                            <i className="bi bi-list text-xl"></i>
                            
                        </button>
                        
                                              
                    </div>

                    {/* Mobile Navigation */}
                        {isOpen && (
                            <div className="md:hidden absolute max-w-[50vw] h-screen right-0 top-16 pb-4 space-y-2 bg-(--secondary)">
                                <button className=' w-full text-left px-4 py-2 text-(--foreground)' onClick={() => scrollToSection("about")}>About</button>
                                <button className=' w-full text-left px-4 py-2 text-(--foreground)' onClick={() => scrollToSection("skills")}>Skills</button>
                                <button className=' w-full text-left px-4 py-2 text-(--foreground)' onClick={() => scrollToSection("projects")}>Projects</button>
                                <button className=' w-full text-left px-4 py-2 text-(--foreground)' onClick={() => scrollToSection("contact")}>Contact</button>
                            </div>
                        )}
                </div>
            </nav>
        </>
    )
}

export default Header
