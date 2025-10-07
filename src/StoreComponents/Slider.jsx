'use client'
import React, { useState } from 'react'
import { categories_menu, E_Slider } from '../../data'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import 'swiper/css/navigation'; // Ensure this is included
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Link from 'next/link';
import { motion } from 'framer-motion'
import { ArrowRight, ChevronRight } from 'lucide-react';

const Slider = () => {

    const [hoverIndex, setHoverIndex] = useState(null);

    return (
        <div className=' relative z-10 gap-3 flex  px-2 lg:px-20 bg-gray-100 pb-3'>


            <div className=" hidden lg:block relative w-[calc(25%_-_8px)] bg-white pt-2 border border-gray-100 shadow-md rounded-b-md overflow-hidden">
                {hoverIndex !== null && (
                    <motion.div
                        layout
                        className="absolute start-0 w-[3px] bg-black rounded-r-sm"
                        style={{
                            top: hoverIndex * 45 + 10,
                            height: "35px",
                        }}
                        transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    />
                )}

                {categories_menu?.map((item, index) => (
                    <div
                        key={index}
                        onMouseEnter={() => setHoverIndex(index)}
                        onMouseLeave={() => setHoverIndex(null)}
                        className="relative py-[0.6rem] group cursor-pointer transition-colors duration-300"
                    >
                        <Link
                            href={`/Store/shop?category=${item.slug}`}
                            className="flex items-center justify-between mx-5 text-[14px] font-semibold"
                        >
                            <p className="flex gap-3">
                                {item.icon} {item.name}
                            </p>
                            {["Men's Fashion", "Women's Fashion", "SkinCare"].includes(
                                item.name
                            ) && <ChevronRight size={16} />}
                        </Link>
                    </div>
                ))}
            </div>


            <Swiper
                className=' w-full lg:w-[75%] mt-[0.65rem] rounded-lg'
                loop={true}
                autoplay={{ delay: 5000 }}
                effect="fade"
                pagination={{ clickable: true }}
                modules={[Navigation, Autoplay, EffectFade, Pagination]}

            >



                {
                    E_Slider?.map((item, ) => (
                        <SwiperSlide key={item.id}>
                            <div className='relative '>
                                <img className='lg:object-cover w-full h-[300px] lg:h-[500px] rounded-lg object-center' src={item.slide} />
                                <div className='absolute inset-0 bg-gray-600 bg-opacity-20 rounded-lg' />
                                <div className='absolute top-[20%] start-5 lg:start-14'>
                                    <p className='text-sm font-semibold text-e_secondaryColor'>{item.label}</p>
                                    <img className='mb-5' src={item?.icon} />
                                    <h2 className='text-white font-semibold lg:text-6xl w-[60%] my-3'>{item.title}</h2>
                                    <p className='text-gray-300   my-3 lg:my-5'>{item.dec}</p>
                                    <button className='text-white border-gray-400 border-[1px] px-4 lg:px-6  py-1 rounded-sm flex items-center gap-3'> Shop now<ArrowRight  size={15}/></button>

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