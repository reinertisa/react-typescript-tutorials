import React from 'react';

type Button3Props = {
    handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void
    children: React.ReactNode
}

export default function Button3({handleClick, children}: Button3Props) {
    return (
        <button onClick={(e) => handleClick(e)}>{children}</button>
    )
}