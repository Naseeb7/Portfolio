import React from 'react'
import { links } from 'data'

const Links = () => {

  return (
    <div id='links' className='flex gap-4 my-8 sm:m-8 p-2 justify-around items-center'>
      {links.map((link)=>{
        return <a key={link.title} href={link.link} target='_blank' rel="noreferrer" className="flex items-center sm:w-1/6 gap-1 rounded-xl text-blue-500 hover:text-blue-300 p-2 justify-center">
            <img src={link.image} alt="logo" className='flex w-1/4 sm:w-1/6'/>
            <div>{link.title}</div>
        </a>
      })}
    </div>
  )
}

export default Links
