import Image from 'next/image'
import React from 'react'

export default function Footer() {
  return (
    <div className='bg-black text-white mt-16'>
        <div className='mx-8 my-10 pt-10 flex justify-between'>
            <h1 className='text-sm tracking-widest'>FOLLOW US ON OUR SOCIAL MEDIA PLATFORMS</h1>
            <div className='space-x-5'>

            </div>
        </div>
        <div className='grid grid-flow-col justify-between mx-8 pb-20'>
            <div className='space-y-2 md:space-y-1'>
                <h1 className='tracking-widest mb-2 text-sm font-thin '>POLICIES</h1>
                <p className='text-xs text-gray-300 tracking-widest font-thin cursor-pointer lg:hover:text-white'>Payment Policy</p>
                <p className='text-xs text-gray-300 tracking-widest font-thin cursor-pointer lg:hover:text-white'>Shipping Policy</p>
                <p className='text-xs text-gray-300 tracking-widest font-thin cursor-pointer lg:hover:text-white'>Return & Exchange Policy</p>
            </div> 
            <div className='space-y-2 md:space-y-1'> 
                <h1 className='tracking-widest mb-2 text-sm font-thin'>ACCOUNT</h1>
                <p className='text-xs text-gray-300 tracking-widest font-thin cursor-pointer lg:hover:text-white'>Wish list</p>
                <p className='text-xs text-gray-300 tracking-widest font-thin cursor-pointer lg:hover:text-white'>Orders</p>
                <p className='text-xs text-gray-300 tracking-widest font-thin cursor-pointer lg:hover:text-white'>Login & Registration</p>
            </div>
            <div>
                <button className='px-8 py-2 border border-white text-sm
                lg:hover:bg-white lg:hover:text-black active:bg-white active:text-black 
                cursor-pointer active:scale-95 transition duration-200 ease-out'>CONTACT US</button>
            </div>
        </div>

    </div>
  )
}
