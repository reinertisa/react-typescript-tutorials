import React from 'react'

type Button3Props = {
    variant: 'primary' | 'secondary'
    children: string
} & Omit<React.ComponentProps<'button'>, 'children'> & Omit<React.ComponentProps<'button'>, 'onClick'>

export default function CustomButton3({variant, children, ...rest}: Button3Props) {

    return (
        <button className={`class-with-${variant}`} {...rest}>{children}</button>
    )
}