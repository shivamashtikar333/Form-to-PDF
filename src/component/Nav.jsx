import React from 'react'
import logo from '../assets/logo.png'

const Nav = () => {
  return (
   <nav className='bg-white shadow-md'>
     <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 '>
        <div className='flex justify-between h-16 items-center'>
            <div className=' flex items-center flex-shrink-0'>
                <img className='h-8 w-36' src={logo} alt='logo'/>
                <span className='ml-2 text-xl font-bold '> </span>
            </div>
            <div className=" sm:ml-6 sm:flex sm:space-x-8">
            <a href="/" className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
              Home
            </a>
            <a href="/about" className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
              About
            </a>
            <a href="/services" className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
              Services
            </a>
            <a href="/contact" className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
              Contact
            </a>
          </div>
                
            </div>
        </div>
   </nav>
  )
}

export default Nav