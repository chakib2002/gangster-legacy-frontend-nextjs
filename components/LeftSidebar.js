import { XIcon } from '@heroicons/react/outline'
import React from 'react'

export default function LeftSidebar({isOpen, setLeftSidebar}) {
  return (  
    <div className={`${!isOpen ? "-left-96" : "left-0"} h-screen fixed ease-in-out duration-700 bg-white shadow-md shadow-slate-400`} >
      <div className=''>
        <XIcon className='h-6 w-6 text-right right-3 top-3 absolute ' onClick={()=> setLeftSidebar(false)}/>
      </div>
      <ul className='my-10 ml-5 mr-14'>
        <li className='py-2 my-4 text-sm font-light'>ALL</li>
        <li className='py-2 my-4 text-sm font-light'>NEW ARRIVALS</li>
        <li className='py-2 my-4 text-sm font-light'>COLLECTIONS</li>
        <li className='py-2 my-4 text-sm font-light'>TRENDS</li>
      </ul>
    </div>
  )
}
