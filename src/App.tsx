import './App.css'
import Input2 from "./components/eventprops/Input2.tsx";

function App() {

    return (
        <div>
            <Input2 value="isa" onChange={(e) => console.log(e.target.value)} />
        </div>
    )
}

export default App
