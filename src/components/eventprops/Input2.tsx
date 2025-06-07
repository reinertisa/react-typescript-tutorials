import React from 'react';

type Input2Props = {
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function Input2({value, onChange}: Input2Props) {

    return (
        <input type="text" value={value} onChange={(e) => onChange(e)} />
    )

}