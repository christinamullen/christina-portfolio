import React from 'react'
import laila from '../assets/images/Laila.png'

const PersonaL = () => {
    return (
        <div name="persona" className='w-full mx-auto px-32 flex flex-col items-center justify-center bg-[#1F1F21]'>
            <h1 className='sm:text-4xl font-bold inline border-4 px-4 py-2 mt-8 tracking-wider bg-[#1F1F21] border-pink-600 text-[#F5F5FA]'>Persona</h1>
            <h1 className='sm:text-2xl font-bold inline border-2 px-4 py-2 mt-8 tracking-wider bg-[#1F1F21] border-[#8892b0] text-[#F5F5FA]'>Laila</h1>

            <div className='max-w-[1200px] grid grid-cols-1 sm:grid-cols-3 gap-8 py-8'>

                <div>
                    <div className='w-[358px] flex flex-col items-center justify-center bg-[#9995C8] pb-8 mb-6'>
                        <h1 className='sm:text-2xl font-bold inline border-2 px-4 py-2 my-4 tracking-wider bg-[#1F1F21] border-pink-600 text-[#F5F5FA]'>Pain Points</h1>
                        <ul>
                            <li>Always on the go</li>
                            <li>Needs her coffee, but running short on time</li>
                            <li>Wants to give back, but cant find time</li>
                            <li>Would prefer to support local non-profit, than a large chain</li>
                        </ul>
                    </div>
                    <div className='w-[358px] flex flex-col items-center justify-center bg-[#9995C8] pb-8'>
                        <h1 className='max-w-[200px] sm:text-2xl inline border-2 px-4 py-2 my-4 tracking-wider bg-[#1F1F21] border-pink-600 text-[#F5F5FA]'>Personality & Known Habits</h1>
                        <ul>
                            <li>Independent</li>
                            <li>Compassionate</li>
                            <li>Animal Lover</li>
                            <li>Values local /sustainable businesses</li>
                            <li>Appreciates the arts</li>
                            <li>Values Community</li>
                        </ul>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default PersonaL