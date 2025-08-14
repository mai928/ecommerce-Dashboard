'use client'
import React from 'react'
import { E_Shop_Slider, E_Slider } from '../../data'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import 'swiper/css/navigation'; // Ensure this is included
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const ShopSlider = () => {
    return (
        <div className=' relative z-0'>
            <Swiper
            className='rounded-lg'
                loop={true}
                autoplay={{ delay: 5000 }}
                effect="fade"
                pagination={{ clickable: true }}
                modules={[Navigation, Autoplay, EffectFade]}
                navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                }}
            >

                {/* <div className={`swiper-button-next `}></div>
                <div className={`swiper-button-prev `}></div> */}

                {
                    E_Shop_Slider?.map((item ,index) => (
                        <SwiperSlide>
                            <div className=' bg-[#ffe972] lg:h-[300px]'>
                                <img className='object-cover w-full rounded-lg ' src={item.slide} />
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>

    )
}

export default ShopSlider