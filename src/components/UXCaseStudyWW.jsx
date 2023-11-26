import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import ww from '../assets/images/WW.png'

const UXCaseStudyWW = () => {
  return (
    <div name='uxhero' className=' flex flex-col justify-center bg-[#9995C8]'>
      <div className='w-full mx-auto px-32 bg-[#1F1F21]'>
        <div className='max-w-[1200px] w-full grid grid-cols-1 md:grid-cols-2 mt-40 gap-8 py-8 '>
          <div>
            <h2 className='text-pink-600 text-2xl sm:text-5xl font-bold'>UX Case Study: Welcome Wanderer</h2>
            <h2 className='text-white text-1xl sm:text-2xl font-bold py-4'>UX Design • UX Research • Figma • Prototyping</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>User Experience Design project for a Homestay travel app to connect travelers and host families.</p>
            <button className='max-w-[200px] text-white bg-black border-2 border-white-300 px-6 py-3 my-4 flex items-center hover:bg-pink-600 border-pink-600'
              onClick={() => window.location.href = 'https://www.figma.com/proto/tHheHUfhaYj3cZ4dmacK2O/WW-wireframes?type=design&node-id=0-1&t=oyWl4lrUdgYxim4q-0&scaling=contain&starting-point-node-id=34%3A1270&show-proto-sidebar=1'}> Prototype
              <span className='hover:pl-4 duration-300'>
                <HiArrowNarrowRight className='ml-3' />
              </span>
            </button>
          </div>

          <div>
            <img className='mx-auto p-4 cursor-pointer' onClick={() => window.location.href = 'https://www.figma.com/proto/u3cuuuWqyHyOsbnLPuvQve/Pitch-Deck-Christina?type=design&node-id=0-1&t=g0tySnhpzsp8LF68-0&scaling=contain&starting-point-node-id=282%3A8487&show-proto-sidebar=1'} src={ww} alt='' />
          </div>
        </div>

        <div className='max-w-[1200px] w-full grid grid-cols-1 md:grid-cols-2 gap-8 py-8'>
          <div>
            <h1 className='text-2xl font-bold inline py-2 text-[#F5F5FA]'>Challenge</h1>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>Create a welcoming, unique, and mutually beneficial homestay travel experience for hosts and guests.</p>
          </div>
          <div>
            <h1 className='text-2xl font-bold inline py-2 text-[#F5F5FA]'>Role</h1>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>User interface designer in a team of 3 </p>
          </div>
          <div>
            <h1 className='text-2xl font-bold inline py-2 text-[#F5F5FA]'>Tools</h1>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>
              <ul>
                <li>Figma</li>
                <li>Adobe Illustrator</li>
                <li>Maze.co</li>
                <li>Google Suite</li>
                <li>Zoom</li>
              </ul>
            </p>
          </div>
          <div>
            <h1 className='text-2xl font-bold inline py-2 text-[#F5F5FA]'>Deliverables</h1>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>
              <ul>
                <li>User Research</li>
                <li>Guest & Host Personas</li>
                <li>Empathy Maps</li>
                <li>HMW & POV Statements</li>
                <li>Competitive Analysis</li>
                <li>Journey Map</li>
                <li>Prototype</li>
                <li>User Flows</li>
                <li>Maze Usability Reports</li>
              </ul>
            </p>
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