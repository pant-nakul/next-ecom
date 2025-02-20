"use client";

import React from 'react'
import Image from "next/image";

const CartModal = () => {

    const cartItems = true;

    return (
        <div className="w-max absolute p-4 rounded-md shadow-lg flex flex-col
        bg-white top-12 right-0 gap-6 z-20 shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
        >
            {!cartItems ? (
                <div> Cart is Empty</div>
            ) : (
                <>
                    <h2 className="text-gray-500 font-semibold">Shopping Cart</h2>
                    {/*LIST*/}
                    <div className="flex flex-col gap-8">
                        {/*ITEM*/}
                        <div className="flex gap-4">
                            <Image
                                src="https://images.pexels.com/photos/30754472/pexels-photo-30754472/free-photo-of-elegant-dining-experience-in-istanbul-restaurant.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
                                alt="Cart" height={72} width={96}
                                className="object-cover rounded-md"/>
                            <div className="flex flex-col justify-between w-full">
                                {/*TOP*/}
                                <div className="">
                                    {/*TITLE*/}
                                    <div className="flex items-center justify-between gap-8">
                                        <h3 className="font-semibold">Product Name</h3>
                                        <div className="p-1 bg-gray-100 rounded-md">$100</div>
                                    </div>
                                    {/*Description*/}
                                    <div className="text-sm text-gray-500">
                                        available
                                    </div>
                                </div>
                                {/*BOTTOM*/}
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray">Qty:2</span>
                                    <span className="text-blue-400">Remove</span>
                                </div>
                            </div>
                        </div>
                        {/*ITEM*/}
                        <div className="flex gap-4">
                            <Image
                                src="https://images.pexels.com/photos/30754472/pexels-photo-30754472/free-photo-of-elegant-dining-experience-in-istanbul-restaurant.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
                                alt="Cart" height={72} width={96}
                                className="object-cover rounded-md"/>
                            <div className="flex flex-col justify-between w-full">
                                {/*TOP*/}
                                <div className="">
                                    {/*TITLE*/}
                                    <div className="flex items-center justify-between gap-8">
                                        <h3 className="font-semibold">Product Name</h3>
                                        <div className="p-1 bg-gray-100 rounded-md">$100</div>
                                    </div>
                                    {/*Description*/}
                                    <div className="text-sm text-gray-500">
                                        available
                                    </div>
                                </div>
                                {/*BOTTOM*/}
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray">Qty:2</span>
                                    <span className="text-blue-400">Remove</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*// BOTTOM*/}
                    <div className="">
                        <div className="flex items-center justify-between font-semibold">
                            <span className="text-gray">Subtotal</span>
                            <span className="text-gray">$200</span>
                        </div>
                        <p className="text-sm text-gray-500 mt-2 mb-4">Shipping and Taxes calculated at checkout.</p>
                        <div className="flex  justify-between font-semibold text-sm">
                            <button className="rounded-md py-3 px-4 ring-1 ring-gray-400">View Cart</button>
                            <button className="rounded-md py-3 px-4 bg-black text-white">Checkout</button>
                        </div>
                    </div>
                </>

            )}
        </div>
    )
}
export default CartModal
