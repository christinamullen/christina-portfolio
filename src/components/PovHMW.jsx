import React from 'react'
import guestPOV from '../assets/images/guestPOV.svg'
import hostPOV from '../assets/images/hostPOV.svg'

const PovHMW = () => {
    return (
        <div name='userResearch' className=' flex flex-col justify-center bg-[#9995C8]'>
            <div className='w-full mx-auto px-32 flex flex-col items-center justify-center bg-[#9995C8]'>
                <h1 className='sm:text-4xl font-bold inline border-4 px-4 py-2 mt-8 tracking-wider bg-[#1F1F21] border-pink-600 text-[#F5F5FA]'>POV & HMW Statements</h1>
                <div className='max-w-[1200px] grid grid-cols-1 sm:grid-cols-3 gap-8 py-8'>
                    <div name='col1'>
                        <img className='min-w-[360px] mx-auto' src={guestPOV} alt='guest POV' />
                    </div>
                    <div name='col2' className='grid grid-cols-1 sm:grid-cols-2 pt-56'>
                        <div className='row-span-2'>
                            <h1 className='font-bold text-xl py-4 text-[#1F1F21]'>HMW</h1>
                            <p>
                                Provide a safe and transparent platform to connect hosts and guests who are looking for connection and cultural exchange?
                            </p>
                        </div>
                        <div>
                            <h1 className='font-bold text-xl py-4 text-[#1F1F21]'>HMW</h1>
                            <p>
                                Provide reputable lodging in our host family’s home in foreign countries and rural areas?
                            </p>
                        </div>
                        <div>
                            <h1 className='font-bold text-xl py-4 text-[#1F1F21]'>HMW</h1>
                            <p>
                                Provide reputable guests to ensure host safety?
                            </p>
                        </div>
                    </div>
                    <div name='col3'>
                        <img className='min-w-[360px] mx-auto' src={hostPOV} alt='host POV' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PovHMW