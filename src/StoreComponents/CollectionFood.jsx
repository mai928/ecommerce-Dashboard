'use client'
import React from 'react'
import { E_CollectionFood } from '../../data'
import { motion } from 'framer-motion'

const CollectionFood = () => {

    return (
        <div className='grid grid-flow-row lg:grid-cols-4 mx-40 mt-10'>
            {
                E_CollectionFood?.map((item) => (
                    <motion.div
                        whileHover={'hover'}
                          initial='initial'
                           animate='initial'
                        className='relative overflow-hidden'>

                        <motion.img variants={{
                            hover: { scale: 1.2 },
                            initial: { scale: 1 }
                        }}
                            transition={{
                                type: 'spring',
                                stiffness: 30,
                                damping: 12
                            }} className='w-full h-[200px] object-cover m-auto block ' src={item.img} />

                        {/* overlay */}
                        <motion.div variants={{
                            hover: { opacity: 1 },
                            initial: { opacity: 0 }

                        }}
                            transition={{
                                type: 'spring',
                                stiffness: 30,
                                damping: 12
                            }} className='absolute inset-0 bg-black/50   text-white flex flex-col justify-center items-center px-4 text-center opacity-0'>
                            <p className='font-semibold text-xl '>{item.label}</p>
                            <p className='my-2 text-3xl font-semibold'>{item.title}</p>
                            <button className='bg-e_primaryColor font-semibold px-10 py-3 text-lg rounded-sm my-4 '>View Collection</button>

                        </motion.div>
                    </motion.div>
                ))
            }
        </div>
    )
}

export default CollectionFood