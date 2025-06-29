import {useReducer} from 'react';

type CounterStateType = number;
type CounterActionType = CounterUpdateType | CounterResetType;

type CounterUpdateType = {
    type: 'increment' | 'decrement';
    payload: number
}

type CounterResetType = {
    type: 'reset'
}

function reducer(state: CounterStateType, action: CounterActionType) {
    switch(action.type) {
        case 'increment':
            return state + action.payload;
        case 'decrement':
            return state - action.payload;
        case 'reset':
            return initialState;
        default:
            return state;
    }

}

const initialState = 0;

export default function Counter5() {
    const [state, dispatch] = useReducer(reducer, initialState);

    const increment = (): void => dispatch({type: 'increment', payload: 1})
    const decrement = (): void => dispatch({type: 'decrement', payload: 1});
    const incrementFive = (): void => dispatch({type: 'increment', payload: 5});
    const decrementFive = (): void => dispatch({type: 'decrement', payload: 5});
    const reset = (): void => dispatch({type: 'reset'});

    return (
        <div>
            <h2>Count - {state}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={incrementFive}>Increment 5</button>
            <button onClick={decrementFive}>Decrement 5</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}