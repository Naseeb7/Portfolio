import { skills } from 'data'
import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='flex flex-col p-2 m-4 justify-center items-center scroll-mt-12'>
        <div className='flex p-1 m-1 gap-2 justify-center items-center text-2xl text-blue-300'>
        <i className="fa-solid fa-microchip" />
          Skills & Technologies
        </div>
          <div className='flex flex-col mb-2 p-1 text-sm  sm:w-2/4 text-center text-gray-500'>
            <span className="text-blue-500">A list of the key skills and technologies i have acquired including some of the industry leading tech.</span> 
            Have a look at the projects listed above to know the practicality of the ones listed below.
          </div>
      <div className='grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2 w-5/6 sm:w-2/4 p-2 m-2'>
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
