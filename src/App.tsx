import './App.css'

import UserContextProvider from "./usecontext/UserContext2.tsx";
import User2 from "./usecontext/User2.tsx";

function App() {
    return (
        <div>
            <UserContextProvider>
                <User2 />
            </UserContextProvider>
        </div>
    )
}

export default App
