'use client'
import useWishListStore from '@/StoreComponents/zustand/WishListStore'
import { Copy, Delete, Lock, ShoppingBag, ShoppingBasket, ShoppingCart, Trash } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import { FaFacebook, FaShoppingCart, FaTwitter } from 'react-icons/fa'
import { EmptyStar, FullStar, global, HalfStar, lock, trash } from '../../../../data'

const WishList = () => {
    const pathname = usePathname()
    const baseUrl ='https://ecommerce-dashboard-opal-psi.vercel.app'
    const fullUrl =baseUrl+pathname

    const [copied ,setCopied]=useState(false)

    const handleCopy =()=>{
          navigator.clipboard.writeText(fullUrl)
          setCopied(true)

          setTimeout(() => {
            setCopied(false)   
          }, 2000);
    }

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

    const items = useWishListStore((state) => state.items)
    const removeFromWishList = useWishListStore((state) => state.removeFromWishList)
    return (
        <section className='lg:flex justify-center w-full px-5 lg:px-28  gap-5 my-10'>
            {/* Wishlist */}
            <div className='border-[2px] h-[90vh] border-gray-200 rounded-lg w-full lg:w-[70%]   flex flex-col'>
                <h2 className='py-5 px-5 shadow-sm text-2xl font-semibold  text-gray-800'>Your Wishlist</h2>
                {/* <div className=' border-gray-200  mx-5  ' /> */}
                <div className='flex-1 overflow-y-auto pe-5'>
                    {
                        items?.length > 0 ? (
                            <div >
                                {
                                    items?.map((item) => (
                                        <div >
                                            <div className='border-t-2 mx-5 border-gray-200' />

                                            <div className='flex items-center justify-between'>
                                                <img className='w-40' src={item.imageUrl} />
                                                <div>
                                                    <h2 className='font-bold text-gray-700'>{item.title}</h2>
                                                    <p className='flex my-1'> <Rating rate={item.rate} /> ({(item.rate)} review)</p>

                                                </div>
                                                <p className='text-e_primaryColor font-semibold text-lg'>{item.price} <span className='text-gray-400  line-through'>{item.discount}</span></p>
                                                <button className='bg-e_secondaryColor px-5 py-1 text-white font-semibold rounded-md '>add to cart</button>
                                                <button onClick={() => removeFromWishList(item.id)}>{trash('red')}</button>
                                            </div></div>

                                    ))
                                }
                            </div>) :
                            (
                                <div className='flex flex-col justify-center items-center p-5'>
                                    <p className='flex items-center my-5 text-[17px]'>Your Wishlist is Empty <FaShoppingCart className='ms-3 text-e_secondaryColor' size={20} /></p>
                                    <p className='text-[17px]'>You can add products to wishlist from
                                        <Link className='text-e_secondaryColor font-semibold text-base' href={'/Store/shop'}> here</Link>
                                    </p>
                                </div>
                            )
                    }
                </div>
            </div>

            <div className=' w-full lg:w-[30%]  h-max border-[2px] border-gray-200 rounded-lg bg-white'>
                {/* create new wishlist */}
                <div className='bg-gray-50  border-[1px] border-gray-200 shadow-sm m-4 p-4 rounded-md'>
                    <h2 className='font-semibold text-lg'>Create New Wishlist</h2>
                    <p className='text-sm text-gray-700 mt-3'>Wishlist Name</p>
                    <input className='w-full my-2 py-2 rounded-md ps-2 border-[1px]' type={'text'} placeholder='eg , Shopping' />
                    <div>
                        <p className='mt-2 mb-1 text-gray-700'>Privacy</p>
                        <div className='flex items-center gap-5'>
                            <div className='flex gap-2'>
                                <input type={'radio'} />
                                {global('gray')} <p>Public</p>
                            </div>
                            <div className='flex gap-2'>
                                <input type={'radio'} />
                                {lock('gray')} <p> Privacy</p>
                            </div>
                        </div>
                        <button className='w-full bg-e_secondaryColor mt-3 text-white py-2 rounded-md font-semibold text-[16px]'>Create Wishlist</button>
                    </div>
                </div>

                {/* wishlist data */}
                <div className='bg-gray-50  border-[1px] border-gray-200 shadow-sm m-4 p-4 rounded-md'>
                    <h2 className='text-lg font-semibold'>My Wishlists</h2>
                    <p className='text-sm text-gray-500  mt-4'>No WishList Found</p>
                </div>

                {/* share wishlist */}
                <div className='bg-gray-50  border-[1px] border-gray-200 shadow-sm m-4 p-4 rounded-md'>
                    <h2 className='text-lg font-semibold'>Share Your Wishlist</h2>
                    <p className='text-sm text-gray-500  mt-4'>Share Your Wishlist with your faomily and friends</p>
                    <div className='flex w-full items-center gap-3 mt-4'>
                        <button className='bg-blue-600 text-white font-semibold flex items-center gap-2 px-3 py-1 rounded-md'> <FaFacebook color='white'/>Facebook</button>
                        <button className='bg-[#26a0ebd2] text-white font-semibold flex items-center gap-2 px-3 py-1 rounded-md'> <FaTwitter color='white'/>Twitter</button>
                    </div>

                    <div className=' my-3 flex items-center justify-center border-[1px] border-gray-300 rounded-md'>
                        <input type={'text'} value={fullUrl} readOnly className='w-full  py-1 rounded-s-md bg-gray-100 ps-2 text-gray-600' />
                        <button className='bg-gray-200 py-2 text-sm w-40 text-gray-700 font-semibold rounded-e-md flex  items-center gap-1' onClick={handleCopy}> <Copy size={15} className='ms-2 '/>{copied?'Copied Link':'Copy Link'}</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WishList