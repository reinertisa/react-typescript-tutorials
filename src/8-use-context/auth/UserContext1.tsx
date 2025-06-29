import React, {useState, createContext} from 'react';

export type AuthUser = {
    name: string
    email: string
}

type UserContextProviderProps = {
    children: React.ReactNode
}

type UserContextType = {
    user: AuthUser | null
    setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>
}

export const UserContext1 = createContext<UserContextType | null>(null);

export default function UserContextProvider({children}: UserContextProviderProps) {
    const [user, setUser] = useState<AuthUser | null>(null);
    return (
        <UserContext1.Provider value={{user, setUser}}>
            {children}
        </UserContext1.Provider>
    )
}

