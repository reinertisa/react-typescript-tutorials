import React from 'react';
import useInput1 from "./useInput1.ts";

type UserForm1Props = {
    onSave: (first: string, last: string) => void
}

export default function UserForm1({onSave}: UserForm1Props) {

    const [firstName, firstNameBind, firstNameReset] = useInput1('')
    const [lastName, lastNameBind, lastNameReset] = useInput1('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        onSave(firstName, lastName)
        firstNameReset();
        lastNameReset();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="firstName">First name: </label>
            <input id="firstName" type="text" {...firstNameBind} />

            <label htmlFor="lastName">Last name: </label>
            <input id="lastName" type="text" {...lastNameBind} />

            <button type="submit">Submit</button>
        </form>
    )
}