"use client"

import { Context } from "@/providers/ContextManager"
import { Button, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react"
import Image from "next/image"
import { useContext } from "react"

const Nav = () => {
    const { connect, connecting, accountAddress } = useContext(Context);
    return (
        <>
            <Navbar shouldHideOnScroll maxWidth="full" className="md:px-8 border-b md:grid-cols-4" classNames={{ wrapper: "px-4" }}>
                <NavbarBrand className="flex items-center">
                    <Link href="https://www.ocvlabs.com" className="text-base flex font-semibold">
                        <Image src="/ocv.svg" alt="OCV Labs Logo" width={60} height={20} />
                    </Link>
                    <svg className="h-6 text-[#000]/20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.109 14 9.466 1h1.352L5.46 14H4.109Z" fill="currentColor" />
                    </svg>

                    <Link href="/" className="text-lg flex font-semibold text-black">
                        <h2>Games</h2>
                    </Link>
                </NavbarBrand>
                {/* <NavbarContent className="hidden gap-4 sm:flex" justify="center">
                    <NavbarItem>
                        <Link color="foreground" href="#">
                            Features
                        </Link>
                    </NavbarItem>
                    <NavbarItem isActive>
                        <Link href="#" aria-current="page">
                            Customers
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link color="foreground" href="#">
                            Integrations
                        </Link>
                    </NavbarItem>
                </NavbarContent> */}
                <NavbarContent justify="end">
                    {/* <NavbarItem className="hidden lg:flex">
                        <Link href="#">Login</Link>
                    </NavbarItem> */}
                    <NavbarItem>
                        <Button isDisabled={accountAddress} isLoading={connecting} size="sm" variant="ghost" color={accountAddress ? "primary" : "default"} onClick={connect}>
                            {accountAddress ? "Connected" : "Connect Wallet"}
                        </Button>
                    </NavbarItem>
                </NavbarContent>
            </Navbar>
        </>

    )
}

export default Nav