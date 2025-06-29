import React from 'react';

type CustomButton4Props = {
    variant: 'primary' | 'secondary'
} & React.ComponentProps<'button'>

export default function CustomButton4({variant, children, ...rest}: CustomButton4Props) {
    return (
        <button className={`class-with=${variant}`} {...rest}>{children}</button>
    )
}