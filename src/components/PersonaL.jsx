import React from 'react'
import laila from '../assets/images/Laila.png'

const PersonaL = () => {
    return (
        <div>
            <div name="persona" className='w-full mx-auto px-8 sm:px-32 flex flex-col items-center justify-center bg-[#1F1F21]'>
                <h1 className='sm:text-4xl font-bold inline px-4 py-2 mt-8 tracking-wider bg-[#1F1F21] text-[#F5F5FA]'>When We Think About Our Users</h1>
                <h1 className='sm:text-2xl font-bold inline px-4 py-2  tracking-wider bg-[#1F1F21] text-[#F5F5FA]'>We think about</h1>
                <h1 className='sm:text-4xl font-bold inline border-4 px-4 py-2 mt-4 tracking-wider bg-[#1F1F21] text-[#F3c522]'>Laila</h1>

                <div className='max-w-[1200px] grid grid-cols-1 sm:grid-cols-3 gap-8 py-8'>

                    <div name='col1' className='order-2 sm:order-2 mx-auto'>
                        <div className='w-[300px] flex flex-col items-center justify-center border-2 border-[#F5F5FA] bg-[#1F1F21] pb-8 mb-6'>
                            <h1 className='sm:text-2xl inline border-2 px-4 py-2 my-4 tracking-wider bg-[#1F1F21] text-[#F5F5FA] border-[#F3c522]'>Pain Points</h1>
                            <ul className='text-[#F5F5FA]'>
                                <li>Always on the go</li>
                                <li>Needs her coffee, but running short on time</li>
                                <li>Wants to give back, but cant find time</li>
                                <li>Would prefer to support local non-profit, than a large chain</li>
                            </ul>
                        </div>
                        <div className='w-[300px] flex flex-col items-center justify-center border-2 border-[#F5F5FA] bg-[#F5F5FA] pb-8'>
                            <h1 className='max-w-[200px] sm:text-2xl inline border-2 px-4 py-2 my-4 tracking-wider bg-[#1F1F21] text-[#F5F5FA] border-[#F3c522]'>Personality & Known Habits</h1>
                            <ul className='py-2 bg-[#F5F5FA]'>
                                <li>Independent</li>
                                <li>Compassionate</li>
                                <li>Animal Lover</li>
                                <li>Values local /sustainable businesses</li>
                                <li>Appreciates the arts</li>
                                <li>Values Community</li>
                                <li>Cares about Environment</li>
                            </ul>
                        </div>
                    </div>

                    <div name='col2' className='order-1 sm:order-2 mx-auto'>
                        <img className='max-h-[368px] mx-auto rounded-full border-2 p-4' src={laila} alt='Laila' />
                        <ul className='w-[300px] bg-[#1F1F21] py-4 mt-8 border-2 border-[#F5F5FA]'>
                            <li className='text-[#F5F5FA] tracking-wider'><span className='font-bold text-[#F3c522]'>Age:</span> 33</li>
                            <li className='text-[#F5F5FA] tracking-wider'><span className='font-bold text-[#F3c522]'>Education:</span> College Graduate</li>
                            <li className='text-[#F5F5FA] tracking-wider'><span className='font-bold text-[#F3c522]'>Occupation:</span> Project Manager</li>
                            <li className='text-[#F5F5FA] tracking-wider'><span className='font-bold text-[#F3c522]'>Location:</span> San Jose, CA</li>
                            <li className='text-[#F5F5FA] tracking-wider'><span className='font-bold text-[#F3c522]'>Neighborhood:</span> Urban Tech</li>
                        </ul>
                    </div>

                    <div name='col3' className='order-3'>
                        <div className='w-[300px] flex flex-col items-center justify-center border-2 border-[#F5F5FA] bg-[#F5F5FA] pb-8 mb-6'>
                            <h1 className='sm:text-2xl font-bold inline border-2 px-4 py-2 my-4 tracking-wider bg-[#1F1F21] text-[#F5F5FA] border-[#F3c522]'>Goals</h1>
                            <ul>
                                <li>Order and pay for coffee ahead of time</li>
                                <li>Pickup morning coffee</li>
                                <li>Donate to good causes</li>
                                <li>Spend time with animals</li>
                                <li>Support small businesses</li>
                            </ul>
                        </div>
                        <div className='w-[300px] flex flex-col items-center justify-center border-2 border-[#F5F5FA] bg-[#1F1F21] pb-8'>
                            <h1 className='max-w-[200px] sm:text-2xl inline border-2 px-4 py-2 my-4 tracking-wider bg-[#1F1F21] text-[#F5F5FA] border-[#F3c522]'>Bio </h1>
                            <p className='px-4 text-[#F5F5FA]'>Laila is a busy professional. She needs her coffee but is also conscious about where her money goes and would prefer to support small businesses or preferably a non-profit. Laila has a busy job and wishes her apartment would allow her to have a pet. She has heard about cat cafes and thinks this would be a good way to get her cat fix. </p>
                        </div>
                    </div>
                </div>

            </div >
        </div >
    )
}

export default PersonaL