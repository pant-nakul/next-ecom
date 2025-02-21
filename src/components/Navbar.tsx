import React from 'react'
import Link from "next/link";
import Menu from "@/components/Menu";
import Image from "next/image";
import SearchBar from "@/components/SearchBar";
import NavIcons from "@/components/NavIcons";

const Navbar = () => {
    return (
        <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-32 relative">
            {/*MOBILE*/}
            <div className="h-full flex items-center justify-between md:hidden">
                <Link href="/">
                    <div className="text-2xl tracking-wider">{process.env.APP_NAME}</div>
                </Link>
                {/*MENU*/}
                <Menu/>
            </div>
            {/*BIGGER SCREENS*/}
            <div className="hidden md:flex items-center
            justify-between gap-8 h-full">
                {/*LEFT*/}
                <div className="w-1/3 flex items-center gap-8">
                    <Link href="/" className="flex items-center gap-3">
                        <div className="text-2xl tracking-wider">{process.env.APP_NAME}</div>
                        <Image src="/logo.png" alt="Logo" width={24} height={24} />
                    </Link>
                    <div className="hidden xl:flex gap-4">
                        <Link href="/">Homepage</Link>
                        <Link href="/">Shop</Link>
                        <Link href="/">Deals</Link>
                        <Link href="/">About</Link>
                        <Link href="/">Contact</Link>
                    </div>
                </div>
                {/*RIGHT*/}
                <div className="w-2/3 flex items-center justify-between gap-8">
                    <SearchBar/>
                    <NavIcons/>
                </div>
            </div>

        </div>
    )
}
export default Navbar
