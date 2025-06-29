import React from 'react';

type Button1Props = {
    handleClick: () => void
    children: React.ReactNode
}

export default function Button1({handleClick, children}: Button1Props) {
    console.log('Rendering button - ', children);
    return (
        <button onClick={handleClick}>
            {children}
        </button>
    )
}