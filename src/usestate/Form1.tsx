import React, {useState} from 'react';

type Name = {
    firstName: string
    lastName: string
}
export default function Form1() {
    const [name, setName] = useState<Name>({firstName: '', lastName: ''});

    const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>): void =>
        setName({...name, firstName: e.target.value});

    const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>): void =>
        setName({...name, lastName: e.target.value});

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        alert(JSON.stringify(name));
        setName({
            firstName: '',
            lastName: ''
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="firstName">First name: </label>
            <input id="firstName" type="text" value={name.firstName} onChange={handleFirstNameChange} />

            <label htmlFor="lastName">Last name: </label>
            <input id="lastName" type="text" value={name.lastName} onChange={handleLastNameChange} />

            <button type="submit">Submit</button>
            <h2>{JSON.stringify(name)}</h2>
        </form>
    )
}