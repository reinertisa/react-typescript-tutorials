import React, {createContext, useState} from 'react';

export const UserContext3 = createContext<UserContextType | null>(null);

type AuthUser = {
    name: string
    email: string
}

type UserContextType = {
    user: AuthUser | null
    setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>
}

type UserContextProviderProps = {
    children: React.ReactNode
}

export default function UserContextProvider({children}: UserContextProviderProps) {
    const [user, setUser] = useState<AuthUser | null>(null);
    return (
        <UserContext3.Provider value={{user, setUser}}>
            {children}
        </UserContext3.Provider>
    )
}