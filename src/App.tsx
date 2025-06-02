import './App.css'
import Button2 from "./components/eventprops/Button2.tsx";

function App() {
    return (
        <div>
            <Button2
                handleClick={(event, id) => console.log('clicked', event, id)}
            />
        </div>
    )
}

export default App
