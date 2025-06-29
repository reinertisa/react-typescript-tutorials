import React from 'react';

type CustomButton6Props = {
    variant: 'primary' | 'secondary'
    children: string
} & React.ComponentProps<'button'>;

export default function CustomButton6({variant, children, ...rest}: CustomButton6Props) {

    return (
        <button className={`button-${variant}`} {...rest}>
            {children}
        </button>
    )
}