"use client"
import React, {useEffect, useState} from 'react'
import Link from "next/link";
import Image from "next/image";

const slides = [
    {
        id: 1,
        title: "Summer Sale Collection",
        description: "Sale! Upto 50% off!",
        img: "https://images.pexels.com/photos/5424910/pexels-photo-5424910.jpeg?auto=compress&cs=tinysrgb&w=1200",
        url: "/",
        bg: "bg-gradient-to-r from-yellow-50 to-pink-50"
    },
    {
        id: 2,
        title: "Winter Sale Collection",
        description: "Sale! Upto 40% off!",
        img: "https://images.pexels.com/photos/14641437/pexels-photo-14641437.jpeg?auto=compress&cs=tinysrgb&w=1200",
        url: "/",
        bg: "bg-gradient-to-r from-pink-50 to-blue-50"
    },
    {
        id: 3,
        title: "Spring Sale Collection",
        description: "Sale! Upto 60% off!",
        img: "https://images.pexels.com/photos/8386642/pexels-photo-8386642.jpeg?auto=compress&cs=tinysrgb&w=1200",
        url: "/",
        bg: "bg-gradient-to-r from-blue-50 to-red-50"
    },
]


const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    // useEffect(() => {
    //     const interval = setInterval(()=>{
    //         setCurrentSlide(prev => prev === slides.length -1 ? 0 : prev+1);
    //     },3000)
    //     return () => clearInterval(interval);
    // },[])

    return (
        <div className="h-[calc(100vh-80px)] overflow-hidden">
            <div className="w-max h-full flex transition-all ease-in-out duration-1000"
            style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
                {slides.map((slide) => (
                    <div className={`${slide.bg} w-screen h-full flex flex-col gap-16 xl:flex-row`} key={slide.id}>
                        {/*Text Container*/}
                        <div className="h-1/2 xl:w-1/2 xl:h-full flex flex-col items-center justify-center gap-8
                        2xl:gap-12 text-center
                        ">
                            <h2 className="text-xl lg:text-3xl 2xl:text-5xl ">{slide.description}</h2>
                            <h1 className="text-5xl lg:text-6xl 2xl:text-8xl font-semibold">{slide.title}</h1>
                            <Link href={slide.url}>
                                <button className="rounded-md bg-black text-white py-3 px-4">SHOP NOW</button>
                            </Link>
                        </div>
                        {/*IMAGE CONTAINER*/}
                        {<div className="h-1/2 xl:w-1/2 xl:h-full relative">
                            <Image src={slide.img} alt={"slide image"}
                                   fill sizes="100%" className="object-cover"
                            />
                        </div>}
                    </div>
                ))}
            </div>
            <div className="absolute m-auto left-1/2 flex gap-4 bottom-8">
                {slides.map((slide, index) => (
                    <div className={`w-3 h-3 rounded-full ring-1 ring-gray-400 cursor-pointer
                        flex items-center justify-center ${currentSlide === index ? "scale-150" : ""}
                `       } key={slide.id}
                         onClick={() => setCurrentSlide(index)}
                    >
                        {currentSlide === index && (
                            <div className="w-[6px] h-[6px] bg-gray-600 rounded-full"></div>
                        )}
                    </div>
                ))}

            </div>
        </div>
    )
}
export default Slider
