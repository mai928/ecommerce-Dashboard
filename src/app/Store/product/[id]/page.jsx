import React from 'react'
import { productsByCategory } from '../../../../../data'

const SingleProduct = ({params}) => {
  const {id} =params

  const allProduct = Object.values(productsByCategory).filter(value => Array.isArray(value)).flat()
  const product = allProduct.find((item) =>item.id === id)

  console.log(product)
  return (
    <div className='flex'>
      <div>
      <img  className='w-full h-full' src={id.img}/>
      <h2>{product.title}</h2>
      </div>

      <div>

      </div>
    </div>
  )
}

export default SingleProduct