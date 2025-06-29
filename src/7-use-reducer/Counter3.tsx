import {useReducer} from 'react';


type CounterState = {
    count: number
}

type UpdateAction = {
    type: 'increment' | 'decrement'
    payload: number
}

type ResetAction = {
    type: 'reset'
}

type CounterAction = UpdateAction | ResetAction

function counterReducer(state: CounterState, action: CounterAction) {
    switch(action.type) {
        case 'increment':
            return {count: state.count + action.payload};
        case 'decrement':
            return {count: state.count - action.payload};
        case 'reset':
            return initialState;
        default:
            return state;
    }
}

const initialState = {
    count: 0
}

export default function Counter3() {
    const [countState, dispatch] = useReducer(counterReducer, initialState);

    const handleIncrement = (): void => dispatch({type: 'increment', payload: 10})
    const handleDecrement = (): void => dispatch({type: 'decrement', payload: 10})
    const handleReset = (): void => dispatch({type: 'reset'});

    return (
        <div>
            <h2>Count - {countState.count}</h2>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}