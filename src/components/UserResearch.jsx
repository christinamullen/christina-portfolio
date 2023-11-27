import React from 'react'
import convoStats from '../assets/images/convoStats.svg'
import homestayJapan from '../assets/images/JapanHomestay.jpg'

const userResearch = () => {
    return (
        <div name='userResearch' className=' flex flex-col justify-center bg-[#9995C8]'>
            <div className='w-full mx-auto px-8 sm:px-32 flex flex-col items-center justify-center bg-[#9995C8]'>
                <h1 className='sm:text-4xl font-bold inline border-4 px-4 py-2 mt-8 tracking-wider bg-[#1F1F21] border-pink-600 text-[#F5F5FA]'>User Research</h1>
                <p className=' m-4'>Getting a deep understanding of the homestay host and guests</p>
                <div className='max-w-[1200px] w-full grid grid-cols-1 md:grid-cols-2 gap-8 py-8 '>
                    <div>
                        <h1 className='font-bold text-xl py-4 text-[#1F1F21]'>Survey Results</h1>
                        <p className='pb-4'>We had some <span className='font-bold'>unexpected findings</span> from our surveys and interviews. When it comes to homestays, we found that not everyone was down for “the holy grail of travel”. In fact, <span className='font-bold'>many had apprehensions about staying in a foreign family's home</span>. They viewed the concept positively, but <span className='font-bold'>would prefer to have private accomodations.</span> However, they <span className='font-bold'>liked the idea of joining a homestay family for a meal, events, guided tours from a local.</span></p>
                        <h1 className='font-bold text-xl py-4 text-[#1F1F21]'>Secondary Research</h1>
                        <p>Reasons for Hosts to consider homestays: Rural areas experiencing physician shortage, hoping that by exposing medical students to these areas via a homestay experience, they might form a connection and return to practice there</p>
                    </div>
                    <img className='mx-auto p-4' src={convoStats} alt='a japanese family sharing a meal around a table with an american guest' />
                    <img className='mx-auto p-4' src={homestayJapan} alt='a japanese family sharing a meal around a table with an american guest' />
                    <div>
                        <h1 className='font-bold text-xl py-4 text-[#1F1F21]'>Listening to our Audience</h1>
                        <p className='pb-4'>The challenge then became, <span className='font-bold'>how might we create a homestay-like experience, without actually staying with the homestay family?</span></p>
                        <p>Solution: <span className='font-bold'>in addition to accommodations, we added other bookable activities: homestay family meal, events, guided tours from a local.</span></p>
                    </div>


                </div>
            </div >
        </div>
    )
}

export default userResearch