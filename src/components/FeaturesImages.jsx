import React from 'react'
import profile from '../assets/images/HostProfileHana.png'
import inbox from '../assets/images/Inbox.png'
import reviews from '../assets/images/Reviews.png'
import home from '../assets/images/Home.png'

const FeaturesImages = () => {
    return (
        <div name='featuresImages' className=' flex flex-col justify-center bg-[#1F1F21]'>
            <div className='w-full mx-auto p-8 flex flex-col items-center justify-center'>
                <h1 className='sm:text-4xl font-bold inline border-4 px-4 py-2 mt-20 mb-4 tracking-wider bg-[#1F1F21] border-pink-600 text-[#F5F5FA]'>Features</h1>
                <div className='max-w-[1200px] w-full grid grid-cols-1 md:grid-cols-4 gap-8 py-8'>
                    <div className='flex flex-col items-center justify-center'>
                        <h1 className='text-2xl font-bold inline py-2 text-[#F5F5FA]'>User Profiles</h1>
                        <img className='max-h-[360px] mx-auto' src={profile} alt='host profile prototype' />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h1 className='text-2xl font-bold inline py-2 text-[#F5F5FA]'>Chat Portal</h1>
                        <img className='max-h-[360px] mx-auto' src={inbox} alt='inbox prototype' />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h1 className='text-2xl font-bold inline py-2 text-[#F5F5FA]'>Reviews</h1>
                        <img className='max-h-[360px] mx-auto' src={reviews} alt='reviews prototype' />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h1 className='text-2xl font-bold inline py-2 text-[#F5F5FA]'>Experiences</h1>
                        <img className='max-h-[360px] mx-auto' src={home} alt='home page experiences prototype' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturesImages