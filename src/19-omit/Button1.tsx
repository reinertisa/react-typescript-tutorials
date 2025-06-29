import React from 'react';

type Button2Props = {
    variant: 'primary' | 'secondary'
    text: string
} & Omit<React.ComponentProps<'button'>, 'children'>
export default function CustomButton2({variant, text, ...rest}: Button2Props) {

    return (
        <button className={`class-with-${variant}`} {...rest}>{text}</button>
    )
}