import React from "react";

type CustomInput1Props = {
    type: 'email'
    children: string
    value: string
} & Omit<React.ComponentProps<'input'>, 'type' | 'value'>

export default function CustomInput1({type, value, ...rest}: CustomInput1Props) {
    return (
        <div>
            <input type={type} value={value} {...rest} />
        </div>
    )
}