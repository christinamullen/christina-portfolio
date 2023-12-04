import React, { useEffect, useState } from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi'
import hoodcats from '../assets/images/HCUI.png'
import coffeeShop from '../assets/images/coffeeResearch.png'
import coffeeLady from '../assets/images/coffeeLady.png'
import coffeeShopCup from '../assets/images/coffeeResearch2.png'

const UICaseStudyHC = () => {
  const [caseStudy, setCSFields] = useState(null);

  useEffect(() => {
    fetch('/index.php/api/caseStudyHC_JSON')
        .then(response => response.json())
        .then(data => setCSFields(data))
        .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div name='uihero' className=' flex flex-col justify-center bg-[#9995C8]'>
       {caseStudy ? ( 
      <div className='w-full mx-auto px-8 sm:px-32 bg-[#1F1F21]'>
        <div className='max-w-[1200px] w-full grid grid-cols-1 md:grid-cols-2 mt-40 gap-8 py-8 '>
          <div>
            <h2 className='text-pink-600 text-2xl sm:text-5xl font-bold'>{caseStudy.title}</h2>
            <h2 className='text-white text-1xl sm:text-2xl font-bold py-4'>{caseStudy.features}</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>{caseStudy.project_intro}</p>
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
            <h1 className='text-2xl font-bold inline py-2 text-[#F5F5FA]'>Challenge</h1>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>{caseStudy.challenge}</p>
          </div>
          <div>
            <h1 className='text-2xl font-bold inline py-2 text-[#F5F5FA]'>Role</h1>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>{caseStudy.role}</p>
          </div>
          <div>
            <h1 className='text-2xl font-bold inline py-2 text-[#F5F5FA]'>Tools</h1>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>{caseStudy.tools}</p>
          </div>
          <div>
            <h1 className='text-2xl font-bold inline py-2 text-[#F5F5FA]'>Deliverables</h1>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>{caseStudy.deliverables}</p>
          </div>
          <div>
            <h1 className='text-2xl font-bold inline py-2 text-[#F5F5FA]'>Timeline</h1>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>{caseStudy.timeline}</p>
          </div>
        </div>
      </div>
      ) : ( <p>Loading case study...</p>)}
      
      <div className='w-full mx-auto px-8 sm:px-32 flex flex-col items-center justify-center bg-[#9995C8]'>
        <h1 className='sm:text-4xl font-bold inline border-4 px-4 py-2 mt-8 tracking-wider bg-[#1F1F21] border-pink-600 text-[#F5F5FA]'>User Research</h1>
        <p className=' m-4'>Getting a deep understanding of the on-the-go coffee-drinker and cat-lover</p>
        <h1 className='text-2xl inline font-bold px-4 py-2 text-black'>Insights</h1>
        <div className='max-w-[1200px] w-full grid grid-cols-1 md:grid-cols-2 gap-8 py-8 '>

          <div>
            <h1 className='font-bold text-xl py-4 text-[#1F1F21]'>Audience Interviews</h1>
            <p>Since the focus of the project was the UI, the pool of surveyed participants was limited to two.</p>
            <p>A man who had experience with using <span className='font-bold'>Startbucks</span> app on a daily basis </p>
            <p>A woman who had experience using the <span className='font-bold'>Peet's Coffee</span> app </p>
            <p>Both stated that <span className='font-bold'>convenience </span> was their primary reason for using their respective apps, specifically the <span className='font-bold'> order ahead or reorder feature</span></p>
            <p>The woman mentioned not having to <span className='font-bold'>fumble for a payment method</span> in her purse, when she can use her phone to pay instead.</p>
            <p>The woman also expressed that she favors local coffee shops instead of big chains, and wishes they had better apps to order ahead.</p>
          </div>
          <img className='mx-auto p-4' src={coffeeLady} alt='a lady with a coffee in one hand a phone in the other' />

          <img className='mx-auto p-4' src={coffeeShop} alt='someone ordering coffee' />
          <div>
            <h1 className='font-bold text-xl py-4 text-[#1F1F21]'>Competitive Landscape</h1>
            <p>Coffee app usage has skyrocketed in the past 5 years. Apps like Starbucks, Peets, and others have streamlined the coffee ordering process to eliminate the need to fumble with a wallet or cash, enabling the user customize, order, and pay quickly with their phone.</p>
          </div>

          <div>
            <h1 className='font-bold text-xl py-4 text-[#1F1F21]'>Takeaway</h1>
            <p>Competing on a grand scale with large national companies is not what our app aims to do. Rather, we hope that our users will choose our <span className='font-bold'>local boutique coffee experience </span> and in exchange we offer the same convenient <span className='font-bold'>streamlined experience but with a little more soul and for a good cause.</span></p>
          </div>
          <img className='mx-auto p-4' src={coffeeShopCup} alt='someone receiving a coffee' />

        </div>
       
      </div >
      
    </div >

  )
}

export default UICaseStudyHC