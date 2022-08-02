import { ArrowCircleRightIcon, XIcon } from '@heroicons/react/outline'
import React from 'react'

export default function RightSidebar({isOpen, setRightSidebar}) {
  return (
    <div className={`${!isOpen ? "-right-96" : "right-0"} rounded-l-2xl h-screen fixed ease-in-out duration-700 bg-white shadow-md shadow-slate-400`} >
      <div className=' inline-flex cursor-pointer px-2 py-2 mx-2 my-2 space-x-3' 
        onClick={()=> setRightSidebar(false)}>
        <ArrowCircleRightIcon className='h-6 w-6 self-center text-gray-900'/>
        
      </div>
      <h1 className='mt-5 ml-4 text-sm'>CATEGORIES :</h1>
      <ul className='mx-3 ml-4 '>
        <li className='py-1 my-4 border-l border-gray-700 px-1 w-full pr-20 text-xs 
        active:scale-95 transition duration-300 ease-out cursor-pointer font-thin active:bg-gray-200'>CLOTHING</li>
        <li className='py-1 my-4 border-l border-gray-700 px-1 w-full pr-20 text-xs 
        active:scale-95 transition duration-300 ease-out cursor-pointer font-thin active:bg-gray-200'>SHOES</li>
        <li className='py-1 my-4 border-l border-gray-700 px-1 w-full pr-20 text-xs 
        active:scale-95 transition duration-300 ease-out cursor-pointer font-thin active:bg-gray-200'>HATS</li>
        <li className='py-1 my-4 border-l border-gray-700 px-1 w-full pr-20 text-xs 
        active:scale-95 transition duration-300 ease-out cursor-pointer font-thin active:bg-gray-200'>COATS</li>
        <li className='py-1 my-4 border-l border-gray-700 px-1 w-full pr-20 text-xs 
        active:scale-95 transition duration-300 ease-out cursor-pointer font-thin active:bg-gray-200'>ACCESSORIES</li>
      </ul>
    </div>
  )
}
