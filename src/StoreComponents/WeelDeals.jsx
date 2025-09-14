'use client'
import React, { useState } from 'react'
import { E_WeekDeals } from '../../data'
import useWishListStore from './zustand/WishListStore'
import ProductCard from './ProductCard'
import { ShowToast } from './Toast'
import { ToastWrapper } from './Toast'
import useCartStore from './zustand/CartStore'
import Model from './Model'
import { el } from 'date-fns/locale'

const WeelDeals = () => {

    const [model, openModel] = useState(false)
    const [itemToRemove, setItemToRemove] = useState(null)
    const [cartToRemove, setCartToRemove] = useState(null)

     const [removeType, setRemoveType] = useState(null)

    const addToWishList = useWishListStore((state) => state.addToWishList)
    const removeFromWishList = useWishListStore((state) => state.removeFromWishList)
    const items = useWishListStore((state) => state.items)

    const addToCart = useCartStore((state) => state.addToCart)
    const removeFromCart = useCartStore((state) => state.removeFromCart)
    const Cart = useCartStore((state) => state.Cart)



    const handleWishListClick = (item) => {

        const isInWishList = items?.some((product) =>
            product.id === item.id)
           setRemoveType('Wishlist')
        if (isInWishList) {
            openModel(true)
            setItemToRemove(item)



        } else {
            addToWishList(item)
            ShowToast('Product addded Successfully to Your Wishlist', { isLoading: false })
        }
    }

    const ConfirmRemove = () => {

        if (itemToRemove && removeType === 'Wishlist') {
            // ShowToast('Product Removed Successfully to Your Wishlist', { isLoading: true })

            removeFromWishList(itemToRemove.id)
            ShowToast('Product Removed Successfully to Your Wishlist', { isLoading: true })


        } else {
            openModel(false)

            setItemToRemove(null)

        }



        if (cartToRemove && removeType === 'Cart') {
            removeFromCart(cartToRemove.id)
            ShowToast('Product Removed Successfully to Your Cart', { isLoading: true })

        } else {
            openModel(false)
            setCartToRemove(null)

        }

    }


    const CancelRemove = () => {
        openModel(false)
        setItemToRemove(null)
    }


    const handleCartClick = (item) => {

        const isInCartList = Cart?.some((product) =>
            product.id === item.id)
            setRemoveType('Cart')
        if (isInCartList) {
            openModel(true)
            setCartToRemove(item)



        } else {
            addToCart(item)
            ShowToast('Product addded Successfully to Your Cart', { isLoading: false })
        }


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
                        const inCartList = Cart.some((product) => product.id === item.id)
                        return (


                            <ProductCard key={item.id} item={item} inWishList={inWishList} inCartList={inCartList} handleWishListClick={handleWishListClick} handleCartClick={handleCartClick} />

                        )
                    })
                }



            </div>


            <div>
                {model && (
                    <Model CancelRemove={CancelRemove} ConfirmRemove={ConfirmRemove} model={model} />
                )}
            </div>


        </div>
    )
}

export default WeelDeals