import React, {createContext} from 'react';
import {theme1} from "./theme1.ts";

type ThemeContextProviderProps = {
    children: React.ReactNode
}

export const ThemeContext1 = createContext(theme1);

export default function ThemeContextProvider({children}: ThemeContextProviderProps) {

    return (
        <ThemeContext1.Provider value={theme1}>
            {children}
        </ThemeContext1.Provider>
    )
}