import './App.css'
import Person1 from "./components/Person1.tsx";

function App() {
    const personName = {
        firstName: 'Isa',
        lastName: 'Albertion'
    }
  return (
      <div>
          <Person1 name={personName} />
      </div>
  )
}

export default App
