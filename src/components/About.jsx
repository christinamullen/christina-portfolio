import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#9995C8] text-black'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-2 border-pink-600'>About</p>
                </div>

                <div>
                </div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-3xl font-bold'>
                    <p>Nice to meet you!</p>
                    <p>Check out my Design Case Studies and Coding Projects </p>
                </div>
                <div className='font-bold text-gray-700'>
                <p>After going back to school for Computer Science and Digital Interface Design, I'm on a mission to make digital experiences seamless and intuitive so that users can live better.</p>
                </div>

            </div>
        </div>
    </div>
  )
}

export default About