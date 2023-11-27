import React from 'react'
import dummy from '../assets/images/dummy.png'

const SiteArchitecture = () => {
    return (
        <div name="imgSlideBlack" className='w-full mx-auto py-16 flex flex-col items-center justify-center bg-[#1F1F21]'>
            <h1 className='sm:text-4xl font-bold inline border-4 px-4 py-2 mt-8 tracking-wider bg-[#1F1F21] border-pink-600 text-[#F5F5FA]'>Section title</h1>
            <img className='max-h-[640px] mx-auto p-8' src={dummy} alt='app architecture' />
        </div>
    )
}

export default SiteArchitecture