import React, { useEffect, useState } from 'react';
import sayuri from '../assets/images/sayuri.png'
const Persona = () => {
    return (
        <div>
            <div name="persona" className='w-full mx-auto px-8 sm:px-32 flex flex-col items-center justify-center bg-[#1F1F21]'>
                <h1 className='sm:text-4xl font-bold inline border-4 px-4 py-2 mt-8 tracking-wider bg-[#1F1F21] border-pink-600 text-[#F5F5FA]'>Getting to know a Host</h1>
                <h1 className='sm:text-2xl font-bold inline border-2 px-4 py-2 mt-8 tracking-wider bg-[#1F1F21] border-[#8892b0] text-[#F5F5FA]'>Sayuri Sakura</h1>
                <div className='max-w-[1200px] grid grid-cols-1 sm:grid-cols-3 gap-8 py-8'>

                    <div name='col1' className='order-2 sm:order-2 mx-auto'>
                        <div className='w-[300px] flex flex-col items-center justify-center border-2 border-[#F5F5FA] bg-[#9995C8] pb-8 mb-6'>
                            <h1 className='sm:text-2xl font-bold inline border-2 px-4 py-2 my-4 tracking-wider bg-[#1F1F21] border-pink-600 text-[#F5F5FA]'>Pain Points</h1>
                            <ul>
                                <li>Lonely </li>
                                <li>Has apprehensions about having foreign unverified guests in the house. </li>
                                <li>Can’t travel as much as she wants so wants to meet people from other countries. </li>
                                <li>Tokyo is an expensive place to live. </li>
                                <li>Worries about disrespectful guests</li>
                            </ul>
                        </div>
                        <div className='w-[300px] flex flex-col items-center justify-center border-2 border-[#F5F5FA] bg-[#9995C8] pb-8'>
                            <h1 className='max-w-[200px] sm:text-2xl inline border-2 px-4 py-2 my-4 tracking-wider bg-[#1F1F21] border-pink-600 text-[#F5F5FA]'>Bio </h1>
                            <p className='px-4'>Sayuri and her husband live in the Shibuya district of Tokyo. Her children have gone off to college. Since she has extra rooms, and misses having people in the house. She would like some extra money and teach people about Japanese culture.</p>
                        </div>
                    </div>

                    <div name='col2' className='order-1 sm:order-2 mx-auto'>
                        <img className='max-h-[368px] mx-auto rounded-full border-2 p-4' src={sayuri} alt='host' />
                        <ul className='w-[300px] bg-[#9995C8] py-4 mt-8 border-2 border-[#F5F5FA]'>
                            <li><span className='font-bold'>Age:</span> 49</li>
                            <li><span className='font-bold'>Job: </span>Florist</li>
                            <li><span className='font-bold'>Status: </span>Married</li>
                            <li><span className='font-bold'>Location:</span> Tokyo, Japan</li>
                        </ul>
                    </div>

                    <div name='col3' className='order-3'>
                        <div className='w-[300px] flex flex-col items-center justify-center border-2 border-[#F5F5FA] bg-[#9995C8] pb-8 mb-6'>
                            <h1 className='sm:text-2xl font-bold inline border-2 px-4 py-2 my-4 tracking-wider bg-[#1F1F21] border-pink-600 text-[#F5F5FA]'>Goals</h1>
                            <ul>
                                <li>I miss having people in the house and with my kids gone to college, I have empty rooms.</li>
                            </ul>
                        </div>
                        <div className='w-[300px] flex flex-col items-center justify-center border-2 border-[#F5F5FA] bg-[#9995C8] pb-8'>
                            <h1 className='max-w-[200px] sm:text-2xl inline border-2 px-4 py-2 my-4 tracking-wider bg-[#1F1F21] border-pink-600 text-[#F5F5FA]'>Personality & Known Habits</h1>
                            <ul className='py-2'>
                                <li>Knowledgeable about local flora </li>
                                <li>Conscious about the environment </li>
                                <li>Social and eager to meet and learn about others</li>
                                <li>Likes to cook and entertain</li>
                                <li>Interested in global customs</li>
                                <li>Interested in cultural immersion</li>
                            </ul>



                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default Persona