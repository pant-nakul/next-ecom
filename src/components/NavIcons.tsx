"use client";
import React from 'react'
import Image from "next/image";
import Link from "next/link";
import {useRouter} from "next/navigation";
import CartModal from "@/components/CartModal";

const NavIcons = () => {
    const router = useRouter();
    const [isProfileOpen, setIsProfileOpen] = React.useState(false);
    const [isCartOpen, setIsCartOpen] = React.useState(false);

    // TEMPORARY
    const isLoggedIn = true;

    const handleProfileChange = () => {
        if (!isLoggedIn) {
            router.push("/login");
        }
        setIsProfileOpen((prev) => !prev);
    }


    return (
        <div className="flex items-center gap-4 xl:gap-6 2xl:gap-8 relative">
            <Image src="/profile.png" alt="Profile" height={22} width={22}
                   className="cursor-pointer"
                   onClick={handleProfileChange}
            />
            {isProfileOpen && (
                <div className="absolute p-4 rounded-md top-12 left-0 text-sm
                 z-40 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                    <Link href="/profile">Profile</Link>
                    <div className="mt-2 cursor-pointer">Logout</div>
                </div>
            )}
            <Image src="/notification.png" alt="Notification" height={22} width={22} className="cursor-pointer"/>
            <div className="cursor-pointer relative">
                <Image src="/cart.png" alt="Cart" height={22} width={22} className=""
                       onClick={() => setIsCartOpen((prev) => !prev)}/>
                <div className="absolute -top-4 -right-4 w-6 h-6  bg-red-400
                    rounded-full text-white text-sm flex items-center justify-center
                ">2</div>
            </div>
            {isCartOpen && (
                <CartModal/>
            )}
        </div>
    )
}
export default NavIcons
