import Image from 'next/image'
import React from 'react'

export default function Card({name, price, sexe, photo}) {
  return (
    <div className='w-[250px] lg:hover:scale-105 my-5 transition duration-300 ease-out cursor-pointer'>
      <Image layout='responsive' width='250' height='310' src={photo} alt='Product picture' />
      <div className='flex justify-between'>
        <h1 className='text-sm font-medium tracking-wider'>{name}</h1>
        <p className='text-sm text-gray-500 font-light'>{sexe}</p>
      </div>
      <p className='text-sm font-light text-gray-700'>{price}</p>
      <button className='px-5 py-1 border text-sm rounded-sm border-black mt-2 
      lg:hover:bg-black lg:hover:text-white active:bg-black active:text-white
      transition duration-300 ease-out active:scale-95'>SHOP NOW</button>
    </div>
  )
}

