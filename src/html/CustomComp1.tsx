import React from 'react';

import type Greet3 from "../components/Greet3.tsx";

export default function CustomComp1(props: React.ComponentProps<typeof Greet3>) {
    const {isLoggedIn, messageCount = 0, name} = props;
    return (
        <div>{isLoggedIn ? `${name} has ${messageCount} unread emails`: 'Guest'}</div>
    )

}