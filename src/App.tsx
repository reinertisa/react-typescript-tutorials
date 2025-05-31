import './App.css'
import PersonList1 from "./components/PersonList1.tsx";

function App() {

    const nameList = [
        { id: 1, firstName: 'isa', lastName: 'reinert' },
        { id: 2, firstName: 'kristi', lastName: 'reinert'},
        { id:3, firstName: 'sade', lastName: 'miller'}
    ]

    return (
        <div>
            <PersonList1 names={nameList} />
        </div>
    )
}

export default App
