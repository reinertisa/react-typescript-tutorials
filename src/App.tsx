import './App.css'
import React from 'react';
import Button4 from "./components/eventprops/Button4.tsx";

function App() {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>, id: number) => console.log(e, id);
    return (
        <div>
            <Button4 handleClick={handleClick}>Click me</Button4>
        </div>
    )
}

export default App
