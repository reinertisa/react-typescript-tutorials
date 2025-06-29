import React from 'react';

type ButtonProps = {
    children: React.ReactNode
    clickHandler: () => void
}

export default function Button({clickHandler, children}: ButtonProps) {
    return (
        <button onClick={clickHandler}>{children}</button>
    )
}