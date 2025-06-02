import React from 'react';

type Container1Props = {
    styles: React.CSSProperties
}

export default function Container1(props: Container1Props) {
    return (
        <div style={props.styles}>
            Text content goes here
        </div>
    )
}