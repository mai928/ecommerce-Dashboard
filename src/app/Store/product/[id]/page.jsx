import React from 'react'
import { EmptyStar, FullStar, HalfStar, productsByCategory } from '../../../../../data'
import CartButtons from '@/StoreComponents/CartButtons'
import Add_BuyToCart from '@/StoreComponents/Add_BuyToCart'

const SingleProduct = ({ params }) => {

  const { id } = params

  const allProduct = Object.values(productsByCategory).filter(value => Array.isArray(value)).flat()

  const product = allProduct.find((item) => item.id === id)



  const Rating = ({ rate }) => {
    const fullStars = Math.max(0 || Math.floor(rate || 0))
    const hasHalfStar = rate % 1 >= 0.25 && rate % 1 <= 0.75
    const emptyStar = 5 - fullStars - (hasHalfStar ? 1 : 0)

    return (
      <div className='flex'>
        {[...Array(fullStars)].map((_, i) => (<FullStar key={`f-${i}`} />))}
        {hasHalfStar && <HalfStar />}
        {[...Array(emptyStar)].map((_, i) => <EmptyStar key={`e-${i}`} />)}


      </div>
    )
  }


  return (
    <div className='flex gap-10 p-20 bg-gray-50 '>
      <img className='w-[450px] border-[1px] bg-gray-100' src={product.img} />

      <div className='bg-white ps-5 shadow-md w-full pt-3'>
        <p className='text-e_secondaryColor bg-yellow-200 font-semibold  w-20 text-center rounded-lg text-sm py-1'>{product.stock}</p>
        <h2 className='text-3xl font-semibold mt-4'>{product.title}</h2>
        <div className='flex my-2'> <Rating rate={product.rate} /> {product.rate} reviews</div>
        <span className='font-bold text-lg'>{product.price} <span className='text-gray-600 line-through ms-5 font-semibold '>{product.discount}</span> <span className='bg-red-400 text-white text-[16px] ms-3 px-2 py-1 rounded-md font-semibold'>Save 28%</span></span>
        <div className='border-t-[2px] border-gray-100 mt-5' />


        <div className='mt-4'>
          <p className='text-[17px]'>Material Polyester Blend Colour Name Beige Department Women</p>
          <div className='flex gap-5 my-6'>
            <p className='font-semibold '>Quantity</p>

            <CartButtons product={product} />
            <p>only 222 item in stock</p>
          </div>
          <div className='mt-5'>
            <Add_BuyToCart product={product} />

          </div>


        </div>

        <div className='border-t-[2px] border-gray-100 mt-5' />





      </div>

    </div>
  )
}

export default SingleProduct