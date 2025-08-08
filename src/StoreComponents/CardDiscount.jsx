import React from 'react'
import { E_CardDiscount } from '../../data'

const CardDiscount = () => {
  return (
    <div className='grid grid-flow-row grid-cols-1 lg:grid-cols-3 gap-5 px-5 lg:px-40 py-10'>
        {
            E_CardDiscount?.map((item)=>(
                <div className='relative'>
                    <img className='m-auto object-cover w-full h-full rounded-lg' src={item.img}/>
                    <div className='absolute top-10 start-3'>
                       <p className='text-green-500 text-sm font-semibold'>{item.label}</p>
                       <h2 className='text-2xl font-semibold text-gray-600 my-1'>{item.Title}</h2>
                       <p className='text-gray-400 text-[13px] mb-3'>{item.slugon}</p>
                       <button className='text-white bg-gray-400 px-7 py-2 rounded-md'>Shop Now</button>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default CardDiscount