import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaIdCard} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import Logo from '../assets/images/CMlogo3.png'
import {Link} from 'react-scroll'
import { Link as RouterLink } from 'react-router-dom';

const NavBar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <div className='z-10 fixed w-full h-[100px] flex justify-between items-center px-4 bg-[#9995C8] text-gray-950'>
      <div>
      <RouterLink to="/">
        <img src={Logo} alt="Logo" style={{width: '300px'}}/>
        </RouterLink>
      </div>
      {/* Menu */}
      <ul className='hidden md:flex'>
        <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
        <li><Link to="about" smooth={true} duration={500}>About</Link></li>
        <li><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
        <li><Link to="work" smooth={true} duration={500}>Work</Link></li>
        <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* Mobile Menu !nav ? 'hidden' : */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#9995C8] flex flex-col justify-center items-center'}>
          <li className='py-6 text-4xl'><Link onClick={handleClick} to="home" smooth={true} duration={500}>Home</Link></li>
          <li className='py-6 text-4xl'><Link onClick={handleClick} to="about" smooth={true} duration={500}>About</Link></li>
          <li className='py-6 text-4xl'><Link onClick={handleClick} to="skills" smooth={true} duration={500}>Skills</Link></li>
          <li className='py-6 text-4xl'><Link onClick={handleClick} to="work" smooth={true} duration={500}>Work</Link></li>
          <li className='py-6 text-4xl'><Link onClick={handleClick} to="contact" smooth={true} duration={500}>Contact</Link></li>
      </ul>
      {/* Social Icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a className='flex justify-between items-center w-full text-gray-300' href="https://www.linkedin.com/in/cmullen08/">
              LinkedIn <FaLinkedin size={30}/>
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-800'>
            <a className='flex justify-between items-center w-full text-gray-300' href="https://github.com/christinamullen">
              GitHub <FaGithub size={30}/>
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#FB01A3]'>
            <a className='flex justify-between items-center w-full text-gray-300' href="mailto: cnicodesigns@gmail.com">
              Email <HiOutlineMail size={30}/>
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6B7280]'>
            <a className='flex justify-between items-center w-full text-gray-300' href="/">
              Resume <FaIdCard size={30}/>
            </a>
          </li>
        </ul>

      </div>

    </div>
  )
}

export default NavBar