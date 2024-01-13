import React, { useEffect, useState } from 'react';
import maze from '../assets/images/userTesting.png'

const UserTesting = () => {

    return (
        <div name="imgSlideBlack" className='w-full mx-auto py-16 flex flex-col items-center justify-center bg-[#1F1F21]'>

            <div className='w-full mx-auto flex flex-col items-center justify-center'>
                <h1 className='sm:text-4xl font-bold inline border-4 px-4 py-2 mt-8 tracking-wider bg-[#1F1F21] border-pink-600 text-[#F5F5FA]'>Real User Testing</h1>
                <img className='max-h-[640px] mx-auto p-8' src={maze} alt='app architecture' />
            </div>
        </div>
    )
}

export default UserTesting