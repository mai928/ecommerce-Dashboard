'use client'
import React, { useEffect, useState } from 'react'
// import { E_WeekDeals } from '../../data'
import useWishListStore from './zustand/WishListStore'
import ProductCard from './ProductCard'
import { ShowToast } from './Toast'
import useCartStore from './zustand/CartStore'
import Model from './Model'
import { RotatingLines } from 'react-loader-spinner'

const WeelDeals = () => {


    const [E_WeekDeals, setProducts] = useState([]);
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await fetch("/api/home_offer");
                const data = await res.json();
                setProducts(data);
            } catch (error) {
                console.error("Error fetching products:", error);
            } finally {
                setLoading(false)
            }
        };
        getProducts();
    }, []);




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

            removeFromWishList(itemToRemove.id)
            ShowToast('Product Removed Successfully to Your Wishlist', { isLoading: true })

            openModel(false)

            setItemToRemove(null)

        }



        if (cartToRemove && removeType === 'Cart') {
            removeFromCart(cartToRemove.id)
            ShowToast('Product Removed Successfully to Your Cart', { isLoading: true })

            openModel(false)
            setCartToRemove(null)

        }


        if (!itemToRemove && !cartToRemove) {
            openModel(false);
            setItemToRemove(null);
            setCartToRemove(null);
        }
        // You might also want to ensure removeType is reset:
        setRemoveType(null);

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

    if (isLoading) {
        return (
            <div className='flex  justify-center items-center '>
                <RotatingLines
                    visible={true}
                    height="96"
                    width="96"
                    strokeColor="rgb(244 182 24)" // Changed to yellow
                    strokeWidth="5"
                    animationDuration="0.75"
                    ariaLabel="rotating-lines-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                />

            </div>
        )
    }

    if (E_WeekDeals.length === 0 && !isLoading) {
        return (
            <div className='text-center'>
                No Data at this moment
            </div>
        )
    }

    return (
        <div className='px-5 lg:px-40 py-10'>
            <div className='bg-e_secondaryColor w-full h-10  flex items-center ps-10 font-semibold uppercase text-lg'>
                Weekly Hot Offer
            </div>
            {/* <ToastWrapper /> */}
            <div className='grid grid-flow-row grid-cols-1 lg:grid-cols-3 '>
                {
                    E_WeekDeals?.map((item) => {
                        const inWishList = items?.some((product) => product.id === item.id)
                        const inCartList = Cart?.some((product) => product.id === item.id)
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