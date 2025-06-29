import {useState} from 'react';

const initialValue = 0;
export default function HookCounter2() {
    const [count, setCount] = useState<number>(initialValue);

    const increment = (): void => setCount(count + 1);
    const decrement = (): void => setCount(count - 1);
    const reset = (): void => setCount(initialValue);

    const incrementFive = () => {
        for (let i = 0; i < 5; i++) {
            setCount(prevCount => prevCount + 1);
        }
    }

    return (
        <div>
            <h2>Count - {count}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
            <button onClick={incrementFive}>Increment by 5</button>
        </div>
    )
}