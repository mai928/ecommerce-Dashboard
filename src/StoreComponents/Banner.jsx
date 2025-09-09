'use client'
import React, { useEffect, useRef, useState } from 'react'
import { bannerLinks, categories_menu, E_NavLinks } from '../../data'
import Link from 'next/link'
import { AlignLeft, ChevronDown, Heart, Menu, Search, ShoppingBasket, ShoppingCart, User2, X } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import useWishListStore from './zustand/WishListStore'
import useCartStore from './zustand/CartStore'
import { ClerkLoaded, SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'

const Banner = () => {
  const router = useRouter()
  const items = useWishListStore((state) => state.items)
  const Cart = useCartStore((state) => state.Cart)
  const [toggle, setToggle] = useState(false)
  const [openCatagory, setOpenCatagory] = useState(false)
  const wrapperRef = useRef(null)

  const total = Cart.reduce((sum, item) => sum + item.quantity, 0)
  // console.log('total>>>>', total)

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
      {/* first banner */}
      <div className='bg-e_secondaryColor py-[10px] text-center'>
        <p className='font-semibold text-sm m-auto flex justify-center mx-2 lg:font-bold text-white'>Due to current circumstances, there may be slight delays in order processing</p>
      </div>

      {/* second banner */}
      <div className='hidden lg:flex justify-between items-center px-40  border-b-[1px] border-gray-200 '>

        <div className='flex items-center gap-4 '>
          {
            bannerLinks?.map((Item, index) => (
              <div key={index}>
                <Link className='text-gray-600 hover:text-e_primaryColor' href={Item.path}>{Item.label}</Link>
              </div>
            ))
          }
        </div>

        <div className='flex gap-10  items-center justify-between  text-gray-600  w-auto '>
          <div className=''> 100% Secure delivery without contacting the courier</div>
          <p className=' border-s-[1px] border-gray-200 me-5'> <span className='ms-10 font-bold text-gray-700'>Need help? Call Us:</span> <span className='font-semibold text-e_primaryColor'>+ 0020 500</span></p>
          <div className='py-3 border-s-[1px] border-gray-200  '> <span className='mx-5'>English</span></div>
        </div>
      </div>


      {/* third Banner */}

      <div className='flex items-center  lg:gap-5  w-full px-5 lg:px-32 lg:py-2'>
        <div className='flex items-center'>
          <AlignLeft onClick={() => setToggle(!toggle)} className='block md:hidden lg:hidden' />
          <img className='w-28 lg:w-32' src={'/basket/ai-logo1.png'} />

        </div>

        <div className='hidden lg:block relative w-[66%]'>
          <input className=' rounded-md w-full bg-gray-100 py-3 ps-5 ' placeholder='Search For Products .....' />
          <div className='absolute top-3 end-5'><Search /></div>
        </div>

        <div className='flex  gap-3  items-center'>
          <div className='p-2 border-[1px] border-gray-200 rounded-full'><User2 size={20} /></div>
          <div className='font-semibold'>$0.00</div>


          <div className='relative'>
            <p className='absolute z-10 bottom-5 start-5 px-[5px] bg-red-300 text-red-600 text-sm font-semibold rounded-full'>{items.length}</p>
            <button onClick={() => router.push('/Store/wishList')} className=' relative p-2  z-0 rounded-full'>
              <Heart size={20} />
            </button>
          </div>

          <div className='relative'>
            <p className='absolute z-10 bottom-5 start-5 px-[5px] bg-red-300 text-red-600 text-sm font-semibold rounded-full'>{Cart.length}</p>
            <button onClick={() => router.push('/Store/cart')} className=' relative p-2  z-0 rounded-full'>
              <ShoppingCart size={20} />
            </button>
          </div>

          <div>
            <ClerkLoaded>
              <div className="text-[15px] font-semibold">
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



      <nav ref={wrapperRef} className='px-3  lg:px-40 w-full hidden lg:flex items-center gap-5 lg:gap-24'>

        <button onClick={() => setOpenCatagory(!openCatagory)} className='hidden lg:block relative'>
          <p className='bg-e_secondaryColor text-white py-1 lg:py-3  px-0 lg:px-14 text-sm lg:text-base font-semibold rounded-full uppercase shadow-md'>All Categories</p>
          <p className='bg-gray-200 border-[1px] border-white rounded-full text-[10px] font-semibold text-gray-500 px-3 py-1 absolute -bottom-4 start-14 '>TOTAL 30 PRODUCTS</p>
          {/* mini catagory */}

          <div className='absolute  top-16 bg-gray-50 w-full rounded-md shadow-md text-start   z-50'>{
            openCatagory && <div className='overflow-y-scroll overflow-visible h-[450px] '>
              {
                categories_menu?.map((item, index) => (
                  <div key={index} className='hover:bg-white py-2'>
                    <Link href={'/'} className='ms-5'>{item.name}</Link>
                  </div>
                ))
              }
            </div>
          }

          </div>
        </button>




        <div className='hidden lg:flex items-center  p-2  rounded-full'>
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
        </div>




      </nav>
      {/* <nav className="w-full hidden lg:flex items-center gap-5 lg:gap-12 px-4 md:px-10 lg:px-40">
  <button className="hidden lg:block relative">
    <p className="bg-e_secondaryColor text-white py-3 px-6 lg:px-14 font-semibold rounded-full uppercase shadow-md">
      All Categories
    </p>
    <p className='bg-gray-200 border-[1px] border-white rounded-full text-[10px] font-semibold text-gray-500 px-3 py-1 absolute -bottom-4 start-14 '>TOTAL 30 PRODUCTS</p>

  </button>

  <div className="hidden lg:flex items-center p-2 rounded-full">
    {E_NavLinks?.map((item) => {
      const isActive = path === item.path;

      return (
        <div key={item.path} className="relative">
          <Link
            href={item.path}
            className={`relative z-10 flex items-center gap-2 px-4 py-2 font-semibold uppercase transition-colors duration-300 ${
              isActive ? 'text-e_primaryColor' : 'text-gray-500 hover:text-e_primaryColor'
            }`}
          >
            {item?.icon} {item.label}
            {item.path === '/Store' && <ChevronDown size={20} />}
          </Link>

          {isActive && (
            <motion.div
              layoutId="nav-pill"
              className="absolute inset-0 bg-gray-100 rounded-full z-0"
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            />
          )}
        </div>
      );
    })}
  </div>
</nav> */}


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