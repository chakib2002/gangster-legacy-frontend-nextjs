import { ArrowCircleUpIcon, ChevronDoubleUpIcon, HeartIcon, SearchIcon, ShoppingBagIcon, UserIcon, XIcon } from '@heroicons/react/outline'
import React from 'react'

export default function TopNavbar({isOpen, setTopNavbar}) {
  return (
    <div className={`${!isOpen ? "-top-96" : "top-0"} rounded-b-2xl  w-full z-50 fixed ease-in-out duration-700 bg-white shadow-sm shadow-slate-400 pb-5`}>
      <ArrowCircleUpIcon onClick={()=>setTopNavbar(false)} className='h-6 w-6 absolute right-3 top-4'/>
      <div className='mt-12 grid space-y-4 '>
        <div className='flex mx-3 border border-gray-400 my-2 rounded-md py-1'>
            <input className='text-gray-500 w-full outline-none mx-2 placeholder:text-sm self-center  ' placeholder='search'/>
            <SearchIcon className='h-6 w-6 right-3 text-gray-500 mx-2'/>
        </div>
        <div className='flex space-x-2 mx-3 border-l border-gray-700 px-2 active:bg-gray-200 transition duration-300 ease-out py-1 active:scale-95 '>
          <UserIcon className='h-5 w-5'/>
          <p className='my-auto transition duration-200 text-xs'>ACCOUNT</p>
        </div>
        <div className='flex space-x-2 mx-3 border-l border-gray-700 px-2 active:bg-gray-200 transition duration-300 ease-out py-1 active:scale-95 '>
          <HeartIcon className='h-5 w-5'/>
          <p className='my-auto transition duration-200 text-xs'>WISH LIST</p>
        </div>
        <div className='flex space-x-2 mx-3 border-l border-gray-700 px-2 active:bg-gray-200 transition duration-300 ease-out py-1 active:scale-95 '>
          <ShoppingBagIcon className='h-5 w-5'/>
          <p className='my-auto transition duration-200 text-xs'>CARD</p>
        </div>
      </div>
    </div>
  )
}
