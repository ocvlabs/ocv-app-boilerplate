"use client"

import React, { createContext, useEffect, useState } from "react";
import { NextUIProvider } from "@nextui-org/react";
import { ethers } from "ethers";

export const Context = createContext();

export const ContextManager = (props) => {
    // states
    const [signer, setSigner] = useState(null);
    const [provider, setProvider] = useState(null);
    const [amount, setAmount] = useState(1);
    const [accountAddress, setAccountAddress] = useState(null);

    const [connecting, setConnecting] = useState(false);

    const connect = async () => {
        let signer = null;
        let provider;
        setConnecting(true);
        if (window.ethereum == null) {
            console.log("MetaMask not installed; using read-only defaults")
            // provider = ethers.getDefaultProvider()
            setConnecting(false);
            return;
        } else {
            provider = new ethers.BrowserProvider(window.ethereum)
            signer = await provider.getSigner();
            setConnecting(false);
        }

        setSigner(signer);
        setProvider(provider);

        const accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
        });

        setAccountAddress(accounts[0]);
    }

    const donate = async () => {
        await connect();
        const tx = await signer.sendTransaction({
            to: "0x498136Bc36a3FC473E77eCCbE5d662Fc2cA2a6dc",
            value: ethers.parseEther(String(amount))
        });
        receipt = await tx.wait();
    }

    const value = {
        connect, donate, setAmount, amount, signer, provider, accountAddress, connecting
    };

    return (
        <NextUIProvider>
            <Context.Provider value={value}>
                {props.children}
            </Context.Provider>
        </NextUIProvider>
    );
};
