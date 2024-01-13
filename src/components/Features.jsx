import React from 'react'
import uiMenu from '../assets/images/hcUImenu.png'
import uiGallery from '../assets/images/hcUIgallery.png'
import uiAccount from '../assets/images/hcUIaccount.png'
import uiSchedule from '../assets/images/hcUIschedule.png'
import uiRewards from '../assets/images/hcUIrewards.png'

const Features = () => {
    return (
        <div name='features' className='flex flex-col justify-center px-8 bg-[#faf9f9]'>
            <div className='w-full mx-auto px-32 flex flex-col items-center justify-center'>
                <h1 className='sm:text-4xl font-bold inline border-4 px-4 py-2 my-8 tracking-wider bg-[#1F1F21] text-[#F5F5FA]'>Features</h1>
            </div>
            <div className='w-full mx-auto p-8 flex flex-col items-center justify-center'>

                <div className='max-w-[1200px] w-full grid grid-cols-1 md:grid-cols-2 gap-4 py-8'>
                    <div className='flex flex-col items-center justify-center'>
                        <img className='max-h-[400px] mx-auto' src={uiMenu} alt='main menu prototype frame' />
                    </div>
                    <div>
                        <h1 className='text-3xl font-bold inline py-2 text-[#222121]'>Main Menu</h1>
                        <h2 className='text-xl font-bold pt-4 text-[#222121]'>Food and drink categories</h2>
                        <h2 className='text-xl font-bold text-[#222121]'>Rewards progress link</h2>
                        <h2 className='text-xl font-bold text-[#222121]'>Reorder feature front and center for easy access</h2>
                    </div>
                    <div className='pt-16 sm:pl-32'>
                        <h1 className='text-3xl font-bold inline py-2 text-[#222121]'>Rewards</h1>
                        <h2 className='text-xl font-bold pt-4 text-[#222121]'>Rewards points are accumulated</h2>
                        <h2 className='text-xl font-bold text-[#222121]'>Celebrated with milestones like free coffee</h2>
                        <h2 className='text-xl font-bold text-[#222121]'>Donation options are also located here</h2>
                        <h2 className='text-xl font-bold text-[#222121]'>The user can round up, donating to the cafe to reach the next tier</h2>
                        <h2 className='text-xl font-bold text-[#222121]'>Booked visits to the cafe stored here</h2>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <img className='max-h-[400px] mx-auto' src={uiRewards} alt='Protoype of rewards frame' />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <img className='max-h-[400px] mx-auto' src={uiAccount} alt='protype of account frame' />
                    </div>
                    <div className='pt-16'>
                        <h1 className='text-3xl font-bold inline py-2 text-[#222121]'>Account</h1>
                        <h2 className='text-xl font-bold pt-4 text-[#222121]'>User/Account info</h2>
                        <h2 className='text-xl font-bold text-[#222121]'>Rewards Program status</h2>
                        <h2 className='text-xl font-bold text-[#222121]'>Add and Update payment method</h2>
                        <h2 className='text-xl font-bold text-[#222121]'>Favorited cats stored here</h2>
                        <h2 className='text-xl font-bold text-[#222121]'>Booked visits to the cafe stored here</h2>
                    </div>
                    <div className='pt-16 sm:pl-32'>
                        <h1 className='text-3xl font-bold inline py-2 text-[#222121]'>Book a visit to the Cafe</h1>
                        <h2 className='text-xl font-bold pt-4 text-[#222121]'>Calendar for selecting a day and time</h2>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <img className='max-h-[400px] mx-auto' src={uiSchedule} alt='Prototype of scheduling frame' />
                    </div>

                    <div className='flex flex-col items-center justify-center'>
                        <img className='max-h-[400px] mx-auto' src={uiGallery} alt='gallery prototype frame' />
                    </div>
                    <div className='pt-16'>
                        <h1 className='text-3xl font-bold inline py-2 text-[#222121]'>Gallery of Resident Cats</h1>
                        <h2 className='text-xl font-bold pt-4 text-[#222121]'>Scrollable gallery where cats can be favorited</h2>
                        <h2 className='text-xl font-bold text-[#222121]'>Categories of adoptable residents</h2>
                        <h2 className='text-xl font-bold text-[#222121]'>Profile of each resident with bio</h2>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Features