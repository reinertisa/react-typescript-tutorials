import './App.css'
import List6 from "./generics/List6.tsx";

function App() {

    return (
        <div>
           <List6
               items={[
                   {id: 1, name: 'isa'},
                   {id: 2, name: 'sade'},
                   {id: 3, name: 'kristi'}
               ]}
               clickHandler={(val) => console.log(val)}
           />
        </div>
    )
}

export default App
