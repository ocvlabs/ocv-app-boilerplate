import Image from "next/image"
import { Logo } from "./Logo"

const Footer = () => {
    return (
        <footer className="border-t md:px-4 ">
            <div className="flex items-center col-span-1 gap-4 p-4 text-zinc-800 text-tiny md:px-8 ">
                <Logo />
                &copy; 2024 OnChainVision
            </div>
        </footer>
    )
}

export default Footer