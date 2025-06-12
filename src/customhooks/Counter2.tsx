import useCounter1 from "./useCounter1.ts";

export default function Counter2() {
    const {count, handleIncrement, handleDecrement, handleReset} = useCounter1(10, 10);
    return (
        <div>
            <h2>Count - {count}</h2>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}