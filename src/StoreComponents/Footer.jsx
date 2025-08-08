// import React from 'react'
// import { categoriesFooter, paymentMethods } from '../../data'
// import Link from 'next/link'
// import { Phone } from 'lucide-react'

// const Footer = () => {
//     return (
//         <footer className='relative pt-10'>
//             <div className='bg-[url("/before-footer.webp")] absolute -top-0 w-full h-36 bg-no-repeat bg-cover' />

//             <div className='bg-[url("/footer_1.jpg")]  w-full  h-full bg-no-repeat bg-cover  pt-32 lg:pt-48  '>
//               {/* links */}
//                 <div className='flex  flex-col lg:flex-row  justify-center gap-10 lg:gap-28'> {
//                     categoriesFooter?.map((item) => (
//                         <div>
//                             <div className='text-white mb-5 text-center lg:text-start '>
//                                 {item.title}
//                             </div>

//                             <div className='text-white flex flex-col space-y-3 '>
//                                 {
//                                     item.items.map((link) => (
//                                         <Link className='text-sm text-gray-400 hover:text-e_secondaryColor text-center  lg:text-start' href={link.path}>{link.name}</Link>
//                                     ))
//                                 }
//                             </div>

//                         </div>



//                     ))
//                 }
//                 </div>


//                 {/* contact */}
//                 <div className='flex lg:flex-row flex-col justify-between   lg:px-40 my-10'>
//                     <div className='lg:order-1 order-2 flex gap-3 items-center justify-center lg:justify-start text-white mt-5  lg:mt-0'>
//                         <div className='border-[1px] p-2 border-gray-500 rounded-full '>  <Phone /></div>
//                         <div>
//                             <p className='font-semibold text-lg'>8 800 555-55</p>
//                             <p className='text-gray-300 text-sm my-1'>Working 8:00 -22:00</p>
//                         </div>
//                     </div>


//                     <div className='lg:order-2 order-1'>
//                         <h2 className='text-white   font-semibold text-xl  text-center lg:text-start  '>Download your app</h2>
//                         <div className='flex lg:flex-row  flex-col  gap-2  items-center my-2 '>
//                             <img className='w-28 m-auto' src={'/appstore.webp'} />
//                             <img className='w-28 m-auto' src={'/appstore1.webp'} />
//                             <img className='w-28 m-auto' src={'/appstore2.webp'} />
//                         </div>
//                     </div>
//                 </div>

//                 <div className=' border-t-[1px] border-gray-500' />

//                 <div className='lg:flex justify-between items-center py-10 lg:px-40'>
//                     <p className='text-white  text-center lg:text-start text-sm  font-semibold lg:font-normal lg:text-base  '>Copyright 2025 © All rights reserved by MAI</p>
//                     <div className='flex  lg:justify-start  justify-center  mt-2 lg:mt-0'>
//                         {
//                             paymentMethods?.map((item) => (
//                                 <div>{item.icon}</div>
//                             ))
//                         }
//                     </div>
//                 </div>

//             </div>
//         </footer>
//     )
// }

// export default Footer



import React from 'react'
import { categoriesFooter, paymentMethods } from '../../data'
import Link from 'next/link'
import { Phone } from 'lucide-react'

const Footer = () => {
    return (
        <footer className='relative pt-10'>
            <div className='bg-[url("/before-footer.webp")] absolute -top-0 w-full h-36 bg-no-repeat bg-cover' />

            <div className='bg-[url("/footer_1.jpg")] w-full h-full bg-no-repeat bg-cover pt-32 lg:pt-48'>
                
                {/* links */}
                <div className='flex flex-col lg:flex-row justify-center gap-10 lg:gap-28'>
                    {categoriesFooter?.map((item, idx) => (
                        <div key={idx}>
                            <div className='text-white mb-5 text-center lg:text-start'>
                                {item.title}
                            </div>

                            <div className='text-white flex flex-col space-y-3'>
                                {item.items.map((link, linkIdx) => (
                                    <Link
                                        key={linkIdx}
                                        className='text-sm text-gray-400 hover:text-e_secondaryColor text-center lg:text-start'
                                        href={link.path}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* contact */}
                <div className='flex lg:flex-row flex-col justify-between lg:px-40 my-10'>
                    <div className='lg:order-1 order-2 flex gap-3 items-center justify-center lg:justify-start text-white mt-5 lg:mt-0'>
                        <div className='border-[1px] p-2 border-gray-500 rounded-full'>
                            <Phone />
                        </div>
                        <div>
                            <p className='font-semibold text-lg'>8 800 555-55</p>
                            <p className='text-gray-300 text-sm my-1'>Working 8:00 -22:00</p>
                        </div>
                    </div>

                    <div className='lg:order-2 order-1'>
                        <h2 className='text-white font-semibold text-xl text-center lg:text-start'>
                            Download your app
                        </h2>
                        <div className='flex lg:flex-row flex-col gap-2 items-center my-2'>
                            <img className='w-28 m-auto' src='/appstore.webp' alt='App Store' />
                            <img className='w-28 m-auto' src='/appstore1.webp' alt='App Store 1' />
                            <img className='w-28 m-auto' src='/appstore2.webp' alt='App Store 2' />
                        </div>
                    </div>
                </div>

                <div className='border-t-[1px] border-gray-500' />

                <div className='lg:flex justify-between items-center py-10 lg:px-40'>
                    <p className='text-white text-center lg:text-start text-sm font-semibold lg:font-normal lg:text-base'>
                        Copyright 2025 © All rights reserved by MAI
                    </p>
                    <div className='flex lg:justify-start justify-center mt-2 lg:mt-0'>
                        {paymentMethods?.map((item, idx) => (
                            <div key={idx}>{item.icon}</div>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
