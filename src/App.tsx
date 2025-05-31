import './App.css'
import Greet2 from "./components/Greet2.tsx";

function App() {

  return (
      <div>
          <Greet2 name="John" messageCount={10} isLoggedIn={true} />
      </div>
  )
}

export default App
