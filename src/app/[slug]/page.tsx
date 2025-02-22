import React from 'react'
import ProductImages from "@/components/ProductImages";
import CustomizeProducts from "@/components/CustomizeProducts";
import Add from "@/components/Add";

const SinglePage = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-16 px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-32 relative">
            {/*IMAGE*/}
            <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
                <ProductImages/>
            </div>
            {/*TEXT*/}
            <div className="w-full lg:w-1/2 flex flex-col gap-6">
                <h1 className="text-4xl font-medium">Product Name</h1>
                <p className="text-gray-500">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.

                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.
                </p>
                <div className="h-[1px] bg-gray-200"/>
                <div className=" flex items-center gap-4">
                    <h3 className="text-xl text-gray-500 line-through">$59</h3>
                    <h2 className="font-medium text-2xl text-black">$49</h2>
                </div>
                <div className="h-[1px] bg-gray-200"/>
                <CustomizeProducts/>
                <Add/>
            </div>
        </div>
    )
}
export default SinglePage
