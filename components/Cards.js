import { ChevronDoubleRightIcon, InformationCircleIcon } from '@heroicons/react/outline'
import React, { useState } from 'react'
import Card from './Card'

export default function Cards({data}) {
  return (
    <>
    <div className='mx-8 mt-10 flex justify-between'>
      <h1 className=' text-lg tracking-wider block border-gray-300 border-l-2 px-2'>Best Selling Products</h1>
      <div className='self-center flex space-x-1 text-gray-800 animate-pulse'>
        <p className='text-xs self-center cursor-default'>Scroll</p>
        <ChevronDoubleRightIcon className='h-3 w-3 cursor-default self-center'/>
      </div>
    </div>
      <div className='mx-3 px-5 flex space-x-10 overflow-x-auto'>
        {data.map((element, index)=>{
          return (
            <div key={index}>
              <Card 
                name={element.name}  
                price={element.price} 
                sexe={element.sexe} 
                photo={element.photo} />
            </div>
          )
        })}
      </div>
    </>
  )
}
