import React from 'react'
import HTML from '../assets/images/html.png'
import CSS from '../assets/images/css.png'
import JS from '../assets/images/js.png'
import Ricon from '../assets/images/react.png'
import JAVA from '../assets/images/java.png'
import Python from '../assets/images/python.png'
import Github from '../assets/images/github.png'
import Figma from '../assets/images/figmaC.png'
import cplus from '../assets/images/c++.png'
import SQL from '../assets/images/sql.png'
import FF from '../assets/images/ff.png'
import TW from '../assets/images/tw.png'

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#9995C8] section-bg fill bg-fill bg-loaded'>
      <div className='flex flex-col justify-center items-center w-full h-full'>

          <p className='text-4xl inline border-4 px-4 py-2 border-pink-600 bg-black text-white tracking-wider'>
            Experience
          </p>
          <p className='sm:text-right pb-8 pt-4'>
            These are the technologies I've worked with
          </p>
        
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          <div>
            <img className='w-20 mx-auto' src={HTML} alt='HTML icon' />
            <p>HTML</p>
          </div>
          <div>
            <img className='w-20 mx-auto' src={CSS} alt='HTML icon' />
            <p>CSS</p>
          </div>
          <div>
            <img className='w-20 mx-auto' src={JS} alt='HTML icon' />
            <p>JavaScript</p>
          </div>
          <div>
            <img className='w-20 mx-auto' src={Ricon} alt='HTML icon' />
            <p>React</p>
          </div>
          <div>
            <img className='w-20 mx-auto' src={Figma} alt='HTML icon' />
            <p>Figma</p>
          </div>
          <div>
            <img className='w-20 mx-auto' src={JAVA} alt='HTML icon' />
            <p>Java</p>
          </div>
          <div>
            <img className='w-20 mx-auto' src={Python} alt='HTML icon' />
            <p>Python</p>
          </div>
          <div>
            <img className='w-20 mx-auto' src={Github} alt='HTML icon' />
            <p>Github</p>
          </div>
          <div>
            <img className='w-20 mx-auto' src={cplus} alt='HTML icon' />
            <p>C++</p>
          </div>
          <div>
            <img className='w-20 mx-auto' src={TW} alt='HTML icon' />
            <p>Tailwind CSS</p>
          </div>
          <div>
            <img className='w-20 mx-auto' src={FF} alt='HTML icon' />
            <p>Flutter Flow</p>
          </div>

          <div>
            <img className='w-20 mx-auto' src={SQL} alt='HTML icon' />
            <p>SQL</p>
          </div>
        </div>
        
        </div>
    </div>
  )
}

export default Skills