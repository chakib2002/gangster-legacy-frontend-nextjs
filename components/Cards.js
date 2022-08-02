import React, { useState } from 'react'
import Card from './Card'

export default function Cards({data}) {
  return (
    <>
    <h1 className=' mt-10 text-lg mx-8 tracking-wider block border-gray-300 border-l-2 px-2'>Best Selling Products</h1>
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
