import React from 'react';

type CustomComponent5Props = {
    variant: 'primary' | 'secondary'
    children: string
    onClick: () => void
} & Omit<React.ComponentProps<'button'>, 'children' | 'onClick'>

export default function CustomButton5({variant, children, onClick, ...rest}: CustomComponent5Props) {

    return (
        <button onClick={onClick} className={`class-with-${variant}`} {...rest}>{children}</button>
    )
}