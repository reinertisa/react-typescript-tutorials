import './App.css'
import List4 from "./generics/List4.tsx";

function App() {
    return (
        <div>
            <List4
                items={[
                    {
                        id: 1,
                        first: 'isa',
                        last: 'reinert',
                    },
                    {
                        id: 2,
                        first: 'sade',
                        last: 'miller'
                    },
                    {
                        id: 3,
                        first: 'inigo',
                        last: 'fezzik'
                    }
                ]}
                onClick={(item) => console.log(item)}
            />
        </div>
    )
}

export default App
