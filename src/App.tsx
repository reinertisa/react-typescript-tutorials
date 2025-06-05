import './App.css'
import List1 from "./generics/List1.tsx";

function App() {
    return (
        <div>
            <List1
                items={['Batman', 'Superman', 'Wonder Woman']}
                onClick={(item) => console.log(item)}
            />
            <List1
                items={[1, 2, 3]}
                onClick={(item) => console.log(item)}
            />
        </div>
    )
}

export default App
