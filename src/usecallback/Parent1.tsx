import {useState, useCallback} from 'react'
import Title1 from "./Title1.tsx";
import Count1 from "./Count1.tsx";
import Button1 from "./Button1.tsx";

export default function Parent1() {
    const [age, setAge] = useState<number>(25);
    const [salary, setSalary] = useState<number>(50000);


    const  incrementAge= useCallback((): void => setAge(age + 1), [age]);
    const incrementSalary = useCallback((): void => setSalary(salary + 1000), [salary])

    return (
        <div>
            <Title1 />
            <Count1 text="Age" count={age} />
            <Button1 handleClick={incrementAge}>Increment Age</Button1>
            <Count1 text="Salary" count={salary} />
            <Button1 handleClick={incrementSalary}>Increment Salary</Button1>
        </div>
    )
}