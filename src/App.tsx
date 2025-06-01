import './App.css'
import Status2 from "./components/Status2.tsx";
import Heading1 from "./components/Heading1.tsx";
import Oscar1 from "./components/Oscar1.tsx";

function App() {
    return (
        <div>
            <Status2 status="error" />
            <Heading1>Placeholder text</Heading1>
            <Oscar1>
                <Heading1>Oscar goes to Leonardo Dicaprio</Heading1>
            </Oscar1>
        </div>
    )
}

export default App
