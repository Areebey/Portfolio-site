import React from 'react'
import logo from "../assets/areebrafiqLogo.jpeg"
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaTwitterSquare } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6 '>
        <div className='flex flex-shrink-0 items-center'>
            <img 
              className='rounded-3xl '
              width={50}
              height={50}
              src={logo} 
              alt='logo'/>
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <a className='cursor-pointer' target='blank' href='https://www.linkedin.com/in/areeb-rafiq/'>
            <FaLinkedin className='hover:text-blue-500' />
            </a>
            <a className='cursor-pointer' target='blank' href='https://github.com/Areebey/'>
            <FaGithub className='hover:text-yellow-600' />
            </a>
            <a className='cursor-pointer' target='blank' href='https://x.com/areeb_ey'>
            <FaTwitterSquare className='hover:text-blue-300' />
            </a>
            <a className='cursor-pointer' target='blank' href='https://www.instagram.com/_areebey/'>
            <FaInstagram className='hover:text-orange-700' />
            </a>
        </div>
    </nav>
  )
}

export default Navbar