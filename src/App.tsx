import './App.css'
import List3 from "./generics/List3.tsx";

function App() {
    return (
        <div>
            <List3
                items={['Batman', 'Superman', 'Wonder Woman']}
                onClick={(item) => console.log(item)}
            />
            <List3
                items={[1, 2, 3]}
                onClick={(item) => console.log(item)}
            />
            <List3
                items={[
                    {
                        first: 'isa',
                        last: 'reinert',
                    },
                    {
                        first: 'sade',
                        last: 'miller'
                    },
                    {
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
