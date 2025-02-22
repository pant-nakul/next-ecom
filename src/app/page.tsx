"use client";
import Slider from "@/components/Slider";
import React, {useContext, useEffect} from "react";
import ProductList from "@/components/ProductList";
import CategoryList from "@/components/CategoryList";
import {WixClientContext} from "@/context/wixContext";


const HomePage = () => {

    const wixClient = useContext(WixClientContext);

    useEffect(() => {
        const getProducts = async () => {
            const response = await wixClient.products.queryProducts().find();
            console.log("Response Get Products - ", response)
        }
        getProducts();
    },[wixClient])

    return (
        <>
            <div className="">
                <Slider/>
            </div>
            {/*FEATURED PRODUCTS*/}
            <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-32">
                <h1 className="text-2xl">Featured Products</h1>
                <ProductList/>
            </div>
            {/*CATEGORIES*/}
            <div className="mt-24 ">
                <h1 className="text-2xl px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-32 mb-12">Categories</h1>
                <CategoryList/>
            </div>
            {/*NEW PRODUCTS*/}
            <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-32">
                <h1 className="text-2xl">New Arrivals</h1>
                <ProductList/>
            </div>

        </>

    )
}

export default HomePage