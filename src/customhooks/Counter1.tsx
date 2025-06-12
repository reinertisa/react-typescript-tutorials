import useCounter1 from "./useCounter1.ts";

export default function Counter1() {
    const {count, handleIncrement, handleDecrement, handleReset} = useCounter1(1, 5);

    return (
        <div>
            <h2>Count - {count}</h2>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}