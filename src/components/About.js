import React from 'react'
import DeveloperAnimation from "assets/DeveloperAnimation.json"
import Lottie from 'lottie-react'

const About = () => {
  return (
    <div id='about' className='flex flex-col-reverse sm:flex-row p-2 m-1 justify-center sm:justify-around items-center scroll-mt-12'>
      <div className='flex-col w-full sm:w-2/3 gap-2 p-2 pt-0 sm:pt-2'>
        <div className='text-2xl text-blue-400 font-medium m-1 text-center sm:text-left'>
          Hi, I'm Pradosh chand
        </div>
        <div className='text-xl font-normal m-1  text-center sm:text-left'>
          and i love to develop.
        </div>
        <div className='font-extralight text-center sm:text-left m-1 text-gray-400'>
          I am an engineering drop-out, i was pursuing my engineering in computer science branch.
          I have always been amazed by technology and had a HOW in my mind, and then i printed my first <span className='text-blue-500'>"Hello World!"</span> and i knew what i love. I may have left engineering but my passion and love for coding and developing has not faltered one bit. So, i have been grinding to be better at something i love rather than something that i have to. I might not have a degree but i can show some promising results if given a chance.
        </div>
      </div>
      {/* <img className='flex w-full sm:w-1/3 p-1 pb-0 sm:pb-1' src={Developer} alt='Developer' /> */}
      <Lottie
          animationData={DeveloperAnimation}
          className='w-2/4 sm:w-1/4 p-1'
        />
    </div>
  )
}

export default About
