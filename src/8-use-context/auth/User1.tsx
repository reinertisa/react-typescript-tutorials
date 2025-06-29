import {useContext} from 'react';
import {UserContext1} from "./UserContext1.tsx";


export default function User1() {
    const userContext = useContext(UserContext1);
    const handleLogin = (): void => {
        if (userContext) {
            userContext.setUser({
                name: 'John',
                email: 'test@gmail.com'
            })
        }
    }
    const handleLogout = (): void => {
        if (userContext) {
            userContext.setUser(null);
        }
    }



    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User name is {userContext?.user?.name}</div>
            <div>User email is {userContext?.user?.email}</div>
        </div>
    )
}