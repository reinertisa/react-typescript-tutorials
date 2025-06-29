import {useContext} from "react";
import {UserContext4} from "./UserContext4.tsx";

export default function User4() {
    const {user, setUser} = useContext(UserContext4);

    const handleLogin = (): void => {
        setUser({
            name: 'isa',
            email: 'test@gmail.com'
        })
    }

    const handleLogout = (): void => setUser(null);

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>name is {user?.name}</div>
            <div>email is {user?.email}</div>
        </div>
    )
}