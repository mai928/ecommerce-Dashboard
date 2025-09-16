import { CheckCircle, Loader2, RotateCcw } from 'lucide-react';
import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";



const CustomToast = ({ message, isLoading }) => {
    return (
        <div className='flex items-center gap-2'>
            {
                isLoading ? <RotateCcw className=" animate-spin-reverse text-gray-600" size={25} />
                    : <CheckCircle className='text-green-500' size={25} />

            }
            <p className='text-sm font-semibold'>{message}</p>
        </div>
    )
}


// ShowToast

export const ShowToast = (message, option = {}) => {
    const {isLoading , ...toastOption}=option

    toast(<CustomToast message={message} isLoading={isLoading} />, {
        progressClassName: `${isLoading ?'Toastify__progress-bar--error':'Toastify__progress-bar--success'}`,
        autoClose: 3000,
        hideProgressBar: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        ...toastOption
    })
}

export const ToastWrapper = () => (
    <ToastContainer
        position='top-right'
        closeOnClick
        newestOnTop
        draggable
        pauseOnHover

    />
)

export default CustomToast