"use client"
import React from 'react'
import { E_Catagories } from '../../data'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import 'swiper/css/navigation'; // Ensure this is included
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const Catagories = () => {
    return (
        <div className='py-16 relative px-5 lg:px-20'>

            <div className=' flex items-center gap-2'>
                <div className='h-7 bg-e_secondaryColor w-[10px] rounded-sm' />
                <p className='text-e_primaryColor text-sm font-semibold'>Categories</p>
            </div>

            <h2 className='text-2xl font-semibold  mt-2 '>Flash Category</h2>

            <div className="absolute top-28 end-36 z-20 flex gap-2">
                <div className=" swiper-button-prev deal-prev cursor-pointer   bg-white shadow-md hover:bg-gray-100">

                </div>
                <div className=" swiper-button-next  deal-prev cursor-pointer  bg-white shadow-md hover:bg-gray-100">

                </div>
            </div>


            <Swiper
                className='my-10'
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
                        slidesPerView: 6,
                    },
                }}
                navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                }}
            >


                {E_Catagories?.map((item, index) => {
                    return (

                        <SwiperSlide key={item.id}>

                            <div className={` ${index === 0 ? 'bg-e_secondaryColor text-white' :' bg-white text-black'}   border-[1px]  text-center  rounded-md  group overflow-hidden py-5 hover:bg-e_secondaryColor cursor-pointer hover:text-white`}>
                                <img
                                    className={`  ${index === 0 ?'filter invert brightness-200':'text-black'}   w-12 h-12 m-auto transition-filter duration-200 group-hover:filter group-hover:invert group-hover:brightness-200`}
                                    src={item.img} alt='image-slide' />
                                <p className='mt-3'>{item.label}</p>
                            </div>
                        </SwiperSlide>
                    )
                })
                }

            </Swiper>

            <div className='w-full border-b-[1px] mt-16  border-gray-200' />
        </div>

    )
}

export default Catagories