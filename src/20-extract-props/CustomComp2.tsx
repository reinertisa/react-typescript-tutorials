import React from 'react';
import type Greet2 from "../1-props/Greet2.tsx";

type CustomComp2Props = React.ComponentProps<typeof Greet2>

export default function CustomComp2(props: CustomComp2Props) {

    return (
        <div>{props.name} - {props.isLoggedIn} - {props.messageCount}</div>
    )

}