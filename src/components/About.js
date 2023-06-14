import React from 'react'
import DeveloperAnimation from "assets/DeveloperAnimation.json"
import Lottie from 'lottie-react'

const About = () => {
  return (
    <div id='about' className='flex flex-col-reverse sm:flex-row p-2 m-1 justify-center sm:justify-evenly items-center scroll-mt-12'>
      <div className='flex-col w-full sm:w-2/4 gap-2 p-2 pt-0 sm:pt-2'>
        <div className='text-3xl text-blue-400 font-medium m-1 text-center sm:text-left'>
          Hi, I'm Pradosh Chand
        </div>
        <div className='text-lg font-normal m-1  text-center sm:text-left'>
          Frontend Developer
        </div>
        <div className='font-extralight text-sm text-center sm:text-left m-1 text-gray-400'>
          I love to code and have been trying to for quite some time now. I am an engineering drop-out and was pursuing my B.tech in CSE branch. I am a fast learner and can adapt quick. Creative and outside-the-box thinking has always been my forte. I can be excelling and reliable, given the chance. <span className="text-blue-500">Available for hiring</span>, please cruise through the page to know more. <span className="text-blue-500">Thank you!</span>
        </div>
      </div>
      <Lottie
          animationData={DeveloperAnimation}
          className='w-3/4 sm:w-1/4 p-1'
        />
    </div>
  )
}

export default About
