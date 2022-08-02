import { ArrowCircleLeftIcon, XIcon } from '@heroicons/react/outline'
import React from 'react'

export default function LeftSidebar({isOpen, setLeftSidebar}) {
  return (  
    <div className={`${!isOpen ? "-left-96" : "left-0"} rounded-r-2xl h-screen fixed ease-in-out duration-700 bg-white shadow-md shadow-slate-400`} >
      <div className='cursor-pointer px-2 py-2 mx-2 my-2 space-x-3 mb-12'>
        <ArrowCircleLeftIcon className='h-6 w-6 right-5 absolute ' onClick={()=> setLeftSidebar(false)}/>
      </div>
      <h1 className='mt-5 ml-4 text-sm'>OPTIONS :</h1>
      <ul className='mx-3 ml-4'>
        <li className='py-2 my-4 border-l border-gray-700 px-1 w-full bg-gray-200 pr-20 text-xs 
          active:scale-95 transition duration-300 ease-out cursor-pointer font-thin active:bg-gray-600 active:text-white'>ALL</li>
        <li className='py-2 my-4 border-l border-gray-700 px-1 w-full bg-gray-200 pr-20 text-xs 
          active:scale-95 transition duration-300 ease-out cursor-pointer font-thin active:bg-gray-600 active:text-white'>NEW ARRIVALS</li>
        <li className='py-2 my-4 border-l border-gray-700 px-1 w-full bg-gray-200 pr-20 text-xs 
          active:scale-95 transition duration-300 ease-out cursor-pointer font-thin active:bg-gray-600 active:text-white'>COLLECTIONS</li>
        <li className='py-2 my-4 border-l border-gray-700 px-1 w-full bg-gray-200 pr-20 text-xs 
          active:scale-95 transition duration-300 ease-out cursor-pointer font-thin active:bg-gray-600 active:text-white'>TRENDS</li>
      </ul>
    </div>
  )
}
