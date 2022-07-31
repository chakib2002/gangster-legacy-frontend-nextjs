import { XIcon } from '@heroicons/react/outline'
import React from 'react'

export default function RightSidebar({isOpen, setRightSidebar}) {
  return (
    <div className={`${!isOpen ? "-right-96" : "right-0"}  h-screen fixed ease-in-out duration-700 bg-white shadow-md shadow-slate-400`} >
      <div className=''>
        <XIcon className='h-6 w-6 text-right left-3 top-3 absolute' onClick={()=> setRightSidebar(false)}/>
      </div>
      <ul className='my-10 mx-9 text-center'>
        <li className='py-2 my-4 text-sm font-light'>CLOTHING</li>
        <li className='py-2 my-4 text-sm font-light'>SHOES</li>
        <li className='py-2 my-4 text-sm font-light'>HATS</li>
        <li className='py-2 my-4 text-sm font-light'>COATS</li>
        <li className='py-2 my-4 text-sm font-light'>ACCESSORIES</li>
      </ul>
    </div>
  )
}
