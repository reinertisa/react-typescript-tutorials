import React from 'react';

type Greet6Props = {
    name: string
    messageCount?: number
    isLoggedIn: boolean
    children: React.ReactNode
}

export default function Greet6({name, messageCount = 0, isLoggedIn, children}: Greet6Props) {

    return(
        <div>
            <h2>{isLoggedIn ? `${name} has ${messageCount} unread message` : 'Guest'}</h2>
            <h2>{children}</h2>
        </div>
    )
}