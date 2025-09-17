'use client'
import useCartStore from '@/StoreComponents/zustand/CartStore'
import { AlertCircle, AlertOctagon, ArrowRight, ChevronLeft, Lock } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'
import { apple_paypal, lock, master, money, visa } from '../../../../data'
import { loadStripe } from "@stripe/stripe-js";
import { ShowToast } from '@/StoreComponents/Toast'


const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)


const Checkout = () => {

    const truncate = (title) => {
        return title?.length > 5 ? title.slice(0, 17) + "..." : title
    }

    const Cart = useCartStore((state) => state.Cart)
    const getTotal = useCartStore((state) => state.getTotal())
    const [selected, setSelected] = useState("cash on delivery");

    const totalPrice = getTotal + (selected === "cash on delivery" ? 70 : 50)

    const [address, setAdress] = useState('')
    const [phone, setPhone] = useState('')
    const [city, setCity] = useState('')


    const [loading, setLoading] = useState(false)
    const [error, setError] = useState({
        address: '',
        phone: '',
        city: ''
    })

    const validationField = (name, value) => {
        let errorMessage = ''
        if (!value.trim()) {
            errorMessage = `${name} is required`
        } else if (name === 'phone'   && !/^\d{10,15}$/.test(value)) {
            errorMessage = `please enter a vaild phone number`

        }

        setError((prev) => ({ ...prev, [name]: errorMessage }))
        return errorMessage === ''
    }



    const handleSubmit = async (e) => {

        setLoading(true)
        const isAdressVaild = validationField('address', address)
        const isPhoneVaild = validationField('phone', phone)
        const isCityVaild = validationField('city', city)

        e.preventDefault();
        if (selected === "cash on delivery") {


            if (!isAdressVaild || !isPhoneVaild || !isCityVaild) {
                setLoading(false)
                return
            }
            ShowToast('Order placed successfully (Cash on Delivery)!', { isLoading: false });
            return;
        }

        try {
            const res = await fetch("/api/stripe", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    address,
                    phone,
                    city,
                    items: Cart,
                    customer: { email: "test@example.com" },
                }),


            });


            // console.log(res.body)
            const data = await res.json();
            const stripe = await stripePromise
            await stripe.redirectToCheckout({ sessionId: data.id });

        }
        catch (error) {
            console.log("payment error", error)
        }
        finally {
            setLoading(false)

        }

    }

    return (
        <section className=' px-40 py-10 bg-gray-50'>
            <ShowToast />
            <h2 className='text-2xl font-semibold'>Checkout</h2>
            <div className='flex gap-5 w-full mt-7 '>
                <div className='w-[70%] '>
                    {/* payment method */}
                    <div className='bg-white shadow-md rounded-md px-4 py-4'>
                        <p className='text-lg font-semibold'>Payment Method</p>

                        <div className='flex items-center justify-between border-2 p-4 border-gray-200 rounded-lg mt-5 '>
                            <div className=' '>
                                <label className='flex  items-center gap-2'>
                                    <input className='w-5 h-5' type={'radio'} value={'cash on delivery'} checked={selected === 'cash on delivery'} onChange={(e) => setSelected(e.target.value)} />
                                    {money('rgb(234 179 8)')}
                                    <h3 className='text-lg font-semibold'>Cash on Delivery</h3>
                                </label>
                                <p className='ms-14 text-gray-600'>Pay when your order arrives</p>
                                {/* condition */}
                                {
                                    selected === 'cash on delivery' && <p className='ms-6  border-[1px] border-yellow-500 rounded-lg flex gap-1 text-yellow-600 bg-yellow-50 my-3 py-2 px-3'> <AlertCircle color='white' fill=' rgb(234 179 8 )' /> Please keep exact change ready for hassle-free delivery</p>

                                }
                            </div>

                            <p className='text-yellow-500  text-lg'>No Extra Charges</p>

                        </div>

                        <div className='flex items-center justify-between border-2 p-4 border-gray-200 rounded-lg  mt-5 '>
                            <div className=''>
                                <label className='flex items-center gap-2'>
                                    <input className='w-5 h-5' type={'radio'} value={'online'} checked={selected === 'online'} onChange={(e) => setSelected(e.target.value)} />
                                    {visa('rgb(234 179 8)')}

                                    <h3 className='text-lg font-semibold'>Online Payment</h3>
                                </label>
                                <p className='ms-14 text-gray-600'>Pay securely with card or digital wallet</p>
                                {/* condition */}
                                {
                                    selected === 'online' && <p className='ms-6  border-[1px] border-blue-500 rounded-lg flex gap-1 text-blue-600 bg-blue-100 my-3 py-2 px-3'> <AlertCircle color='white' fill=' rgb(29 78 216 )' /> You will be redirected to secure payment gateway to complete your payment</p>
                                }
                            </div>
                            <p className='text-yellow-500  text-lg'>Recommended</p>

                        </div>
                    </div>


                    {/* Shipping address */}
                    <form onSubmit={handleSubmit} className='bg-white shadow-md rounded-md px-4 py-10 mt-5'>
                        <label className='block text-sm font-semibold text-gray-700'>Adress Details *</label>
                        <textarea value={address} onChange={(e) => {
                            setAdress(e.target.value)
                            validationField('address', e.target.value)
                        }} className='w-full border-[1px] ps-2 py-2 rounded-md mt-3 placeholder:text-[17px] ' rows={'3'} placeholder='Enter your full address' />
                        {error.address && <p className='text-red-600 text-sm font-semibold mt-1'>{error.address}</p>}

                        <div className=' flex items-center justify-center gap-3 mt-5 m w-full'>
                            <div className='w-full'>
                                <label className='block text-sm font-semibold text-gray-700'>Phone Number *</label>
                                <input value={phone} onChange={(e) => {
                                    setPhone(e.target.value)
                                    validationField('phone', e.target.value)
                                }} className='w-full  border-[1px] ps-2 py-3 rounded-md mt-2 placeholder:text-[17px]' placeholder='01035554286' />
                                {error.phone && <p className='text-red-600 text-sm font-semibold mt-2'>{error.phone}</p>}

                            </div>

                            <div className='w-full'>
                                <label className='block text-sm font-semibold text-gray-700'>City *</label>
                                <input value={city} onChange={(e) => {
                                    setCity(e.target.value)
                                    validationField('city', e.target.value)
                                }} className='w-full border-[1px] ps-2 py-3 rounded-md mt-2 placeholder:text-[17px] ' placeholder='Cairo' />
                                {error.city && <p className='text-red-600 text-sm font-semibold mt-2'>{error.city}</p>}

                            </div>

                        </div>


                    </form>

                </div>

                <div className='w-[30%]'>
                    <div className='bg-white p-5'>
                        <p className='font-semibold text-xl mb-3'>Order Summary</p>
                        <div>
                            {
                                Cart?.length > 0 && (

                                    <div className='overflow-y-scroll h-72'>
                                        {
                                            Cart?.map((item) => (

                                                <Link href={''} className="flex  justify-between my-3 p-2 border-b border-gray-200">
                                                    <img
                                                        className="w-16 h-16 object-cover border border-gray-200 rounded-lg bg-gray-100"
                                                        src={item.imageUrl}
                                                        alt={item.title}
                                                    />

                                                    <div className="flex-1 ms-3">
                                                        <h3 className="font-medium text-gray-800">{truncate(item.title)}</h3>
                                                        <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                                                    </div>

                                                    <p className="font-semibold text-[14px] mt-10 text-gray-600">
                                                        {parseFloat(item.quantity) * parseFloat(item.price)} EGP
                                                    </p>
                                                </Link>
                                            ))
                                        }
                                    </div>

                                )

                            }

                            <div>
                                {/* <div className='border-t-[1px] border-gray-200 ' /> */}
                                <div className='flex justify-between items-center mt-2'>
                                    <p>Subtotal</p>
                                    <p>{getTotal || 0} EGP</p>
                                </div>

                                <div className='flex justify-between items-center mt-2'>
                                    <p>Delivery</p>
                                    <p>{selected === 'cash on delivery' ? 70 : 0} EGP</p>
                                </div>

                                <div className='flex justify-between items-center mt-2'>
                                    <p>Tax</p>
                                    <p>{selected === 'online' ? 50 : 0} EGP</p>
                                </div>
                                <div className='border-t-[1px] border-gray-200 mt-2 ' />

                                <div className='flex justify-between items-center mt-2'>
                                    <p className='text-lg font-semibold'>Total</p>
                                    <p>{totalPrice || 0} EGP</p>
                                </div>

                                <button
                                    onClick={handleSubmit}
                                    disabled={loading}
                                    className="bg-gray-300 w-full mt-6 py-2 rounded-md text-gray-500 text-lg flex items-center justify-center gap-2"
                                >
                                    {loading ? "Processing..." : "Proceed to Payment"}
                                    <ArrowRight size={20} />
                                </button>
                                <button className=' border-[1px] border-gray-300 w-full my-3 py-2 rounded-md text-gray-900  text-lg  flex items-center justify-center gap-2'><ChevronLeft /> Previous Step</button>


                                <div>
                                    <h3 className='text-lg font-semibold'>Secure Checkout</h3>
                                    <p className='flex gap-2 items-center text-gray-500  '>{lock('rgb(21 128 61')} Your payment information is secure</p>
                                    <div className='flex items-center gap-2 mt-2'>
                                        {visa('rgb(30 58 138 )')}
                                        {master('rgb(185 28 28)')}
                                        {apple_paypal('black')}
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </div>


        </section>
    )
}

export default Checkout