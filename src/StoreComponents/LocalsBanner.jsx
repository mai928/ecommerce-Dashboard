import React from 'react'
import { E_LocalBanner } from '../../data'

const LocalsBanner = () => {
  return (
    <div className='grid grid-flow-row grid-cols-2 md:grid-cols-3 lg:grid-cols-6 px-5 lg:px-40 py-10 '>
        {
            E_LocalBanner?.map((item)=>(
                <div>
                    <img className='w-32 lg:w-40 object-cover m-auto' src={item.img}/>
                </div>
            ))
        }
    </div>
  )
}

export default LocalsBanner