'use client'
import React from 'react'
import { E_WeekDeals, EmptyStar, FullStar, HalfStar } from '../../data'
import { hover, motion } from 'framer-motion'
import { ArrowBigRight, ArrowRight, ArrowRightFromLine, ArrowRightSquare, ArrowRightToLine, ArrowUpRight, ChevronsRight, Eye, EyeClosed, EyeOff, Heart, ShoppingBag, ShoppingBasket, ShoppingCart } from 'lucide-react'
import { FaEye, FaEyeDropper, FaEyeSlash, FaRegEye, FaShoppingBasket, FaShoppingCart } from 'react-icons/fa'

const WeelDeals = () => {

    const Rating = ({ rate }) => {
        const fullStars = Math.max(0 || Math.floor(rate || 0))
        const hasHalfStar = rate % 1 >= 0.25 && rate % 1 <= 0.75
        const emptyStar = 5 - fullStars - (hasHalfStar ? 1 : 0)
        console.log(emptyStar)

        return (
            <div className='flex'>
                {[...Array(fullStars)].map((_, i) => (<FullStar key={`f-${i}`} />))}
                {hasHalfStar && <HalfStar />}
                {[...Array(emptyStar)].map((_, i) => <EmptyStar key={`e-${i}`} />)}


            </div>
        )
    }




    return (
        <div className='px-5 lg:px-40 py-10'>
            <div className='bg-e_secondaryColor w-full h-10  flex items-center ps-10 font-semibold uppercase text-lg'>
                Weekly Hot Offer
            </div>
        <div className='grid grid-flow-row grid-cols-1 lg:grid-cols-3  overflow-hidden'>
            {
                E_WeekDeals?.map((item) => (
                    <motion.div
                        key={item.id}
                        whileHover='hover'
                        initial="initial"
                        animate="initial"
                        variants={{
                            hover:{scale:.96}
                        }}
                        className='border-[1px] py-4 relative overflow-hidden'>
                        <p className='absolute top-5  start-10 bg-e_primaryColor px-4 rounded-md font-semibold text-white'>{item.offer}</p>
                        <img className='h-80 m-auto ' src={item.img} />
                        <div className='ms-10'>
                            <p className='font-semibold text-lg my-3'>{item.title}</p>
                            <p className='text-green-600 font-semibold '>{item.stock}</p>
                            <p className='flex my-1'> <Rating rate={item.rate} /> ({(item.rate)} review)</p>
                            <p className='text-e_primaryColor font-semibold text-lg'>{item.price} <span className='text-gray-400  line-through'>{item.discount}</span></p>
                        </div>

                        <motion.div
                            variants={{
                                hover: { opacity: 1, x: -10 },
                                initial: { opacity: 0, y: 0 }
                            }}

                            transition={{
                                type: 'spring',
                                stiffness: 30,
                                damping: 12
                            }}

                            className='absolute top-32 end-3'>
                            <motion.div
                                key={item.id}
                                whileHover='hover'
                                initial="initial"
                                animate="initial"
                                className='bg-e_primaryColor cursor-pointer hover:bg-e_secondaryColor py-2  relative flex'>
                                <FaRegEye size={20} className=' text-white m-auto ' />
                                {/* Toolip */}
                                <motion.div variants={{
                                    hover: { opacity: 1 },
                                    initial: { opacity: 0 }
                                }}

                                    transition={{
                                        type: 'spring',
                                        stiffness: 30,
                                        damping: 12
                                    }} >  <div className=' z-10 absolute top-[4px] -start-[85px] py-1 px-2  text-white font-semibold  text-[13px]  bg-e_primaryColor'>Quick Buy
                                    </div>
                                    <div className="z-0 absolute top-[10px] end-[41px] w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-l-[10px] border-l-red-700"></div>
                                </motion.div>

                            </motion.div>


                            {/*  */}
                            <motion.div
                                key={item.id}
                                whileHover='hover'
                                initial="initial"
                                animate="initial"
                                className='bg-e_primaryColor cursor-pointer hover:bg-e_secondaryColor py-2 px-2 my-2 relative flex'>
                                <ShoppingCart size={22} className=' text-white m-auto ' />
                                <motion.div variants={{
                                    hover: { opacity: 1 },
                                    initial: { opacity: 0 }
                                }}

                                    transition={{
                                        type: 'spring',
                                        stiffness: 30,
                                        damping: 12
                                    }} >
                                    <div className=' z-10 absolute top-[4px] -start-[93px] py-1 px-2  text-white font-semibold  text-[13px]  bg-e_primaryColor'>Add to Cart
                                    </div>
                                    <div className="z-0 absolute top-[9px] end-[40px] w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-l-[10px] border-l-red-700"></div>
                                </motion.div>
                            </motion.div>



                            {/* wishlist */}

                            <motion.div
                                key={item.id}
                                whileHover='hover'
                                initial="initial"
                                animate="initial"
                                className='bg-e_primaryColor cursor-pointer hover:bg-e_secondaryColor py-2 px-2 my-2 relative flex'>
                                <Heart size={22} className=' text-white m-auto ' />
                                <motion.div
                                    variants={{
                                        hover: { opacity: 1 },
                                        initial: { opacity: 0 }
                                    }}

                                    transition={{
                                        type: 'spring',
                                        stiffness: 30,
                                        damping: 12
                                    }} >
                                    <div className=' z-10 absolute top-[4px] -start-[111px] py-1 px-2  text-white font-semibold  text-[13px]  bg-e_primaryColor'>Add to wishlist
                                    </div>
                                    <div className="z-0 absolute top-[9px] end-[40px] w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-l-[10px] border-l-red-700"></div>
                                </motion.div>
                            </motion.div>

                        </motion.div>
                    </motion.div>
                ))
            }
        </div></div>
    )
}

export default WeelDeals