import React, {createContext, useReducer} from 'react';
import {type CountActionType, countReducer, initialState} from "./countReducer.ts";

export const CountContext = createContext({} as CountContextType);

type CountContextType = {
    count: number
    dispatch: React.ActionDispatch<[action: CountActionType]>
}

type CountContextProviderProps = {
    children: React.ReactNode
}


export default function CountContextProvider({children}: CountContextProviderProps) {
    const [count, dispatch] = useReducer(countReducer, initialState);

    return (
        <CountContext.Provider value={{count, dispatch}}>
            {children}
        </CountContext.Provider>
    )
}