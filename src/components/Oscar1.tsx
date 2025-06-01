import React from 'react'

type Oscar1Props = {
    children: React.ReactNode
}

export default function Oscar1(props: Oscar1Props) {
    return (
        <div>
            {props.children}
        </div>
    )
}