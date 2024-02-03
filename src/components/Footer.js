import Image from "next/image"

const Footer = () => {
    return (
        <footer className="md:px-4 border-t ">
            <div className="text-zinc-800 text-tiny gap-4 flex items-center col-span-1 p-4 md:px-8 ">
                <Image src="/ocv.svg" alt="OCV Labs Logo" width={60} height={20} />
                &copy; 2024 OnChainVision
            </div>
        </footer>
    )
}

export default Footer