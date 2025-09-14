import React from 'react'
import { hover, motion } from 'framer-motion'
import { Heart, ShoppingCart } from 'lucide-react'
import { FaRegEye } from 'react-icons/fa'
import { EmptyStar, FullStar, HalfStar } from '../../data'
import { useRouter } from 'next/navigation'

const ProductCard = ({ item, handleWishListClick, inWishList, inCartList, handleCartClick }) => {
    const navigate = useRouter()
    const Rating = ({ rate }) => {
        const fullStars = Math.max(0 || Math.floor(rate || 0))
        const hasHalfStar = rate % 1 >= 0.25 && rate % 1 <= 0.75
        const emptyStar = 5 - fullStars - (hasHalfStar ? 1 : 0)

        return (
            <div className='flex'>
                {[...Array(fullStars)].map((_, i) => (<FullStar key={`f-${i}`} />))}
                {hasHalfStar && <HalfStar />}
                {[...Array(emptyStar)].map((_, i) => <EmptyStar key={`e-${i}`} />)}


            </div>
        )
    }
    return (
        <motion.button
            key={item.id}
            whileHover='hover'
            initial="initial"
            animate="initial"
            variants={{
                hover: { scale: .96 }
            }}
            className='border-[1px] py-4 relative overflow-hidden cursor-pointer'>
            <p className='absolute top-5  start-10 bg-e_primaryColor px-4 rounded-md font-semibold text-white'>{item.offer}</p>
            <img onClick={() => navigate.push(`/Store/product/${item.id}`)}
                className='h-80 m-auto ' src={item.img} />
            <div className='ms-20 text-start'>
                <p className='font-semibold text-lg mb-3'>{item.title}</p>
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


                {/* Cart */}
                <motion.div
                    whileHover='hover'
                    initial="initial"
                    animate="initial"
                    className='bg-e_primaryColor cursor-pointer hover:bg-e_secondaryColor py-2 px-2 my-2 relative flex'>
                    <ShoppingCart onClick={() => handleCartClick(item)} size={22} className=' text-white m-auto ' />
                    <motion.div variants={{
                        hover: { opacity: 1 },
                        initial: { opacity: 0 }
                    }}

                        transition={{
                            type: 'spring',
                            stiffness: 30,
                            damping: 12
                        }} >
                        {
                            inCartList ? (<div className=' z-10 absolute top-[4px] -start-[135px] py-1 px-2  text-white font-semibold  text-[13px]  bg-e_primaryColor'>Remove From Cart
                            </div>) : (<div className=' z-10 absolute top-[4px] -start-[93px] py-1 px-2  text-white font-semibold  text-[13px]  bg-e_primaryColor'>Add to Cart
                            </div>)
                        }

                        <div className="z-0 absolute top-[9px] end-[40px] w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-l-[10px] border-l-red-700"></div>
                    </motion.div>
                </motion.div>



                {/* wishlist */}

                <motion.div
                    whileHover='hover'
                    initial="initial"
                    animate="initial"
                    className='bg-e_primaryColor cursor-pointer hover:bg-e_secondaryColor py-2 px-2 my-2 relative flex'>
                    <Heart onClick={() => handleWishListClick(item)} size={22} className=' text-white m-auto ' />
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

                        {

                            inWishList ? (
                                <p className=' z-10 absolute top-[4px] -start-[150px] py-1 px-2  text-white font-semibold  text-[13px]  bg-e_primaryColor'>remove From wishlist
                                </p>) : (
                                <p className=' z-10 absolute top-[4px] -start-[111px] py-1 px-2  text-white font-semibold  text-[13px]  bg-e_primaryColor'>add to wishlist
                                </p>
                            )}


                        <div className="z-0 absolute top-[9px] end-[40px] w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-l-[10px] border-l-red-700"></div>
                    </motion.div>
                </motion.div>

            </motion.div>


        </motion.button>
    )
}

export default ProductCard