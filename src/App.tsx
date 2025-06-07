import './App.css'
import Person2 from "./components/Person2.tsx";
import PersonList2 from "./components/PersonList2.tsx";

function App() {
    return (
        <div>
            <Person2 name={{firstName: 'isa', lastName: 'reinert'}} />
            <PersonList2
                names={[
                    {id: 1, firstName: 'isa', lastName: 'reinert'},
                    {id: 2, firstName: 'sade', lastName: 'miller'},
                    {id: 3, firstName: 'inigo', lastName: 'montana'}
                ]}
            />
        </div>
    )
}

export default App
