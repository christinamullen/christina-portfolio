import React, { useEffect, useState } from 'react';
import caocao from '../assets/images/caocaoPersona.jpg'

const PersonaGuest = () => {

    return (
        <div>
            <div name="personaguest" className='w-full mx-auto px-8 sm:px-32 flex flex-col items-center justify-center bg-[#1F1F21]'>
                <h1 className='sm:text-4xl font-bold inline border-4 px-4 py-2 mt-8 tracking-wider bg-[#1F1F21] border-pink-600 text-[#F5F5FA]'>Getting to know a Guest</h1>
                <h1 className='sm:text-2xl font-bold inline border-2 px-4 py-2 mt-8 tracking-wider bg-[#1F1F21] border-[#8892b0] text-[#F5F5FA]'>Cao Cao Ng</h1>
                <div className='max-w-[1200px] grid grid-cols-1 sm:grid-cols-3 gap-8 py-8'>

                    <div name='col1' className='order-2 sm:order-2 mx-auto'>
                        <div className='w-[300px] flex flex-col items-center justify-center border-2 border-[#F5F5FA] bg-[#9995C8] pb-8 mb-6'>
                            <h1 className='sm:text-2xl font-bold inline border-2 px-4 py-2 my-4 tracking-wider bg-[#1F1F21] border-pink-600 text-[#F5F5FA]'>Pain Points</h1>
                            <ul>
                                <li>Wants to travel to an third world country, and fear for his personal safety. Only knows two languages: Cantonese and English. Has never travel to an third world country before. Only traveling for educational and humanitarian  reason.</li>
                            </ul>
                        </div>
                        <div className='w-[300px] flex flex-col items-center justify-center border-2 border-[#F5F5FA] bg-[#9995C8] pb-8'>
                            <h1 className='max-w-[200px] sm:text-2xl inline border-2 px-4 py-2 my-4 tracking-wider bg-[#1F1F21] border-pink-600 text-[#F5F5FA]'>Bio </h1>
                            <p className='px-4'>Cao Cao is a young Medical Student from Hong Kong. He is very passionate about his profession and wants to save the world. He hopes that through his travles, he can help people and learn as much as he can in his field.</p>
                        </div>

                    </div>

                    <div name='col2' className='order-1 sm:order-2 mx-auto'>
                        <img className='max-h-[368px] mx-auto rounded-full border-2 p-4' src={caocao} alt='guest' />
                        <ul className='w-[300px] bg-[#9995C8] py-4 mt-8 border-2 border-[#F5F5FA]'>
                            <li>Age: 24</li>
                            <li>Occupation: Medical Student</li>
                            <li>Status: Single</li>
                            <li>Hometown: Hong Kong</li>
                        </ul>
                    </div>

                    <div name='col3' className='order-3'>
                        <div className='w-[300px] flex flex-col items-center justify-center border-2 border-[#F5F5FA] bg-[#9995C8] pb-8 mb-6'>
                            <h1 className='sm:text-2xl font-bold inline border-2 px-4 py-2 my-4 tracking-wider bg-[#1F1F21] border-pink-600 text-[#F5F5FA]'>Goals</h1>
                            <p className='px-4'>I want to bring my medical knowledge to help those in need. I want to experience new cultures and broaden my worldview.</p>
                        </div>
                        <div className='w-[300px] flex flex-col items-center justify-center border-2 border-[#F5F5FA] bg-[#9995C8] pb-8'>
                            <h1 className='max-w-[200px] sm:text-2xl inline border-2 px-4 py-2 my-4 tracking-wider bg-[#1F1F21] border-pink-600 text-[#F5F5FA]'>Personality & Known Habits</h1>
                            <ul className='py-2'>
                                <li>Wants to travel to gain experience working with diverse populations.</li>
                                <li>Wants help those who cant get easy access to medical services.</li>
                                <li>To become more culturally sensitive to better serve greater population. </li>
                                <li>Gain experience and putting his skill into practice.</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div >
        </div >
    )
}

export default PersonaGuest