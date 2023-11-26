import React from 'react'
import empathyMap from '../assets/images/guestEmpathyMap.svg'

const EmpathyMap = () => {
    return (
        <div name='empathyMap' className=' flex flex-col justify-center bg-[#1F1F21]'>
            <div className='w-full mx-auto p-8 flex flex-col items-center justify-center'>
                <h1 className='sm:text-4xl font-bold inline border-4 px-4 py-2 mt-20 mb-4 tracking-wider bg-[#1F1F21] border-pink-600 text-[#F5F5FA]'> Guest Empathy Map</h1>
                <img className='min-w-[360px] max-w-[900px] mx-auto' src={empathyMap} alt='app architecture' />
            </div>
        </div>
    )
}

export default EmpathyMap