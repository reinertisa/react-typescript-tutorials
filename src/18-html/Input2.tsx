import React from 'react';

type CustomInput2Props = React.ComponentProps<'input'>;

export default function CustomInput2({...rest}: CustomInput2Props) {

    return (
        <input {...rest} />
    )
}