import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#9995C8] flex justify-center items-center p-4'>
      <form method='POST' action='https://getform.io/f/3265a8e9-6c98-404a-8ee9-327078c28ecc' className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
          <p className='text-4xl inline border-4 px-4 py-2 border-pink-600 bg-black text-white tracking-wider'>Contact</p>
          <p className='pt-8'>Looking to get in touch? Let's collab!</p>
        </div>
        <input className='p-2 bg-white rounded-sm' type='text' placeholder='Name' name='name' />
        <input className='my-4 p-2 bg-white rounded-sm' type='email' placeholder='Email' name='email' />
        <textarea className='p-2 bg-white rounded-sm' cols='30' rows='10' name='message' placeholder='Message'></textarea>
        <button className='max-w-[200px] text-white bg-black px-6 py-3 my-4 flex items-center hover:bg-pink-600'> Let's Connect
          <span className='hover:pl-4 duration-300'>
            <HiArrowNarrowRight className='ml-3' />
          </span>
        </button>

      </form>
    </div>
  )
}

export default Contact