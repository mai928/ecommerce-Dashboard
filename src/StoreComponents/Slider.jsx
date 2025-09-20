'use client'
import React from 'react'
import { E_Slider } from '../../data'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import 'swiper/css/navigation'; // Ensure this is included
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const Slider = () => {
    return (
        <div className='lg:mt-10 relative z-10 group'>
            <Swiper
            
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

             <div>
                    <div className={`swiper-button-next opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                    <div className={`swiper-button-prev opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                </div>
             
                {
                    E_Slider?.map((item ,index) => (
                        <SwiperSlide>
                            <div className='relative '>
                                <img className='object-cover w-full h-[500px] lg:h-[700px]' src={item.slide} />

                         
                                 <div className='absolute inset-0 bg-black bg-opacity-35'/>
                            <div className={`absolute inset-0   flex flex-col ${E_Slider[0]=== E_Slider[index]  || E_Slider[1]=== E_Slider[index] || E_Slider[2]=== E_Slider[index] || E_Slider[3]=== E_Slider[index]?'justify-center items-center ':'items-center lg:items-start justify-center text-center lg:ms-32 text-white'} `}>
                                
                                <p className={`  font-semibold text-lg ${index === 0 || index === 1  || index ===2 || index ===3 ? 'text-white text-center':'text-yellow-600'}`}>{item.label}</p>
                                <h2 className={`text-2xl lg:text-6xl font-semibold     ${index ===0 || index ===1  || index ===2 || index ===3 ?' font-pacifico w-[600px] text-e_secondaryColor text-center my-10':'w-[600px] text-center  font-pacifico lg:font-sans my-10 font-bold lg:text-start'}`}>{item.title}</h2>
                                <p className={`${index ===0 ?'text-xl lg:text-5xl font-semibold':'text-2xl'} capitalize  text-white`}>{item.discount}</p> 
                                <button className='bg-white text-black my-10 lg:px-10 lg:py-3 px-4 py-2  text-sm lg:text-base font-semibold rounded-lg hover:bg-e_primaryColor hover:text-white uppercase '>{item.btnText}</button>
                            </div>

                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>

    )
}

export default Slider