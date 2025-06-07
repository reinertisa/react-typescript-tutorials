import './App.css'
import Greet5 from "./components/Greet5.tsx";

function App() {
    return (
        <div>
            <Greet5 name="Sade"  messageCount={100} isLoggedIn={true} />
        </div>
    )
}

export default App
