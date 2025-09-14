"use client"
import React from 'react'
import useCartStore from './zustand/CartStore'
import { ShowToast } from './Toast'

const CartButtons = ({product}) => {
    const addToCart = useCartStore((state) => state.addToCart)
    const Cart = useCartStore((state) => state.Cart)
    const decreaseQuantity = useCartStore((state) => state.decreaseQuantity)



    const handleIncrement = (prod) => {
        addToCart(prod)
        ShowToast('Product added successfully to your cart', { isLoading: false })
    }

    const handleDecrement = (id) => {
        decreaseQuantity(id)
        ShowToast('Product removed successfully to your cart', { isLoading: true })

    }

    const isDecrement = (id) => {
        const cartItem = Cart.find((item) => item.id === id)
        return !cartItem || cartItem.quantity < 1

    }
    return (
        <div className=' flex justify-center items-center gap-6 '>
            <button
                disabled={isDecrement(product.id)}
                className="bg-gray-200 px-4 py-1 rounded-s-lg disabled:cursor-not-allowed"
                onClick={() => handleDecrement(product.id)}
            >
                -
            </button>
            {/* {count[product.id] || 0} 
                                */}  {Cart.find(item => item.id === product.id)?.quantity || 0}

            <button className='bg-e_secondaryColor px-4 py-1 rounded-e-lg' onClick={() => handleIncrement(product)}

            >+</button>
        </div>
    )
}

export default CartButtons