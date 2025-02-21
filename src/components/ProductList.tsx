"use client";

import React from 'react'
import Link from "next/link";
import Image from "next/image";

const ProductList = () => {
    return (
        <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">

            <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:[22%]">
                <div className="relative w-full h-80">
                    <Image src="https://images.pexels.com/photos/2307303/pexels-photo-2307303.jpeg?auto=compress&cs=tinysrgb&w=1200" alt={"logo"}
                           fill sizes={"25vw"}
                           className="absolute object-cover rounded-md z-10 hover:opacity-0
                           transition-opacity easy duration-500"
                    />
                    <Image src="https://images.pexels.com/photos/1176618/pexels-photo-1176618.jpeg?auto=compress&cs=tinysrgb&w=1200" alt={"logo"}
                           fill sizes={"25vw"}
                           className="absolute object-cover rounded-md z-10 hover:opacity-0
                           transition-opacity easy duration-500"
                    />
                </div>
                <div className="flex justify-between">
                    <span className="font-semibold">Product Name</span>
                    <span className="font-medium">$123</span>
                </div>
                <div className="text-sm text-gray-500">My Description</div>
                <button type="button" className="rounded-2xl ring-1 ring-lama w-max
                    text-xs py-2 px-4 text-lama hover:bg-lama hover:text-white">
                Add to Cart</button>
            </Link>

        </div>
    )
}
export default ProductList
