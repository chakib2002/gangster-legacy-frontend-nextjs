import { HeartIcon, SearchIcon, ShoppingBagIcon, UserIcon, XIcon } from '@heroicons/react/outline'
import React from 'react'

export default function TopNavbar({isOpen, setTopNavbar}) {
  return (
    <div className={`${!isOpen ? "-top-96" : "top-0"}  w-full z-50 fixed ease-in-out duration-700 bg-white shadow-md shadow-slate-400 pb-5`}>
      <XIcon onClick={()=>setTopNavbar(false)} className='h-6 w-6 absolute right-3 top-4'/>
      <div className='mt-12 grid space-y-4 '>
        <div className='flex mx-3 border border-gray-400 my-2'>
            <input className='text-gray-500 w-full outline-none py-2 mx-2 ' placeholder='SEARCH'/>
            <SearchIcon className='h-6 w-6 right-3 text-gray-500 mx-2 my-3.5'/>
        </div>
        <div className='flex space-x-2 mx-3'>
          <UserIcon className='h-6 w-6'/>
          <p className='text-sm my-auto transition duration-200'>ACCOUNT</p>
        </div>
        <div className='flex space-x-2 mx-3'>
          <HeartIcon className='h-6 w-6'/>
          <p className='text-sm my-auto transition duration-200'>WISH LIST</p>
        </div>
        <div className='flex space-x-2 mx-3'>
          <ShoppingBagIcon className='h-6 w-6'/>
          <p className='text-sm my-auto transition duration-200'>CARD</p>
        </div>
      </div>
    </div>
  )
}
