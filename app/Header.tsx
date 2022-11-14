import React from 'react'


const Header = () => {
  return (
    <div className='px-28 py-8 flex bg-transparent justify-between transition-all ease-in-out delay-150'> 
        <p className='text-xl'>Gourav kumar</p>
        <ul className='flex'>
            <li className='px-4 cursor-pointer transition-all ease-in-out delay-250 hover:text-white'>About</li>
            <li className='px-4 cursor-pointer transition-all ease-in-out delay-250 hover:text-white'>Work</li>
            <li className='px-4 cursor-pointer transition-all ease-in-out delay-250 hover:text-white'>Projects</li>
            <li className='px-4 cursor-pointer transition-all ease-in-out delay-250 hover:text-white'>Contact</li>
        </ul>
    </div>
  )
}

export default Header