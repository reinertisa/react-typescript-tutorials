import './App.css'
import Status3 from "./components/Status3.tsx";

function App() {
    return (
        <div>
            <Status3 status='error' />
            <Status3 status="loading" />
            <Status3 status="success" />
        </div>
    )
}

export default App
