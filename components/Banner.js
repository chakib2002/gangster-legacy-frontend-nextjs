import Image from 'next/image'
import React from 'react'

export default function Banner() {
  return (
    <div className='bg-black h-screen shadow-xl'>
      <div className='relative top-[40%] mx-8 text-center lg:text-left '>
        <h1 className='text-white text-lg tracking-widest '>GANGSTER LEGACY</h1>
        <p className='text-xs text-gray-200 font-extralight py-2 tracking-wide w-full lg:w-[450px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, </p>
    
        <button className=' px-16 py-1 border border-white rounded-sm text-white text-sm mt-10
        lg:hover:bg-white lg:hover:text-black lg:hover:border-white transition duration-500 ease-out
        active:scale-95 active:text-black active:bg-white active:border-white'>SHOP NOW</button>
      </div>
      <div className='hidden lg:inline lg:absolute lg:bottom-0 lg:right-0'>
        <Image src='/Mafioso.jpg' alt="mafioso" width='507' height='338' />
      </div>
    </div>
  )
}
