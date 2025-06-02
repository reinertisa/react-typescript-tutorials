import './App.css'
import Button1 from "./components/eventprops/Button1.tsx";

function App() {
    return (
        <div>
            <Button1 handleClick={() => console.log('clicked')} />
        </div>
    )
}

export default App
