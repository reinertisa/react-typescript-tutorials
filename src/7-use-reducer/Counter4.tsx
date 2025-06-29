import {useReducer} from 'react';

const initialState = 0;

type CounterStateType = number;
type CounterActionType = {
    type: 'INCREMENT' | 'DECREMENT' | 'RESET'
}

const reducer = (state: CounterStateType, action: CounterActionType) => {
    switch(action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        case 'RESET':
            return initialState;
        default:
            return state;
    }

}

export default function Counter4() {
    const [state, dispatch] = useReducer(reducer, initialState);

    const increment = (): void => dispatch({type: 'INCREMENT'});
    const decrement = (): void => dispatch({type: 'DECREMENT'});
    const reset = (): void => dispatch({type: 'RESET'});
    return (
        <div>
            <h2>Count - {state}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}