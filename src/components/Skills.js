import { skills } from 'data'
import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='flex flex-col p-2 m-4 justify-center items-center scroll-mt-12'>
        <div className='flex p-1 m-1 gap-2 justify-center items-center text-2xl text-blue-300'>
        <i className="fa-solid fa-microchip" />
          Skills & Technologies
        </div>
          <div className='mb-2 p-1 text-sm  sm:w-2/4 text-center text-gray-500'>
            Some of the key skills and technologies i have learned including some of the industry leading tech, have a look at the projects to know the practicality of the ones listed here.
          </div>
      <div className='grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2 w-3/4 sm:w-2/4 p-2 m-2'>
      {skills.map((skill)=>{
        return <div key={skill} className='flex items-center gap-2 p-2 rounded-md bg-blue-900'>
          <i className="fa-solid fa-circle-check text-green-500" />
          {skill}
        </div>
      })}
      </div>
    </div>
  )
}

export default Skills
