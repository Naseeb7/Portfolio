import React from 'react'
import Developer from "assets/DeveloperTransparent.png"

const About = () => {
  return (
    <div id='about' className='flex flex-col-reverse sm:flex-row p-2 m-1 justify-center sm:justify-between items-center '>
      <div className='flex-col w-fullsm:w-2/3 gap-2 p-2 pt-0 sm:pt-2'>
        <div className='text-2xl text-blue-400 font-medium m-1 text-center sm:text-left'>
          Hi, I'm Pradosh chand
        </div>
        <div className='text-xl font-normal m-1  text-center sm:text-left'>
          and i love to build.
        </div>
        <div className='font-extralight break-all m-1 text-gray-400'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam minima impedit fugiat mollitia. Officia sapiente, atque voluptatibus non facere debitis dolorem ducimus architecto obcaecati exercitationem tenetur repudiandae laboriosam sed a?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt sed sit aut pariatur optio, natus rerum culpa, odit neque magni accusantium repellendus debitis necessitatibus! Voluptatum minus unde culpa? Magni,
        </div>
        <div className='flex w-full md:w-1/3 justify-around p-2 m-1'>
          <a href='#contact' className='bg-gray-900 text-blue-400 p-2 rounded-xl hover:text-blue-200 hover:bg-gray-700'>Contact me</a>
          <a href='#projects' className='bg-gray-900 text-blue-400 p-2 rounded-xl hover:text-blue-200 hover:bg-gray-700'>See my past works</a>
        </div>
      </div>
      <img className='flex w-full sm:w-1/3 p-1 pb-0 sm:pb-1' src={Developer} alt='Developer' />
    </div>
  )
}

export default About
