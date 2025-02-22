import React from 'react'
import ProductImages from "@/components/ProductImages";

const SinglePage = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-16 px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-32 relative">
            {/*IMAGE*/}
            <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
                <ProductImages/>
            </div>
            {/*TEXT*/}
            <div className="w-full lg:w-1/2 flex flex-col gap-6">
                TEXTS
            </div>
        </div>
    )
}
export default SinglePage
