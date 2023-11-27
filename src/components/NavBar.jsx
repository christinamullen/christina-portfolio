import React, { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaIdCard } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import Logo from '../assets/images/CMlogo3.png'
import { Link as RouterLink } from 'react-router-dom';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const NavBar = () => {
  const [nav, setNav] = useState(false)
  const [dropdown, setDropdown] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(false);

  const handleClick = () => setNav(!nav)
  const handleDropdown = () => setDropdown(!dropdown);
  const toggleMobileDropdown = () => setMobileDropdown(!mobileDropdown);


  return (
    <div className='z-10 fixed w-full h-[100px] flex justify-between items-center px-4 bg-[#9995C8] text-gray-950'>
      <div>
        <RouterLink to="/">
          <img src={Logo} alt="Logo" style={{ width: '300px' }} />
        </RouterLink>
      </div>
      {/* Menu */}
      <ul className='hidden md:flex'>


        <div className="relative">
          <button onClick={handleDropdown} className="flex items-center focus:outline-none">
            Case Studies
            {dropdown ? <FaChevronUp className="ml-2" /> : <FaChevronDown className="ml-2" />}
          </button>
          {dropdown && (
            <div className="absolute bg-white shadow-md rounded-md py-2 w-40">
              <RouterLink to="/UICaseStudyHC" className="block px-4 py-2 text-black hover:bg-gray-100">UI: Hoodcats Cafe</RouterLink>
              <RouterLink to="/UXCaseStudyWW" className="block px-4 py-2 text-black hover:bg-gray-100">UX: Welcome Wanderer</RouterLink>
            </div>
          )}
        </div>
        <li><RouterLink to="/Code">Code Projects</RouterLink></li>
        <li><RouterLink to="/About">About Me</RouterLink></li>
        <li><RouterLink to="/Contact">Contact</RouterLink></li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* Mobile Menu !nav ? 'hidden' : */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#9995C8] flex flex-col justify-center items-center'}>
        <li className='py-6 text-4xl'><RouterLink onClick={handleClick} to="/About">About Me</RouterLink></li>
        <li className='py-6 text-4xl'>
          <button onClick={toggleMobileDropdown} className='flex items-center focus:outline-none w-full text-left'>
            Case Studies
            {dropdown ? <FaChevronUp className="ml-2" /> : <FaChevronDown className="ml-2" />}
          </button>
          <ul className={!mobileDropdown ? 'hidden' : 'flex flex-col items-center w-full'}>
            <li className='py-6 text-4xl'><RouterLink onClick={handleClick} to="/UICaseStudyHC" className='w-full text-center'>UI: Hoodcats Cafe</RouterLink></li>
            <li><RouterLink onClick={handleClick} to="/UXCaseStudyWW" className='w-full text-center'>UX: Welcome Wanderer</RouterLink></li>
          </ul>
        </li>
        <li className='py-6 text-4xl'><RouterLink onClick={handleClick} to="/C">Code Projects</RouterLink></li>
        <li className='py-6 text-4xl'><RouterLink onClick={handleClick} to="/Contact">Contact</RouterLink></li>
      </ul>


      {/* Social Icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a className='flex justify-between items-center w-full text-gray-300' href="https://www.linkedin.com/in/cmullen08/">
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-800'>
            <a className='flex justify-between items-center w-full text-gray-300' href="https://github.com/christinamullen">
              GitHub <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#FB01A3]'>
            <a className='flex justify-between items-center w-full text-gray-300' href="mailto: cnicodesigns@gmail.com">
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6B7280]'>
            <a className='flex justify-between items-center w-full text-gray-300' href="/">
              Resume <FaIdCard size={30} />
            </a>
          </li>
        </ul>

      </div>

    </div>
  )
}

export default NavBar