"use client";
import React from 'react'
import Image from "next/image";
import Link from "next/link";

const Menu = () => {
    const [open, setOpen] = React.useState(false);

    return (
        <div className="">
            <Image src="/menu.png" alt={"menu"} width={28} height={28}
                   className={"cursor-pointer"}
               onClick={() => setOpen((prev) => !prev)}
            />{
            open && (
                <div className="absolute bg-black text-white
                 left-0 top-20 w-full h-[calc(100vh-80px)]
                 flex flex-col items-center justify-center
                 gap-8 text-xl z-10">
                    <Link href="/homepage">Homepage</Link>
                    <Link href="/homepage">Shop</Link>
                    <Link href="/homepage">Deals</Link>
                    <Link href="/homepage">About</Link>
                    <Link href="/homepage">Contact</Link>
                    <Link href="/homepage">Logout</Link>
                    <Link href="/homepage">Cart(1)</Link>
                </div>
            )
        }
        </div>
    )
}
export default Menu
