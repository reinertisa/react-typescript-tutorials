import {useState} from "react";

type AuthUser = {
    name: string
    email: string
}

export default function User3() {
    const [user, setUser] = useState({} as AuthUser)

    const handleLogin = (): void => setUser({
        name: 'isa',
        email: 'test@gmail.com'
    });

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <h1>name is {user.name}</h1>
            <h2>email is {user.email}</h2>
        </div>
    )
}