import React, { useEffect, useState } from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi'
import ww from '../assets/images/wwHero.svg'

const UXCaseStudyWW = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div name='uxhero' className=' flex flex-col justify-center bg-[#9995C8]'>
      <div className='w-full mx-auto px-8 sm:px-32 bg-[#1F1F21]'>
        <div className='max-w-[1200px] w-full grid grid-cols-1 md:grid-cols-2 mt-40 gap-8 py-8 '>

          <div>
            <h2 className='text-pink-600 text-2xl sm:text-5xl font-bold'>Welcome Wanderer</h2>
            <h2 className='text-white text-1xl sm:text-2xl font-bold py-4'>User Experience • Design • Research • Figma • Prototyping</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>A Homestay travel app to connect travelers and host families</p>
            <button className='max-w-[200px] text-white bg-black border-2 border-white-300 px-6 py-3 my-4 flex items-center hover:bg-pink-600 border-pink-600'
              onClick={() => window.location.href = 'https://www.figma.com/proto/tHheHUfhaYj3cZ4dmacK2O/WW-wireframes?type=design&node-id=0-1&t=WefZLjA7IWc2UHDZ-0&scaling=contain&starting-point-node-id=34%3A1270&show-proto-sidebar=1'}>Prototype
              <span className='hover:pl-4 duration-300'>
                <HiArrowNarrowRight className='ml-3' />
              </span>
            </button>
          </div>


          <div>
            <img className='mx-auto p-4 cursor-pointer transform transition-transform duration-500 ease-in-out md:hover:scale-110' onClick={() => window.location.href = 'https://www.figma.com/proto/tHheHUfhaYj3cZ4dmacK2O/WW-wireframes?type=design&node-id=0-1&t=WefZLjA7IWc2UHDZ-0&scaling=contain&starting-point-node-id=34%3A1270&show-proto-sidebar=1'} src={ww} alt='' />
          </div>
        </div>

        <div className='max-w-[1200px] w-full grid grid-cols-1 md:grid-cols-2 gap-8 py-8'>
          <div>
            <h1 className='text-2xl font-bold inline py-2 text-[#F5F5FA]'>Challenge</h1>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>Create a welcoming, unique, and mutually beneficial homestay travel experience for hosts and guests.</p>
          </div>
          <div>
            <h1 className='text-2xl font-bold inline py-2 text-[#F5F5FA]'>Role</h1>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>User <span className='font-bold'>interface designer</span> in a team of 3</p>
          </div>
          <div>
            <h1 className='text-2xl font-bold inline py-2 text-[#F5F5FA]'>Tools</h1>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>Figma, Adobe Illustrator, Maze.co, Google Suite, Zoom</p>
          </div>
          <div>
            <h1 className='text-2xl font-bold inline py-2 text-[#F5F5FA]'>Deliverables</h1>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>User Research, Guest & Host Personas, Empathy Maps, HMW & POV Statements, Competitive Analysis, Journey Map, Prototype, User Flows, Maze, Usability Reports</p>
          </div>
          <div>
            <h1 className='text-2xl font-bold inline py-2 text-[#F5F5FA]'>Timeline</h1>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>February 2023 - April 2023</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UXCaseStudyWW