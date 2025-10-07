import { ChevronDown, ChevronUp } from 'lucide-react'
import React from 'react'
import { brands, categories_menu } from '../../data'
import { AnimatePresence ,motion } from 'framer-motion'

const Shop_Categories = ({checkedCategories ,handleChecked ,setShowBrand ,showBrand , minPrice ,setMinPrice ,maxPrice ,setMaxPrice}) => {
  return (
    <div className='ms-5'>
         <h2 className='font-semibold text-base uppercase text-gray-700 font-jakarta-sans'>Product Categries</h2>
                {/* Product Categories */}
                <div>

                  {
                    categories_menu?.map((item) => (
                      <div className='my-3' >
                        <label className='gap-5 flex  items-center text-gray-700'>
                          <input className='accent-e_secondaryColor  w-4 h-4  ' type='checkbox'
                            checked={checkedCategories.includes(item.slug)}
                            onChange={() => handleChecked(item.slug)} />
                          {item.name}

                        </label>
                      </div>

                    ))
                  }

                </div>

                {/* Brands */}
                <motion.div className=' my-10'>
                  <button onClick={() => setShowBrand(!showBrand)} className='flex w-full items-center justify-between'>
                    <p className=' uppercase hover:underline  font-semibold text-gray-700 text-base font-jakarta-sans mb-3'>Brands</p>
                    <div> {
                      showBrand ? (<ChevronDown size={20} />
                      ) : (<ChevronUp size={20} />)}
                    </div>
                  </button>

                  <AnimatePresence
                  >
                    {
                      showBrand &&
                      brands?.map((item) => (
                        <motion.div
                          className='my-3 text-gray-700 flex justify-between items-center'
                          key={'brand'}
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{
                            type: "spring",
                            stiffness: 60,
                            damping: 15,
                            duration: 0.3
                          }}
                        >
                          <p>{item.name}</p>
                          <p>({item.count})</p>
                        </motion.div>
                      ))
                    }
                  </AnimatePresence>

                </motion.div>

                {/* price */}
                <div>
                  <h2 className='font-semibold text-base uppercase text-gray-700 font-jakarta-sans'>Price</h2>
                  <div className='flex justify-center items-center gap-2  mt-3'>
                    <div className='flex flex-col '>
                      <label className=' mb-1 text-[15px] text-gray-600'>From</label>
                      <input value={minPrice} onChange={(e) => setMinPrice(e.target.value)} className='ps-3 bg-gray-100 py-2 rounded-md w-full' type='number' />
                    </div>
                    <p className='mt-5 text-2xl text-gray-600 font-semibold' >-</p>
                    <div className='flex flex-col'>
                      <label className=' mb-1 text-[15px] text-gray-600'>To</label>
                      <input value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} className='ps-3 bg-gray-100 py-2 rounded-md w-full' type='number' />
                    </div>
                  </div>

                </div>




                {/* Availability */}
    </div>
  )
}

export default Shop_Categories