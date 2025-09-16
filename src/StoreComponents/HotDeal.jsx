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
import { ShowToast, ToastWrapper } from './Toast';

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
    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await fetch("/api/hot_deal");
                const data = await res.json();
                setProducts(data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };
        getProducts();
    }, []);


    const addToCart = useCartStore((state) => state.addToCart)

    const handleAddProduct = (item) => {
        addToCart(item)
        ShowToast('Product added successfully to your cart', { isLoading: false })

    }

    return (
        <>
          {/* <ToastWrapper/> */}
         <div className='py-10  relative px-5 lg:px-40 z-0 bg-slate-50'>
          
            {/* Navigation buttons outside swiper */}
            <div className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 swiper-button-prev deal-prev cursor-pointer" />
            <div className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 swiper-button-next deal-prev cursor-pointer" />

            <Swiper
                loop={true}
                autoplay={{ delay: 1000, disableOnInteraction: false }}
                speed={2000}
                pagination={{ clickable: true }}
                modules={[Navigation, Autoplay]}
                spaceBetween={20}
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
                        slidesPerView: 5,
                    },
                }}
                navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                }}
            >


                {E_HotDeal?.map((item, index) => (
                    <SwiperSlide className='' key={item.id}>

                        <div className='border-[1px] bg-white rounded-3xl  py-5'>
                            <img className='object-cover w-52 relative m-auto lg:m-0' src={item.imageUrl} />
                            <p className='absolute top-3 start-5 text-white bg-e_primaryColor px-2 rounded-full text-sm py-1 font-semibold'>{item.offer}</p>

                            <div className={`lg:mx-3  text-center lg:text-start`}>
                                <h2 className='text-[16px] font-bold mb-5 h-14'>{item.title}</h2>
                                <p className='font-semibold text-green-600'>{item.stock}</p>
                                <p className='flex my-1 lg:justify-start justify-center'> <Rating rate={item.rate} /> ({(item.rate)} review)</p>

                                <p className={'text-e_primaryColor font-semibold '}> {item.price} <span className='line-through text-gray-500'>{item.discount}</span></p>
                                <div className='flex justify-end'>
                                    <button onClick={() => handleAddProduct(item)} className='  text-white font-bold text-lg  px-3 py-1 rounded-full mt-10 bg-e_secondaryColor  '>+</button>

                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                ))
                }

            </Swiper>
        </div>
        </>
       
    )
}

export default HotDeal