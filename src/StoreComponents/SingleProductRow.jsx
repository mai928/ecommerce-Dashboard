import React from 'react'
import CartButtons from './CartButtons'
import { trash } from '../../data'

const SingleProductRow = ({removeItem,Rating ,item}) => {
    return (

        <div className='flex lg:flex-row flex-col items-center justify-between'>
            <img className=' w-28 lg:w-40' src={item.imageUrl} />
            <div className='text-center'>
                <h2 className='font-bold text-gray-700 '>{item.title}</h2>
                <p className='flex lg:justify-start justify-center my-1'> <Rating rate={item.rate} /> ({(item.rate)} review)</p>

            </div>
            <p className='text-e_primaryColor font-semibold text-lg'>{item.price} <span className='text-gray-400  line-through'>{item.discount}</span></p>

            <div className='flex items-center gap-3 mb-5 lg:mb-0'>
                <CartButtons product={item} />
                <button onClick={() => removeItem(item.id)}>{trash('red')}</button>
            </div>
        </div>
    )
}

export default SingleProductRow