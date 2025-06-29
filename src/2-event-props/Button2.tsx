import React from 'react'

type Button2Props = {
    handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void
}

export default function Button2(props: Button2Props) {
    return (
        <button onClick={(e) => props.handleClick(e, 1)}>Click</button>
    )
}