import './App.css'
import List2 from "./generics/List2.tsx";

function App() {
    return (
        <div>
            <List2
                items={['Batman', 'Superman', 'Wonder Woman']}
                onClick={(item) => console.log(item)}
            />
            <List2
                items={[1, 2, 3]}
                onClick={(item) => console.log(item)}
            />
        </div>
    )
}

export default App
