import React, { useEffect, useState } from 'react';

const PersonaGuest = () => {
    const [persona, setPerFields] = useState(null);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/personaGuest_JSON`)
            .then(response => response.json())
            .then(data => setPerFields(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);
    return (
        <div>
            {persona ? (
                <div name="personaguest" className='w-full mx-auto px-8 sm:px-32 flex flex-col items-center justify-center bg-[#1F1F21]'>
                    <h1 className='sm:text-4xl font-bold inline border-4 px-4 py-2 mt-8 tracking-wider bg-[#1F1F21] border-pink-600 text-[#F5F5FA]'>{persona.persona_header2}</h1>
                    <h1 className='sm:text-2xl font-bold inline border-2 px-4 py-2 mt-8 tracking-wider bg-[#1F1F21] border-[#8892b0] text-[#F5F5FA]'>{persona.persona_name2}</h1>
                    <div className='max-w-[1200px] grid grid-cols-1 sm:grid-cols-3 gap-8 py-8'>

                        <div name='col1' className='order-2 sm:order-2 mx-auto'>
                            <div className='w-[300px] flex flex-col items-center justify-center border-2 border-[#F5F5FA] bg-[#9995C8] pb-8 mb-6'>
                                <h1 className='sm:text-2xl font-bold inline border-2 px-4 py-2 my-4 tracking-wider bg-[#1F1F21] border-pink-600 text-[#F5F5FA]'>Pain Points</h1>
                                <ul>
                                    <li>Lonely</li>
                                    <li>Has apprehensions about having foreign unverified guests in the house</li>
                                    <li>Can’t travel as much as she wants so wants to meet people from other countries</li>
                                    <li>Tokyo is expensive</li>
                                    <li>Worries about disrespectful guests</li>
                                </ul>
                            </div>
                            <div className='w-[300px] flex flex-col items-center justify-center border-2 border-[#F5F5FA] bg-[#9995C8] pb-8'>
                                <h1 className='max-w-[200px] sm:text-2xl inline border-2 px-4 py-2 my-4 tracking-wider bg-[#1F1F21] border-pink-600 text-[#F5F5FA]'>Personality & Known Habits</h1>
                                <ul className='py-2'>
                                    <li>Knowledgeable about local flora </li>
                                    <li>Compassionate</li>
                                    <li>Social and eager to meet and learn about others</li>
                                    <li>Likes to cook and entertain</li>
                                    <li>Appreciates the arts</li>
                                    <li>Interested in global customs</li>
                                    <li>Interested in cultural immersion</li>
                                </ul>
                            </div>
                        </div>

                        <div name='col2' className='order-1 sm:order-2 mx-auto'>
                            <img className='max-h-[368px] mx-auto rounded-full border-2 p-4' src={persona.persona_img2} alt='host' />
                            <ul className='w-[300px] bg-[#9995C8] py-4 mt-8 border-2 border-[#F5F5FA]'>
                                <li><span className='font-bold'>Age:</span> 33</li>
                                <li><span className='font-bold'>Education:</span> College Graduate</li>
                                <li><span className='font-bold'>Occupation:</span> Project Manager</li>
                                <li><span className='font-bold'>Location:</span> San Jose, CA</li>
                                <li><span className='font-bold'>Neighborhood:</span> Urban Tech</li>
                            </ul>
                        </div>

                        <div name='col3' className='order-3'>
                            <div className='w-[300px] flex flex-col items-center justify-center border-2 border-[#F5F5FA] bg-[#9995C8] pb-8 mb-6'>
                                <h1 className='sm:text-2xl font-bold inline border-2 px-4 py-2 my-4 tracking-wider bg-[#1F1F21] border-pink-600 text-[#F5F5FA]'>Goals</h1>
                                <ul>
                                    <li>Order and pay for coffee ahead of time</li>
                                    <li>Pickup morning coffee</li>
                                    <li>Donate to good causes</li>
                                    <li>Spend time with animals</li>
                                    <li>Support small businesses</li>
                                </ul>
                            </div>
                            <div className='w-[300px] flex flex-col items-center justify-center border-2 border-[#F5F5FA] bg-[#9995C8] pb-8'>
                                <h1 className='max-w-[200px] sm:text-2xl inline border-2 px-4 py-2 my-4 tracking-wider bg-[#1F1F21] border-pink-600 text-[#F5F5FA]'>Bio </h1>
                                <p className='px-4'>{persona.persona_bio2}</p>
                            </div>

                        </div>

                    </div>

                </div >
            ) : (<p>Loading persona...</p>)
            }
        </div >
    )
}

export default PersonaGuest