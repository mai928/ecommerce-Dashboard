"use client"
import React, { useState } from 'react'
import useCartStore from './zustand/CartStore'
import Model from './Model'
import { ShowToast, ToastWrapper } from './Toast'

const Add_BuyToCart = ({ product }) => {

    const [model, setModel] = useState(false)
    const addToCart = useCartStore((state) => state.addToCart)
    const removeFromCart = useCartStore((state) => state.removeFromCart)
    const Cart = useCartStore((state) => state.Cart)

    const exist = Cart.some((item) => item.id === product.id)

    const handleAddProduct = () => {

        addToCart(product)
                    ShowToast('Product added successfully to your cart', { isLoading: false })


    }
    const handleRemove = () => {
        if (exist) {
            removeFromCart(product.id)
            ShowToast('Product removed successfully to your cart', { isLoading: true })


        }
        setModel(false)

    }

    return (
        <div>
            <ToastWrapper/>
            <div className='flex gap-3 w-full text-white font-semibold'>
                {
                    exist === true ? (<button onClick={() => setModel(true)} className='bg-e_primaryColor w-[45%] py-2 rounded-md'>Remove from Cart</button>
                    ) : (<button onClick={handleAddProduct} className='bg-e_secondaryColor w-[45%] py-2 rounded-md'>Add to Cart</button>
                    )
                }
                <button className='w-[45%] border-[1px] py-2 rounded-md text-black hover:bg-e_secondaryColor hover:text-white'>Buy Now</button>
            </div>

            {
                model && <Model CancelRemove={() => setModel(false)} ConfirmRemove={handleRemove} />
            }
        </div>

    )
}

export default Add_BuyToCart