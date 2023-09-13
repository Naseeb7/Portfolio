import React from 'react'
import { FileText, Github, Linkedin, Mail } from 'lucide-react'
import Resume from "assets/Resume_Pradosh_Chand.pdf"

const Links = () => {

  return (
    <div id='links' className='grid grid-cols-2 sm:flex gap-4 my-8 sm:m-8 p-2 text-blue-500 justify-around items-center'>
      <a href="https://github.com/Naseeb7" target='_blank' rel="noreferrer" className="flex items-center sm:w-1/6 gap-1 rounded-xl p-2 justify-center group/github">
        <Github className='group-hover/github:-translate-y-1 group-hover/github:drop-shadow-custom duration-200' />
        </a>
      <a href="https://www.linkedin.com/in/pradosh-chand-4b209027a" target='_blank' rel="noreferrer" className="flex items-center sm:w-1/6 gap-1 rounded-xl p-2 justify-center group/linkedin">
        <Linkedin className='group-hover/linkedin:-translate-y-1 group-hover/linkedin:drop-shadow-custom duration-200' />
        </a>
      <a href="https://mail.google.com/mail/?view=cm&fs=1&to=chandpradosh7@gmail.com" target='_blank' rel="noreferrer" className="flex items-center sm:w-1/6 gap-1 rounded-xl p-2 justify-center group/mail">
        <Mail className='group-hover/mail:-translate-y-1 group-hover/mail:drop-shadow-custom duration-200' />
        </a>
      <a href={Resume} target='_blank' rel="noreferrer" className="flex items-center sm:w-1/6 gap-1 rounded-xl p-2 justify-center group/resume">
        <FileText className='group-hover/resume:-translate-y-1 group-hover/resume:drop-shadow-custom duration-200' />
        </a>
    </div>
  )
}

export default Links
