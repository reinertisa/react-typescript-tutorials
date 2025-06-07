import React from 'react'

type Heading3Props = {
    children: React.ReactNode,
    status: 'load' | 'error' | 'success'
    type: string | number
    name: object
    isPositive?: boolean
}

export default function Heading3({status, type, name, isPositive, children}: Heading3Props) {

    let msg
    if (status === 'success') {
        msg = 'Data fetched successfully'
    } else if (status === 'load') {
        msg = 'Data is loading...'
    } else if (status === 'error') {
        msg = 'Something went wrong';
    }

    return (
        <div>
            <h2>{children}</h2>
            <h2>{msg}</h2>
            <h2>{isPositive ? 'positive' : 'negative'}</h2>
            <h2>{JSON.stringify(name)}</h2>
            <h2>{typeof type === 'number' ? type * 2 : type}</h2>
        </div>
    )
}