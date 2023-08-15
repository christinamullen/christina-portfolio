import React from 'react'
import hoodcats from '../assets/images/Hoodcats.png' 
import ww from '../assets/images/WWUX.png'
import flora from '../assets/images/JavaFlora.png'
import rsvp from '../assets/images/PythonRSVP.png'
import ev from '../assets/images/JSProject.png'

const Work = () => {
  return (
    <div name='work' className='w-full mx-auto flex flex-col justify-center h-screen bg-[#1F1F21] text-gray-300'>
       <div className='flex flex-col text-4xl font-bold items-center w-full h-full text-white'>
          <div>
            <h1>Code Projects and Case Studies</h1>
            <div>
              <p><span className='bold'>All</span></p>
              <p> Case Studies</p>
              <p> Code Projects </p>
            </div>
          </div>

            <div className='max-w-[756px] w-full grid grid-cols-3 sm:grid-cols-2 gap-4 py-8'>
                <div className='col-span-2 sm:text-right text-3xl font-bold bg-white text-black'>
                  <img src={hoodcats} alt='' />
                </div>
                <div className='font-bold col-span-1 col-start-3 text-gray-700'>
                <img src={ev} alt='' />
                </div>
                <div className='font-bold col-span-1  text-gray-700'>
                <img src={rsvp} alt='' />
                </div>
                <div className='font-bold col-start-2 col-span-2 row-start-2 text-gray-700'>
                <img src={ww} alt='' />
                </div>
                <div className='font-bold row-start-3 text-gray-700'>
                <img src={flora} alt='' />
                </div>

            </div>
        </div>
    </div>
  )
}

export default Work