import Image from 'next/image'
import React from 'react'

export default function Section() {
  return (
    <div className='relative mx-8 my-5'>
       <div className='lg:hidden'>
        <Image className='object-contain absolute' width='1600' height='1481' layout='responsive' src='/SectionPhoto.jpg' alt='Photo of the section component'/>
        <div className='absolute top-[35%] text-center mx-auto w-full'>
          <h1 className=' tracking-widest text-lg text-white'>RESORT 2023</h1>
          <p className='text-white text-xs tracking-widest'>Timeless swim separates to mix and match</p>
          <button className='bg-transparent shadow-sm border border-white text-white rounded-full px-8 py-2 text-sm my-3
          active:scale-95 active:bg-white active:text-black transition duration-200 ease-out'>SHOP NOW</button>
        </div>
       </div>
       <div className='hidden lg:block'>
        <div className='flex'>
          <Image  width='600' height='481' layout='fixed' src='/SectionPhoto.jpg' alt='Photo of the section component'/>
          <div className='mx-auto self-center justify-center text-center '>
            <h1 className=' tracking-widest text-lg'>RESORT 2023</h1>
            <p className='text-gray-600 text-xs tracking-widest'>Timeless swim separates to mix and match</p>
            <button className='bg-white shadow-sm border border-black rounded-full px-8 py-2 text-sm my-3
            active:scale-95 hover:bg-black hover:text-white transition duration-300 ease-out'>SHOP NOW</button>
          </div>
        </div>

       </div>
    </div>
  )
}
