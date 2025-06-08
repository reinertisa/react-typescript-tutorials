import {useContext} from 'react';
import {UserContext2} from "./UserContext2.tsx";


export default function User1() {
    const userContext = useContext(UserContext2);
    const {user, setUser} = userContext;
    const handleLogin = (): void => {
        setUser({
            name: 'John',
            email: 'test@gmail.com'
        })
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