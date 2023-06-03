import React from 'react'
import { projects } from '../data'

const Projects = () => {
    return (
        <div id='projects' className='flex flex-col  p-1 justify-center items-center scroll-mt-10'>
            <div className='flex flex-col p-2 m-2 justify-center items-center'>
                <div className='flex gap-4'>
                <i className="fa-sharp fa-solid fa-code-pull-request text-4xl m-2 mb-0 text-blue-900" />
                <i className="fa-sharp fa-solid fa-code-merge text-4xl m-2 mb-0 text-blue-900" />
                <i className="fa-sharp fa-solid fa-code-fork text-4xl m-2 mb-0 text-blue-900" />
                </div>
                {/* <i className="fa-sharp fa-solid fa-code text-4xl m-2 mb-0 text-blue-900" /> */}
                <div className='text-blue-300 text-2xl p-2 m-2'>
                    Apps i've built
                </div>
                <div className='sm:w-2/3 text-sm text-center text-gray-500'>
                    Here are some of my most beloved artwork but not all though! This portfolio is part of this as well, and since i have been doing it for past few months there might not be much but thank you for checking them out!
                </div>
            </div>
            <div className='grid grid-cols-1 sm:w-2/3 sm:grid-cols-2 gap-6 m-2 p-4 justify-evenly items-center'>
                {projects.map((project) => {
                    return <a href={project.link} target='_blank' rel="noreferrer" key={project.title} className='flex relative'>
                        <img src={project.image} alt="project" className='rounded-xl' />
                        <div className='flex flex-col justify-center items-center absolute rounded-xl bg-black opacity-70 sm:opacity-0 sm:hover:opacity-80 w-full h-full duration-300'>
                            <div className='text-2xl font-semibold text-blue-500 p-2 m-1'>{project.title}</div>
                            <img src={project.techImage} alt="project" className='rounded-2xl w-1/3 bg-blue-50 p-2' />
                            <div className='text-xs p-2 hidden sm:flex sm:w-3/4 text-center '>{project.description}</div>
                        </div>
                    </a>
                })}
            </div>
        </div>
    )
}

export default Projects
