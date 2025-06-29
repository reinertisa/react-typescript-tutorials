import {useState} from 'react';

type AuthUser = {
    name: string
    email: string
}

export default function User1() {

    const [user, setUser] = useState<AuthUser | null>(null)

    const handleLogin = (): void => {
        setUser({
            name: 'Isa',
            email: 'test@gmail.com'
        });
    }
    const handleLogout = (): void => {
        setUser(null);
    }

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User name is {user?.name}</div>
            <div>User email is {user?.email}</div>
        </div>
    )

}