import React from 'react'

type Input1Props = {
    value: string
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function Input1(props: Input1Props) {

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value)
    }
    return (
        <div>
            <input value={props.value} onChange={props.handleChange} />
            <input value={props.value} onChange={handleInputChange} />
        </div>
    )
}