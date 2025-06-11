import './App.css'
import Text1 from "./polymorphic/Text1.tsx";

function App() {

    return (
        <div>
            <Text1 as="h2" size="lg">Heading</Text1>
            <Text1 as="p" size="md">Paragraph</Text1>
            <Text1 as="label" htmlFor="someId" size="sm" color="secondary">
                Label
            </Text1>
        </div>
    )
}

export default App
