import React from 'react'
import hoodcats from '../assets/images/HoodcatsCafeCaseStudy.png' 
import ww from '../assets/images/WWCaseStudy.png'

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

            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 py-8'>
                <div className='max-w-[250px] sm:text-right text-3xl font-bold bg-white text-black'>
                  <img src={hoodcats} alt='' />
                  <img src={ww} alt='' />
                </div>
                <div className='font-bold text-gray-700'>
               <p>Coding Projects</p>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Work