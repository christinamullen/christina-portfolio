import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Hero = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#9995C8]'>

       <div className='w-full mx-auto px-32 flex flex-col justify-center h-screen bg-[#1F1F21] text-gray-300'>
        <p>hello! My name is</p>
        <h1 className='text-pink-600 text-2xl sm:text-4xl font-bold'>Christina Mullen</h1>
        <h2 className='text-[#8892b0] text-2xl sm:text-4xl font-bold'>Designer and Full Stack Developer. </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>With 10 years experience in healthcare as a clinician, I bring a human-centric approach to design and development.</p>
        <h2> </h2>
        <button className='max-w-[175px] text-white border-2 border-pink-600 px-6 py-3 my-2 flex items-center hover:bg-pink-600'>Get in Touch 
        <span className='hover:rotate-90 duration-300'>
        <HiArrowNarrowRight className='ml-3' />
        </span>
        </button>
       </div>
       <div>
        
       </div>

    </div>
  )
}

export default Hero