'use client'
import React, { useEffect, useState } from 'react'
import { E_WeekDeals, EmptyStar, FullStar, HalfStar } from '../../data'
import { hover, motion } from 'framer-motion'
import { ArrowBigRight, ArrowRight, ArrowRightFromLine, ArrowRightSquare, ArrowRightToLine, ArrowUpRight, ChevronsRight, Eye, EyeClosed, EyeOff, Heart, ShieldAlert, ShoppingBag, ShoppingBasket, ShoppingCart } from 'lucide-react'
import { FaEye, FaEyeDropper, FaEyeSlash, FaRegEye, FaShoppingBasket, FaShoppingCart } from 'react-icons/fa'
import useWishListStore from './zustand/WishListStore'
import ProductCard from './ProductCard'
import { ShowToast } from './Toast'
import { ToastWrapper } from './Toast'
import useCartStore from './zustand/CartStore'
import CustomToast from './Toast'

const WeelDeals = () => {

    const [model, openModel] = useState(false)
    const [itemToRemove, setItemToRemove] = useState(null)

    const addToWishList = useWishListStore((state) => state.addToWishList)
    const removeFromWishList = useWishListStore((state) => state.removeFromWishList)
    const items = useWishListStore((state) => state.items)


    const addToCart = useCartStore((state) => state.addToCart)
    const removeFromCart = useCartStore((state) => state.removeFromCart)
    const Cart = useCartStore((state) => state.Cart)

    console.log(Cart , addToCart)

    useEffect(() => {
        if (model) {
            document.body.classList.add('open-Model')
        } else {
            document.body.classList.remove('open-Model')

        }

        return () => { document.body.classList.remove('open-Model') }


    }, [model])

    const handleWishListClick = (item) => {

        const isInWishList = items?.some((product) =>
            product.id === item.id)

        if (isInWishList) {
            openModel(true)
            setItemToRemove(item)



        } else {
            addToWishList(item)
            ShowToast('Product addded Successfully to Your Wishlist', { isLoading: false })
        }
    }

    const ConfirmRemove = () => {

        if (itemToRemove) {
            // ShowToast('Product Removed Successfully to Your Wishlist', { isLoading: true })

            removeFromWishList(itemToRemove.id)
                ShowToast('Product Removed Successfully to Your Wishlist', { isLoading: true })


        }


        openModel(false)
        setItemToRemove(null)

    }

    // const ConfirmRemove = () => {
    //     if (!itemToRemove) {
    //         return; // Safety check
    //     }
    
    //     // --- START: The Update Pattern ---
    
    //     // 1. Create a loading toast and grab its ID.
    //     //    We disable autoClose while it's loading.
    //     const toastId = toast(<CustomToast message="Removing from wishlist..." isLoading={true} />, {
    //         autoClose: false, // Disable auto-close during loading
    //         closeButton: false, // Optional: hide close button while loading
    //     });
    
    //     // 2. Perform your action.
    //     //    (Since Zustand is synchronous, this happens instantly. I'll add a tiny delay
    //     //    so you can actually see the loader, simulating a real API call).
    //     setTimeout(() => {
    //       removeFromWishList(itemToRemove.id)
    
    //         // 3. UPDATE the toast using its ID to show the success state.
    //         toast.update(toastId, {
    //             // Pass the updated component to the 'render' property
    //             render: <CustomToast message="Removed from wishlist!" isLoading={false} />,
    //             type: toast.TYPE.SUCCESS, // Use the built-in success type
    //             isLoading: false, // A required property for react-toastify v9+ when updating
    //             autoClose: 3000, // Re-enable auto-close
    //             closeButton: true, // Re-enable the close button
    //         });
    //     }, 500); // 500ms delay to make the loader visible
    
    //     // --- END: The Update Pattern ---
    
    //     // 4. Close the modal and clean up state immediately.
    //     openModel(false);
    //     setItemToRemove(null);
    // }

    const CancelRemove = () => {
        openModel(false)
        setItemToRemove(null)
    }


    const handleCartClick =(item)=>{
       addToCart(item)
       ShowToast('Product addded Successfully to Your Cart', { isLoading: false })
    }

    return (
        <div className='px-5 lg:px-40 py-10'>
            <div className='bg-e_secondaryColor w-full h-10  flex items-center ps-10 font-semibold uppercase text-lg'>
                Weekly Hot Offer
            </div>
            <ToastWrapper />
            <div className='grid grid-flow-row grid-cols-1 lg:grid-cols-3 '>
                {
                    E_WeekDeals?.map((item) => {
                        const inWishList = items.some((product) => product.id === item.id)
                        return (


                            <ProductCard key={item.id} item={item} inWishList={inWishList} handleWishListClick={handleWishListClick} handleCartClick={handleCartClick} />

                        )
                    })
                }



            </div>


            <div>
                {model && (
                    <div className="fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-35 h-screen z-50 overflow-hidden">

                        <div className="bg-white rounded-lg shadow-lg  w-[90%] max-w-xl py-20 text-center">
                            <ShieldAlert className='m-auto mb-5' size={70} color='red' />
                            <h2 className="text-3xl  font-semibold text-gray-600 mb-2 ">Are you sure?</h2>
                            <p className="text-lg text-gray-600 mb-4">You won't be able to revert this!</p>

                            <div className="flex justify-center gap-3 mt-10">
                                <button

                                    onClick={ConfirmRemove}
                                    className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                                >
                                    Yes, Delete it
                                </button>
                                <button
                                    onClick={CancelRemove}
                                    className="px-6 py-2 bg-gray-300 text-black rounded-lg hover:bg-gray-400 transition"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>


        </div>
    )
}

export default WeelDeals