'use client'
import ShopSlider from '@/StoreComponents/ShopSlider'
import React, { useEffect, useMemo, useState } from 'react'
import { brands, categories_menu, EmptyStar, FullStar, HalfStar, productsByCategory } from '../../../../data'
import { ChevronDown, ChevronUp, List, ListCheck, ListCollapse, ListCollapseIcon, ListEnd, ListEndIcon, ListFilter, ListTree, ListTreeIcon } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import useCartStore from '@/StoreComponents/zustand/CartStore'
import { ShowToast } from '@/StoreComponents/Toast'
import { ToastWrapper } from '@/StoreComponents/Toast'
import CartButtons from '@/StoreComponents/CartButtons'

const Shop = () => {

  const [showBrand, setShowBrand] = useState(false)
  const [showCategory, setSHowCategory] = useState(true)
  const [showCategorySideBar, setSHowCategorySideBar] = useState(false)


  // const increaseQuantity = useCartStore((state) => state.increaseQuantity)
  // const addToCart = useCartStore((state) => state.addToCart)
  // const Cart = useCartStore((state) => state.Cart)
  // const decreaseQuantity = useCartStore((state) => state.decreaseQuantity)




  useEffect(() => {
    const handleSize = () => {
      if (window.innerWidth < 1040) {
        setSHowCategory(false)
      } else {
        setSHowCategory(true)
        setSHowCategorySideBar(false)

      }

    };

    window.addEventListener('resize', handleSize)
    return () => { window.removeEventListener('resize', handleSize) }
  }, [])

  const [minPrice, setMinPrice] = useState('')
  const [maxPrice, setMaxPrice] = useState('')

  const [sortOption, setSortedOption] = useState('Default')

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

  const [count, setCount] = useState({})

  // const handleDecrement = (id) => {

  //   setCount((prev) => (
  //     {
  //       ...prev,
  //       [id]: Math.max((prev[id] || 0) - 1, 0)
  //     }
  //   ))

  // }

  // const handleIncrement = (id, item) => {
  //   setCount((prev) => (
  //     {
  //       ...prev,
  //       [id]: (prev[id] || 0) + 1
  //     }
  //   ))
  //   // increaseQuantity(id)
  //   addToCart(item)
  //   ShowToast('Product addded Successfully to Your Cart', { isLoading: false })


  // }

  // const handleIncrement = (prod) => {
  //   addToCart(prod)
  //   ShowToast('Product added successfully to your cart', { isLoading: false })
  // }

  // const handleDecrement = (id) => {
  //   decreaseQuantity(id)
  //   ShowToast('Product removed successfully to your cart', { isLoading: true })

  // }

  // const isDecrement = (id) => {
  //   const cartItem = Cart.find((item) => item.id === id)
  //   return !cartItem || cartItem.quantity < 1

  // }

  const [checkedCategories, setProductChecked] = useState([])
  const [hasInteracted, sethasInteracted] = useState(false)


  const handleChecked = (slug) => {
    sethasInteracted(!hasInteracted)

    setProductChecked((prev) =>
      prev.includes(slug) ?
        prev.filter((item) => item !== slug)
        :
        [...prev, slug]
    )
  }




  const intialPage = 1
  const ITEM_PER_PAGE = 20
  const [currentPage, setCurrentPage] = useState(intialPage)

  useEffect(() => {
    setCurrentPage(1)
  }, [checkedCategories, minPrice, maxPrice])

  const handlePrevious = () => {
    setCurrentPage(currentPage - 1)

  }

  const handleNext = () => {
    setCurrentPage(currentPage + 1)

  }

  const { displayProducts, totalPages } = useMemo(() => {
    let filteredProduct = []

    if (!hasInteracted) {
      // show all data
      filteredProduct = Object.values(productsByCategory).filter(value => Array.isArray(value) && typeof value[0] === 'object').flat()
    } else {
      // when check category
      filteredProduct = checkedCategories.flatMap(slug => productsByCategory[slug] || []).filter(Boolean)

    }
    const numMinPrice = parseFloat(minPrice)
    const numMaxPrice = parseFloat(maxPrice)



    if (!isNaN(numMinPrice)) {
      filteredProduct = filteredProduct.filter((item) =>
        parseFloat(item.price) >= numMinPrice
      ).sort((a, b) => parseFloat(a.price) - parseFloat(b.price))
    }

    if (!isNaN(numMaxPrice)) {
      filteredProduct = filteredProduct.filter((item) =>
        parseFloat(item.price) <= numMaxPrice
      ).sort((a, b) => parseFloat(a.price) - parseFloat(b.price))


    }


    // sorted Product Cases

    const sortedProducts = [...filteredProduct]
    switch (sortOption) {
      case 'price-asc':
        sortedProducts.sort((a, b) => parseFloat(a.price) - parseFloat(b.price))
        break;

      case 'price-desc':
        sortedProducts.sort((a, b) => parseFloat(b.price) - parseFloat(a.price))
        break;

      case 'alpha-asc':
        sortedProducts.sort((a, b) => a.title.localeCompare(b.title))
        break;
      case 'alpha-desc':
        sortedProducts.sort((a, b) => b.title.localeCompare(a.title))
        break;
    }


    // pagination
    const totalPages = Math.ceil(filteredProduct.length / ITEM_PER_PAGE)
    const startIndex = (currentPage - 1) * ITEM_PER_PAGE
    const endIndex = startIndex + ITEM_PER_PAGE

    const displayProducts = sortedProducts.slice(startIndex, endIndex)

    return { displayProducts, totalPages }

  }, [checkedCategories, currentPage, hasInteracted, minPrice, maxPrice, sortOption])








  return (
    <div>
      <ToastWrapper />
      <div className={` w-full flex ${showCategory ? ' lex-row  items-start  ' : 'flex-col items-center'} px-5 lg:px-10 py-14`}>
        {
          !showCategory ? (
            <div className='bg-gray-100 mb-3 w-full px-3 rounded-md py-2' >
              <ListFilter onClick={() => setSHowCategorySideBar(!showCategorySideBar)} className='text-gray-700' />
            </div>) :

            (

              <div className='w-1/4 me-6'>
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

              </div>)
        }



        <div className=' w-full lg:w-3/4'>
          <ShopSlider />
          <div className='py-3 bg-gray-100 flex justify-between items-center px-5 my-6 rounded-lg'>
            <p className='text-gray-500'>{ITEM_PER_PAGE} Products</p>
            <label htmlFor='sort-select' className='text-gray-500 text-sm font-semibold'>Sort by :
              <select id="sort-select"
                value={sortOption} onChange={(e) => setSortedOption(e.target.value)}
                className='font-[500] ms-1'>
                <option value={'Default'}>Default</option>
                <option value={'price-asc'}>Price: Low to High</option>
                <option value={'price-desc'}>Price: High to Low</option>
                <option value={'alpha-asc'}>Alphabetically, A-Z</option>
                <option value={'alpha-desc'}>Alphabetically, Z-A</option>
              </select>   </label>
          </div>
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
                              <img className='w-52 m-auto' src={product.img} />
                              <div className='ms-5'>
                                <p className='font-semibold  my-3'>{product.title}</p>
                                <p className='text-green-600 font-semibold '>{product.stock}</p>
                                <p className='flex my-1'> <Rating rate={product.rate} /> <span className='text-sm text-gray-500'>({(product.rate)} review)</span> </p>
                                <p className='text-e_primaryColor font-semibold text-lg'>{product.price} <span className='text-gray-400  line-through'>{product.discount}</span></p>
                              </div>
                              {/* btn Counter */}
                              <div className='mt-6'>                      <CartButtons product={product}/>
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


          {/* pagination */}

          {
            totalPages > 1 &&
            (
              <div className='flex justify-center items-center gap-5'>

                <button disabled={currentPage === 1} onClick={handlePrevious}>Pervious</button>
                <div className='space-x-3'>

                  {
                    Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <button onClick={() => setCurrentPage(page)}>
                        {page}
                      </button>
                    ))
                  }

                </div>
                <button disabled={currentPage === totalPages} onClick={handleNext}>Next</button>
              </div>
            )
          }


        </div>
      </div>



      <AnimatePresence>
        {showCategorySideBar && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSHowCategorySideBar(false)}
              className="fixed inset-0 bg-black/50 z-40" // z-40 puts it below the sidebar
            />

            <motion.aside
              key="sidebar"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", duration: 0.6, ease: "easeInOut" }}
              className="fixed top-0 start-0 p-4 h-full w-full max-w-sm bg-white shadow-xl z-50 overflow-y-scroll overflow-x-hidden pb-10"
            >
              <div className="flex items-center justify-between p-4 border-b">
                <h2 className='font-semibold text-lg uppercase text-gray-800'>Filters</h2>
                <button
                  onClick={() => setSHowCategorySideBar(false)}
                  className="p-2 rounded-full hover:bg-gray-100"
                >
                  x
                </button>
              </div>

              <div className='w-full me-6'>
                <h2 className='font-semibold text-base uppercase text-gray-700 font-jakarta-sans'>Product Categries</h2>
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
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </div>

  )
}

export default Shop