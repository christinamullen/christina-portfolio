import React from 'react'

const Features = () => {
    return (
        <div name='features' className='flex flex-col justify-center bg-[#9995C8]'>
            <div className='w-full mx-auto px-32 flex flex-col items-center justify-center bg-[#9995C8]'>
                <h1 className='sm:text-4xl font-bold inline border-4 px-4 py-2 my-8 tracking-wider bg-[#1F1F21] border-pink-600 text-[#F5F5FA]'>Features</h1>
            </div>
            <div className='max-w-[1000px] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 py-8'>
                <div className='flex flex-col items-center justify-center p-4 col-span-1 sm:col-span-2 text-[#F5F5FA] border-2 border-[#F5F5FA] bg-[#1F1F21]'>
                    <h1 className='font-bold text-xl pb-4 text-pink-600'>Ordering: Coffee & Food </h1>
                    <ul>
                        <li>Selection of food or drink options</li>
                        <li>Each food or drink option will have price, calorie info, size options, add-ons</li>
                        <li>Re-order feature large and centered</li>
                    </ul>
                </div>
                <div className='flex flex-col items-center justify-center p-4 col-span-1 text-[#F5F5FA] border-2 border-[#F5F5FA] bg-[#1F1F21]'>
                    <h1 className='font-bold text-xl pb-4 text-pink-600'>Gallery of: Adoptable Cats</h1>
                    <ul>
                        <li>Scroll-able gallery where cats that you star will be put in your “liked” area</li>
                        <li>Each profile will have a little about the cat, like age, preferences, any bonded friends, special needs</li>
                    </ul>
                </div>
                <div className='flex flex-col items-center justify-center p-4 col-span-1 text-[#F5F5FA] border-2 border-[#F5F5FA] bg-[#1F1F21]'>
                    <h1 className='font-bold text-xl pb-4 text-pink-600'>Registration & Account</h1>
                    <ul>
                        <li>User can create an account</li>
                        <li>Liked cats collection is stored here</li>
                        <li>Rewards points can be viewed from here</li>
                        <li>Scheduled appointments can be viewed from here</li>
                    </ul>
                </div>
                <div className='flex flex-col items-center justify-center p-4 col-span-1 text-[#F5F5FA] border-2 border-[#F5F5FA] bg-[#1F1F21]'>
                    <h1 className='font-bold text-xl pb-4 text-pink-600'>Calendar: Schedule a Visit </h1>
                    <ul>
                        <li>A calendar view where the user can select which day they would like to come visit, </li>
                        <li>Select a time when they would like to come visit on a particular day</li>
                    </ul>
                </div>
                <div className='flex flex-col items-center justify-center p-4 col-span-1 text-[#F5F5FA] border-2 border-[#F5F5FA] bg-[#1F1F21]'>
                    <h1 className='font-bold text-xl pb-4 text-pink-600'>Rewards Program & Donate</h1>
                    <ul>
                        <li>Rewards points are accumulated and celebrated with milestones</li>
                        <li>Option to round up to donate</li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Features