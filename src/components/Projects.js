import React from 'react'
import { projects } from '../data'

const Projects = () => {
    return (
        <div id='projects' className='flex flex-col  p-1 justify-center items-center'>
            <div className='flex flex-col p-2 m-2 justify-center items-center'>
                <i className="fa-classic fa-solid fa-code text-4xl m-2 mb-0 text-blue-900" />
                <div className='text-blue-300 text-2xl p-2 m-2'>
                    Apps i've built
                </div>
                <div className='w-2/3 text-center text-gray-500'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe odio qui deleniti tenetur quidem mollitia, in distinctio esse harum fugit sapiente dolorem inventore minima itaque eos temporibus? Quibusdam, est animi!
                </div>
            </div>
            <div className='grid grid-cols-1 sm:w-2/3 sm:grid-cols-2 gap-4 m-2 p-4 justify-evenly items-center'>
                {projects.map((project) => {
                    return <a href={project.link} target='_blank' rel="noreferrer" className='flex relative'>
                        <img src={project.image} alt="project" className='rounded-xl' />
                        <div className='flex flex-col justify-center items-center absolute rounded-xl bg-black opacity-0 hover:opacity-70 w-full h-full'>
                            <div>{project.title}</div>
                            <div>{project.subtitle}</div>
                            <div>{project.description}</div>
                        </div>
                    </a>
                })}
            </div>
        </div>
    )
}

export default Projects
