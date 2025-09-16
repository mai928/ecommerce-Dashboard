import React from 'react'
import CartButtons from './CartButtons'

const Shop_allProducts = ({displayProducts , Rating}) => {
  return (
    <div>
         {
                      <div className='mb-10'>
                        {
                          displayProducts?.length > 0 && (
                            <div className='grid grid-flow-row  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                              {
                                displayProducts.map((product) => {
                                  return (
                                    <div key={product.id} className='border-[1px] py-4 relative rounded-md overflow-hidden'>
                                      <p className='absolute top-5  start-10 bg-e_primaryColor px-4 rounded-md font-semibold text-white'>{product.offer}</p>
                                      <img className='w-52 m-auto' src={product.imageUrl} />
                                      <div className='ms-5'>
                                        <p className='font-semibold  my-3'>{product.title}</p>
                                        <p className='text-green-600 font-semibold '>{product.stock}</p>
                                        <p className='flex my-1'> <Rating rate={product.rate} /> <span className='text-sm text-gray-500'>({(product.rate)} review)</span> </p>
                                        <p className='text-e_primaryColor font-semibold text-lg'>{product.price} <span className='text-gray-400  line-through'>{product.discount}</span></p>
                                      </div>
                                      {/* btn Counter */}
                                      <div className='mt-6'>     
                                      <CartButtons product={product} />
                                      </div>
                                    </div>
                                  )
                                })
                              }
                            </div>)
        
        
                        }
                      </div>
        
                    }
    </div>
  )
}

export default Shop_allProducts