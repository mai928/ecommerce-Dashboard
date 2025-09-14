"use client"
import React, { useState } from 'react'
import useCartStore from './zustand/CartStore'
import Model from './Model'

const Add_BuyToCart = ({ product }) => {

    const [model, setModel] = useState(false)
    const addToCart = useCartStore((state) => state.addToCart)
    const removeFromCart = useCartStore((state) => state.removeFromCart)
    const Cart = useCartStore((state) => state.Cart)

    const exist = Cart.some((item) => item.id === product.id)
    return (
        <div>
                <div className='flex gap-3 w-full text-white font-semibold'>
            {
                exist === true ? (<button onClick={()=>removeFromCart(product.id)} className='bg-e_primaryColor w-[45%] py-2 rounded-md'>Remove from Cart</button>
                ) : (<button onClick={() => addToCart(product)} className='bg-e_secondaryColor w-[45%] py-2 rounded-md'>Add to Cart</button>
                )
            }
            <button className='w-[45%] border-[1px] py-2 rounded-md text-black hover:bg-e_secondaryColor hover:text-white'>Buy Now</button>
        </div>

        {
            model &&<Model/>
        }
        </div>
    
    )
}

export default Add_BuyToCart