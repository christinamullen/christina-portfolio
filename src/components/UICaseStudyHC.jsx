import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi'
import hoodcats from '../assets/images/HCHero.svg'
import coffeeShop from '../assets/images/coffeeResearch.png'
import ur1 from '../assets/images/UR_1.png'
import ur2 from '../assets/images/UR_2.png'
import ur3 from '../assets/images/UR_3.png'
import ur4 from '../assets/images/UR_4.png'
import catCoffee from '../assets/images/coffeeCat.png'
import coffeeLady from '../assets/images/coffeeLady.png'
import coffeeShopCup from '../assets/images/coffeeResearch2.png'

const UICaseStudyHC = () => {
  return (
    <div name='uihero' className=' flex flex-col justify-center bg-[#9995C8]'>

      <div className='w-full mx-auto px-8 sm:px-32 bg-[#FAF9F9]'>
        <div className='max-w-[1200px] w-full grid grid-cols-1 md:grid-cols-2 mt-40 gap-8 py-8 '>
          <div>
            <h2 className='text-black text-4xl sm:text-5xl font-bold'>Hoodcats Cafe</h2>
            <p className='text-[#D93232] text-xl font-bold py-4 max-w-[700px]'>Case Study: non-profit cat cafe mobile app</p>
            <p className='text-[#1F1F21] sm:text-lg font-semibold '>UI Design • Figma • Prototyping • Wireframes</p>

            <button className='max-w-[200px] text-black font-bold bg-[#F3c522] rounded-3xl border-2 shadow-2xl shadow-outline border-white-300 px-6 py-3 my-4 flex items-center hover:bg-[#D93232] hover:text-[#FAF9F9] border-black'
              onClick={() => window.location.href = 'https://www.figma.com/proto/u3cuuuWqyHyOsbnLPuvQve/Pitch-Deck-Christina?type=design&node-id=0-1&t=g0tySnhpzsp8LF68-0&scaling=contain&starting-point-node-id=282%3A8487&show-proto-sidebar=1'}> Prototype
              <span className='hover:pl-4 duration-300'>
                <HiArrowNarrowRight className='ml-3' />
              </span>
            </button>
            <div>
              <h1 className='text-2xl font-bold inline py-2 text-black'>Challenge</h1>
              <p className='text-[#8892b0] py-4 max-w-[500px]'>Design a platform and User Interface for a non-profit that will allow users to pre-order food and beverages for pickup, schedule visits to the cat cafe, and load funds on to their account.</p>
            </div>

            <div className='max-w-[900px] w-full grid grid-cols-1 md:grid-cols-2 gap-4 py-8'>


              <div>
                <h1 className='text-2xl font-bold inline py-2 text-black'>Tools</h1>
                <ul className='text-[#8892b0]'>
                  <li >Figma</li>
                  <li>Adobe Illustrator</li>
                  <li>Maze.co</li>
                  <li>Google Suite</li>
                  <li>Zoom</li>
                </ul>
              </div>
              <div>
                <h1 className='text-2xl font-bold inline py-2 text-black'>Deliverables</h1>
                <ul className='text-[#8892b0]'>
                  <li>UI Prototype</li>
                  <li>Sketches</li>
                  <li>User Research</li>
                  <li>Task Flows</li>
                </ul>
              </div>
              <div>
                <h1 className='text-2xl font-bold inline py-2 text-black'>Role</h1>
                <p className='text-[#8892b0] py-4 max-w-[600px]'>Solo project: UI design and features</p>
              </div>
              <div>
                <h1 className='text-2xl font-bold inline py-2 text-black'>Timeline</h1>
                <p className='text-[#8892b0] py-4'>February 2023 - April 2023</p>
              </div>
            </div>

          </div>

          <div>
            <img className='mx-auto p-4 cursor-pointer transform transition-transform duration-500 ease-in-out md:hover:scale-110' onClick={() => window.location.href = 'https://www.figma.com/proto/u3cuuuWqyHyOsbnLPuvQve/Pitch-Deck-Christina?type=design&node-id=0-1&t=g0tySnhpzsp8LF68-0&scaling=contain&starting-point-node-id=282%3A8487&show-proto-sidebar=1'} src={hoodcats} alt='' />
          </div>
        </div>


      </div>

      <div className='w-full mx-auto px-8 sm:px-32 flex flex-col items-center justify-center bg-[#9995C8]'>
        <h1 className='text-4xl inline font-bold px-4 py-2 mt-8 text-black'>User Research</h1>
        <p className=' sm:text-2xl m-4'>Getting a deep understanding of the on-the-go coffee-drinker and cat-lover</p>

        <img className='mx-auto p-4' src={coffeeShop} alt='someone ordering coffee' />


        <div className='max-w-[1200px] w-full grid grid-cols-1 md:grid-cols-2 gap-8 py-4 '>
          <div>
            <h1 className='font-bold text-xl py-4 text-[#1F1F21]'>Audience Interviews</h1>
            <p className='py-4'>Since the focus of the project was the UI, the pool of surveyed participants was limited to folks who had experience with a coffee ordering mobile app, and several folks who had recently visited a cat adoption center.</p>
            <p className='py-4'>A man who had experience with using <span className='font-bold'>Startbucks</span> app stated he liked being able to <span className='font-bold'>reorder quickly</span> -within a couple clicks.</p>
            <p className='py-4'>A woman who had experience using the <span className='font-bold'>Peet's Coffee</span> likes <span className='font-bold'>being able to see her rewards proces</span> and, of course, <span className='font-bold'>getting rewards</span>.</p>
            <p className='py-4'><span className='font-bold'>92%</span> of participants cited <span className='font-bold'>convenience </span> was their primary reason for using their respective apps, specifically the <span className='font-bold'> order ahead or reorder feature</span></p>
            <p className='py-4'>A woman mentioned not having to <span className='font-bold'>fumble for a payment method</span> in her purse, when she can use her phone to pay instead.</p>
            <p className='py-4'>A woman said she prefers her local coffee shop instead of a big chain, and wishes they had better apps to order ahead.</p>
            <p className='py-4'>Participants who had visited a shelter or pet adoption facility said that the process felt chaotic. It wasn't easy to book a visit.</p>
          </div>
          <div className='max-w-[900px] w-full grid grid-cols-1 lg:grid-cols-2 gap-4 py-2'>
            <img className='min-w-[200px] mx-auto p-2' src={ur1} alt='User research' />
            <img className='min-w-[200px] mx-auto p-2' src={ur2} alt='order ahead feature is fast' />
            <img className='min-w-[200px] mx-auto p-2' src={ur3} alt='not having to fumble for a payment method' />
            <img className='min-w-[200px] mx-auto p-2' src={ur4} alt='convenience was their primary reason for using their respective apps' />
          </div>
          <img className='mx-auto p-4' src={coffeeShopCup} alt='someone receiving a coffee' />

          <div>
            <h1 className='font-bold text-xl py-4 text-[#1F1F21]'>Competitive Landscape</h1>
            <p>Coffee app usage has skyrocketed in the past 5 years. Apps like Starbucks, Peets, and others have streamlined the coffee ordering process to eliminate the need to fumble with a wallet or cash, enabling the user customize, order, and pay quickly with their phone.</p>
          </div>

          <div className='py-16 text-[#1F1F21]'>
            <h1 className='font-bold text-xl py-4 text-[#1F1F21]'>Takeaway</h1>
            <p>Competing on a grand scale with large national companies is not what our app aims to do. Rather, we hope that our users will choose our <span className='font-bold'>local boutique coffee experience </span> and in exchange we offer the same convenient <span className='font-bold'>streamlined experience but with a little more soul and for a good cause.</span></p>
          </div>
          <img className='mx-auto p-4' src={catCoffee} alt='someone receiving a coffee' />
        </div>

      </div >

    </div >

  )
}

export default UICaseStudyHC