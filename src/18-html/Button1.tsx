import React from 'react';

type ButtonProps = {
    variant: 'primary' | 'secondary'
} & React.ComponentProps<'button'>

export default function CustomButton({variant, ...rest}: ButtonProps) {
    return (
        <button className={`class-with-${variant}`} {...rest}>Label</button>
    )
}