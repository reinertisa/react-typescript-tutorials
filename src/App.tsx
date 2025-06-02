import './App.css'
import Input1 from "./components/eventprops/Input1.tsx";

function App() {
    return (
        <div>
            <Input1 value="isa" handleChange={(event) => console.log(event.target.value)} />
        </div>
    )
}

export default App
