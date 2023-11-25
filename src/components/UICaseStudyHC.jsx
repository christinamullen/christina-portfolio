import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import hoodcats from '../assets/images/HCUI.png'

const UICaseStudyHC = () => {
  return (
    <div name='uicshc' className='w-full mx-auto px-32 flex flex-col justify-center h-screen bg-[#1F1F21]'>
      <div className='max-w-[1200px] w-full grid grid-cols-1 md:grid-cols-2 gap-8 py-8'>
        <div>
          <h2 className='text-pink-600 text-2xl sm:text-5xl font-bold'>UI Case Study: Hoodcats Cafe</h2>
          <h2 className='text-white text-1xl sm:text-2xl font-bold'>UI Deisgn • Figma • Prototyping • Wireframes</h2>
          <p className='text-[#8892b0] py-4 max-w-[700px]'>User Interface Design for non-profit cat cafe and adoption center mobile app</p>
          <button className='max-w-[200px] text-white bg-black px-6 py-3 my-4 flex items-center hover:bg-pink-600'
            onClick={() => window.location.href = 'https://www.figma.com/proto/u3cuuuWqyHyOsbnLPuvQve/Pitch-Deck-Christina?type=design&node-id=0-1&t=g0tySnhpzsp8LF68-0&scaling=contain&starting-point-node-id=282%3A8487&show-proto-sidebar=1'}> Prototype
            <span className='hover:pl-4 duration-300'>
              <HiArrowNarrowRight className='ml-3' />
            </span>
          </button>
        </div>
        <div>
          <img className='mx-auto p-4' src={hoodcats} alt='' />
        </div>




      </div>
    </div>
  )
}

export default UICaseStudyHC