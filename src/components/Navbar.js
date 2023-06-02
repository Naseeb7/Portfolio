import React from 'react'

const Navbar = () => {
    return (
        <div className='flex justify-between items-center p-2.5 bg-gray-700 sticky top-0 w-full z-10'>
            <div className='flex items-center gap-3'>
            <a href='#about' className='flex p-2 font-semibold text-xl text-blue-100 rounded-full hover:text-blue-300'>
                Pradosh Chand
            </a>
            <a href='#projects' className='hidden sm:flex p-2 text-sm hover:text-blue-300'>Past Works</a>
            <a href='#skills' className='hidden sm:flex p-2  text-sm hover:text-blue-300'>Skills</a>
            </div>
            <a href='#contact' className='flex items-center p-2 gap-1 hover:text-blue-300'>
            <div  className='flex text-sm bg-gray-800 rounded-full p-1 sm:bg-inherit'>Contact me</div>
            <i className="fa-solid fa-arrow-right-long fa-sm hidden sm:flex" />
            </a>

        </div>
    )
}

export default Navbar
