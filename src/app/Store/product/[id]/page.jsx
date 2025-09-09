"use client"
import { useParams } from 'next/navigation'
import React from 'react'
import { productsByCategory } from '../../../../../data'

const SingleProduct = () => {
    const {id}= useParams()

  const allProduct=  Object.values(productsByCategory).filter(value =>Array.isArray(value)).flat()
//   console.log(allProduct)

  const product=  allProduct.find((item)=> item.id === id)
  console.log(product)
  console.log(id)
  return (
        <div className='flex'>
            <div>
{id}
            </div>

            <div>

            </div>
        </div>
    )
}

export default SingleProduct