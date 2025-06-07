import './App.css'
import PersonList3 from "./components/PersonList3.tsx";

function App() {
    return (
        <div>
            <PersonList3
                names={[
                    {id: 1, firstName: 'Cat', lastName: 'Woman'},
                    {id: 2, firstName: 'Super', lastName: 'Man'},
                    {id: 3, firstName: 'Iron', lastName: 'Man'}
                ]}
            />
        </div>
    )
}

export default App
