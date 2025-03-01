import React from 'react'
import { useState } from 'react'

const Navbar = () => {
    const [isMenuOpem, setIsMenuOpen] = useState(false)
    const [activeLink,setActiveLink] = useState("#home")

    const navLinks = [
        {href: '#home', label: 'Home'},
        {href: '#about', label: 'About'},
        {href: '#services', label: 'Services' },
        { href: '#testmonials', label: 'Testmonials' },
    ]

    return (
        <nav className='fixed top-0 left-0 right-0 bg-wihite/90 backdrop-blur-sm z-50 border-b border-gray-100 shadow-sm'>
            <div className='w-full container mx-auto flex items-center justify-between p-4 sm:px-6 lg:px-8 md:h-20 h-16'>

                {/* logo */}
                <div className='flex items-center gap-1 cursor-pointer'>
                    <div className='w-4 h-4 bg-blue-600 rounded-full opacity-75 hover:opacity-100 transition-opacity'>

                    </div>
                    <div className='w-4 h-4 bg-red-500 -ml-2 rounded-full opacity-100hover:opacity-75  transition-opacity'>

                    </div>
                </div>

                {/* desktop navitems */}
                <div className='hidden md:flex items-center gap-10'>
                    {navLinks.map((link, index) => (
                        <a 
                            key={index} 
                            href={link.href} 
                            className={`text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all ${activeLink === link.href? 'text-blue-600 after:w-full' : 'hover:text-gray-600'}`} 
                            onClick={() => {
                                setIsMenuOpen(false)
                                setActiveLink(link.href)
                            }}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* get in touch btn */}
                <button className='hidden md:block py-2.5 px-6 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-all hover:shadow-lg hover:shadow-blue-600/50 cursor-pointer'><a href="#newsletter">Entre em contato</a></button>

                {/* mobile menu */}

            </div>
        </nav>
    )
}

export default Navbar