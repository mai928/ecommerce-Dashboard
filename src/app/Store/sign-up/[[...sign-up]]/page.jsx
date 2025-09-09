"use client"
import { SignOutButton, SignUp, useUser } from '@clerk/nextjs';
import { ArrowRightCircle } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const SignUppage = () => {
  const { user } = useUser()
  return (
    <div className="min-h-screen flex items-center  gap-5 px-20 mt-14  bg-center  z-0">
    {/* <div className="bg-[url('/login-img.png')]  bg-cover h-screen lg:w-1/2 hidden lg:block rounded-lg " /> */}
      <img className='object-cover w-1/2 border-[1px] shadow-2xl rounded-lg' src={'/login-img.png'}/>

    <div className='lg:w-1/2 flex justify-center items-center   '>
      {
        user ? (
          <div className='border-[1px] border-gray-700 shadow-md shadow-gray-600 rounded-lg  text-white w-[500px] h-[300px] p-10'  >
            <h2 className='text-lg capitalize font-semibold '>Welcome Back , {user.firstName} {user.lastName}</h2>

            <p className=' text-sm capitalize my-1 '>you're already signed up  </p>
            <div className='text-center pt-10'>
              <Link href={'/Store'} className='bg-gradient-to-r from-blue-600 to-blue-400 hover:opacity-90 transition-opacity px-5 py-2 rounded-md capitalize '>go to Dashboard</Link>

              <p className='mt-4'>OR</p>
              <div className='text-gray-400  flex m-auto w-full mt-3'>
                <SignOutButton redirectUrl='/Store'>
                  <button className='w-full flex items-center justify-center gap-1'>Sign Out  <ArrowRightCircle size={18} style={{ marginTop: '5px' }} />
                  </button>
                </SignOutButton>


              </div>

            </div>

          </div>
        ) :

          (
            <div className="relative z-30 signin-store ">
              <SignUp

                appearance={{
                  variables: {

                  },
                  elements: {
                    card: ' bg-transparent h-[98vh]   relative z-30 ',
                    footer: 'bg-transparent border-none clerk',
                    headerTitle: ' text-center  ',
                    headerSubtitle: 'text-gray-400 ',
                    formFieldInput: 'border rounded px-3 py-2',
                    formButtonPrimary: 'bg-primary_blue',
                    formFieldLabel: "text-black",

                  },
                }}
                fallbackRedirectUrl='/Store' path="/Store/sign-up" routing='path' /></div>
          )
      }

    </div>

  </div>
  );
};

export default SignUppage;