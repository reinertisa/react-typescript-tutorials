import {useState, useMemo} from "react";

export default function Counter1() {
    const [counterOne, setCounterOne] = useState<number>(0);
    const [counterTwo, setCounterTwo] = useState<number>(0);

    const incrementOne = (): void => setCounterOne(counterOne + 1);

    const incrementTwo = (): void => setCounterTwo(counterTwo + 1);


    const isEven = useMemo((): boolean => {
        let i: number = 0;
        while (i < 200000000) {
            i++;
        }
        return counterOne % 2 === 0;
    }, [counterOne]);


    return (
        <div>
            <button onClick={incrementOne}>Count One - {counterOne}</button>
            <span>{isEven ? 'Even' : 'Odd'}</span>
            <button onClick={incrementTwo}>Count Two - {counterTwo}</button>
        </div>
    )
}