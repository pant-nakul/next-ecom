"use client";

import React from 'react'
import Image from "next/image";
import {MediaItem} from "@wix/stores_products";

/*
const images = [
    {
        id:"1",
        url: "https://images.pexels.com/photos/2393835/pexels-photo-2393835.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        id:"2",
        url: "https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        id:"3",
        url: "https://images.pexels.com/photos/1413412/pexels-photo-1413412.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        id:"4",
        url: "https://images.pexels.com/photos/2607554/pexels-photo-2607554.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        id:"5",
        url: "https://images.pexels.com/photos/104842/bmw-vehicle-ride-bike-104842.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
]
*/


const ProductImages = ({ items }: { items: MediaItem[] }) => {

    console.log(items?.length);
    const [index, setIndex] = React.useState(0);
    return (
        <div className="">
            <div className="h-[500px] relative">
                <Image
                    src={items[index]?.image?.url!}
                    alt="main image"
                    fill
                    sizes={"30vw"}
                    className="object-cover rounded-md"
                />
            </div>
            <div className="flex justify-between gap-4 mt-8">
                {items.map((item: any, index: number) => (
                    <div key={item._id} className="w-1/4 h-32 relative gap-4 mt-8 cursor-pointer"
                         onClick={() => setIndex(index)}
                    >
                        <Image
                            src={item?.image?.url}
                            alt="main image"
                            fill
                            sizes={"30vw"}
                            className="object-cover rounded-md"
                        />
                    </div>
                ))}

            </div>
        </div>
    )
}
export default ProductImages
