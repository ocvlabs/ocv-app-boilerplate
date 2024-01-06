import Image from "next/image"

const Footer = () => {
    return (
        <nav className="px-4 border-t md:px-8 border-zinc-700">
            <div className="text-[#b3cde0] gap-4 flex items-center col-span-1 p-4 text-sm border-x md:px-8 border-zinc-700">
                <Image src="/ocv.svg" alt="OCV Labs Logo" width={50} height={20} />
                &copy; 2024 OnChainVision
            </div>
        </nav>
    )
}

export default Footer