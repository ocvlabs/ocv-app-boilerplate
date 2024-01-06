"use client"

import React, { createContext, useEffect, useState } from "react";
import { NextUIProvider } from "@nextui-org/react";

export const Context = createContext();

export const ContextManager = (props) => {
    // states

    const value = {
        // values
    };

    return (
        <NextUIProvider>
            <Context.Provider value={value}>
                {props.children}
            </Context.Provider>
        </NextUIProvider>
    );
};
