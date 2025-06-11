import './App.css'
import CustomInput from "./html/Input1.tsx";
import CustomButton from "./html/Button1.tsx";

function App() {

    return (
        <div>
            <CustomButton variant='primary' onClick={() => console.log('clicked')}>
                Custom Button
            </CustomButton>
            <CustomInput name="custom" type="text" onChange={() => console.log('changed')}>
                This is custom input
            </CustomInput>
        </div>
    )
}

export default App
