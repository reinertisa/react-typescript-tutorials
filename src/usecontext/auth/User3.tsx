import {useContext} from 'react';
import {UserContext3} from "./UserContext3.tsx";

export default function User3() {
    const userContext = useContext(UserContext3)

    const handleLogin = () => {
            userContext?.setUser({
                name: 'isa',
                email: 'test@gmail.com'
            })
    }

    const handleLogout = () => {
        userContext?.setUser(null);
    }

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User name is</div>
            <div>User email is</div>
        </div>
    )
}