import React from 'react'
import Image from "next/image";
import Filter from "@/components/Filter";
import ProductList from "@/components/ProductList";

const ListPage = () => {
    return (
        <div className="px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-32 relative">
            {/*CAMPAIGN*/}
            <div className="bg-pink-50 px-4 hidden sm:flex justify-between h-64">
                {/*TEXT*/}
                <div className="w-2/3 flex flex-col items-center justify-center gap-8">
                    <h1 className="text-4xl font-semibold leading-[48px] text-gray-700">Grab upto 50% on<br/> selected Products</h1>
                    <button className="rounded-3xl bg-lama text-white w-max py-3 px-5 text-sm">
                        Buy Now</button>
                </div>
                {/*IMAGE*/}
                <div className="relative w-1/3">
                    <Image src="/woman.png" alt="campaign" fill className={"object-contain"} />
                </div>
            </div>
            {/*FILTER*/}
            <Filter/>
            {/*PRODUCTLIST*/}
            <h1 className="mt-12 text-xl font-semibold">{"Shoes for you!"}</h1>
            <ProductList/>
        </div>
    )
}
export default ListPage
