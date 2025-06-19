import {useContext} from "react";
import {CountContext} from "./CountContext.tsx";

export default function Counter2() {
    const {dispatch} = useContext(CountContext);

    const increment = (): void => dispatch({type: 'increment', value: 10});
    const decrement = (): void => dispatch({type: 'decrement', value: 10});
    const reset = (): void => dispatch({type: 'reset'});

    return (
        <div>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}