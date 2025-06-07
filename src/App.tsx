import './App.css'
import Heading3 from "./components/Heading3.tsx";

function App() {
    return (
        <div>
            <Heading3 status="success" type='10' name={{id: 1, fullName: 'isa reinert'}} isPositive={false}>
                <div>hey, this is children</div>
            </Heading3>
        </div>
    )
}

export default App
