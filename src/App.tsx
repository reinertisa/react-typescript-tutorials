import './App.css'
import Private1 from "./auth/Private1.tsx";
import Profile1 from "./auth/Profile1.tsx";

function App() {
    return (
        <div>
            <Private1 isLoggedIn={true} component={Profile1} />
        </div>
    )
}

export default App
