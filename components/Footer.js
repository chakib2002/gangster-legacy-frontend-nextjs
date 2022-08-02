import Image from 'next/image'
import React from 'react'

export default function Footer() {
  return (
    <div className='bg-black text-white mt-16'>
        <div className='mx-8 my-10 pt-10 sm:flex sm:justify-between '>
            <h1 className='text-sm tracking-widest my-auto text-center sm:text-left'>FOLLOW US ON OUR SOCIAL MEDIA PLATFORMS</h1>
            <div className='flex space-x-5 justify-center my-2 sm:pt-1.5'>
                <div className='lg:hover:scale-110 transition duration-200 ease-out lg:active:scale-95 active:scale-90'>
                    <Image className='cursor-pointer' src='/facebook.png' alt='facebook' width='30'  height='30' />
                </div>
                <div className='lg:hover:scale-110 transition duration-200 ease-out lg:active:scale-95 active:scale-90'>
                    <Image className='cursor-pointer' src='/instagram.png' alt='instagram' width='30 '  height='30'/>
                </div>
                <div className='lg:hover:scale-110 transition duration-200 ease-out lg:active:scale-95 active:scale-90'>
                    <Image className='cursor-pointer' src='/tiktok.png' alt='tiktok' width='30' height='30' /> 
                </div>
            </div> 
        </div>
        <div className='grid grid-cols-2  gap-4 sm:gap-0 sm:grid sm:grid-flow-col sm:justify-between mx-8 pb-14'>
            <div className='space-y-2 md:space-y-1 '>
                <h1 className='tracking-widest mb-2 text-sm font-thin '>POLICIES</h1>
                <p className='text-xs text-gray-300 tracking-widest font-thin cursor-pointer lg:hover:text-white'>Payment Policy</p>
                <p className='text-xs text-gray-300 tracking-widest font-thin cursor-pointer lg:hover:text-white'>Shipping Policy</p>
                <p className='text-xs text-gray-300 tracking-widest font-thin cursor-pointer lg:hover:text-white'>Return & Exchange Policy</p>
            </div> 
            <div className='space-y-2 md:space-y-1 '> 
                <h1 className='tracking-widest mb-2 text-sm font-thin'>ACCOUNT</h1>
                <p className='text-xs text-gray-300 tracking-widest font-thin cursor-pointer lg:hover:text-white'>Login & Registration</p>
                <p className='text-xs text-gray-300 tracking-widest font-thin cursor-pointer lg:hover:text-white'>Orders</p>
                <p className='text-xs text-gray-300 tracking-widest font-thin cursor-pointer lg:hover:text-white'>Wish list</p>
            </div>
            <div className='w-full col-span-2'>
                <button className=' px-8 py-2 border border-white text-sm 
                lg:hover:bg-white lg:hover:text-black active:bg-white active:text-black 
                cursor-pointer active:scale-95 transition duration-300 ease-out  mt-5 sm:my-0 w-full sm:w-auto '>CONTACT US</button>
            </div>
        </div>
        

    </div>
  )
}
