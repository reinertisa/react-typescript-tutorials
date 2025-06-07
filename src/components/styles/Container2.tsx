import React from 'react';

type Container2Props = {
    styles: React.CSSProperties
}

export default function Container2({styles}: Container2Props) {

    return (
        <div style={styles}>
            hello world
        </div>
    )
}