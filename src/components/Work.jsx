import React from 'react'
import hoodcats from '../assets/images/HCUI.png' 
import ww from '../assets/images/WW.png'
import flora from '../assets/images/Flora.png'
import rsvp from '../assets/images/RSVPpysql.png'
import ev from '../assets/images/zzJS.png'
import pet from '../assets/images/Pet.png'

const Work = () => {
  return (
    <div name='work' className='w-full mx-auto flex flex-col justify-center h-auto bg-[#1F1F21] text-gray-300'>
       <div className='flex flex-col text-4xl font-bold items-center w-full h-full text-white'>
          <div className='my-28'>
            <h1 className='text-4xl font-bold inline border-4 px-4 py-2 m-8 border-pink-600'>Work Samples</h1>
          </div>

            <div className='max-w-[1200px] w-full grid grid-cols-1 md:grid-cols-2 gap-8 py-8'>
                <div className='h-[580px] mx-8 col-span-1 text-center rounded-3xl py-8 bg-white text-black transform transition-transform duration-500 ease-in-out md:hover:scale-110 md:hover:translate-x-5'>
                  <h1 className='text-3xl font-bold px-4'>Case Study: Hoodcats Cafe</h1>
                  <h3 className='text-sm font-normal p-4'>User Interface Design for non-profit cat cafe and adoption center mobile app</h3>
                  <p className='text-sm tracking-wider'>UI Deisgn  •  Figma  •  Prototyping  •  Wireframes</p>
                  <img className='mx-auto p-4' src={hoodcats} alt='' />
                </div>
                <div className='h-[580px] mx-8 col-span-1 text-center rounded-3xl py-8 bg-white text-black transform transition-transform duration-500 ease-in-out md:hover:scale-110 md:hover:-translate-x-5'>
                  <h1 className='text-3xl font-bold px-4'>Case Study: Welcome Wanderer</h1>
                  <h3 className='text-sm font-normal p-4'>User Experience Design for a homestay travel mobile app</h3>
                  <p className='text-sm tracking-wider'>UX Deisgn • UX Research • Figma • Prototyping</p>
                  <img className='mx-auto p-4' src={ww} alt='' />
                </div>
                <div className='h-[580px] mx-8 col-span-1 text-center rounded-3xl py-8 bg-[#C8DEC8] text-black transform transition-transform duration-500 ease-in-out md:hover:scale-110 md:hover:translate-x-5'>
                  <h1 className='text-3xl font-bold'>Garden Journal</h1>
                  <h3 className='text-sm font-normal p-4'>Advanced Java using JavaFX and mySQL. Tracks your plants and their watering intervals.</h3>
                  <p className='text-sm tracking-wider px-4'>Java • Object Oriented Programming • Interfaces • Abstraction</p>
                  <img className='mx-auto p-4' src={flora} alt='' />
                </div>
                <div className='h-[580px] mx-8 col-span-1 text-center rounded-3xl py-8 bg-[#D1E0E8] text-black transform transition-transform duration-500 ease-in-out md:hover:scale-110 md:hover:-translate-x-5'>
                  <h1 className='text-3xl font-bold'>EV Roadtrip Planner</h1>
                  <h3 className='text-sm font-normal p-4'>Calculates how many times a vehicle will need to charge and plot locations of charging stations. Here API & Leaflet Maps API</h3>
                  <p className='text-sm tracking-wider px-4'>JavaScript • HTML/CSS • APIs • DOM manipulation • Proxy Server</p>
                  <img className='mx-auto p-4' src={ev} alt='' />
                </div>
                <div className='h-[580px] mx-8 col-span-1 text-center rounded-3xl py-8 bg-[#D6D1E8] text-black transform transition-transform duration-500 ease-in-out md:hover:scale-110 md:hover:translate-x-5'>
                  <h1 className='text-3xl font-bold'>Wedding RSVP Portal</h1>
                  <h3 className='text-sm font-normal p-4'>Web Programming project where guests can RSVP, lookup by email, select their meal choice, add a +1 guest. </h3>
                  <p className='text-sm tracking-wider'>Python • SQL • HTML/CSS • Web Programming</p>
                  <img className='mx-auto p-4' src={rsvp} alt='' />
                </div>
                <div className='h-[580px] mx-8 col-span-1 text-center rounded-3xl py-8 bg-[#D4DDDB] text-black transform transition-transform duration-500 ease-in-out md:hover:scale-110 md:hover:-translate-x-5'>
                  <h1 className='text-3xl font-bold'>Vet Office</h1>
                  <h1 className='text-3xl font-bold'>Waiting Room Simulator</h1>
                  <h3 className='text-sm font-normal p-4'>Simulates daily patient flow in a medical office. Severity rancomly ranked 1-5, with most severe given greatest priority.</h3>
                  <p className='text-sm tracking-wider'>C++ • Data Structures • Error Testing • Big-O runtime optimization</p>
                  <img className='mx-auto p-4 max-h-[350px]' src={pet} alt='' />
                </div>
  

            </div>
        </div>
    </div>
  )
}

export default Work