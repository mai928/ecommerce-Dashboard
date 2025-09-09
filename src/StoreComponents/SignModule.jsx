import { useUser } from '@clerk/nextjs'
import { CircleX } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'

const SignModule = () => {
    const { user } = useUser()
    const [openModel, setOpenModel] = useState(true)

    return (
        <div className=''>
            {
                !user && openModel && (
                    <div className='fixed inset-0 flex justify-center items-center bg-gray-600 bg-opacity-30 border-[1px] shadow-md z-50 overflow-hidden'>
                                                 <div className='absolute top-52 end-[33%]  '><CircleX onClick={()=>setOpenModel(false)} className='cursor-pointer' color='black' /> </div>

                        <div className='shadow-md w-[90%] max-w-xl h-[50%] bg-white  text-center flex flex-col justify-center '>

                            <h3 className='text-2xl font-semibold '>Complete your Order</h3>
                            <p className='text-gray-600 my-4'>please sign in to continue and complete your purchase</p>
                            <Link className='bg-e_secondaryColor text-white mx-20 py-2 font-semibold rounded-md' href={'/Store/sign-in'}>Sign in to continue</Link>

                        </div>


                    </div>
                )
            }
        </div>
    )
}

export default SignModule