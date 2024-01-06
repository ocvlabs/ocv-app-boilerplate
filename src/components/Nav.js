"use client"

import Image from "next/image"

const Nav = () => {
    return (
        <nav className="grid w-full grid-cols-2 px-4 border-b md:grid-cols-4 md:px-8 border-zinc-700">
            <div className="text-[#b3cde0] col-span-1 p-4 text-xl font-semibold border-l md:px-8 border-zinc-700">
                <Image src="/ocv.svg" alt="OCV Labs Logo" width={60} height={20} />
                LABS
                {/* name of ocv-product or application */}
            </div>
            <button className="flex items-center justify-center col-span-1 p-4 text-sm font-semibold text-center text-white md:text-base hover:bg-white hover:text-black md:col-start-4 border-x border-zinc-700">
                CONNECT WALLET
            </button>
        </nav>
    )
}

export default Nav