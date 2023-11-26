import React from 'react'

const Sections = () => {
    return (
        <div name='sections' className=' flex flex-col justify-center bg-[#9995C8]'>
            <div className='w-full mx-auto px-32 flex flex-col items-center justify-center bg-[#9995C8]'>
                <h1 className='sm:text-4xl font-bold inline border-4 px-4 py-2 mt-8 tracking-wider bg-[#1F1F21] border-pink-600 text-[#F5F5FA]'>Sections</h1>
                <p className='py-16 font-bold text-xl text-[#1F1F21]'>
                    <ul>
                        <li>Featured Destinations</li>
                        <li>Book a Meal/Experience</li>
                        <li>Favorites</li>
                        <li>Homestay Experience</li>
                        <li>Meal Experience</li>
                        <li>Best practices for guests & hosts</li>
                        <li>Book a Homestay - calendar</li>
                        <li>Communication portal: chat</li>
                        <li>Help Desk</li>
                    </ul>
                </p>
            </div>
        </div >
    )
}

export default Sections