'use client'
import SignModule from '@/StoreComponents/SignModule'
import useCartStore from '@/StoreComponents/zustand/CartStore'
import { useUser } from '@clerk/nextjs'
import { Bus, ShieldHalf } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'
import {  FaShoppingCart } from 'react-icons/fa'
import { EmptyStar, FullStar, HalfStar, lock, trash } from '../../../../data'
import SingleProductRow from '@/StoreComponents/SingleProductRow'


const Cart = () => {

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

    const Cart = useCartStore((state) => state.Cart)
    const removeFromCart = useCartStore((state) => state.removeFromCart)

    const getTotal = useCartStore((state) => state.getTotal())

    // console.log(getTotal)
    const { user } = useUser()
    const isDisabled = Cart.length === 0 || !user




    return (
        <section className='relative'>
            <SignModule />
            <div className='lg:flex justify-center w-full px-5 lg:px-20 gap-5 py-5 lg:my-10'>
                {/* Wishlist */}
                <div className='border-[2px] h-[90vh] border-gray-200 rounded-lg w-full lg:w-[70%]   flex flex-col mb-5 lg:mb-0'>
                    <h2 className='py-5 px-5 shadow-sm text-2xl font-semibold  text-gray-800'>Shopping Cart</h2>
                    <div className='flex-1 overflow-y-auto pe-5'>
                        {
                            Cart?.length > 0 ? (
                                <div >
                                    {
                                        Cart?.map((item) => (
                                            <div >

                                             <SingleProductRow item={item} removeItem={removeFromCart} Rating={Rating}/>
                                             </div>

                                        ))
                                    }
                                </div>) :
                                (
                                    <div className='flex flex-col justify-center items-center p-5'>
                                        <p className='flex items-center my-5 text-[17px]'>Your Shopping Cart is Empty <FaShoppingCart className='ms-3 text-e_secondaryColor' size={20} /></p>
                                        <p className='text-[17px]'>You can add products to Cart from
                                            <Link className='text-e_secondaryColor font-semibold text-base' href={'/Store/shop'}> here</Link>
                                        </p>
                                    </div>
                                )
                        }
                    </div>
                </div>

                <div className=' w-full lg:w-[30%] p-5  h-max border-[2px] border-gray-200 rounded-lg bg-white shadow-lg'>
                    {/* create new wishlist */}
                    <h2 className='font-semibold text-2xl text-gray-700'>Order Summary</h2>
                    <div className='mt-2 flex justify-between items-center'>
                        <p className='text-lg text-gray-500 '>Subtotal ({Cart.length} items)</p>
                        <p></p>
                    </div>
                    <div className=' flex justify-between items-center'>
                        <p className='text-lg text-gray-500'>Shipping</p>
                        <p></p>
                    </div>
                    <div className=' flex justify-between items-center'>
                        <p className='text-lg text-gray-500'>Tax</p>
                        <p></p>
                    </div>
                    <div className='border-t-[2px] border-gray-300 my-2' />
                    <div>
                        <div className='flex justify-between items-center'>
                            <p>Total</p>
                            <p>{getTotal || 0} $</p>
                        </div>

                        <Link href={isDisabled ? '#' : '/Store/checkout'}
                            onClick={(e) => {
                                if (isDisabled) e.preventDefault();
                            }} className={`w-full block text-center bg-e_secondaryColor mt-3 text-white py-2 rounded-md font-semibold text-[16px]  ${isDisabled ? 'bg-gray-200 cursor-not-allowed' : 'bg-e_secondaryColor cursor-pointer'}`}>Proceed to checkout</Link>

                        <Link href={'/Store/shop'} className='w-full block text-center border-[1px] bg-white text-gray-700 mt-3  py-2 rounded-md font-semibold text-[16px]'>Continue Shopping</Link>

                    </div>


                    {/* wishlist data */}
                    <div className='bg-gray-50  border-[1px] border-gray-200 shadow-sm my-4 p-4 rounded-md flex gap-3 items-center'>

                        <div className='p-2 bg-e_secondaryColor rounded-full '> <Bus className='text-yellow-800' /></div>
                        <div>
                            <h2 className='text-lg font-semibold'>Free Delivery</h2>
                            <p className=' text-gray-700'>Your order qualifies for free delivery.Estimated delivery.2-3 business days</p>
                        </div>

                    </div>

                    <div className='bg-yellow-50  border-[1px] border-gray-200 shadow-sm my-4 p-4 rounded-md flex gap-3 items-center'>

                        <div className='p-2 bg-e_secondaryColor rounded-full '> <ShieldHalf className='text-yellow-800' /></div>
                        <div>
                            <h2 className='text-lg font-semibold'>Secure Checkout</h2>
                            <p className=' text-gray-700'>Your payment information is protected with 256-bit SSL encryption</p>
                        </div>

                    </div>

                </div>
            </div>

        </section>
    )
}

export default Cart