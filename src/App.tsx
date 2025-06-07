import './App.css'
import Greet6 from "./components/Greet6.tsx";

function App() {
    return (
        <div>
            <Greet6 name="isa" isLoggedIn={true}>
                <div>this is children</div>
            </Greet6>
        </div>
    )
}

export default App
