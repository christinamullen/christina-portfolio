import React from 'react'

const Takeaways = () => {
    return (
        <div name='takeaways' className='flex flex-col justify-center bg-[#9995C8]'>
            <div className='w-full mx-auto px-32 pt-8 flex flex-col items-center justify-center bg-[#9995C8]'>
                <h1 className='sm:text-4xl font-bold inline border-4 px-4 py-2 my-8 tracking-wider bg-[#1F1F21] border-pink-600 text-[#F5F5FA]'>Takeaways</h1>
                <p className='max-w-[640px] pb-16'>
                    <span className='font-bold'>If I had to do this project all over again</span>, I would spend more time fine tuning the design system. Since this was a solo project focusing on UI, the time to user test with Maze was limited. When deciding between feature details, having user testing data would eliminate any guesswork.
                </p>
            </div>
        </div>
    )
}

export default Takeaways