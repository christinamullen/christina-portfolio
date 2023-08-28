import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#9995C8] text-black'>
        <div className='flex flex-col justify-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl inline border-4 px-4 py-2 border-pink-600 bg-black text-white tracking-wider'>About</p>
                </div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-3xl font-bold'>
                    <p>I'm Christina :)</p>
                </div>
                <div className='font-bold text-gray-700'>
                <p>After a rewarding career in healthcare, I went back to school for degrees in both Computer Science and Digital Interface Design. My passion is building excellent software applications and experiences that improve people's lives!</p>
                </div>

            </div>
        </div>
    </div>
  )
}

export default About