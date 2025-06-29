import React from 'react';

type Button4Props = {
    handleClick: (e: React.MouseEvent<HTMLButtonElement>, id: number) => void
    children: React.ReactNode
}

export default function Button4({handleClick, children}: Button4Props) {

    return (
        <button onClick={(e) => handleClick(e, 10)}>
            {children}
        </button>
    )
}