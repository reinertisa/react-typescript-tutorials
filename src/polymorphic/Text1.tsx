import React from 'react';

type Text1OwnProps<E extends React.ElementType> = {
    size: 'sm' | 'md' | 'lg'
    color?: 'primary' | 'secondary'
    children: React.ReactNode
    as?: E
}

type Text1Props<E extends React.ElementType> = Text1OwnProps<E> &
    Omit<React.ComponentProps<E>, keyof Text1OwnProps<E>>

export default function Text1<E extends React.ElementType = 'div'>({as, size, color, children}: Text1Props<E>) {

    const Component = as || 'div';

    return (
        <Component className={`class-with-${size}-${color}`}>{children}</Component>
    )
}