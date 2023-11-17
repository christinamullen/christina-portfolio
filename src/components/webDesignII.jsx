import React from 'react'

const webDesignII = () => {
  return (
    <div name='work' className='w-full mx-auto flex flex-col justify-center h-auto bg-[#1F1F21] text-gray-300 py-24'>
       <div className='flex flex-col text-4xl font-bold items-center w-full h-full text-white'>
          <div className='my-28'>
            <h1 className='text-4xl font-bold inline border-4 px-4 py-2 m-8 border-pink-600'>Coursework for Web Design II </h1>
          </div>
          <div className='max-w-[1000px] w-full grid grid-cols-1 md:grid-cols-2 gap-8 py-8'>
            <a href="https://christinamullen.github.io/Bubbacan-Landscaping-Website/" target="_blank" rel="noopener noreferrer" className="block">
              <div className='relative h-[150px] mx-8 col-span-1 text-center rounded-2xl py-8 bg-bubacan-image bg-cover bg-no-repeat text-white transform hover:scale-105 transition-transform duration-200 hover:bg-black hover:bg-opacity-80 group'>
              <div className="absolute inset-0 bg-black rounded-2xl opacity-0 group-hover:opacity-80 transition-opacity duration-200"></div>
                <div className="absolute bottom-[-50%] left-0 right-0 pb-2 opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:bottom-0">
                <p>Copy a Webpage</p>
                <p>Lab 0</p>
              </div>
              </div>
            </a>
            <a href="https://christinamullen.github.io/Flexbox-and-Grid/" target="_blank" rel="noopener noreferrer" className="block">
              <div className='relative h-[150px] mx-8 col-span-1 text-center rounded-2xl py-8 bg-flexgrid-image bg-cover bg-no-repeat text-white transform hover:scale-105 transition-transform duration-200 hover:bg-black hover:bg-opacity-80 group'>
              <div className="absolute inset-0 bg-black rounded-2xl opacity-0 group-hover:opacity-80 transition-opacity duration-200"></div>
                <div className="absolute bottom-[-50%] left-0 right-0 pb-2 opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:bottom-0">
                <p>Flexbox &amp; Grid</p>
                <p>Lab 1</p>
              </div>
              </div>
            </a>
            <p>Project 1</p>
            <p>Lab 2</p>
            
            <p>Lab 3</p>
            <p>Project 2</p>
            <p>Lab 4</p>
            <p>Lab 5</p>
            
            <p>Project 3</p>
            <p>Lab 6 </p>
            <p>Lab 7</p>
            <p>Project 4</p>
            <p>content for webDesignII</p>

            <p>content for webDesignII</p>
          </div>
        </div>
    </div>
  )
}

export default webDesignII