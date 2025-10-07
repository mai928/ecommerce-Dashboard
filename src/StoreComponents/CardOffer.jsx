import React from 'react'

const CardOffer = () => {
    return (
        <div className='bg-black flex  items-center px-5 lg:px-20  py-5 lg:py-10 w-full '>
            <div className=''>
                <p className='text-e_secondaryColor'>Categories</p>
                <h2 className='text-white font-semibold lg:text-7xl w-[80%]  my-5 lg:my-10'>Enhance Your Music Experience</h2>
                <button className='text-white bg-e_secondaryColor text-sm lg:text-base py-2  px-5 lg:px-10 rounded-md'>Buy Now</button>
            </div>
            <img className='w-[200px] md:w-[300px] lg:w-[600px]  h-auto drop-shadow-[0_0_40px_rgba(255,255,255,0.4)]
             transition-all duration-300' src={'/speaker.png'}/>
        </div>
    )
}

export default CardOffer