import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div className='bg-black'> 
    <div className='text-green-500 flex '>
   
    <h1 className='text-xl ml-2 m-auto'>Navbar </h1>

      <ul className=' flex-grow flex gap-12 mr-4   font-semibold text-2xl justify-center'>
      

         <Link className=' hover:text-white text-' href="">Home</Link>
         <Link className='hover:text-white' href="">About</Link>
         <Link className='hover:text-white' href="">Contact</Link>
         <Link className='hover:text-white ' href="">Courses</Link>
      
      </ul> 
      
      </div>
  </div>
   
  )
}
