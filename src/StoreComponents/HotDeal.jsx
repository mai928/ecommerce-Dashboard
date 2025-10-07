'use client'
import React, { useEffect, useState } from 'react'
import { EmptyStar, FullStar, HalfStar } from '../../data'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import 'swiper/css/navigation'; // Ensure this is included
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import useCartStore from './zustand/CartStore';
import { ShowToast } from './Toast';
import { Audio, Circles, RotatingLines, Vortex } from 'react-loader-spinner';
import ProductCard from './ProductCard';

const HotDeal = () => {
    const Rating = ({ rate }) => {
        const fullStars = Math.max(0 || Math.floor(rate || 0))
        const hasHalfStar = rate % 1 >= 0.25 && rate % 1 <= 0.75
        const emptyStar = 5 - fullStars - (hasHalfStar ? 1 : 0)
        // console.log(emptyStar)

        return (
            <div className='flex'>
                {[...Array(fullStars)].map((_, i) => (<FullStar key={`f-${i}`} />))}
                {hasHalfStar && <HalfStar />}
                {[...Array(emptyStar)].map((_, i) => <EmptyStar key={`e-${i}`} />)}


            </div>
        )
    }

    const [E_HotDeal, setProducts] = useState([]);
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await fetch("/api/hot_deal");
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



    const addToCart = useCartStore((state) => state.addToCart)
    const Cart = useCartStore((state) => state.Cart)

    const handleAddProduct = (item) => {
        addToCart(item)
        ShowToast('Product added successfully to your cart', { isLoading: false })

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

    if (E_HotDeal.length === 0 && !isLoading) {
        return (
            <div className='text-center'>No Data Available at the moment</div>
        )
    }



    return (
        <div className='py-16 relative ps-5 lg:px-20 z-0 bg-slate-50'>
            <div className=' flex items-center gap-2'>
                <div className='h-7 bg-e_secondaryColor w-[10px] rounded-sm' />
                <p className='text-e_primaryColor text-sm font-semibold'>Today's</p>
            </div>

            <h2 className='text-2xl font-semibold  mt-2  mb-4'>Flash Sales</h2>

            <div className="absolute top-28 end-36 z-20 flex gap-2">
                <div className=" swiper-button-prev deal-prev cursor-pointer   bg-white shadow-md hover:bg-gray-100">

                </div>
                <div className=" swiper-button-next  deal-prev cursor-pointer  bg-white shadow-md hover:bg-gray-100">

                </div>
            </div>


            <Swiper
                loop={true}
                autoplay={{ delay: 2000, disableOnInteraction: true }}
                speed={1000}
                pagination={{ clickable: true }}
                modules={[Navigation, Autoplay]}
                spaceBetween={10}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    640: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                    1280: {
                        slidesPerView: 4,
                    },
                }}
                navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                }}
            >


                {E_HotDeal?.map((item) => {
                    const disabledbtn = Cart?.some((ele) => ele.id === item.id)
                    return (

                        <SwiperSlide key={item.id} className='m-auto'>
                            <ProductCard item={item} />
                        </SwiperSlide>
                    )
                })
                }

            </Swiper>
        </div>

    )
}

export default HotDeal