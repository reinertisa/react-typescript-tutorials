import './App.css'

import UserContextProvider from "./usecontext/UserContext1.tsx";
import User1 from "./usecontext/User1.tsx";

function App() {
    return (
        <div>
            <UserContextProvider>
                <User1 />
            </UserContextProvider>
        </div>
    )
}

export default App
