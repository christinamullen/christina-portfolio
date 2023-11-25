import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import hoodcats from '../assets/images/HCUI.png'
import coffeeShop from '../assets/images/coffeeResearch.png'

const UICaseStudyHC = () => {
  return (
    <div name='uicshchead' className=' flex flex-col justify-center bg-[#9995C8]'>
      <div className='w-full mx-auto px-32 bg-[#1F1F21]'>
        <div className='max-w-[1200px] w-full grid grid-cols-1 md:grid-cols-2 mt-40 gap-8 py-8 '>
          <div>
            <h2 className='text-pink-600 text-2xl sm:text-5xl font-bold'>UI Case Study: Hoodcats Cafe</h2>
            <h2 className='text-white text-1xl sm:text-2xl font-bold'>UI Deisgn • Figma • Prototyping • Wireframes</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>User Interface Design for non-profit cat cafe and adoption center mobile app</p>
            <button className='max-w-[200px] text-white bg-black border-2 border-white-300 px-6 py-3 my-4 flex items-center hover:bg-pink-600 border-pink-600'
              onClick={() => window.location.href = 'https://www.figma.com/proto/u3cuuuWqyHyOsbnLPuvQve/Pitch-Deck-Christina?type=design&node-id=0-1&t=g0tySnhpzsp8LF68-0&scaling=contain&starting-point-node-id=282%3A8487&show-proto-sidebar=1'}> Prototype
              <span className='hover:pl-4 duration-300'>
                <HiArrowNarrowRight className='ml-3' />
              </span>
            </button>
          </div>

          <div>
            <img className='mx-auto p-4 cursor-pointer' onClick={() => window.location.href = 'https://www.figma.com/proto/u3cuuuWqyHyOsbnLPuvQve/Pitch-Deck-Christina?type=design&node-id=0-1&t=g0tySnhpzsp8LF68-0&scaling=contain&starting-point-node-id=282%3A8487&show-proto-sidebar=1'} src={hoodcats} alt='' />
          </div>
        </div>

        <div className='max-w-[1200px] w-full grid grid-cols-1 md:grid-cols-2 gap-8 py-8'>
          <div>
            <h1 className='text-2xl font-bold inline border-2 px-4 py-2 text-[#F5F5FA] border-[#8892b0]'>Challenge</h1>
            <p className='text-[#8892b0] py-4 max-w-[700px]'> Design a platform and User Interface for a non-profit that will allow users to pre-order food and beverages for pickup, schedule visits to the cat cafe, and load funds on to their account. </p>
          </div>
          <div>
            <h1 className='text-2xl font-bold inline border-2 px-4 py-2 text-[#F5F5FA] border-[#8892b0]'>Role</h1>
            <p className='text-[#8892b0] py-4 max-w-[700px]'> User interface designer, solo project</p>
          </div>
          <div>
            <h1 className='text-2xl font-bold inline border-2 px-4 py-2 text-[#F5F5FA] border-[#8892b0]'>Tools</h1>
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
            <h1 className='text-2xl font-bold inline border-2 px-4 py-2 text-[#F5F5FA] border-[#8892b0]'>Deliverables</h1>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>
              <ul>
                <li>UI Prototype</li>
                <li>Sketches</li>
                <li>User Research</li>
                <li>Task Flows</li>
              </ul>
            </p>
          </div>
          <div>
            <h1 className='text-2xl font-bold inline border-2 px-4 py-2 text-[#F5F5FA] border-[#8892b0]'>Timeline</h1>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>February 2023 - April 2023</p>
          </div>
        </div>

      </div>

      <div className='w-full mx-auto px-32 flex flex-col items-center justify-center bg-[#9995C8]'>
        <h1 className='sm:text-4xl font-bold inline border-4 px-4 py-2 mt-8 tracking-wider bg-[#1F1F21] border-pink-600 text-[#F5F5FA]'>User Research</h1>
        <p className='font-bold m-4'>Getting a deep understanding of the on-the-go coffee-drinker and cat-lover</p>
        <h1 className='text-2xl inline border-2 px-4 py-2 text-[#F5F5FA] bg-[#1F1F21] border-[#8892b0]'>Insights</h1>
        <div className='max-w-[1200px] w-full grid grid-cols-1 md:grid-cols-2 gap-8 py-8 '>
          <img className='mx-auto p-4' src={coffeeShop} alt='someone ordering coffee' />
          <div>
            <h1 className='font-bold text-xl py-4 text-[#1F1F21]'>Audience Interviews</h1>
            <p>Since the focus of the project was the UI, the pool of surveyed participants was limited to two.</p>
            <p>A man who had experience with using <span className='font-bold'>Startbucks</span> app on a daily basis </p>
            <p>A woman who had experience using the <span className='font-bold'>Peet's Coffee</span> app </p>
            <p>Both stated that <span className='font-bold'>convenience </span> was their primary reason for using their respective apps, specifically the <span className='font-bold'> order ahead or reorder feature</span></p>
            <p>The woman mentioned not having to <span className='font-bold'>fumble for a payment method</span> in her purse.</p>
          </div>
          <div>
            <h1 className='font-bold text-xl py-4 text-[#1F1F21]'>Takeaway</h1>
            <p>Competing on a grand scale with large national companies is not what our app aims to do. Rather, we hope that our users will choose our <span className='font-bold'>local boutique coffee experience </span> and in exchange we offer the same convenient <span className='font-bold'>streamlined experience but with a little more soul and for a good cause.</span></p>
          </div>
          <div>
            <h1 className='font-bold text-xl py-4 text-[#1F1F21]'>Competitive Landscape</h1>
            <p>Coffee app usage has skyrocketed in the past 5 years. Apps like Starbucks, Peets, and others have streamlined the coffee ordering process to eliminate the need to fumble with a wallet or cash, enabling the user customize, order, and pay quickly with their phone.</p>
          </div>


        </div>
      </div >

      <div className='flex flex-col justify-center'>
        <div className='w-full mx-auto px-32'>

        </div>
      </div>


    </div >

  )
}

export default UICaseStudyHC