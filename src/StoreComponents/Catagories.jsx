import React from 'react'
import { E_Catagories } from '../../data'

const Catagories = () => {
    return (
        <div className='pb-5  px-5 lg:px-40'>
            <div className='bg-e_secondaryColor w-full h-10  flex items-center ps-10 font-semibold uppercase text-lg'>
                SuperMarket Catagories
            </div>   
             <div className='grid grid-flow-row grid-cols-1 md:grid-cols-3 lg:grid-cols-5  text-center '>
                {
                    E_Catagories?.map((item) => (
                        <div className='border-[1px] hover:shadow-md rounded-sm py-2'>
                            <img className={`m-auto w-28 `} src={item.img} />
                            <h2 className='font-semibold my-2'>{item.label}</h2>
                            <p className='text-gray-600'>{item.numberOfItems}</p>
                        </div>
                    ))
                }
            </div>
        </div>

    )
}

export default Catagories