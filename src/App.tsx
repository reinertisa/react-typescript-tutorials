import './App.css'
import Button3 from "./components/eventprops/Button3.tsx";

function App() {
    return (
        <div>
            <Button3 handleClick={(e) => console.log(e)}>click me</Button3>
        </div>
    )
}

export default App
