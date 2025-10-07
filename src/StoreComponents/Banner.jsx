'use client'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import { bannerLinks, categories_menu, E_NavLinks } from '../../data'
import Link from 'next/link'
import { AlignLeft, ChevronDown, Heart, Menu, Search, ShoppingBasket, ShoppingCart, User2, X } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import useWishListStore from './zustand/WishListStore'
import useCartStore from './zustand/CartStore'
import { ClerkLoaded, SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import { useProducts } from './zustand/useAllProduct'

const Banner = () => {
  const router = useRouter()
  const items = useWishListStore((state) => state.items)
  const Cart = useCartStore((state) => state.Cart)
  const [toggle, setToggle] = useState(false)
  const [openCatagory, setOpenCatagory] = useState(false)
  const wrapperRef = useRef(null)

  const { productsByCategory, loading, error } = useProducts()


  const [search, setSearch] = useState('')
  const [isExist, setExist] = useState(false)


  const filteredProduct = useMemo(() => {

    const trimmed = search.trim()

    if (!trimmed) {
      setExist(false)
      return []
    }


    const searchWords = trimmed.toLowerCase().split(' ').filter(Boolean)

    const results = productsByCategory.filter((item) => {
      const title = item.title.toLowerCase()
      const category = item.category.toLowerCase()


      return searchWords.some((word) => title.includes(word) || category.includes(word))


    })

    setExist(results.length > 0)
    return results




  }, [search, productsByCategory])


  console.log(filteredProduct)
  // console.log(productsByCategory)


  useEffect(() => {

    const handleCatagory = (e) => {


      if (openCatagory && wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpenCatagory(false)
      }
    }

    window.addEventListener('pointerdown', handleCatagory)
    return () => { window.removeEventListener('pointerdown', handleCatagory) }

  }, [openCatagory])

  const path = usePathname()

  return (
    <header>
      <div className='bg-e_mainColor text-white'>
        {/* first Banner */}
        <div className='  hidden lg:flex  justify-between items-center px-20  border-b-[1px] border-gray-700 '>

          <div className='flex items-center gap-4 '>
            {
              bannerLinks?.map((Item, index) => (
                <div key={index}>
                  <Link className=' hover:text-e_primaryColor text-sm' href={Item.path}>{Item.label}</Link>
                </div>
              ))
            }
          </div>

          <div className='flex gap-[7.6rem]  items-center   '>
            <div className='text-[15px]'> 100% Secure delivery without contacting the courier</div>
            <p className=' border-s-[1px] border-gray-700 me-5'> <span className='ms-10 font-semibold text-[13px] '>Need help? Call Us:</span> <span className='font-semibold text-e_primaryColor'>+ 0020 500</span></p>
            <div className='py-3 border-s-[1px] border-gray-700  '> <span className='ms-10 '>English</span></div>
          </div>
        </div>


        {/* Second Banner */}

        <div className='flex items-center   w-full gap-24 px-5 lg:px-20 py-4 lg:py-2'>

          <div className='flex  items-center w-full'>
            <AlignLeft onClick={() => setToggle(!toggle)} size={30} className=' block ms-1  lg:hidden' />
            <img className='w-52 lg:w-32 ' src={'/logo1.png'} />

          </div>

          <div className='flex  justify-end   w-full'>

            <div className='hidden lg:block relative w-[50%] m-auto'>
              <input value={search} onChange={(e) => setSearch(e.target.value)} className=' rounded-md w-full text-black bg-gray-100 py-3 ps-5  ' placeholder='Search For Products .....' />
              <div className='absolute top-0 end-0 w-10 bg-e_secondaryColor h-full  rounded-tr-md rounded-br-md '><Search className='absolute top-3 start-2' size={22} /></div>

              {/* autocomplete products search */}
              <div className={`absolute top-14 bg-gray-100 z-40 shadow-md rounded-md  w-[100%] overflow-y-auto ${search && isExist ? ' max-h-[430px]' : 'h-0'}`}>
                {
                  filteredProduct?.map((item) => (
                    <div className='shadow-sm py-1 rounded-md px-4 hover:bg-white'>
                      <Link className='flex items-center gap-3' href={`/Store/product/${item.id}`} onClick={() => setSearch('')}>
                        <img className='w-10' src={item.imageUrl} />
                        <p className='text-gray-900 text-[15px]'>{item.title}</p>
                      </Link>
                    </div>
                  ))
                }
              </div>


            </div>


            <div className='flex  gap-3  items-center'>
              <div className='p-2 border-[1px] border-gray-700 rounded-full'><User2 size={20} /></div>
              {/* <div className='font-semibold'>$0.00</div> */}


              <div className='relative'>
                <div className='absolute z-10 bottom-5 start-5  w-5 h-5 bg-e_primaryColor text-white text-sm font-semibold rounded-full'> <p className='text-center'>{items.length}</p></div>
                <button onClick={() => router.push('/Store/wishList')} className=' relative p-2  z-0 rounded-full'>
                  <Heart size={20} />
                </button>
              </div>

              <div className='relative'>
                <p className='absolute z-10 bottom-5 start-5 w-5 h-5 bg-e_primaryColor text-white text-sm font-semibold rounded-full'><p className='text-center'>{Cart.length}</p></p>
                <button onClick={() => router.push('/Store/cart')} className=' relative p-2  z-0 rounded-full'>
                  <ShoppingCart size={20} />
                </button>
              </div>

              <div>
                <ClerkLoaded>
                  <div className=" text-sm lg:text-[15px] font-semibold">
                    <SignedOut>
                      <div className="">
                        <SignInButton />
                      </div>
                    </SignedOut>
                    <SignedIn>
                      <UserButton />
                    </SignedIn>
                  </div>
                </ClerkLoaded>

              </div>



            </div>
          </div>

        </div>
      </div>


      <div className='border-b-[1px] border-gray-700' />
      <div className='hidden lg:flex items-center    w-full bg-e_mainColor ps-20 pe-16'>
        <button className='bg-white w-[calc(25%_-_14px)]  ps-5 rounded-tr-md rounded-tl-md  mt-4 border-[1px] py-4  flex items-center gap-2'>
          <img className='w-4 object-cover' src={'/dots2.png'} />
          <p className='font-[600] text-gray-800'> All Categories</p>
        </button>

        <div className="flex items-center justify-between ps-16 w-[calc(75%_-_10px)] ">
          {/* Nav Links */}
          <div className="flex gap-5">
            {E_NavLinks?.map((item) => {
              const isActive = path === item.path;

              return (
                <div key={item.path} className="relative inline-flex">
                  <Link
                    href={item.path}
                    className={`relative z-10 flex items-center gap-2 px-4 py-2 text-sm font-semibold transition-colors duration-300
              ${isActive ? 'text-e_secondaryColor' : 'text-gray-300 hover:text-e_secondaryColor'}
            `}
                  >
                    {item.label}
                    {item.path === "/Store" && <ChevronDown size={20} />}
                  </Link>

                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute left-0 bottom-0 w-full h-full bg-[#292943] rounded-lg z-0"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Text */}
          <div className="text-white ">
            <p>Shop today's deal</p>
          </div>
        </div>





      </div>



      {/* <nav ref={wrapperRef} className='px-3  lg:px-40 w-full hidden lg:flex items-center gap-5 lg:gap-24'> */}

      {/* <button onClick={() => setOpenCatagory(!openCatagory)} className='hidden lg:block relative'>
          <p className='bg-e_secondaryColor text-white py-1 lg:py-3  px-0 lg:px-14 text-sm lg:text-base font-semibold rounded-full uppercase shadow-md'>All Categories</p>
          <p className='bg-gray-200 border-[1px] border-white rounded-full text-[10px] font-semibold text-gray-500 px-3 py-1 absolute -bottom-4 start-14 '>TOTAL 30 PRODUCTS</p>

          <div className='absolute  top-16 bg-gray-50 w-full rounded-md shadow-md text-start   z-50'>{
            openCatagory && <div className='overflow-y-scroll overflow-visible h-[450px] '>
              {
                categories_menu?.map((item, index) => (
                  <div key={index} className='hover:bg-white py-2'>
                    <Link href={`/Store/shop?category=${item.slug}`} className='ms-5'>{item.name}</Link>
                  </div>
                ))
              }
            </div>
          }

          </div>
        </button> */}




      {/* <div className='hidden lg:flex items-center  p-2  rounded-full'>
          {E_NavLinks?.map((item) => {
            const isActive = path === item.path;

            return (
              <div key={item.path} className='relative'>
                <Link
                  href={item.path}
                  className={`relative z-10 flex items-center gap-2 px-4 py-2 font-semibold uppercase transition-colors duration-300 ${isActive ? 'text-e_primaryColor' : 'text-gray-500 hover:text-e_primaryColor'
                    }`}
                >
                  {item?.icon} {item.label}
                  {item.path === '/Store' && <ChevronDown size={20} />}
                </Link>

                {isActive && (
                  <motion.div
                    layoutId='nav-pill'
                    className="absolute inset-0 bg-gray-100 rounded-full z-0"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </div>
            );
          })}
        </div> */}




      {/* </nav> */}



      {/* SideBar on Responsive SCreen */}
      <AnimatePresence>
        {

          toggle && (
            <motion.div
              initial={{ opacity: 0, x: '-100%' }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: 'spring', damping: 12, stiffness: 50 }}
              exit={{ opacity: 0, x: '-100%' }}

              className=' fixed top-0 z-50 w-full h-full bg-white px-5' >
              <div className='text-e_primaryColor mt-5 mb-3  ' onClick={() => setToggle(false)}><X /></div>
              <div className='relative  my-3'>
                <input className=' rounded-md w-full bg-gray-100 py-3 ps-5 ' placeholder='Search For Products .....' />
                <div className='absolute top-3 end-5'><Search /></div>
              </div>

              <button className='relative w-full'>
                <p className='bg-e_secondaryColor text-white py-3 px-14 text-start w-full font-semibold rounded-full uppercase shadow-md'>All Categories</p>
                <p className='bg-gray-200 border-[1px] border-white rounded-full text-[10px] font-semibold text-gray-500 px-3 py-1 absolute -bottom-4 start-14 '>TOTAL 30 PRODUCTS</p>
              </button>
              <nav className='mt-10 space-y-5 mx-5'>
                {
                  E_NavLinks?.map((item, index) => {
                    const isActive = item.path === path
                    return (
                      <div key={index}>
                        <Link className={` inline-flex items-center gap-1 px-4 py-1 font-semibold 
                     ${isActive ? 'bg-gray-100 rounded-full text-e_primaryColor' : 'text-gray-700 capitalize'} `} href={item.path}
                          onClick={() => setToggle(false)}
                        >
                          {item.icon} {item.label}
                          {item.path === '/Store' && <ChevronDown className='mt-2' size={20} />}

                        </Link>
                      </div>



                    )
                  })
                }
              </nav>


            </motion.div>
          )
        }
      </AnimatePresence>




    </header>

  )
}

export default Banner