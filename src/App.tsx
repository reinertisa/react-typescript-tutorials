import './App.css'

import ThemeContextProvider from "./usecontext/ThemeContext1.tsx";
import Box1 from "./usecontext/Box1.tsx";

function App() {
    return (
        <div>
            <ThemeContextProvider>
                <Box1 />
            </ThemeContextProvider>
        </div>
    )
}

export default App
