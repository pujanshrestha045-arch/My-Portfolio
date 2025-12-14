import React from 'react'
import { useState } from 'react'
import { ThemeToggle } from './Theme-toggle'

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
                            <ThemeToggle/>  
                        </div>

                        {/* Mobile Menu Button */}
                        <button className="md:hidden text-(--foreground)" onClick={() => setIsOpen(!isOpen)}>
                            <i className="bi bi-list text-xl"></i>
                            <ThemeToggle/>  
                        </button>
                        
                                              
                    </div>

                    {/* Mobile Navigation */}
                        {isOpen && (
                            <div className="md:hidden absolute top-16 pb-4 space-y-2">
                                <button className=' w-full text-left px-4 py-2 text-(--foreground) hover:bg-(--muted)' onClick={() => scrollToSection("about")}>About</button>
                                <button className=' w-full text-left px-4 py-2 text-(--foreground) hover:bg-(--muted)' onClick={() => scrollToSection("skills")}>Skills</button>
                                <button className=' w-full text-left px-4 py-2 text-(--foreground) hover:bg-(--muted)' onClick={() => scrollToSection("projects")}>Projects</button>
                                <button className=' w-full text-left px-4 py-2 text-(--foreground) hover:bg-(--muted)' onClick={() => scrollToSection("contact")}>Contact</button>
                            </div>
                        )}
                </div>
            </nav>
        </>
    )
}

export default Header
