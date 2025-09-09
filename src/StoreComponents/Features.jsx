import { Car } from 'lucide-react'
import React from 'react'
import { featuresData } from '../../data'

const Features = () => {
    return (
        <section className='grid grid-flow-row  grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-5  py-12 lg:px-40 bg-gray-50'>
            {
                featuresData?.map((item) => (
                    <div className='flex items-center gap-3 bg-white py-3 px-5 shadow-lg rounded-md'>
                        <p className='p-2 bg-e_secondaryColor rounded-full'>{item.icon}</p>

                        <div className=''>
                            <h2 className='text-lg font-semibold'>{item.title}</h2>
                            <p className='text-gray-700'>{item.details}</p>
                        </div>
                    </div>

                ))
            }
        </section>
    )
}

export default Features