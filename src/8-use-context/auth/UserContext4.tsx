import React, {createContext, useState} from 'react'

export const UserContext4 = createContext({} as UserContext4Type);

type AuthUser = {
    name: string
    email: string
}

type UserContext4Type = {
    user: AuthUser | null
    setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>
}

type UserContext4ProviderProps = {
    children: React.ReactNode
}

export default function UserContext4Provider({children}: UserContext4ProviderProps) {

    const [user, setUser] = useState<AuthUser | null>(null);

    return (
        <UserContext4.Provider value={{user, setUser}}>
            {children}
        </UserContext4.Provider>
    )
}