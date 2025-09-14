"use client"
import { ShieldAlert } from 'lucide-react'
import React, { useEffect } from 'react'

const Model = ({ ConfirmRemove, CancelRemove, model }) => {
    
    useEffect(() => {
        if (model) {
            document.body.classList.add('open-Model')
        } else {
            document.body.classList.remove('open-Model')

        }

        return () => { document.body.classList.remove('open-Model') }


    }, [model])

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-35 h-screen z-50 overflow-hidden">

            <div className="bg-white rounded-lg shadow-lg  w-[90%] max-w-xl py-20 text-center">
                <ShieldAlert className='m-auto mb-5' size={70} color='red' />
                <h2 className="text-3xl  font-semibold text-gray-600 mb-2 ">Are you sure?</h2>
                <p className="text-lg text-gray-600 mb-4">You won't be able to revert this!</p>

                <div className="flex justify-center gap-3 mt-10">
                    <button

                        onClick={ConfirmRemove}
                        className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                    >
                        Yes, Delete it
                    </button>
                    <button
                        onClick={CancelRemove}
                        className="px-6 py-2 bg-gray-300 text-black rounded-lg hover:bg-gray-400 transition"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Model